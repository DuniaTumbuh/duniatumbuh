# DT-DINO-G2D-002 — Package Acceptance, Security and Cost Gates
Date 2026-10-13 | Status: REVIEW REQUIRED / ALL TESTS NOT RUN

## Gate A — Contract and truth-in-advertising
Publish one machine-readable feature matrix and matching customer-facing terms; no 'hologram' claim suggesting volumetric projection. Distinguish live hosted access from downloadable keepsakes and personal data retention. Explicitly state 90 days AFTER event and pre-event publication rules, timezone and expiry notifications.

## Gate B — Security and privacy
Test organizer auth, per-event authorization, guest token guessing/replay/revocation, XSS, CSRF where applicable, request rate limit, upload validation, admin-only event mutation, PII-free logs, guest data export/deletion, backup restoration and secrets isolation. Child data collection minimized. No tests yet performed.

## Gate C — UX and accessibility
At least low-end Android and tablet testing, slow 3G-like network simulation, muted autoplay, reduced motion, text-only fallback, QR scanning and Google Maps/Waze handoff, RSVP without mini-game, locale and date/time timezone clarity. No tests yet performed.

## Gate D — AI Budgeting
Generate shared canonical Dino assets once; cap paid jobs per event, retry budget, idempotency, cancellation, provider cost logging, budget threshold and fallback. Confirm cost at 100/500/1000 orders/month, including 4-month approximate hosted event occupancy. No measured costs yet.

## Gate E — Add-on readiness
Pop-Up: physical sample BOM and child-safety inspection; Holo: optics/angle/lighting and packaging tests; WebAR: device compatibility, performance and graceful fallback. NOT TESTED. No launch inclusion until pass.

## Gate F — Commercial benchmark
At least three directly comparable Indonesian birthday-invitation SKUs with current checkout/feature/active-period/guest cap evidence, and 10 user interviews or consented pilot orders. Final price and entitlement require Founder approval.

## Governance
All work is documentation only in Draft stacked PR #10; Gate 1 PR #9 remains Draft. No source code, database, payment, DNS, Railway or production changes.
