# DT-DINO-G2-005 — Read-Only Source and Railway Topology Audit
Date: 2026-10-13 | Status: OBSERVED / IMPLEMENTATION HOLD

## Verified sources
- GitHub canonical repo: DuniaTumbuh/duniatumbuh (PUBLIC), default branch main.
- Railway project: refreshing-compassion; service duniatumbuh; production environment.
- Railway production source: same repository, branch dt-tanam-aku-web-001-deploy, rootDirectory /technology/grow-portal.
- Build Railpack V3; service domain duniatumbuh-production.up.railway.app; latest deployment status SLEEPING; sleepApplication true; staged changes null.
- package.json on deployment branch: Node >=20, npm start runs node server.js, no runtime dependencies listed.
- server.js uses built-in Node http/fs/path, static files in public; /healthz, /grow, /tanamaku, /tanamaku/game, /ar/tomat routes.
- README states separate custom domain read-back gate; custom domain absent in current Railway service response. Do not infer external Cloudflare routing from that absence.

## Conclusions and limits
- Documentation PR #9/#10 do not target the Railway production source branch.
- This read-only review does not prove current HTTP availability or security PASS. SLEEPING is not an outage finding.
- Existing static server is not an authorized RSVP/event backend; no authenticated organizer/database capability verified.
- Static path normalization and encoded path handling warrant security tests; vulnerability NOT ESTABLISHED.

## Recommendation (not yet approved)
- Keep current production branch and Grow Portal unchanged.
- Design a separately rooted invitation app/module and authenticated event/RSVP API with staging verification.
- Prefer relational data model and versioned asset manifests; vendor choice and cost ceiling pending.
- Require no new infrastructure spend, repository merge, production deploy or domain changes without owner approval.

## Open evidence
Read-only HTTP smoke test, complete existing route baseline, staging topology, database/auth provider comparison, privacy/retention decision, exact vendor price and free-tier availability.
