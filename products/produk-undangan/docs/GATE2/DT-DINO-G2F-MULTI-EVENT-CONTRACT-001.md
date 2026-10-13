# DT-DINO-G2F-002 — Multi-Event Contract & No-Redeploy Editing
Date: 2026-10-13 | Status: REVIEW REQUIRED / DESIGN ONLY
Authority: Founder-locked ADR-003 Reusable Multi-Event Engine

## P0 invariants
- Exactly one shared application deployment serves many independent event records; creating/editing/publishing an event MUST NOT require a Git commit, build, deploy, environment variable edit or DNS change.
- Each event belongs to one organizer/tenant and one IP universe; assets and templates are versioned and rights-cleared. Dino and Nimo universes must remain distinct.
- Public QR points to stable opaque event route; it MUST NOT contain guest names, private event fields or secrets.
- Published content is an immutable revision; organizer drafts can change independently; publication uses atomic pointer swap and audited rollback.
- Critical event information and RSVP do not require AR, cake interaction, music, STEAM or AI.
- Guest PII isolated from public event content; no child account, face or microphone collection by default.

## Suggested contract (proposed, not implemented)
Template: template_id, universe_id, semantic_version, min_engine_version, asset_manifest_hash, rights_status, supported_modules, accessibility_fallback.
Event: event_id, tenant_id, template_id, timezone, event_at, published_revision_id, rsvp_cutoff_at, hosted_access_expires_at, state.
EventRevision: event_id, revision_no, template_version, public_content, feature_config, asset_version_refs, created_at, approved_by, immutable_checksum.
FeatureConfig: cake(enabled, style_id, candle_count, reduced_motion_fallback), audio(enabled, licensed_track_id, default_muted=true), motion(enabled, asset_id), ar(enabled, experience_id, fallback_url), steam(enabled, activity_id).
GuestAccess: invitation_id, event_id, token_hash, expires_at, revoked_at; access checks required.
RSVP: event_id, invitation_id, response, optional minimal guest fields, idempotency_key.
Never accept tenant_id or event_id alone as proof of authorization.

## API design candidate
POST /api/organizer/events
PATCH /api/organizer/events/{id}/draft
POST /api/organizer/events/{id}/preview
POST /api/organizer/events/{id}/publish (expected_revision for optimistic concurrency)
POST /api/organizer/events/{id}/rollback (target_revision)
GET /i/{public_slug}
POST /api/guest/rsvp (bound to guest proof)
GET /api/organizer/events/{id}/rsvps
No implementation or final endpoint naming approval implied.

## Compatibility and migration
Use schema version and template semantic version. Never silently rewrite an already-published revision. A new template may be adopted only by explicit preview and publish. Engine must either support the previous template contract or return an accessible fallback, not a broken page. Backward-compatibility matrix and migration tests required.

## Shared WebAR strategy
One optional shared WebAR renderer loads per-event configuration and validated asset/marker manifest. Marker/target generation may be per card, but no app build per card. Camera permission only after explicit interaction. No camera imagery retained by default. Support and performance require device-specific tests; do not advertise AR universally.

## Failure behavior
If AR unsupported -> static/2D view; audio blocked -> muted page with play control; missing media -> accessible text; API unavailable -> no false RSVP success; invalid publish -> previous revision remains live; expired event -> clear non-PII expired state; cache mismatch -> versioned assets and safe fallback.

## Governance
All criteria NOT TESTED. Provider, code implementation, hosting and production changes require separate authorization. PR #9/#10 remain DRAFT/UNMERGED.
