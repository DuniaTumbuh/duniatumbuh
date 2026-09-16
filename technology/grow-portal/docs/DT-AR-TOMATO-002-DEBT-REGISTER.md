# DT-AR-TOMATO-002 — Controlled Debt Register

Status date: 2026-09-16
Parent: DT-AR-CORE-001 — Reusable AR Architecture Standard v1.0
Locked parent commit: 843bfc98af66b49b2d259578f4ffe34d308aefe9

## Control rule
Debt remediation runs in parallel only when it does not mutate the locked parent baseline or couple unrelated changes. Each debt item gets a bounded branch/commit, evidence, regression test, and Founder promotion approval where production is affected.

## Debt items

### DEBT-001 — Stale Tunas proxy UI copy
- Category: Documentation / UI copy
- Severity: P2
- Risk: Teacher-facing text contradicts verified dedicated seedling runtime mapping.
- Functional impact: None to current 3D/AR mapping.
- Remediation branch: `dt-ar-core-001-doc-debt`
- Remediation commit: `1997b6544265da2d6cbc7e520764951baee96ed7`
- Change: Only Mode Kelas wording in `public/ar/tomat/index.html`.
- Production state: NOT PROMOTED / NOT DEPLOYED.
- Required before close: diff review + 7-stage regression + production promotion approval.

### DEBT-002 — Extension isolation contract not yet implemented in code
- Category: Architecture / Technical
- Severity: P1
- Risk: Hotspot/audio/gamification changes could become tightly coupled to the core viewer.
- Remediation: `dt-ar-tomato-002-interaction`; implement additive data-driven hotspot layer with graceful failure.
- State: OPEN / CONTROLLED.

### DEBT-003 — Interaction accessibility/touch acceptance not yet defined
- Category: UX / Accessibility / Test
- Severity: P1
- Risk: Desktop click may pass while classroom mobile touch or AR interaction fails.
- Remediation: define minimum touch target, readable callout, dismiss behavior, no interference with camera controls, desktop + mobile + AR test matrix.
- State: OPEN / CONTROLLED.

### DEBT-004 — Extension regression checklist not automated
- Category: QA / Technical
- Severity: P2
- Risk: Future features can regress one of seven stages or existing routes.
- Remediation: first create deterministic manual checklist; automate only stable checks later.
- State: OPEN / CONTROLLED.

### DEBT-005 — Archive package predates future 002 changes
- Category: Archive / Governance
- Severity: P3
- Risk: v1.0 archive must not be overwritten when 002 evolves.
- Remediation: keep DT-AR-CORE-001 v1.0 immutable; create new evidence/package versions for approved extensions.
- State: CONTROLLED / NO ACTION ON v1.0.

## Parallel risk-minimization sequence
1. Preserve locked parent branch and commit.
2. Resolve DEBT-001 on isolated documentation branch; no production deployment until regression approval.
3. Develop DEBT-002/003 on `dt-ar-tomato-002-interaction` without GLB mutation.
4. Pilot one hotspot only: Daun.
5. Desktop functional QC.
6. Mobile touch QC.
7. Mobile AR QC.
8. Seven-stage + route regression.
9. Founder promotion decision.

PASS = FREEZE. FAIL = REMEDIATE. UNKNOWN = VERIFY.
