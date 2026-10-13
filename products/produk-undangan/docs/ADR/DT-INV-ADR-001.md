# DT-INV-ADR-001 — Repository and Release Architecture
Version: 0.1 | Status: PROPOSED / REVIEW REQUIRED

## Decision proposal
Canonical parent repository: DuniaTumbuh/duniatumbuh. Product path: products/produk-undangan/. Keep Dino Adventure and Nimo & Friends as separate universes sharing an invitation engine.

## Proposed paths (not yet implemented)
- apps/invitation-web, apps/creator-studio
- packages/invitation-core, design-system, rsvp, motion-player, web-ar, holo-player, steam-passport
- universes/dino-adventure, universes/nimo-and-friends
- templates/, schemas/, tests/

## Git discipline
Feature branch -> scoped changes -> tests -> draft PR -> owner review -> authorized merge -> staged deployment -> regression check -> rollback if needed.
Gate 1 is documentation only. No production merge, deployment, DNS, or existing route edits.

## Data and versioning
Store event records centrally with event ID, timezone-aware start, template ID/version, assets and feature flags. Keep customer PII out of Git. Publish immutable revisions with audit and rollback. Generate QR to stable public route resolving current authorized event revision; guest links should use opaque tokens, not raw names.

## Release safeguards
Route isolation; tests for existing paths; secret scanning; dependency pinning; staged preview; no production credentials in browser. All costs/provider selections pending evaluation.

## Repo visibility
Repository is PUBLIC as verified 2026-10-13. Only public-safe documentation may be committed. Proprietary implementation/assets and customer information require separate visibility and security decision.
