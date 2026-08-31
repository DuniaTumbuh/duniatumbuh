# Dunia Tumbuh — Anti-Hallucination Standard v1.0

## Document Control
- **Document ID:** DT-STD-AHS-v1.0
- **Approval ID:** EA-005
- **Version:** v1.0
- **Status:** LOCK
- **Effective Date:** 08 August 2026
- **Owner:** Founder Dunia Tumbuh
- **Source Workspace:** DT-002 Production Studio

## 1. Purpose
Mencegah AI menciptakan, mengganti, menebak, atau mengimprovisasi informasi produksi yang bertentangan dengan keputusan Founder dan SSOT Dunia Tumbuh.

## 2. Scope
Berlaku pada AI untuk ide, prompt, gambar, video, animasi, storyboard, karakter, brand, dokumentasi, QC, dan transformasi antar-model/tool.

## 3. Hallucination Classification
- **H1 — Identity / Critical → REJECT**
- **H2 — Structural / Major → REJECT**
- **H3 — Visual / Medium → REVISION**
- **H4 — Cosmetic / Minor → REVISION**

## 4. Reference Priority
1. Keputusan Founder.
2. Latest LOCKED SSOT / Gold Master.
3. LOCKED Production Standard.
4. Approved PRD / Storyboard.
5. Approved Prompt.
6. Conversation context.
7. Model knowledge.

Konflik → **STOP**. Jangan memilih sendiri atau berimprovisasi.

## 5. Prevention Controls
- Periksa Brand/Character SSOT.
- Gunakan approved Storyboard/PRD.
- Jangan mengganti elemen LOCK.
- Model knowledge tidak boleh menimpa keputusan internal.
- Model/tool berikutnya harus menerima SSOT dan Production Standards yang sama.

## 6. Recovery Procedure
1. Stop menggunakan output.
2. Klasifikasikan H1–H4.
3. Bandingkan dengan SSOT.
4. Identifikasi sumber konflik.
5. Perbaiki prompt/reference.
6. Rerender/regenerate.
7. Jalankan QC kembali.

Output REJECT tidak boleh digunakan sebagai seed/reference berikutnya.

## 7. Cross-Model Consistency
Pada ChatGPT Images, Veo, Flow, Kling, atau tool lain: gunakan SSOT dan Production Standards yang sama, jangan reinterpretasi identity, dan lakukan QC setelah perpindahan model.

## 8. Anti-Loop Rule
Masalah yang sama maksimal **2 iteration attempts**. Jika tetap gagal: STOP, lakukan root-cause analysis, jangan ulang prompt yang sama, dan eskalasi bila belum terselesaikan.

## 9. Escalation
Eskalasi untuk konflik SSOT, Story–Character, kontradiksi Gold Master, perubahan identity/logo/philosophy, atau masalah unresolved setelah batas iterasi. Perubahan sumber LOCK membutuhkan Founder approval/ECR.

## 10. Audit Evidence
Catat Asset ID/version, prompt/version, model/tool, reference/SSOT, H1–H4 classification, QC result, corrective action, dan final disposition.

## 11. PASS / FAIL
**PASS:** tidak bertentangan dengan Founder decision, SSOT, Gold Master, Production Standard, dan approved production references.

**FAIL:** H1/H2; mandatory reference tidak tersedia; konflik diabaikan; AI mengarang decision/identity; rejected output digunakan kembali.

H3/H4 → REVISION sampai QC terpenuhi.

## 12. Change & Version Control
Perubahan material hanya melalui Founder-approved ECR.

`DRAFT → REVIEW → APPROVED → LOCKED → SUPERSEDED / ARCHIVED`

Versi LOCK tidak ditimpa dan dipertahankan untuk audit.

## 13. Repository Metadata
- **Repository Path:** `/standards/ai/DT-STD-AHS-v1.0/`
- **Knowledge Category:** AI Governance / Production Standards
- **Tags:** anti-hallucination, ai-governance, ssot, qc, cross-model, anti-loop
- **Related Documents:** EA-004; EA-006; EA-009
- **Supersedes:** None

## 14. Revision History
| Version | Date | Decision | Approval |
|---|---|---|---|
| v1.0 | 08 Aug 2026 | Initial approved release | EA-005 |

## 15. Final Status
**APPROVED — LOCK**

Controlled Master Markdown for packaging under EA-009.