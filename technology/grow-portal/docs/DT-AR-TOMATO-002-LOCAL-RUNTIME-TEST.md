# DT-AR-TOMATO-002 — Local Runtime Test Procedure

Status: CONTROLLED TEST PROCEDURE
Date: 2026-09-16
Branch: `dt-ar-tomato-002-interaction`
Parent locked baseline: `843bfc98af66b49b2d259578f4ffe34d308aefe9`
Current feature head before this record: `d7d57d0062abd2b407d2b397a06df2f3c4a70243`

## Purpose
Validate the Daun hotspot pilot and core regression locally before any Railway production mutation.

## Safety controls
- Do not change `dt-ar-tomato-001-deploy`.
- Do not change `main`.
- Do not deploy to Railway during this gate.
- Do not modify any GLB.
- Test from the 002 branch only.

## Windows laptop procedure
1. Open a terminal in a clean working copy of `DuniaTumbuh/duniatumbuh`.
2. Checkout `dt-ar-tomato-002-interaction`.
3. Confirm current branch before starting.
4. Change directory to `technology/grow-portal`.
5. Confirm Node.js version is >=20.
6. Start the existing project server using the repository package/start command.
7. Open `http://localhost:8080/healthz` and require HTTP/application PASS.
8. Open `http://localhost:8080/ar/tomat/`.
9. Hard refresh once to avoid stale cached JS/CSS/JSON.

## Desktop acceptance matrix
### Core 7/7 regression
- Stage 1 Biji loads and renders.
- Stage 2 Akar loads and renders.
- Stage 3 Tunas loads dedicated `seedling.glb`.
- Stage 4 Batang & Daun loads `vegetative.glb`.
- Stage 5 Bunga loads and renders.
- Stage 6 Buah Hijau loads and renders.
- Stage 7 Matang loads and renders.
- Previous/Next work.
- Reset View works.
- Auto stage cycle starts/stops.

### Daun hotspot pilot
At Stage 4 Batang & Daun:
- Marker `Daun` is visible near the model.
- Marker is clickable with mouse.
- Clicking marker produces a bounded pulse response.
- Callout title is `Daun Tomat`.
- Callout explains photosynthesis in Grade-2-appropriate Indonesian.
- Close button dismisses callout.
- Switching stage removes hotspot/callout.
- Returning to Stage 4 recreates hotspot once, without duplicate markers.

### Graceful-failure requirement
If `hotspots.json` cannot load, the seven-stage core viewer must remain usable. This may be verified by a controlled local-only fault simulation; restore the file immediately after test. Do not commit the fault.

### Existing route regression
- `/healthz` PASS.
- `/` no regression.
- `/grow` no regression.
- `/tanamaku/` no regression.
- `/ar/tomat/` PASS.

## Browser inspection
Open DevTools Console and Network for the 002 test only.
Require:
- no uncaught JavaScript exception;
- `stages.json` HTTP 200;
- `hotspots.json` HTTP 200 during normal test;
- selected GLB requests HTTP 200;
- no repeated hotspot creation after stage navigation.

## Important limitation
This desktop local gate does NOT qualify mobile touch or AR hotspot behavior. Local LAN HTTP may display 3D but is not sufficient evidence for WebXR/camera acceptance. Mobile/AR remains UNKNOWN/VERIFY until tested through an appropriate secure context.

## Result labels
- PASS = all desktop requirements satisfied.
- FAIL = reproducible defect; remediate only the failing layer.
- UNKNOWN = evidence not yet observed; verify, do not infer.

## Evidence to retain
- branch + commit SHA;
- screenshot Stage 4 before hotspot click;
- screenshot callout open;
- browser console screenshot if clean;
- any defect screenshot;
- final test matrix result.

PASS = FREEZE. FAIL = REMEDIATE. UNKNOWN = VERIFY.
