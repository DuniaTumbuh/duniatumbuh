# DT-FLOW-LEARNING-LIBRARY-v0.2
## Google Flow / Veo Production Learning Library — Nimo Pilot

**Project:** Dunia Tumbuh  
**Workstream:** DT-002 — Pilot Episode 01 Nimo  
**Status:** WORKING PRODUCTION STANDARD / EVIDENCE-BASED  
**Updated:** 2026-09-05  
**Purpose:** Prevent repeated prompt failures, identity hallucination, unnecessary AI-credit spending, and loss of production learning.

---

## 1. Core Production Principle

Google Flow is a generative shot tool, not the canonical authority for Nimo.

Canonical character identity must come from approved visual references. Flow may animate or interpolate controlled states, but must not be allowed to invent hidden character geometry.

**Production rule:** visual grounding > prompt length.

---

## 2. Evidence Learned During Pilot

### 2.1 Environment-only input can hallucinate Nimo
When an input image contains only the glowing leaf/environment and Nimo is requested through text, Flow may invent a new character.

**Rule:** Never request canonical Nimo from an environment-only image.

### 2.2 Multi-view grounding is required for orientation changes
Front, side, rear-three-quarter and back geometry cannot safely be inferred from one front image.

**Rule:** Provide the relevant canonical view whenever orientation changes.

### 2.3 Nimo's jambul is three-dimensional geometry
The spiral curl must change coherently with camera/view orientation. It must not be treated as an identical 2D symbol pasted onto front, side and back views.

**Rule:** Correct view-specific jambul orientation is an identity acceptance criterion.

### 2.4 One generation should perform one primary action
Complex requests such as observe + turn + walk + react increase temporal reinterpretation.

**Rule:** Split complex action into micro-shots.

### 2.5 Start/End anchors are stronger than additional prose
Explicit anchors improve composition and destination, but do not guarantee stable topology between them.

**Rule:** Use Start/End frames whenever practical, but still QC the interpolation.

### 2.6 Do not chase a perfect eight-second take
TURN experiments demonstrated over-rotation/oscillation even when endpoints were usable.

**Rule:** A clean 0.5–3 second segment can be production-successful if it solves the editorial need.

### 2.7 Long locomotion is unsafe for identity-critical Nimo
WALK-AWAY-01 correctly moved Nimo away from camera but hallucinated additional/unstable spiral-jambul geometry and showed secondary geometry drift.

**Disposition:** WALK-AWAY-01 = FAIL / RETAIN AS QUALIFICATION EVIDENCE / DO NOT USE.

**Rule:** Long-duration generative locomotion is prohibited for Nimo until temporal topology stability is demonstrated.

### 2.8 Edit before regenerate
TURN-B contained an incorrect long temporal path but a usable true-back segment.

**Rule:** Inspect for salvageable IN/OUT ranges before spending credits on regeneration.

### 2.9 Failure is qualification evidence
Failed outputs document model limitations and should not automatically be deleted.

**Rule:** Retain meaningful failures with reason codes so later AI operators do not repeat the same experiment.

---

## 3. Nimo Flow DO

- Use canonical Nimo visual references.
- Use the exact view needed by the shot.
- Keep one major action per generation.
- Prefer short micro-actions.
- Use Start/End frames for controlled transitions.
- Keep camera behavior simple when character motion is important.
- QC jambul, ears, scarf, emblem, tail, proportions, limbs and face exposure.
- Preserve useful failed generations as evidence.
- Assemble footage before deciding that a new generation is necessary.
- Generate only genuine RED editorial gaps.

---

## 4. Nimo Flow DON'T

- Do not generate Nimo from text alone when identity matters.
- Do not ask Flow to infer back/three-quarter geometry from a front-only reference.
- Do not combine turn + walk + reaction into one long shot.
- Do not assume a detailed negative prompt prevents topology hallucination.
- Do not accept mirrored/reversed jambul orientation.
- Do not accept duplicate jambul, tail, limbs or accessories.
- Do not repeatedly regenerate an eight-second shot when a short clean segment already exists.
- Do not spend credits before checking whether editing solves the problem.
- Do not treat Flow output as a new canonical character reference.

