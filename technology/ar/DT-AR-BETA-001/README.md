# DT-AR-BETA-001 — Gate 1 Technology Proof

Controlled classroom beta for smartphone camera compositing, Galaxy Tab S8 Wizard control, and laptop/projector display. This package contains no facial recognition, biometric processing, roster, recording archive, autonomous AI, or public deployment.

## Safety and identity behavior

- The AR Host loads only the exact canonical Nimo v1.1 filename recorded by `DT-PROD-NIMO-MASTER-001`.
- Missing asset causes a visible HARD STOP; the camera image is not transmitted as a valid Nimo experience.
- Frames exist only in volatile server memory and are replaced continuously. No frame is written to disk.
- Wizard commands use an explicit allowlist and contain no child identity.

## Gate 1 topology

Laptop runs the local server. Smartphone opens `/host.html`; Tab S8 opens `/wizard.html`; laptop/projector opens `/projector.html`. The Wizard sends deterministic commands to the phone. The phone composites the approved Nimo PNG over its live camera and sends transient JPEG frames to the projector page.

## Run locally

1. Add the approved Nimo PNG at `public/assets/nimo/Nimo_Master_Character_Reference_v1.1_Jambul_Correction_Candidate.png` without renaming or modification.
2. Use HTTPS for smartphone camera access. Set `TLS_KEY` and `TLS_CERT` to locally controlled certificate files.
3. Run `node server.mjs` and open the three device URLs on the same trusted classroom LAN.
4. Mirror/extend the laptop projector page full-screen.

Example:

```sh
TLS_KEY=/safe/local/key.pem TLS_CERT=/safe/local/cert.pem PORT=8443 node server.mjs
```

## Evidence status

Automated tests prove command allowlisting only. Gate 1 remains NOT TESTED until the canonical binary is present and the real smartphone, Tab S8, laptop, and projector chain is observed. No merge or deployment is authorized.
