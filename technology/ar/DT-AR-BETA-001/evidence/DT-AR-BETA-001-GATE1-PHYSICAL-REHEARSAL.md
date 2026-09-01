# DT-AR-BETA-001 — Gate 1 Controlled Physical Device-Chain Rehearsal

**Status:** READY FOR OWNER-ASSISTED EXECUTION  
**Gate 1:** NOT PASS UNTIL OBSERVED EVIDENCE IS RECORDED  
**Required devices:** AR Host smartphone, Samsung Galaxy Tab S8, laptop, classroom projector

## Mandatory preflight

1. Check out branch `dt-ar-beta-001-gate1` from `DuniaTumbuh/duniatumbuh`.
2. Run `node --test`; require 4/4 PASS.
3. Confirm laptop, smartphone, and Tab S8 use the same trusted local network.
4. Provide a locally trusted HTTPS certificate to the server. Do not bypass browser security warnings during the classroom event.
5. Confirm no classroom child is present during technical preflight.
6. Confirm recording, cloud sync, screen capture, microphone, and AI services are off.

## Device assignment

| Device | Page / role |
|---|---|
| Smartphone | `https://<laptop-ip>:8443/host.html` — camera and Nimo composite |
| Galaxy Tab S8 | `https://<laptop-ip>:8443/wizard.html` — deterministic commands |
| Laptop + projector | `https://localhost:8443/projector.html` — shared display |

## Rehearsal sequence

1. Start the server with locally controlled `TLS_KEY` and `TLS_CERT`.
2. Open projector page full-screen and verify “Menunggu AR Host”.
3. Open AR Host, grant camera permission, and verify “Aset Nimo kanonis termuat”.
4. Confirm projector receives the live composite.
5. On Tab S8 trigger `WAVE`; confirm a visible scale reaction.
6. Trigger `MOVE_LEFT`, then `MOVE_RIGHT`; confirm repositioning without reload or rebuild.
7. Walk the smartphone camera slowly between two classroom viewpoints.
8. Observe image continuity, command latency, and recovery after a brief Wi-Fi interruption.
9. Stop the server and verify no image/audio files were created.

## Evidence capture

Record only device/system evidence without children:

| Evidence ID | Required observation | Result |
|---|---|---|
| PHY-01 | Smartphone camera active and canonical asset loaded | PENDING |
| PHY-02 | Laptop/projector shows live composite | PENDING |
| PHY-03 | Tab S8 command produces visible action | PENDING |
| PHY-04 | Left and right placement occur without rebuild | PENDING |
| PHY-05 | Identity remains recognizable on projected output | PENDING |
| PHY-06 | Command latency and frame responsiveness are classroom-usable | PENDING |
| PHY-07 | No identification, biometric, recording, or persistence required | PENDING |

## Known limitation

The recovered canonical binary is an opaque multi-view master reference sheet, not a transparent isolated character asset. It is served and rendered without regeneration, redrawing, background removal, or re-encoding. Gate 1 identity integrity can be inspected, but immersive visual integration must not be overstated.

## Stop conditions

Stop immediately for wrong repository/branch, checksum failure, missing canonical asset, identity distortion, uncontrolled recording, child-identification request, persistent frame creation, unsafe certificate/network state, or repeated instability.

## Gate rule

Passing automated tests or completing this checklist does not by itself authorize Gate 1 PASS. All seven production-order acceptance criteria require actual observed evidence and controlled review. Merge and deployment remain prohibited.