---

## 5. Prompt Architecture

Use this hierarchy:

1. **Primary action** — one sentence.
2. **START/END constraint** — if applicable.
3. **Direction/orientation** — away/toward/left/right, explicit.
4. **Identity preservation** — only critical features.
5. **Camera constraint**.
6. **Short negative constraints** for known failure modes.

Avoid endlessly expanding negative prompts after a structural model failure. Change shot design instead.

### Minimal template

```text
[CHARACTER] performs ONE controlled action.

Begin exactly from the supplied START FRAME and finish naturally in the supplied END FRAME.

Maintain the specified orientation and movement direction throughout the shot.

Preserve canonical character identity and proportions, especially [critical features].

Camera: [locked/simple movement].

Do not introduce additional characters or duplicate/deform character geometry.
No text, logo or watermark.
```

---

## 6. AI Budgeting Rules

**Budget principle:** Generate only when missing footage cannot be solved editorially.

Before every paid generation ask:

1. Is the shot actually missing?
2. Can an existing PASS/RETAIN clip be trimmed?
3. Can a still anchor + push/scale/parallax/dissolve solve it?
4. Is this one primary action?
5. Are the required character views visually grounded?
6. Is x1 sufficient for the qualification attempt?

Do not spend credits merely because credits remain available.

Model cost must be recorded from the actual account/UI when generated; do not assume historical pricing.

---

## 7. Current Pilot Evidence Register

| Evidence | Status | Learning |
|---|---|---|
| Leaf/environment-only Nimo attempt | FAIL | Text cannot replace canonical visual grounding |
| Multi-view character grounding | RETAIN | Required for orientation-sensitive Nimo work |
| TURN-A | EDIT/SALVAGE | Use micro-segment |
| TURN-B-01 | CONDITIONAL PASS / RETAIN | Endpoint usable; temporal path over-rotates |
| BACK-ANCHOR-01 | PASS | Suitable canonical shot anchor |
| WALK-AWAY-01 | FAIL / EVIDENCE | Long locomotion causes identity/topology hallucination |
| Portal P02–P06 | GENERATION LOCK | Environment/cinematic Flow use is comparatively strong |

---

## 8. Editorial Recovery Strategy

For Nimo following the golden light, prefer:

**Reaction → TURN-A micro-cut → TURN-B micro-cut → true-back hold → distant back anchor → environment/portal continuation**

The audience does not require continuous proof of every walking step. Editorial implication is preferable to unstable generative locomotion.

---

## 9. Acceptance / Rejection

### PASS
Canonical identity remains coherent and the shot performs its editorial function.

### CONDITIONAL PASS / SALVAGE
Some temporal material is defective, but a clean segment can solve the edit without identity compromise.

### FAIL
Reject production use when any P0 identity defect occurs, including:
- duplicate/missing body feature;
- material jambul topology/orientation failure;
- tail detachment or severe deformation;
- limb/accessory hallucination;
- major body/face redesign;
- wrong movement direction that defeats the scene.

---

## 10. Current Production Directive

**STOP broad AI-video generation.**

Proceed to **DT-002 — PILOT EP01 ROUGH ASSEMBLY PASS 01**.

Build the episode from existing PASS/RETAIN assets first. Classify timeline gaps:

- **GREEN:** production-ready
- **YELLOW:** editorial repair/salvage
- **RED:** genuinely requires new generation

Only RED gaps may return to Flow after gap analysis.

---

## 11. Reuse by Other AI Operators

Any AI working on Dunia Tumbuh should:

- retrieve this library before proposing a Flow generation;
- distinguish canonical source from generative derivative;
- never reinterpret Nimo to solve a missing view;
- report evidence and uncertainty;
- prefer controlled abstention over invented identity;
- preserve AI-credit and production-time discipline.

This document is a working learning library. New rules should be added only when supported by production evidence or an explicit Founder directive.
