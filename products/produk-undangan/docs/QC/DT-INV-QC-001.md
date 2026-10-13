# DT-INV-QC-001 — Gate and Acceptance Matrix
Version: 0.1 | Status: DRAFT / NOT TESTED

| Gate | Evidence required | Current state |
|---|---|---|
| G1 Repo and docs | Correct repo, scoped branch, PRD/ADR, public-data review | IN PROGRESS |
| G2 Motion | mobile load, audio fallback, correct invite, RSVP backend, no regression | NOT TESTED |
| G3 Pop-Up/AR | print proof, dieline, QR scan, camera consent, device fallback | NOT TESTED |
| G4 Holo | single PET optical reflection, phone hidden, orientation, vents, safety | NOT TESTED |
| G5 Commercial | HPP, fulfillment SLA, child/privacy review, parent/child pilot | NOT TESTED |

## Blocking defects from HTML prototype review
- localStorage does not synchronize event data to guests.
- Guest names embedded in URL; no server-side admin authorization.
- RSVP uses WhatsApp link, not centralized confirmed RSVP.
- Browser-dependent TTS; pronunciation not controlled.
- Hero uses procedural Three.js; hologram uses separate SVG; canonical IP fidelity not established.
- No deployed STEAM Passport/game progress; optical and device tests absent.

PASS must be supported by reproducible evidence, not illustrations or source inspection alone.
