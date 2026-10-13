# DT-DINO-G2-003 — Verification and Release Test Plan
Version 0.1 | DRAFT / NO TESTS EXECUTED

## Test tiers
1. Contract/unit: schema validation, permissions, timezone, RSVP status, feature flags, revision conflict.
2. Integration: publish then edit, guest token validity, RSVP persisted, rollback restores prior snapshot.
3. Security: unauthorized organizer read/write rejected, tampered token rejected, no PII in logs/URL, XSS/CSRF/rate-limit review.
4. Browser: Android Chrome, iOS Safari, low-end fallback, portrait/landscape, reduced motion, audio mute.
5. UX: parent gets time/address/RSVP immediately; child STEAM optional and comprehensible.
6. Regression: /, /grow, /tanamaku, /healthz and existing DT-AR paths in staging, with baseline evidence.
7. Physical: pop-up and holo remain outside Gate 2 acceptance; independent bench QC required.

## Release checkpoints
- Code review and automated tests must PASS with logs; no assumed pass.
- Staging smoke test, actual devices and screenshots; regression results compared to baseline.
- Founder explicitly authorizes any future merge/deploy separately.
- Rollback method tested before production release.

## Test evidence record
Test ID | Device/browser | Revision/commit | Steps | Expected | Actual | PASS/FAIL | Evidence URL | Reviewer | Date.

## Current status
All tests NOT RUN. No staging/production deployment authorized.
