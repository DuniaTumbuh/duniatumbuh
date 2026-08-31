# DT-GOV-KBRAG-001-v1.0
## Dunia Tumbuh — Minimum Viable Knowledge Base & RAG Standard v1.0

### Document Control
- **Document ID:** DT-GOV-KBRAG-001-v1.0
- **Project:** Dunia Tumbuh
- **Class:** Governance / Knowledge / AI
- **Status:** APPROVED — LOCK
- **Scope:** Minimum Viable Knowledge Base + RAG required before Production Readiness / Pilot Nimo
- **Upstream:** DT-STD-AHS-v1.0; DT-GOV-IDREG-001-v1.0; DT-GOV-GIT-001-v1.0
- **Founder Approval:** APPROVED OK — 11 August 2026
- **Immutable Payload:** ESTABLISHED
- **Purpose of this file:** Concrete Gate 3 Master Markdown candidate for Founder Review.

## Table of Contents
1. Purpose
2. Scope and Non-Goals
3. Authority and Source Precedence
4. Knowledge Base Eligibility
5. Canonical Knowledge Record
6. Metadata Schema
7. Ingestion Pipeline
8. Chunking Standard
9. Retrieval Pipeline
10. RAG Grounding Rules
11. Source Attribution
12. Version and LOCK Awareness
13. Conflict Resolution
14. Abstention / STOP Rules
15. Retrieval Quality Controls
16. Golden Evaluation Set
17. Anti-Hallucination Evaluation
18. Pilot Nimo Knowledge Pack
19. Security and Access Minimum
20. Logging and Provenance
21. Token / Context Budgeting
22. Failure and Recovery
23. PASS / FAIL Criteria
24. Gate 3 Definition of Done
25. Repository Metadata
26. Review / Approval / LOCK Procedure
27. Glossary

## 1. Purpose
Membentuk knowledge layer minimum Dunia Tumbuh agar AI mengambil pengetahuan dari controlled canonical sources, bukan merekonstruksi keputusan dari chat history. RAG harus meningkatkan groundedness, traceability, version awareness, dan efisiensi context/token tanpa menggantikan Founder Authority atau governance LOCK.

## 2. Scope and Non-Goals
Gate 3 mencakup struktur Knowledge Base, metadata, ingestion, chunking, retrieval, grounding, attribution, conflict/STOP behavior, evaluation, dan Pilot Nimo knowledge readiness.

Gate 3 **tidak mensyaratkan** MCP, A2A, multi-agent ecosystem, enterprise vector infrastructure, advanced automation, full DAM, atau enterprise observability sebagai blocker Pilot.

## 3. Authority and Source Precedence
Urutan sumber:
1. Latest applicable **LOCKED Master Markdown**
2. Approved canonical structured record yang diturunkan dari LOCK source
3. Official PDF derivative
4. Executive Visual Board / summary derivative
5. Working draft
6. Chat history

Jika derivative bertentangan dengan LOCKED Master Markdown, Master Markdown menang. RAG tidak boleh mengubah hierarchy ini.

## 4. Knowledge Base Eligibility
Sebuah source hanya boleh masuk normative Knowledge Base jika minimal:
- memiliki Canonical ID;
- version diketahui;
- lifecycle/status diketahui;
- source path diketahui;
- provenance diketahui;
- tidak mempunyai unresolved material conflict;
- untuk normative governance/standard: status LOCK atau explicitly approved-applicable.

Draft dapat diindeks hanya bila dipisahkan sebagai non-authoritative working knowledge.

## 5. Canonical Knowledge Record
Satu knowledge record harus dapat ditelusuri kembali ke satu canonical source dan locator tertentu. Knowledge Base bukan tempat menciptakan identitas baru.

## 6. Metadata Schema
Metadata minimum:
```yaml
canonical_id:
version:
status:
title:
knowledge_category:
source_path:
source_sha256:
section_locator:
chunk_id:
approval_id:
effective_date:
supersedes:
related_ids:
authority_rank:
ingested_at:
```

`chunk_id` adalah technical retrieval identifier dan tidak menggantikan Canonical ID.

## 7. Ingestion Pipeline
**Discover → Eligibility Check → Integrity/Version Check → Parse → Chunk → Attach Metadata → Index → Retrieval Test → Publish to KB.**

