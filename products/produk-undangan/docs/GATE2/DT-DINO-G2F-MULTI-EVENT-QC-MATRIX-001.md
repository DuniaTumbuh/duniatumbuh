# DT-DINO-G2F-003 — Multi-Event Acceptance Matrix
Date: 2026-10-13 | Status: REVIEW REQUIRED / ALL TESTS NOT RUN

| ID | Test | Required evidence |
|---|---|---|
| ME-01 | Create event A, B (Dino), C (mock future IP) | Three distinct event records without builds/deploys |
| ME-02 | Edit event A date/venue/cake/music and preview | B and C hashes, config and RSVP unchanged |
| ME-03 | Publish event A revision 2 | Stable QR resolves new revision atomically |
| ME-04 | Roll back A to revision 1 | Prior approved revision restored with audit trail |
| ME-05 | Organizer A attempts to edit/read B | Denied; no PII leak |
| ME-06 | RSVP guest A attempts event B token | Denied; no enumeration |
| ME-07 | Two organizers publish same event concurrently | Version conflict handled, no lost update |
| ME-08 | Old template after engine update | Backward-compatible or accessible fallback |
| ME-09 | AR camera denied/unsupported | Safe 2D fallback and no microphone permission |
| ME-10 | Music blocked and reduced-motion enabled | Controls and static accessible fallback |
| ME-11 | Backend/asset unavailable | Honest error, no false RSVP confirmation |
| ME-12 | Expiry boundary in event timezone | RSVP closed; memory/expired states correct |
| ME-13 | 100/500/1000 monthly orders, 4-month approximate occupancy | Measured DB, bandwidth, storage, peak request costs |
| ME-14 | Existing DT routes smoke tests | / /grow /tanamaku /healthz /tanamaku/game /ar/tomat unchanged |
| ME-15 | Security and privacy | Rate limiting, token revocation, authZ, XSS, logs, export/deletion, backup restore verified |

No code, test execution or staging deployment is part of this record. PASS cannot be asserted without captured evidence and independent review.

## Required release artifacts
Test scripts/results, device/browser matrix, threat model, cost ledger, data retention schedule, asset license evidence, performance budget, incident/rollback runbook, Founder approval.
