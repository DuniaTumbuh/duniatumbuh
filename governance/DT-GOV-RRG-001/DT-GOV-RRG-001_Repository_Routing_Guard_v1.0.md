# DT-GOV-RRG-001 — Repository Routing Guard v1.0

**Authority:** Founder / Dunia Tumbuh Executive Office  
**Status:** FOUNDER APPROVED / LOCKED  
**Effective:** 31 August 2026

## Mission
Establish a permanent Repository Routing Guard for all GitHub operations executed by AI within Project Dunia Tumbuh, preventing accidental cross-project writes and repository contamination.

## Canonical Repository Mapping

- **Dunia Tumbuh → `DuniaTumbuh/duniatumbuh`**
- **Athena Capital Office → `Athena-Capital-Office/athena-capital-office`**

The Athena Capital Office repository is a separate project repository and MUST NOT be used for Dunia Tumbuh writes unless the Founder explicitly authorizes a specific controlled cross-project artifact.

## Mandatory Guard Rules

1. Before EVERY repository mutation, AI MUST resolve and verify:
   - Active Project
   - Target Repository
   - Target Branch
   - Target Path
   - Commit / Work-Order ID

2. For Dunia Tumbuh work, the target repository MUST equal `DuniaTumbuh/duniatumbuh`.

3. Any mismatch between Active Project and Target Repository results in **HARD STOP / NO WRITE**.

4. **Cross-repository fallback is PROHIBITED.** If a Dunia Tumbuh write fails, AI MUST NOT retry the same write in `Athena-Capital-Office/athena-capital-office`.

5. Dunia Tumbuh controlled branches MUST use the `dt-*` prefix unless a separately Founder-approved canonical convention explicitly supersedes it.

6. Dunia Tumbuh commit messages MUST include the relevant `DT-*` work-order, governance, production, or artifact ID where applicable.

7. Dunia Tumbuh repository paths MUST NOT contain ACO-only namespaces or identifiers such as `capital-management/`, `investment-thesis/`, `ACO-*`, or equivalent ACO-exclusive structures unless specifically authorized as a controlled cross-project artifact.

8. Any artifact whose authority, ID, or substantive content belongs exclusively to Athena Capital Office MUST be rejected from the Dunia Tumbuh repository unless the Founder explicitly authorizes the cross-project artifact.

9. After every successful write, AI MUST perform read-back verification of:
   - Repository
   - Branch
   - Commit SHA
   - Path
   - File content / integrity or checksum where applicable

10. Material repository changes SHOULD use **controlled `dt-*` branch → verification → approval gate → merge**, rather than direct write to `main`.

11. AI MUST prefer permission isolation and least privilege where technically possible.

12. Repository routing safety takes precedence over speed. If repository identity is uncertain, AI MUST STOP and resolve it before proceeding.

## Cross-Repository Safety Rule

> **CROSS-REPOSITORY WRITE = PROHIBITED BY DEFAULT.**  
> Repository target must be explicitly resolved before every mutation.  
> Any project/repository mismatch = **HARD STOP**.

## Failure Handling

A repository-routing mismatch, ambiguous repository identity, wrong project prefix, incompatible namespace, or failed target verification MUST NOT be silently corrected by writing to another accessible repository. The operation must stop and be reported for controlled resolution.

## Governance Disposition

**DT Repository Routing Guard**  
**FOUNDER APPROVED / LOCKED**

This rule is mandatory for subsequent controlled repository bootstrap and all future AI-mediated GitHub mutations for Dunia Tumbuh.