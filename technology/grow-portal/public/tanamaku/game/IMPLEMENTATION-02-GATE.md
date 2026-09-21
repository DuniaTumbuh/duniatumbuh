# DT-TANAM-AKU-GAME-001 — IMPLEMENTATION-02 GATE

Status: TEST HARNESS ADDED / EXECUTION EVIDENCE REQUIRED

Scope: persistent local journey + journal/read-back.

Acceptance targets:
1. Journey saves and reloads without stage loss.
2. Plant content version survives reload.
3. Observation journal entry survives reload.
4. Observation-confirmed milestone survives reload.
5. Duplicate journal event ID is idempotent.
6. Unknown future top-level fields are preserved.
7. Unknown future journey fields are preserved.
8. Failed/corrupt read does not erase a known-good store.

This gate uses a storage adapter so browser localStorage can be plugged in later without coupling the journey engine to a browser global.

No production UI, Railway, DNS, /ar/tomat, or main mutation is authorized by this gate.
