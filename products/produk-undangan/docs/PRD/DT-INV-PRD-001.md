# DT-INV-PRD-001 — Product Requirements Document
Version: 0.1 | Status: DRAFT / REVIEW REQUIRED | Pilot: Dino Adventure

## Vision
Undangan ulang tahun anak yang menjadi petualangan berkesan: pengalaman fisik dan digital, personalisasi, edukasi STEAM, gamifikasi, dan operasional acara yang mudah bagi orang tua.

## Personas
1. Creator: reusable templates, brand/character fidelity, no manual recreation.
2. Seller/operator: repeatable fulfillment, cost/QC controls, revision management.
3. Parent: correct event details, privacy, accessible RSVP and navigation.
4. Child: immediate delight, age-appropriate interactions, brief STEAM challenges.

## Product formats
- Motion Card: digital and optionally printed, animated 3D, spoken greeting, RSVP, QR.
- Pop-Up Explorer: physical die-cut card plus QR WebAR.
- Holo Stage: foldable cardboard Pepper's Ghost display using a single flat PET and phone hidden from primary viewing angle; optical validation required.

## Shared functional requirements
FR-01 Versioned event templates and configuration.
FR-02 Admin preview, review, publish and rollback; edits without code redeployment for supported fields.
FR-03 Guest-specific nonenumerable invitation tokens, privacy-aware sharing.
FR-04 Centralized RSVP, guest counts, update audit, optional notification.
FR-05 Character master and separate universe asset registries.
FR-06 Mobile first; reduced motion; text/audio fallback; accessible party details without game.
FR-07 Journey map as illustrated child experience; external navigation handoff for real directions.
FR-08 STEAM Passport, age bands and optional games; no coercive loops.
FR-09 Pre-rendered 3D animation for Holo Stage; no claim of true holography.
FR-10 QA for QR, voice/name pronunciation, link, event timezone, character, physical materials.

## Non-functional requirements
NFR-01 No disruption to existing /, /grow, /tanamaku, /healthz.
NFR-02 No public storage of customer personal data; secrets server-side only.
NFR-03 No unreviewed production merge/deploy.
NFR-04 Device and physical QC required before production claims.
NFR-05 Feature flags and backward-compatible schema migrations.

## Pilot exit gates
G1 documentation and architecture approved; G2 digital motion functional and user-tested; G3 pop-up/AR physical and device tested; G4 Holo optical/mechanical test; G5 commercial and privacy review. No gate is currently claimed PASS.