Source yang gagal eligibility tidak dipromosikan sebagai normative knowledge.

## 8. Chunking Standard
Chunking mengikuti semantic boundaries: BAB/section/pasal/subsection lebih diprioritaskan daripada pemotongan token arbitrer.

Setiap chunk wajib membawa Canonical ID, version, status, source path, section locator, dan authority rank. Chunk tidak boleh memutus exception/constraint penting dari rule yang dirujuk.

## 9. Retrieval Pipeline
**User/Agent Query → intent normalization → metadata filtering → semantic/keyword retrieval → authority ranking → conflict check → context assembly → model answer → source attribution.**

Metadata filtering untuk LOCK/version harus dilakukan sebelum atau bersama semantic ranking; similarity score tidak boleh mengalahkan authority.

## 10. RAG Grounding Rules
AI harus menjawab dari retrieved canonical evidence bila pertanyaan berada dalam domain governed Dunia Tumbuh. AI tidak boleh mengisi missing policy/decision dengan tebakan.

Retrieval yang relevan tetapi tidak authoritative harus diberi status yang jelas.

## 11. Source Attribution
Jawaban governed harus dapat menunjukkan minimal:
**Canonical ID + version + section/locator**.

Untuk internal machine trace, source path dan chunk ID juga disimpan.

## 12. Version and LOCK Awareness
Jika v1.0 LOCK telah superseded oleh v1.1 LOCK, retrieval normative menggunakan latest applicable version kecuali user meminta historical state.

LOCK tidak boleh dikalahkan draft yang lebih baru hanya karena semantic similarity lebih tinggi.

## 13. Conflict Resolution
Jika dua source authoritative tampak bertentangan:
1. cek applicability/effective date;
2. cek supersession;
3. cek authority rank;
4. bila tetap unresolved → **CONFLICT FLAG**;
5. jangan merge substansi secara spekulatif.

## 14. Abstention / STOP Rules
AI wajib STOP/abstain ketika:
- tidak ada sufficient canonical evidence;
- source integrity tidak dapat diverifikasi ketika diwajibkan;
- material conflict unresolved;
- requested decision memerlukan Founder Approval;
- retrieval hanya menemukan draft untuk pertanyaan normative.

Format behavior: **INSUFFICIENT CANONICAL EVIDENCE / CONFLICT / APPROVAL REQUIRED**, disertai source yang ditemukan bila ada.

## 15. Retrieval Quality Controls
Minimum QC:
- correct Canonical ID;
- correct version;
- correct authority;
- correct section;
- no superseded-source leakage;
- no unsupported synthesis;
- source attribution present.

## 16. Golden Evaluation Set
Gate 3 menggunakan controlled evaluation set yang mencakup minimal kategori:
- canonical ID lookup;
- LOCK vs draft precedence;
- latest-version selection;
- historical-version request;
- exact section retrieval;
- conflicting-source detection;
- insufficient-evidence abstention;
- Founder-approval boundary;
- character/production knowledge retrieval;
- source attribution.

Evaluation set menjadi baseline yang dapat diperbesar setelah Pilot.

## 17. Anti-Hallucination Evaluation
KPI minimum:
- **Canonical Source Compliance**
- **Source Attribution Accuracy**
- **Version/LOCK Accuracy**
- **Unsupported Claim Rate**
- **Conflict Detection Accuracy**
- **Correct Abstention Rate**

Gate 3 tidak mengklaim hallucination rate absolut sebelum benchmark dijalankan pada implementation/runtime.

## 18. Pilot Nimo Knowledge Pack
Minimum knowledge pack sebelum Pilot Nimo:
- applicable production identity/standards;
- anti-hallucination and QC rules;
- Canonical ID / repository rules;
- approved Nimo character identity and constraints;
- approved Pilot Episode 1 story/production source;
- relevant visual/voice/style references yang sudah approved;
- production prompt/context sources yang sudah controlled.

Tidak ada item yang boleh dianggap available hanya karena pernah dibahas di chat; source harus materialized/eligible.

## 19. Security and Access Minimum
- least privilege;
- read/write separation bila memungkinkan;
- secrets tidak masuk knowledge corpus;
- sensitive operational credentials tidak di-embed;
- ingestion source allowlist;
- destructive re-index/rebuild traceable.

