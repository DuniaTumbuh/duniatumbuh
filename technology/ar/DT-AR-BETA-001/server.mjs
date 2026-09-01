import http from 'node:http';
import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const publicRoot = path.join(root, 'public');
const canonicalNimoRoot = path.resolve(root, '../../../production/characters/nimo/DT-PROD-NIMO-MASTER-001/assets');
const port = Number(process.env.PORT || 8443);
const clients = { command: new Set(), frame: new Set(), status: new Set() };
let lastFrame = null;
let sequence = 0;

export function sanitizeCommand(input = {}) {
  const allowed = ['INTRO', 'WAVE', 'ASK', 'MOVE_LEFT', 'MOVE_CENTER', 'MOVE_RIGHT', 'RESET'];
  if (!allowed.includes(input.type)) throw new Error('Unsupported command');
  return { type: input.type, sequence: ++sequence, at: new Date().toISOString() };
}

function sendSse(set, event, payload) {
  const data = `event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`;
  for (const res of set) res.write(data);
}

function json(res, status, payload) {
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
  res.end(JSON.stringify(payload));
}

function body(req, max = 2_000_000) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', chunk => {
      size += chunk.length;
      if (size > max) { reject(new Error('Payload too large')); req.destroy(); return; }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function staticFile(req, res) {
  const pathname = new URL(req.url, 'https://local').pathname;
  const route = pathname === '/' ? '/index.html' : pathname;
  const target = path.normalize(path.join(publicRoot, route));
  if (!target.startsWith(publicRoot) || !fs.existsSync(target) || fs.statSync(target).isDirectory()) return false;
  const ext = path.extname(target);
  const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.png':'image/png' };
  res.writeHead(200, { 'content-type': types[ext] || 'application/octet-stream', 'cache-control': ext === '.png' ? 'no-store' : 'no-cache' });
  fs.createReadStream(target).pipe(res);
  return true;
}

async function handler(req, res) {
  const pathname = new URL(req.url, 'https://local').pathname;
  if (req.method === 'GET' && pathname === '/canonical/Nimo_Master_Character_Reference_v1.1_Jambul_Correction_Candidate.png') {
    const asset = path.join(canonicalNimoRoot, 'Nimo_Master_Character_Reference_v1.1_Jambul_Correction_Candidate.png');
    if (!fs.existsSync(asset)) return json(res, 404, { error:'Canonical Nimo binary unavailable' });
    res.writeHead(200, { 'content-type':'image/png', 'cache-control':'no-store' });
    return fs.createReadStream(asset).pipe(res);
  }
  if (req.method === 'GET' && pathname === '/health') return json(res, 200, { ok:true, workOrder:'DT-AR-BETA-001' });
  if (req.method === 'GET' && pathname.startsWith('/events/')) {
    const channel = pathname.slice('/events/'.length);
    if (!clients[channel]) return json(res, 404, { error:'Unknown channel' });
    res.writeHead(200, { 'content-type':'text/event-stream', 'cache-control':'no-store', connection:'keep-alive', 'access-control-allow-origin':'*' });
    res.write(': connected\n\n');
    clients[channel].add(res);
    if (channel === 'frame' && lastFrame) res.write(`event: frame\ndata: ${JSON.stringify(lastFrame)}\n\n`);
    req.on('close', () => clients[channel].delete(res));
    return;
  }
  if (req.method === 'POST' && pathname === '/api/command') {
    try {
      const cmd = sanitizeCommand(JSON.parse((await body(req, 20_000)).toString('utf8')));
      sendSse(clients.command, 'command', cmd);
      return json(res, 202, cmd);
    } catch (error) { return json(res, 400, { error:error.message }); }
  }
  if (req.method === 'POST' && pathname === '/api/frame') {
    try {
      const payload = JSON.parse((await body(req)).toString('utf8'));
      if (typeof payload.image !== 'string' || !payload.image.startsWith('data:image/jpeg;base64,')) throw new Error('Invalid frame');
      lastFrame = { image:payload.image, at:new Date().toISOString() };
      sendSse(clients.frame, 'frame', lastFrame);
      return json(res, 202, { ok:true });
    } catch (error) { return json(res, 400, { error:error.message }); }
  }
  if (req.method === 'POST' && pathname === '/api/status') {
    try {
      const payload = JSON.parse((await body(req, 20_000)).toString('utf8'));
      sendSse(clients.status, 'status', payload);
      return json(res, 202, { ok:true });
    } catch { return json(res, 400, { error:'Invalid status' }); }
  }
  if (req.method === 'GET' && staticFile(req, res)) return;
  json(res, 404, { error:'Not found' });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const key = process.env.TLS_KEY;
  const cert = process.env.TLS_CERT;
  const server = key && cert
    ? https.createServer({ key:fs.readFileSync(key), cert:fs.readFileSync(cert) }, handler)
    : http.createServer(handler);
  server.listen(port, '0.0.0.0', () => console.log(`DT-AR-BETA-001 listening on ${key && cert ? 'https' : 'http'}://0.0.0.0:${port}`));
}