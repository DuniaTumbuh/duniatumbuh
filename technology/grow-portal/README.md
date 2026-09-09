# DT Grow Portal MVP

Controlled implementation for the Dunia Tumbuh souvenir QR entry.

## Scope

- QR destination target: `https://duniatumbuh.com/grow`
- Railway-ready Node service
- Minimal mobile landing page
- 10 ordered plant choices
- No child account
- No camera/photo upload
- No Grow ID yet
- No unverified botanical/nutrition claims

## Railway

Create a Railway service from repository `DuniaTumbuh/duniatumbuh` and set the service Root Directory to:

`/technology/grow-portal`

Start command is provided by `package.json`:

`npm start`

Health endpoint:

`/healthz`

Expected response:

`{"status":"ok","service":"dt-grow-portal"}`

## Domain gate

Do not print the final QR until all of the following pass:

1. Railway deployment is healthy.
2. Cloudflare custom-domain routing is configured for the approved Grow Portal hostname/path architecture.
3. Public HTTPS read-back reaches the Grow Portal.
4. `https://duniatumbuh.com/grow` resolves to the intended portal without unsafe or temporary redirects.
5. QR generated in Canva is scanned successfully from multiple physical devices and from the intended print medium.

## Governance

This branch is controlled work. Do not merge to `main` without Founder approval.
