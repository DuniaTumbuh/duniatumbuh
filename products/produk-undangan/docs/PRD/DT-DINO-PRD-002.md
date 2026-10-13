# DT-DINO-PRD-002 — Digital Motion Pilot Acceptance
Version: 0.1 | Status: DRAFT / REVIEW REQUIRED

## Pilot happy path
Organizer chooses Dino template -> enters event details -> imports or adds guest(s) -> previews -> reviews pronunciation and content -> publishes -> distributes opaque per-guest links -> parent views essential event details immediately -> child optionally plays Dino greeting and STEAM challenge -> parent submits RSVP -> organizer views consolidated responses -> organizer may publish corrected event revision without redeploy.

## Acceptance criteria (must be demonstrated, not inferred)
AC-01 Published link works in mobile browser without app install or mandatory camera access.
AC-02 Event date/time displayed correctly in Asia/Jakarta or explicitly selected venue timezone; countdown agrees.
AC-03 Guest name not present in raw query parameter; unauthorized organizer actions rejected.
AC-04 RSVP persists centrally and appears in organizer dashboard; duplicate update policy documented.
AC-05 Supported edits publish without code redeploy; existing invitation URL remains stable.
AC-06 Dino D01 uses approved canonical visual and voice references; no cross-universe character drift.
AC-07 Audio can be muted; no autoplay dependence; missing voice falls back to text.
AC-08 STEAM activity is optional and age appropriate; essential party info and RSVP never gated.
AC-09 3D failure or slow network yields usable static/2D fallback.
AC-10 Smoke tests verify /, /grow, /tanamaku, /healthz unchanged in staging before any future deploy.
AC-11 Preview, audit and rollback of a published event revision are demonstrated.
AC-12 Accessibility review includes reduced motion, contrast, tap targets and readable labels.

## Exclusions
No payment gateway, no production Holo claim, no untested real-time map navigation, no automatic personal-data collection from children, no live AI chat in MVP.

## Pilot evidence register
Each AC requires test date, device/browser, expected result, actual result, screenshot/log, reviewer, and PASS/FAIL. Currently NOT TESTED.
