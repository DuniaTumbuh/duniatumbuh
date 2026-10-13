# DT-INV-ADR-002 — Event, Template and Release Contract
Version: 0.1 | Status: DRAFT / REVIEW REQUIRED | Gate 1 only

## Architecture boundary
- Invitation web renders published event snapshots; creator studio is a separate authenticated admin surface.
- Three presentation adapters: motion-card, pop-up-webAR, holo-stage. All consume the same event contract and canonical universe assets.
- Universes are independently versioned: dino-adventure pilot, nimo-and-friends future; no cross-universe substitution.
- Store event/guest/RSVP records in protected server-side storage, not in Git, localStorage or a public JSON repository.

## Minimal domain entities
- Event: eventId, ownerId, universeId, templateId, templateVersion, eventTimeWithOffset, venue, publicationStatus, publishedRevision.
- EventRevision: revisionId, eventId, configurationSnapshot, createdAt, approvedBy, publishedAt.
- Guest: guestId, eventId, displayName, invitationTokenHash, permissions, deliveryState.
- RSVP: eventId, guestId, response, adultCount, childCount, notes, updatedAt, source.
- AssetManifest: assetId, universeId, version, licensingStatus, contentHash, mediaType.
- TemplateManifest: templateId, semanticVersion, supportedFeatures, schemaVersion.
- AuditEvent: actor, operation, target, timestamp, revisionId; redact PII in logs.

## Configuration and publish lifecycle
DRAFT -> PREVIEW -> REVIEW -> PUBLISHED -> ARCHIVED. Editing a published event creates a new draft revision; it never mutates the prior published snapshot in place. Publish is atomic and auditable; rollback repoints the active revision without deleting history. Changes to date/location trigger an explicit guest notification decision.

## Public routes (proposed only)
- /undangan/:eventSlug/:opaqueGuestToken -> invite view
- /undangan/:eventSlug/preview -> only authenticated/signed preview
- /undangan/:eventSlug/rsvp -> protected endpoint with rate limits and CSRF/session design review
- /undangan/:eventSlug/journey -> illustrative STEAM journey; never used for real driving navigation
All routes are proposals; no implementation/deployment authorized.

## Security baseline
Require authenticated organizer; tenant/event authorization per read/write; opaque random tokens; token hashing at rest; server-side input validation; output escaping; rate limits; anti-enumeration; minimized guest data; retention/deletion policy and parent consent review. No secrets or personal data in public repository. Avoid embedding guest names in URL query strings.

## Migration and compatibility
Schema changes additive first; dual-read/dual-write only when necessary; migration rehearsal in staging; backward-compatible template version resolution; feature flags default OFF; explicit rollback plan. Existing /, /grow, /tanamaku, /healthz must remain unaffected.

## Provider decisions
Database, map API, hosting and TTS vendors are undecided. Benchmark cost, privacy, reliability and free-tier limits before selection. RAG is documentation retrieval only, never an authoritative event database.
