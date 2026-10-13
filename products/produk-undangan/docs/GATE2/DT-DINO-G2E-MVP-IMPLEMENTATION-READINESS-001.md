# DT-DINO-G2E-001 — Motion Adventure MVP Implementation Readiness
Date: 2026-10-13 | Status: REVIEW REQUIRED | DOCUMENTATION ONLY
Parents: DT-DINO-G2D-PACKAGE-ENTITLEMENTS-001, DT-DINO-G2-LIFECYCLE-001, DT-DINO-G2C-UNIT-ECONOMICS-001

## Objective and strict boundaries
Build an eventual testable Motion Adventure digital invitation with secure organizer workflows, versioned publishing, guest access and central RSVP. No Holo, Pop-Up manufacturing, WebAR or paid generative AI in initial minimum release. No changes to Grow Portal branch dt-tanam-aku-web-001-deploy, /technology/grow-portal or current production routes. Existing GitHub repo DuniaTumbuh/duniatumbuh; separate products/produk-undangan module. No backend or production service is currently provisioned by this document.

## MVP user journeys
A. Organizer signs in securely -> creates draft event -> enters title, date/time with timezone, venue and location/map URL -> chooses rights-cleared Dino template -> previews mobile/text-only -> publishes immutable revision -> gets QR and guest link.
B. Guest opens link without account -> sees essential event details before optional animation -> may mute/skip animation -> RSVPs using minimally necessary fields -> receives clear acknowledgement without exposing other guest records.
C. Organizer views aggregated RSVP and authorized guest detail -> updates event by new revision -> optional republish with rollback reference and audit trail -> closes RSVP -> exports eligible data -> event enters Memory Mode and expires under published terms.
D. Parent can download eligible keepsake file subject to licensing; separate guest PII deletion/retention process.

## Release slices and evidence
S0 topology/security audit (read-only); S1 data model and authorization test fixtures; S2 organizer draft/preview with mock data; S3 guest accessible invitation; S4 central RSVP with anti-abuse; S5 publish/revision/expiry; S6 event cost ledger and quota; S7 staging functional, accessibility, load and security QC; S8 founder release approval. Each slice needs separate code authorization, tests and review. No implicit merge/deploy.

## Mandatory P0 security
Strong organizer auth, optional MFA, per-tenant/per-event authorization, CSRF protection as applicable, no guessable guest access token, hashed guest token storage, expiration/revocation, validation and output escaping, rate limiting, no client-side privileged keys, secret isolation, minimal guest PII, export/deletion, audit logs without PII, incident response and restore tests. No child account, face or voice collection by default. Privacy notice and consent/legal basis require review.

## Nonfunctional and UX
Mobile-first, responsive and accessible. Critical details and RSVP must function with JS animation unavailable, sound blocked, reduced motion, weak network, or no STEAM. Respect low-end Android/tablet constraints; localized event timezone and date formats; avoid auto-playing sound. Public routes and existing services must pass regression tests.

## Commercial boundaries
Tier names and candidate prices are not final contractual prices. No payment processing in first engineering slice; manual pilot orders only if separately approved and privacy/commercial terms ready. Future payment provider must support verified webhooks, idempotency, refunds, chargeback workflow, reconciliation and never store card data directly.

## Exit criteria
1. Founder approves exact MVP scope and provider/security decision.
2. Event schema, guest privacy and publish revision contract approved.
3. Staging environment isolated, no production secrets.
4. Auth/authorization, RSVP and negative tests pass.
5. Lifecycle expiry, export/deletion, backup/restore pass.
6. Per-event cost ledger and budget guard pass.
7. Mobile/accessibility and production-route regressions pass.
8. Founder explicitly authorizes merge and release after evidence.

## Open decisions
Provider and data residency/legal review; guest capacity; RSVP field minimum; organizer auth/MFA; cancellation/refund/payment; exact guest-data retention; downloadable file rights; event publication lead time; tier support limits and price; AI caps; cost ceiling.
