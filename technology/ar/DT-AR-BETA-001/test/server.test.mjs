import test from 'node:test';
import assert from 'node:assert/strict';
import { sanitizeCommand } from '../server.mjs';

test('allows Gate 1 deterministic commands',()=>assert.equal(sanitizeCommand({type:'MOVE_LEFT'}).type,'MOVE_LEFT'));
test('rejects autonomous or unknown commands',()=>assert.throws(()=>sanitizeCommand({type:'IDENTIFY_CHILD'}),/Unsupported/));
