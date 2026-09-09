const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.env.PORT || 3000);
const publicDir = path.join(__dirname, 'public');

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp'
};

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, {
    'Content-Type': type,
    'Cache-Control': status === 200 ? 'public, max-age=300' : 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
  });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (requestUrl.pathname === '/healthz') {
    return send(res, 200, JSON.stringify({ status: 'ok', service: 'dt-grow-portal' }), 'application/json; charset=utf-8');
  }

  let pathname = decodeURIComponent(requestUrl.pathname);
  if (pathname === '/' || pathname === '/grow' || pathname === '/grow/') pathname = '/index.html';

  const safePath = path.normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, '');
  const filePath = path.join(publicDir, safePath);

  if (!filePath.startsWith(publicDir)) return send(res, 403, 'Forbidden');

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) return send(res, 404, 'Not Found');
    const ext = path.extname(filePath).toLowerCase();
    fs.readFile(filePath, (readErr, data) => {
      if (readErr) return send(res, 500, 'Internal Server Error');
      send(res, 200, data, mime[ext] || 'application/octet-stream');
    });
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`DT Grow Portal listening on port ${port}`);
});
