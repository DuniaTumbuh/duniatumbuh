import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sanitizeCommand } from '../server.mjs';

test('allows Gate 1 deterministic commands',()=>assert.equal(sanitizeCommand({type:'MOVE_LEFT'}).type,'MOVE_LEFT'));
test('rejects autonomous or unknown commands',()=>assert.throws(()=>sanitizeCommand({type:'IDENTIFY_CHILD'}),/Unsupported/));

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../../..');
const sha=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
test('canonical Nimo binary has verified recovery checksum',()=>assert.equal(
  sha(path.join(root,'production/characters/nimo/DT-PROD-NIMO-MASTER-001/assets/Nimo_Master_Character_Reference_v1.1_Jambul_Correction_Candidate.png')),
  'c0ff374d0b0f8c22ef7d00fff06f42be8fbf08217cfd4d2af6c2e337ac143883'
));
test('jambul correction evidence has verified checksum',()=>assert.equal(
  sha(path.join(root,'production/characters/nimo/DT-PROD-NIMO-MASTER-001/assets/Nimo_Master_v1.1_Jambul_Correction_Review.png')),
  '4b698178d013367359a53034b5f9508315df2e7b5e2d9af60c57b16a24ba3970'
));