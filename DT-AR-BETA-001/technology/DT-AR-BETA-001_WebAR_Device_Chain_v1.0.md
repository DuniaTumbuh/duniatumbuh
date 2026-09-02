# DT-AR-BETA-001 — WebAR and Device Chain v1.0

**Status:** QC CANDIDATE — NOT CANONICAL

## Locked Topology
Galaxy Tab S8: hotspot + Wizard Controller.  
Vivo V21: dedicated mobile AR Host.  
Windows laptop: local HTTPS server + control hub + projector display.  
Classroom projector: audience display, pending physical acceptance.

The AR Host remained stable for a 45-minute home soak test. Vivo should remain foreground during operation. Repositioning between at least two positions and a deterministic Wizard action have been demonstrated.

Current reposition controls are rendering/compositing positions and are **not evidence of persistent world-space 6DoF anchoring**.

Companion WebAR is a P1 target: teacher/parent QR viewer with local Nimo placement/reposition and local-first photo capture. Companion devices shall not receive Wizard/event-control authority.
