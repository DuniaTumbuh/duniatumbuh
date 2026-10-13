# DT-DINO-G2E-003 — Readiness Decisions and Release Gate
Date: 2026-10-13 | Status: FOUNDER REVIEW REQUIRED

## Decisions requested before implementation authorization
D1 Scope: approve Motion Adventure first, with organizer event draft/preview/publish, guest invitation, RSVP, event revision, Memory Mode, accessible fallback; no WebAR/Holo/Pop-Up in MVP.
D2 Hosting/data/auth: compare Cloudflare Workers+D1+R2 vs Supabase managed auth/Postgres; do not commit vendor without security/privacy/backup and real pricing verification.
D3 Privacy: define guest fields, purpose, consent/notice, export, deletion, data location, retention and incident handling. No child account by default.
D4 AI: shared canonical Dino assets, no paid generation on guest view, per-event quota and hard stops; initial MVP can launch with no paid AI calls.
D5 Commercial: prices and guest limits remain unapproved; clarify active pre-event publication period and after-event 90 days; pilot support and refund terms.
D6 Release: staging evidence + Founder approval before merge/deploy.

## QA gates (all pending)
AuthZ isolation and guest privacy; rate limits; publish revision rollback; RSVP idempotency; accessible mobile; 90-day timezone boundary; export/deletion; restore and cost controls; smoke tests of / /grow /tanamaku /healthz /tanamaku/game /ar/tomat; device/browser tests.

## Risk register
P0 guest PII leakage; P0 cross-tenant authorization; P0 secrets; P0 production route regression; P1 AI cost runaway; P1 renewal/expiry confusion; P1 invalid animation/asset rights; P1 AR/Holo unsupported promises; P1 payment fraud if future integration.

## Governance
Documentation committed only to Gate 2 Draft PR #10 stacked on Draft Gate 1 PR #9. No application code, paid provisioning, infrastructure mutation, merge or deployment. All tests NOT RUN. No approval implied from a recommendation.
