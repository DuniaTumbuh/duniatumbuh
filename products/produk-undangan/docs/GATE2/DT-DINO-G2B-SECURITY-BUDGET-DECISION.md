# DT-DINO-G2B-001 — Security, Infrastructure and AI Budgeting
Date 2026-10-13 | Status: RECOMMENDATION / FOUNDER REVIEW REQUIRED | No deployment

## Verified vendor options (public pricing, subject to changes)
A Cloudflare-first candidate: Workers Free 100,000 requests/day (10ms CPU per request), D1 Free 5m rows read/day, 100k rows written/day, 5GB storage; R2 Standard free 10GB-month, 1m Class A, 10m Class B operations monthly. Workers Paid minimum USD5/month if needed; R2 requires account billing setup and overage guardrails. Sources: https://developers.cloudflare.com/workers/platform/pricing/ https://developers.cloudflare.com/d1/platform/pricing/ https://developers.cloudflare.com/r2/pricing/ .
B Supabase candidate: Free 500MB database, 5GB egress, 50k MAU, two free projects, 1GB storage; free projects may pause after inactivity and lack automatic backups; Pro listed at USD25/month. Sources: https://supabase.com/pricing https://supabase.com/docs/guides/platform/billing-on-supabase .
C Existing Railway: current Grow Portal uses branch dt-tanam-aku-web-001-deploy and /technology/grow-portal; do not change it. Separate service might incur cost; do not assume free hosting.

## Weighted decision proposal
Security and privacy 35%; predictable operating cost 25%; maintainability 15%; performance 15%; migration/portability 10%. Cloudflare-first is candidate for a small event API, not a final lock; Supabase-first is alternative if managed Postgres/auth accelerates secure development. No provider provisioned.

## Security P0 checklist
Organizer authentication with MFA option; per-event tenant authorization; never expose admin service credentials to browser; opaque guest tokens hashed at rest, revocation and expiry policy; minimize guest names/contact data; child does not need an account; encrypt transport; server-side validation; rate limiting; audit logs without PII; abuse controls; backup/restore tested; retention/deletion and parental notice; static asset rights review; separate staging/prod secrets; CI secret scanning and dependency checks. Security review must include actual implementation and negative tests, not only a checklist.

## AI Budgeting control
- No generative AI or live TTS on guest page loads; pre-generate shared canonical Dino animation/voice once and cache immutable versioned assets.
- Personalization: text overlay at runtime; pre-generate audio per event only after organizer preview/approval, optional quota; fallback text.
- Use tier-specific credit caps: Lite 0 paid generation, Adventure 1 generation job, Premium up to 3; define regeneration rules, failure refunds and cost logging before sale.
- Track monthly and per-event costs: model input/output, voice, render, storage, bandwidth, database requests, payment fees, support and revisions.
- Hard stop paid API calls at budget threshold; never silently upgrade vendor tier; admin approval for overrides.
- Unit economics: contribution = net selling price - payment fee - variable hosting/bandwidth - generation cost - support/revision allocation - tax provisions (depending on tax treatment).

## Budget thresholds (PROPOSED, not observed costs)
Prototype paid external services ceiling Rp0 incremental if achievable. Pilot monthly hard ceiling Rp150,000 incremental requires explicit founder approval before paid use. AI cost target <=5% selling price per order; total variable cost target <=25%; contingency 10% of modeled costs. These are control proposals, not guarantees or subscriptions already enabled.

## Unresolved
Provider selection, account billing controls, local data law/privacy legal review, backup RPO/RTO, production monitoring, real vendor usage estimates and authenticated security testing.
