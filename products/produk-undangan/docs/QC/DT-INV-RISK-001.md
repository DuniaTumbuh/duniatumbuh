# DT-INV-RISK-001 — Risk and Debt Register
Version: 0.1 | Status: DRAFT / REVIEW REQUIRED

| ID | Priority | Risk | Required control | Status |
|---|---|---|---|---|
| R01 | P0 | Public repo accidentally receives PII/secrets | precommit checks, manual review, no customer records | OPEN |
| R02 | P0 | Organizer/guest authorization bypass | server-side authn/authz and negative tests | OPEN |
| R03 | P0 | Event edits invisible to recipients | centralized published revision, stable links | OPEN |
| R04 | P0 | RSVP only WhatsApp handoff | centralized persistence and reconciliation | OPEN |
| R05 | P1 | Canonical Dino visual/voice mismatch | character bible QC and asset manifest | OPEN |
| R06 | P1 | Mobile performance/3D failure | fallback and device matrix | OPEN |
| R07 | P1 | Existing DT routes regress | staging route smoke tests | OPEN |
| R08 | P1 | Holo optical and child-safety uncertainty | adult physical bench tests, PET edge QC | HOLD |
| R09 | P1 | Uncontrolled custom changes | template versioning, preview/publish, rollback | OPEN |
| R10 | P2 | RAG adds cost/incorrect guidance | docs-first retrieval with citations, defer vector DB | DEFERRED |
| R11 | P1 | Physical unit economics unknown | vendor quotes, assembly time, scrap/returns | OPEN |
| R12 | P1 | Child privacy and retention | minimization, parental controls, retention policy | OPEN |

No risk may be marked CLOSED without supporting evidence.
