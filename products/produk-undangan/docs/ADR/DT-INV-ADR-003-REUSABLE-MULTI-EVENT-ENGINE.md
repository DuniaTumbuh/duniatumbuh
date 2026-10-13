# DT-INV-ADR-003 — Reusable Multi-Event Invitation & AR Experience Engine
Date: 2026-10-13 | Founder direction: REVIEWED / APPROVED / LOCKED — ARCHITECTURAL PRINCIPLE
Status: DESIGN DECISION ONLY — NOT IMPLEMENTED

## Problem
Founder reports a research example where an AR invitation application supports only one invitation card, resulting in a custom application per event. The underlying paper has not been provided or independently verified in this decision record. Regardless of that particular study, one-app-per-event is expressly prohibited for Dunia Tumbuh.

## Decision (LOCKED)
Build one reusable, configurable, multi-event invitation platform, not a custom application or deployment per invitation, per QR, per card, or per customer. Shared invitation engine and optional AR renderer consume versioned event configuration. Event editing must not change shared application code or disrupt already published events.

## Domain separation
Platform -> IP universe (Dino Adventure, future Nimo & Friends) -> template version -> event -> immutable published revision -> guest access and RSVP -> optional experience modules (motion, cake, music, STEAM, WebAR, physical QR, Holo local video).
Event-scoped configuration includes title, event date/time/timezone, venue/map handoff, organizer, template/asset IDs, optional cake/music/AR settings, publish state, guest rules and expiration. Sensitive data is not embedded in public assets.
Canonical IP and asset rights remain independent of event content. Do not blend universes.

## Edit without system disruption
- Organizer edits DRAFT data through authenticated interface, previews without publishing, then explicitly publishes a new immutable revision.
- Existing published revision remains available until atomic revision-pointer switch; safe rollback to previous approved revision, with audit log.
- Schema and template version compatibility; migration/backward-compatibility gates for older published events.
- Immutable versioned static media via CDN; event configuration read through controlled API; no manual file edits or redeploy per customer.
- Changes to one event must not affect any other event; tenant-level isolation on every API and database query.
- Feature flags and kill switches for optional cake, music, AR; fallback to accessible HTML if 3D or sound fails.

## QR and AR architecture
QR resolves to stable event URL or opaque token that maps to a server-side event revision; avoid encoding mutable event details in QR. For AR, use a shared WebAR experience renderer with event-specific marker/asset configuration where technically supported. Image targets/markers may require per-card generation/quality validation but must not require per-event application build. No guarantee that every browser/device/marker supports AR; graceful fallback mandatory. Camera permission only on explicit user gesture, and do not retain camera images by default.
Physical Pop-Up and Pepper's Ghost Holo use shared event/asset contract, but local Holo video may remain offline after service expiry.

## Non-negotiable QC
1. Create 3 independent test events, 2 Dino + 1 future universe mock, without rebuilding or deploying application per event.
2. Edit and publish event A while B and C remain unchanged.
3. Verify QR for A remains stable across revisions, and old approved revision can be restored.
4. Attempt cross-event organizer access; deny and log safely.
5. Test simultaneous guests and RSVP isolation.
6. Test incompatible template/asset versions and rollback.
7. Test AR unsupported, camera denied, weak bandwidth and 2D fallback.
8. Test music/cake changes for event A do not mutate global assets or event B.
9. Measure incremental storage, CDN, and DB cost per event.
10. Confirm /, /grow, /tanamaku, /healthz and other existing production routes unaffected.
All tests NOT RUN.

## Founder boundaries
Gate 2F cake/music feature design and controlled preparation REVIEWED / APPROVED / LOCKED as design direction. No final vendor, production code, budget, merge, or deployment approved. PR #9 and PR #10 remain Draft and unmerged.
