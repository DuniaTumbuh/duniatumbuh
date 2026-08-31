# DT-GOV-GIT-001-v1.0
## Dunia Tumbuh — Repository & Git Governance Standard v1.0

### Document Control
- **Status:** REVALIDATED — CANONICAL BASELINE — LOCK
- **Historical Review:** PASS
- **Historical Approval:** APPROVED
- **Historical Governance Decision:** LOCK
- **Provenance:** Controlled reconstruction from the previously reviewed 24-section substantive draft. This file is not claimed to be the unrecovered byte-exact original.
- **Upstream:** DT-GOV-IDREG-001-v1.0 — LOCK
- **Benchmark:** PP-2026-001 → PP-2026-004 Golden Path

## Table of Contents
1. Purpose
2. Scope
3. Glossary
4. Repository Authority Model
5. Repository Architecture
6. Canonical ID Integration
7. Source-of-Truth Hierarchy
8. Git Branch Model
9. Commit Governance
10. Document Lifecycle
11. LOCK Protection
12. Change Control
13. Manifest & SHA-256
14. Rollback & Recovery
15. Repository → Knowledge Base
16. Repository → RAG
17. Security Minimum Controls
18. Backup & Recovery
19. AI Operating Rules
20. PASS/FAIL Criteria
21. Pilot Nimo Minimum Readiness
22. Revision & Supersession
23. Repository Metadata
24. Founder Revalidation Gate

## Glossary / Terms — Explanatory, Non-Normative
| Term | Explanation |
|---|---|
| Git | Version-control system untuk history dan rollback. |
| GitHub | Platform repository berbasis Git. |
| Repository | Controlled storage untuk source, metadata, code, manifest, dan artifacts. |
| Commit | Snapshot perubahan dalam Git. |
| Branch | Jalur perubahan terpisah sebelum masuk canonical state. |
| SSOT | Single Source of Truth. |
| SHA-256 | Byte-level integrity fingerprint. |
| RAG | Retrieval-Augmented Generation. |
| PRD | Product Requirements Document. |
| Canonical ID | Identitas unik lintas sistem. |

## 1. Purpose
Menetapkan Repository dan Git sebagai controlled source-management layer Dunia Tumbuh. Prinsip: Canonical ID → Canonical Repository Location → Controlled Version → Traceable Change → Approved Source → Knowledge/RAG. Git menyediakan version history dan technical traceability; Git commit bukan Founder Approval.

## 2. Scope
Minimum Viable Repository/Git Governance yang diperlukan menuju Knowledge Base, RAG, Production Readiness, dan Pilot Nimo. Advanced enterprise Git infrastructure bukan blocker versi ini.

## 3. Glossary
Git, GitHub, Repository, Commit, Branch, Merge, Rollback, SSOT, Manifest, SHA-256, RAG, PRD, dan Canonical ID digunakan sesuai definisi explanatory/non-normative pada dokumen.

## 4. Repository Authority Model
Founder Approval / Executive Authority → LOCKED Canonical Master → Canonical Repository → Knowledge Base → RAG Retrieval → AI Output / Production. File di repository tidak otomatis approved.

## 5. Repository Architecture
Minimum folders: governance/, standards/, policies/, manuals/, prd/, knowledge/, production/{characters,stories,episodes,prompts}/, technology/, security/, archive/, registry/. Setiap controlled asset memiliki Canonical ID dan repository path.

## 6. Canonical ID Integration
Repository tidak membuat ID kedua. Canonical ID yang sama digunakan pada GitHub, Google Sheets, Apps Script, Code/Database, Knowledge Base, RAG, dan Dashboard. One Asset → One Canonical ID → Used Everywhere.

## 7. Source-of-Truth Hierarchy
LOCKED Master Markdown > PDF > Executive Visual Board > Knowledge/RAG derivative > Working Draft > Chat History. Chat tidak boleh mengalahkan dokumen LOCK.

