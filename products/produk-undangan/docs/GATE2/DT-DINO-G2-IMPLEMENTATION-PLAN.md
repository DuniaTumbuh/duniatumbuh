# DT-DINO-G2-001 — Digital Motion MVP Implementation Plan
Version 0.1 | PLANNING ONLY | REVIEW REQUIRED | 2026-10-13

## Parent baseline
PR #9 (dt-inv-gate1-docs-001) Founder REVIEWED & LOCKED as architectural decision; still DRAFT/UNMERGED. This branch is stacked on PR #9 and must not merge independently into main.

## Target experience
Organizer configures event in Creator Studio, previews invitation, verifies guest-name pronunciation, publishes a revision, shares guest-specific opaque URL; parent accesses event facts and RSVP; child optionally experiences D01 3D greeting and STEAM challenge. Stable URL survives authorized event edits.

## Implementation slices (separate future authorization)
S0 Baseline audit: inventory actual app framework, routes, Railway build/deploy configuration, existing tests, secrets exposure; read-only.
S1 Domain contract: event/template/guest/RSVP schemas, versioned revision and permissions, validation tests.
S2 Admin preview: authenticated organizer, editable draft, preview and approval, no direct production edit.
S3 Guest experience: responsive invite view, Dino motion, reduced-motion/text fallback, QR stable URL.
S4 RSVP: central server persistence, idempotency, rate limit, audit, duplicate policy.
S5 Personalization: audio manifest and pronunciation approval; avoid per-guest expensive rerender unless justified.
S6 Optional STEAM: one age-appropriate fossil/footprint task, bypassable; never blocks event info.
S7 Integration QC: staging only, security/UX/mobile checks and existing route regression tests.

## Architecture guardrails
- No direct edits to main, production, DNS, Railway, existing /, /grow, /tanamaku, /healthz.
- Public repository: do not commit customer PII, proprietary character masters, secrets or internal unit economics.
- Data lives in protected backend; do not use localStorage as shared source of truth.
- No RAG dependency for event, RSVP, authorization or business transactions.
- Provider, database, map, TTS and hosting choices remain REVIEW REQUIRED.

## Gate 2 entry requirements
Verify actual application repository/build path and deployment topology; select server-side persistence; document privacy/retention, identity/authorization and cost ceiling; obtain separate implementation approval.

## Exit evidence
Reproducible test artifacts for all DT-DINO-PRD-002 acceptance criteria, founder review, and explicit deployment authorization. This planning document alone does not PASS Gate 2.
