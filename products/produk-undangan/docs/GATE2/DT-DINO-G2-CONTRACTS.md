# DT-DINO-G2-002 — API and Configuration Contracts (Proposal)
Version 0.1 | DRAFT / NOT IMPLEMENTED

## Domain shapes
EventDraft {id, ownerId, universeId, templateId, templateVersion, timezone, startsAt, venue, content, features, revision}
EventPublished {id, activeRevisionId, publishedAt, publicSlug, assetManifestVersion}
Guest {id, eventId, displayName, tokenHash, deliveryStatus, createdAt}
RSVP {eventId, guestId, response:yes|maybe|no, adults, children, notes?, updatedAt}

## Proposed endpoints — not deployed
POST /api/invitations/events (authenticated organizer)
PATCH /api/invitations/events/:id/draft (authorized organizer; optimistic concurrency)
POST /api/invitations/events/:id/preview (authenticated, short-lived preview token)
POST /api/invitations/events/:id/publish (reviewed revision, audit trail)
POST /api/invitations/events/:id/rollback (authorized, audited)
GET /api/invitations/public/:slug/:opaqueToken (minimum necessary guest view)
PUT /api/invitations/public/:slug/:opaqueToken/rsvp (rate limited, validation)
GET /api/invitations/events/:id/rsvps (authenticated organizer only)

## Rules
- Never put guest names or addresses in URL query parameters.
- Token must be random, unguessable, revocable and stored hashed; do not claim one specific bit length before threat review.
- Event revision published atomically; immutable historical revisions retained per approved policy.
- Event timezone must be explicit and testable; dates are not inferred from browser alone.
- Restrict venue/guest info to the intended audience; minimize analytics.
- All input validated server side; protect against XSS, CSRF/session misuse, replay, enumeration and abuse.
- No payment, child account or live AI chatbot in pilot.

## Open decisions
Authentication provider, database, API framework, rate limits, guest token expiration/revocation, retention, consent notices, provider costs. No implementation until approved.