## 8. Git Branch Model
Minimum: main = canonical approved/production-ready; work/* = perubahan aktif; hotfix/* = perbaikan kritis. Perubahan ke main melalui validation gate sesuai kelas aset.

## 9. Commit Governance
Commit minimal menjelaskan apa yang berubah, Canonical ID terkait, dan tujuan perubahan. Approval/Decision ID direferensikan untuk perubahan governance penting.

## 10. Document Lifecycle
DRAFT → REVIEW → APPROVED → LOCK → SUPERSEDED / ARCHIVED. Git history tidak boleh menghapus fakta bahwa suatu versi pernah berlaku.

## 11. LOCK Protection
File LOCK tidak diedit in-place. Material change menghasilkan controlled version berikutnya melalui Change Request/Review/Approval; versi lama tetap historical record.

## 12. Change Control
AI/manusia dilarang silent edit LOCK, silent rename ID, overwrite version, menghapus approval trail, atau mengganti canonical payload tanpa controlled change process.

## 13. Manifest & SHA-256
Manifest minimum: canonical_id, version, status, approval_id, production_package_id, repository_path, sha256, related_ids, created_at, supersedes. SHA-256 membuktikan integrity, bukan menggantikan approval.

## 14. Rollback & Recovery
Known Good Version → identify → verify → restore/revert. Rollback memperbaiki state tanpa menghapus audit evidence.

## 15. Repository → Knowledge Base
Eligibility minimum: Canonical ID valid + version diketahui + source diketahui + lifecycle status diketahui. Normative operational knowledge memprioritaskan latest applicable LOCK source.

## 16. Repository → RAG
Setiap chunk minimum membawa canonical_id, version, status, source_path, section_locator, knowledge_category agar retrieval dapat ditelusuri.

## 17. Security Minimum Controls
Least privilege; access terkontrol; credentials/API keys dilarang di repo; secrets memakai secrets/environment mechanism; main bukan scratch area; destructive action traceable; backup/recovery tersedia.

## 18. Backup & Recovery
Canonical Repository + recoverable copy/export + integrity metadata. Dokumen penting tetap memiliki Markdown/PDF/Visual/Repository Package sesuai Documentation Standard.

## 19. AI Operating Rules
AI menggunakan Canonical ID, memeriksa lifecycle/status, memilih LOCK source, mempertahankan source attribution, tidak silent edit LOCK, dan menyatakan konflik tanpa menebak.

## 20. PASS/FAIL Criteria
PASS: ID/path/version/status valid, history traceable, LOCK protected, integrity tersedia bila diwajibkan, rollback memungkinkan. FAIL: duplicate identity, silent overwrite, missing canonical source, unauthorized LOCK change, credentials in repo, broken approval relation, atau RAG source tidak traceable.

## 21. Pilot Nimo Minimum Readiness
Canonical Registry operational → minimum repo structure operational → LOCK source protected → production assets memiliki ID/path → change history traceable → rollback tersedia → Knowledge Base dapat mengambil canonical source. Tidak menunggu enterprise CI/CD, full DAM, advanced automation, multi-environment, atau enterprise dashboard.

## 22. Revision & Supersession
Perubahan standard: current LOCK → controlled review/change → version berikutnya → Founder Approval → LOCK. Versi lama tidak dihapus.

## 23. Repository Metadata
Document ID DT-GOV-GIT-001-v1.0; path /governance/git/DT-GOV-GIT-001/; category Governance / Repository / Version Control; upstream DT-GOV-IDREG-001-v1.0; downstream Knowledge Base / RAG Governance; benchmark PP-2026-001–004.

## 24. Founder Revalidation Gate
Original byte-exact canonical artifact tidak berhasil dipulihkan. File ini adalah Controlled Reconstruction, bukan klaim byte-identical original. Founder Revalidation menetapkan file ini sebagai new canonical baseline v1.0; setelah itu dibuat SHA-256 baseline, PP-2026-005, Integrity Validation, PDF, Executive Visual Board, Repository Package, dan Registry update.

## Corrective Control
**No Approval Without Persisted Canonical Candidate.**

After approval: **Immediate immutable snapshot → SHA-256 → preservation before downstream transformation.**

## Internal Consistency Check
- 24-section architecture: PASS
- Canonical ID compatibility: PASS
- Golden Pipeline compatibility: PASS
- LOCK protection: PASS
- Rollback model: PASS
- Knowledge Base compatibility: PASS
- RAG traceability: PASS
- Pilot-minimum scope: PASS
- Founder authority preservation: PASS
- Reconstruction provenance disclosure: PASS

**CURRENT STATUS: REVALIDATED — CANONICAL BASELINE — LOCK**

## Revalidation Record
- **Founder Revalidation:** OK
- **Canonical Baseline Established:** 11 August 2026
- **Status:** LOCK
- **Original Byte-Exact Artifact:** NOT RECOVERED
- **Controlled Reconstruction:** ACCEPTED AS NEW CANONICAL BASELINE
- **Provenance:** Preserved. This baseline is not represented as byte-identical to the unrecovered original.