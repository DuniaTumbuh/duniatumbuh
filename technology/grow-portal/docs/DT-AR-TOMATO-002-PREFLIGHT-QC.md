# DT-AR-TOMATO-002 — Pre-Deploy Static QC

Date: 2026-09-16
Branch: `dt-ar-tomato-002-interaction`
Parent baseline: `843bfc98af66b49b2d259578f4ffe34d308aefe9`
Reviewed head: `dfee3598a232ca06b5282e3bcaf08be56cfe1ffb`

## Scope isolation
Git compare confirms branch is ahead by 5 commits and behind by 0. Changed paths are bounded to:
- debt register documentation
- `public/ar/tomat/app.js`
- new `public/ar/tomat/hotspots.json`
- `public/ar/tomat/index.html`
- `public/ar/tomat/style.css`

No GLB, `stages.json`, `server.js`, package/runtime, DNS, or main-branch mutation is part of this pilot.

## Static checks
- Stage registry remains 7 stages.
- Dedicated Tunas mapping remains `young -> assets/seedling.glb`.
- Daun/Batang & Daun stage ID is `veg`; pilot hotspot targets `stage: veg`.
- Hotspot registry failure is caught and degrades to zero hotspots rather than replacing the core viewer.
- Stage switching clears stale hotspot UI and re-renders only matching stage hotspots.
- Reset closes callout but preserves baseline camera reset behavior.
- Touch target minimum is 48 x 48 CSS px.
- Callout uses `role=status` + `aria-live=polite` and has explicit close control.
- Reduced-motion preference disables pulse animation.
- No asset regeneration or GLB modification.

## Controlled limitation discovered before deployment
The current pilot response is a UI hotspot pulse/callout anchored to the model. It does **not yet animate the actual leaf mesh**. Actual leaf movement requires either a qualified GLB animation/rig/morph target or a separate safe visual-response technique. Do not describe the current pilot as physical leaf animation.

AR portability is **UNVERIFIED** until device testing. Browser/WebXR overlay behavior and external native AR handoff must be tested separately. A desktop hotspot PASS must not be promoted as Mode AR hotspot PASS.

## Pre-deploy disposition
STATIC/CODE PREFLIGHT: PASS WITH CONTROLLED LIMITATIONS.
PRODUCTION DEPLOYMENT: HOLD.
MOBILE TOUCH: NOT TESTED.
MODE AR HOTSPOT: NOT TESTED.
CORE 7/7 RUNTIME REGRESSION: NOT TESTED on this branch.

## Minimum next gate
Use an isolated preview/test deployment if available without changing the locked production service. If no isolated zero-cost preview is available, require explicit controlled temporary production-source switch plus documented rollback to locked commit before execution.

PASS = FREEZE. FAIL = REMEDIATE. UNKNOWN = VERIFY.