## 20. Logging and Provenance
Minimum retrieval log untuk evaluasi/debug:
query/request ID, timestamp, retrieved Canonical IDs, versions, locators, retrieval score/rank, final sources used, outcome PASS/STOP/CONFLICT.

## 21. Token / Context Budgeting
RAG harus mengirim **minimum sufficient authoritative context**, bukan seluruh dokumen/chat. Retrieval mengutamakan relevance + authority + completeness of governing rule.

Tujuan: mengurangi rewind, context pollution, dan token cost tanpa mengorbankan substansi.

## 22. Failure and Recovery
Jika index/vector layer rusak, canonical repository tetap SSOT. Index dapat dibangun ulang dari canonical sources + metadata. Knowledge index bukan satu-satunya copy dari source.

## 23. PASS / FAIL Criteria
**PASS** bila retrieval dapat memilih canonical applicable source, mempertahankan version/LOCK, memberi attribution, mendeteksi conflict, dan abstain saat evidence tidak cukup.

**FAIL** bila RAG mengutamakan draft/superseded source, kehilangan attribution, menciptakan policy yang tidak ada, mengabaikan conflict, atau menjadikan index sebagai source yang tidak dapat ditelusuri.

## 24. Gate 3 Definition of Done
Gate 3 hanya dapat dinyatakan CLOSED jika:
- Master Markdown approved/LOCK;
- SHA-256 canonical baseline tersedia;
- Production Package + Integrity Validation PASS;
- PDF + Executive Visual Board + Repository Package selesai;
- KB schema/metadata/ingestion/chunking/retrieval rules selesai;
- Golden Evaluation Set tersedia;
- evaluation evidence untuk minimum implementation tersedia;
- Pilot Nimo Knowledge Pack eligibility diperiksa;
- Canonical Registry diperbarui.

**Dokumen desain saja tidak cukup untuk menyatakan RAG OPERATIONAL.**

## 25. Repository Metadata
- **Proposed Repository Path:** `/governance/knowledge-rag/DT-GOV-KBRAG-001/`
- **Knowledge Category:** Governance / Knowledge Base / RAG
- **Upstream IDs:** DT-STD-AHS-v1.0; DT-GOV-IDREG-001-v1.0; DT-GOV-GIT-001-v1.0
- **Downstream:** Production Readiness / Pilot Nimo
- **Proposed Production Package:** PP-2026-006

## 26. Review / Approval / LOCK Procedure
**Review Candidate → Founder Review → corrections if any → Founder Approval → persisted canonical candidate → immediate immutable snapshot → SHA-256 → LOCK → PP-2026-006 → DT-001 Integrity Validation.**

No Approval Without Persisted Canonical Candidate.

## 27. Glossary
- **Knowledge Base (KB):** controlled collection of eligible knowledge sources/records.
- **RAG:** Retrieval-Augmented Generation; retrieval of relevant evidence before generation.
- **Embedding:** numerical representation used for semantic similarity.
- **Vector Index:** retrieval index over embeddings; derivative index, not SSOT.
- **Chunk:** retrievable section of a source with provenance metadata.
- **Grounding:** constraining output to retrieved evidence.
- **Attribution:** identification of source supporting an answer.
- **Abstention:** intentional refusal to invent an answer when evidence is insufficient.
- **SSOT:** Single Source of Truth.
- **Canonical ID:** controlled unique identity used across systems.
- **LOCK:** approved immutable governance state until controlled supersession.
- **Golden Evaluation Set:** curated test cases with expected evidence/behavior.

## Internal Consistency Check
- Canonical ID integration: PASS
- Repository hierarchy compatibility: PASS
- LOCK/version precedence: PASS
- Anti-hallucination behavior: PASS
- Retrieval traceability: PASS
- Token-budget principle: PASS
- Pilot-minimum scope control: PASS
- Founder authority preservation: PASS

## Current Gate
**APPROVED — CANONICAL BASELINE — LOCK**

## Approval Record
- **Founder Review:** REVIEW OK
- **Founder Approval:** APPROVED OK
- **Approval Date:** 11 August 2026
- **Canonical State:** LOCK
- **Persist-before-approval control:** SATISFIED — reviewed candidate was persisted before approval.