# DT-DINO-G2G-QC-01 — Static Code Review and Remediation Register
Date: 2026-10-14
Scope: GitHub source review of standalone mock prototype in `products/produk-undangan/prototypes/gate2g/`.
Evidence type: SOURCE INSPECTION ONLY; NO browser, device, live HTTP, accessibility tooling, or runtime test execution.
Status: STATIC REVIEW COMPLETE / CONTROLLED P1 REMEDIATION COMMITTED / RUNTIME QC PENDING

## Observations
- P1 / QC-001: rollback originally decremented active published revision pointer rather than recording a new publish revision. Remediated by appending a new immutable-snapshot-style simulation and advancing the active pointer. Commit d7a11653106e412d6608f0dcc4272ce8c4d16d2b. **Not runtime verified**. Still only in-memory; repeated rollback target selection requires further product specification and tests.
- P2 / QC-002: audio is a continuous 523.25 Hz sine tone, not birthday music, and lacks track completion. Deliberate placeholder. Rights-cleared composition/recording and controls required before real use.
- P2 / QC-003: switching events discards unpreviewed form edits; there is no unsaved-change warning. Decide intended UX and remediate before organizer editor release.
- P2 / QC-004: preview updates the draft but does not persist across reload. Intentional mock limitation; server-backed drafts and conflict control needed in later gate.
- P2 / QC-005: demo uses emoji dinosaur, not approved canonical Dino artwork. Visual/brand QC pending.
- P1 / QC-006: cross-tenant security, stable QR, real RSVP, publish atomicity and rollback persistence are not implemented; mock-data event isolation does NOT prove these security controls.
- P2 / QC-007: responsive layout CSS present but no measured phone/tablet/desktop results. Accessibility and screen reader QC pending.
- P2 / QC-008: no automated test suite, browser evidence, or performance measurements. Manual scenarios documented in README.

## Required QC before gate advancement
- Run in actual desktop Chrome and mobile Android browsers; capture screenshots and device/build info, layout at 320/375/768/1024px, keyboard-only focus and screen-reader audit.
- Create/edit/publish A and verify B/C unchanged; publish A multiple times, rollback, verify history and subsequent publish; test invalid form, reload, and switching unsaved draft.
- Test mute/unmute, browser audio block, change event while audio plays, low bandwidth, prefers-reduced-motion, and no microphone permission.
- Verify production routes by read-only regression checks separately; no deployment occurred in this gate.
- Register evidence and retest remediation before any PASS.

## Governance
Founder approved Gate 2G prototype baseline and QC work. The code correction is a controlled prototype remediation, not production code release.
PR #11 is DRAFT/UNMERGED, stacked on PR #10 and PR #9; no staging or production deployment, no paid services, no customer data.
