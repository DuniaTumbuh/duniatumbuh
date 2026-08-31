# Dunia Tumbuh — Executive QC Checklist v1.0

## Document Control
- **Document ID:** DT-STD-EQC-v1.0
- **Approval ID:** EA-006
- **Version:** v1.0
- **Status:** LOCK
- **Effective Date:** 08 August 2026
- **Owner:** Founder Dunia Tumbuh
- **Source Workspace:** DT-002 Production Studio

## 1. Purpose
Menetapkan quality gate eksekutif sebelum aset Dunia Tumbuh dinyatakan layak melanjutkan pipeline produksi atau release.

## 2. QC-0 — Preparation Gate
Wajib tersedia: Asset ID, Asset Version, Prompt Version, AI Model/Tool, SSOT references, dan approved Storyboard/PRD bila relevan. Missing mandatory input → **STOP QC**.

## 3. QC-1 — Identity Gate
Periksa official logo/tagline/colors/proportions, Character DNA, palette, dan Gold Master.

Untuk Nimo: silhouette, head shape, face=body color, spiral hair/jambul, leaf ears, eyes, badge, scarf, tail, Character DNA, color palette.

Mandatory identity failure → **REJECT**.

## 4. QC-2 — Story & Educational Gate
Periksa approved Storyboard, educational purpose, filosofi Dunia Tumbuh, Story Bible, character values, dan approved requirement/PRD.

Minor non-structural deviation → **REVISION**. Conflict dengan Story Bible/approved story structure → **REJECT**.

## 5. QC-3 — Visual & Cinematic Gate
Periksa camera, composition, lighting, color harmony, animation/visual continuity, environment, readability/focus, dan consistency antar-shot.

Non-identity issue → REVISION. Identity contract failure → REJECT.

## 6. QC-4 — Technical Gate
Periksa resolution/aspect ratio, frame/shot integrity, clipping/cropping, visual artifact, continuity, audio/voice/synchronization bila relevan, file/output readiness, dan compatibility dengan tahap berikutnya.

Repairable technical failure → REVISION. Unusable/requirement-breaking output → REJECT.

## 7. QC-5 — Executive / Founder Gate
Pastikan tidak ada perubahan keputusan LOCK, exception memiliki otorisasi, material yang memerlukan Founder decision telah dieskalasikan, dan approval/release gate terpenuhi. AI tidak menggantikan keputusan Founder.

## 8. Disposition Rules
- **PASS:** semua mandatory gates terpenuhi; tidak ada conflict dengan SSOT/LOCK.
- **REVISION:** deviasi dapat diperbaiki tanpa mengubah identity contract/LOCK.
- **REJECT:** identity failure, structural conflict, material Story Bible/SSOT conflict, unauthorized change, atau output tidak layak menjadi reference.
- **STOP:** mandatory evidence/reference tidak tersedia atau konflik sumber unresolved.

## 9. Escalation
Eskalasi kepada Founder untuk perubahan identity/philosophy/logo/tagline, konflik antar-SSOT, exception terhadap LOCK, atau keputusan yang tidak dapat diputuskan secara mekanis.

## 10. Evidence & Audit
Catat Asset ID/version, prompt version, model/tool, reference set, QC-0–QC-5 results, finding, disposition, corrective action, dan approval/escalation.

## 11. Executive Checklist
- [ ] QC-0 Preparation PASS
- [ ] QC-1 Identity PASS
- [ ] QC-2 Story & Educational PASS
- [ ] QC-3 Visual & Cinematic PASS
- [ ] QC-4 Technical PASS
- [ ] QC-5 Executive/Founder Gate PASS atau N/A dengan authority
- [ ] No unresolved SSOT conflict
- [ ] No unauthorized identity change
- [ ] Audit evidence recorded
- [ ] Final disposition recorded

## 12. Version Control
`DRAFT → REVIEW → APPROVED → LOCKED → SUPERSEDED / ARCHIVED`

Versi LOCK tidak ditimpa. Perubahan material mengikuti Founder-approved ECR.

## 13. Repository Metadata
- **Repository Path:** `/standards/qc/DT-STD-EQC-v1.0/`
- **Knowledge Category:** Executive QC / Production Standards
- **Tags:** qc, executive-gate, production, identity, story, visual, technical, audit
- **Related Documents:** EA-004; EA-005; EA-009
- **Supersedes:** None

## 14. Revision History
| Version | Date | Decision | Approval |
|---|---|---|---|
| v1.0 | 08 Aug 2026 | Initial approved release | EA-006 |

## 15. Final Status
**APPROVED — LOCK**

Controlled Master Markdown for packaging under EA-009.