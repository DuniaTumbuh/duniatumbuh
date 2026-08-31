# Dunia Tumbuh — Canonical ID & Document Registry Standard v1.0

## Document Control
- **Document ID:** DT-GOV-IDREG-001-v1.0
- **Document Name:** Canonical ID & Document Registry Standard
- **Version:** v1.0
- **Status:** APPROVED — LOCK
- **Owner:** Founder Dunia Tumbuh
- **Source Workspace:** DT-002 Production Studio
- **Target Governance Layer:** Repository / Git / Knowledge / RAG
- **Benchmark:** PP-2026-001 through PP-2026-003 Golden Path
- **Approval:** FOUNDER APPROVED — 09 August 2026
- **Effective Date:** 09 August 2026

## Table of Contents
1. Purpose
2. Objectives
3. Scope
4. ID Classes
5. Canonical Document ID Pattern
6. Identity vs Version
7. Legacy ID Preservation
8. Related Identifier Types
9. Registry as Master Index
10. Numbering Administration
11. Lifecycle Status
12. Repository Path Convention
13. Cross-System Synchronization
14. Hierarchical Internal Addressing
15. File Naming
16. Integrity & Checksum
17. Collision & Duplicate Control
18. Supersession & Archive
19. AI / RAG Retrieval Rule
20. Token Budgeting Principle
21. Change Control
22. Governance Rules
23. PASS Criteria
24. FAIL Criteria
25. Initial Registry Baseline
26. Repository Metadata
27. Internal Consistency Check
28. Final Approval Status

## Glossary / Terms (Explanatory, Non-Normative)
| Term | Explanation |
|---|---|
| Git | Distributed version-control system used to track file/code changes, history, branches, and rollback. |
| GitHub | Repository platform commonly used with Git for source, documentation, collaboration, and audit history. |
| RAG | Retrieval-Augmented Generation; AI retrieves relevant controlled knowledge before generating an answer. |
| PRD | Product Requirements Document; controlled document describing product/feature goals, requirements, constraints, and acceptance criteria. |
| SSOT | Single Source of Truth; authoritative source used when multiple information sources exist. |
| SHA-256 | Cryptographic hash algorithm used as a byte-level integrity fingerprint for a declared file/payload scope. |
| Repository | Structured storage location for controlled files, metadata, history, and related artifacts. |
| Knowledge Base | Structured collection of controlled knowledge used by humans, automation, and AI retrieval. |
| Canonical ID | Unique controlled identifier used to refer to the same asset consistently across systems. |
| Production Package | Immutable delivery package carrying a LOCKED source document plus metadata/governance. |
| Immutable Payload | Substantive source content that must not be silently rewritten during transformation. |
| Legacy ID | Existing valid identifier preserved because it already participates in an approval/audit chain. |

## 1. Purpose
Menetapkan satu sistem identitas canonical untuk dokumen dan aset Dunia Tumbuh agar setiap aset dapat dikenali, dilacak, disinkronkan, dicari, divalidasi, dan direferensikan secara konsisten di seluruh sistem.

Prinsip utama:

> **One Asset → One Canonical ID → One Controlled Version → Used Everywhere**

## 2. Objectives
Standard ini bertujuan untuk:
1. mencegah duplikasi dan collision ID;
2. mencegah aset berbeda memakai identitas yang sama;
3. menjaga hubungan antara dokumen, approval, production package, repository, dan aset produksi;
4. menyediakan primary/reference key lintas GitHub, Google Sheets, Apps Script, code/database, Knowledge Base, RAG, dashboard, dan automation;
5. mendukung audit trail, rollback, supersession, dan retrieval;
6. mengurangi kebutuhan rewind chat dengan menyediakan alamat pengetahuan yang permanen;
7. mendukung AI Token Budgeting melalui retrieval yang lebih presisi.

## 3. Scope
Berlaku pada seluruh aset resmi Dunia Tumbuh, termasuk:
- governance documents;
- standards and policies;
- SOP/manual/pedoman;
- PRD;
- Character Bible / Story Bible;
- production assets;
- prompts;
- storyboard;
- images and visual boards;
- episodes;
- approvals and decisions;
- production packages;
- source code and technical artifacts;
- Knowledge Base and RAG records.

## 4. ID Classes

| Code | Class | Example Use |
|---|---|---|
| GOV | Governance | governance standard, registry |
| STD | Standard | production/AI/QC standards |
| POL | Policy | formal policy |
| SOP | SOP | operating procedure |
| MAN | Manual | pedoman/operating manual |
| PRD | Product Requirement | product/feature requirement |
| BIB | Bible | character/story/creative bible |
| SEC | Security | cybersecurity controls |
| AI | AI System | AI architecture/control |
| PROD | Production Asset | production artifact |
| AST | General Asset | reusable digital asset |
| PRM | Prompt | controlled prompt |
| EPI | Episode | episode identity |
| DEC | Decision | controlled decision record |

Existing dedicated governance identifiers such as `EA-xxx` and `PP-xxxx-xxx` remain valid identifiers for their own classes.

## 5. Canonical Document ID Pattern

Recommended pattern for new controlled documents:

`DT-{CLASS}-{SUBJECT}-{SEQ}-v{MAJOR.MINOR}`

Example:

`DT-GOV-IDREG-001-v1.0`

Components:
- `DT` = Dunia Tumbuh namespace.
- `CLASS` = controlled asset/document class.
- `SUBJECT` = short stable subject code.
- `SEQ` = zero-padded sequential number.
- `vX.Y` = controlled version.

The sequential number is unique within its defined class/subject namespace and must never be reassigned to a different asset.

## 6. Identity vs Version
The **asset identity** and **asset version** are logically separate.

Example:
- Asset identity: `DT-GOV-IDREG-001`
- Version: `v1.0`
- Full controlled reference: `DT-GOV-IDREG-001-v1.0`

A version update does not create an unrelated asset. It creates a new controlled version of the same canonical asset.

## 7. Legacy ID Preservation
Existing LOCKED IDs are not silently renamed.

Current examples:
- `DT-STD-PI-v1.0`
- `DT-STD-AHS-v1.0`
- `DT-STD-EQC-v1.0`

These remain valid canonical legacy references because they already participate in approval, SHA-256, Production Package, and repository chain-of-custody.

Any future normalization requires:
1. explicit migration mapping;
2. old ID preserved as alias;
3. new ID recorded;
4. approval/reference chain preserved;
5. no modification of historical checksum evidence.

## 8. Related Identifier Types
The following IDs must remain distinct:

- **Document ID** — identity of controlled document.
- **Approval ID** — identity of Founder/executive approval.
- **Production Package ID** — identity of immutable delivery package.
- **Asset ID** — identity of a production/digital asset.
- **Prompt ID** — identity of a controlled prompt.
- **Episode ID** — identity of an episode.
- **Decision ID** — identity of a controlled decision.

They may reference each other but must not be substituted for one another.

Example relationship:

`DT-STD-EQC-v1.0 ← EA-006 ← PP-2026-003`

## 9. Registry as Master Index
The Canonical Registry is the master index for identity and relationship data.

Minimum fields:

| Field | Requirement |
|---|---|
| canonical_id | REQUIRED |
| base_asset_id | REQUIRED |
| version | REQUIRED |
| title | REQUIRED |
| class | REQUIRED |
| status | REQUIRED |
| owner | REQUIRED |
| approval_id | WHEN APPLICABLE |
| production_package_id | WHEN APPLICABLE |
| repository_path | REQUIRED FOR CONTROLLED ASSET |
| sha256 | REQUIRED WHEN FINGERPRINTED |
| related_ids | WHEN APPLICABLE |
| supersedes | WHEN APPLICABLE |
| superseded_by | WHEN APPLICABLE |
| legacy_alias | WHEN APPLICABLE |
| knowledge_category | WHEN APPLICABLE |
| rag_status | WHEN APPLICABLE |

## 10. Numbering Administration
1. IDs are issued from the Canonical Registry.
2. An issued ID is never reused for another asset.
3. Cancelled/retired IDs remain reserved.
4. Duplicate IDs are prohibited.
5. Number allocation must be atomic when automation is introduced.
6. Draft assets may receive IDs before approval; approval changes status, not identity.
7. Version changes use version control and do not recycle sequence numbers.
8. Human-readable title changes do not automatically change canonical identity.

## 11. Lifecycle Status
Controlled lifecycle:

`DRAFT → REVIEW → APPROVED → LOCK → SUPERSEDED / ARCHIVED`

Additional operational states may exist (e.g. HOLD), but they must not erase the canonical lifecycle history.

## 12. Repository Path Convention
A controlled asset must map to a stable repository location.

Recommended structure:

`/{class}/{subject}/{canonical-base-id}/`

Example:

`/governance/id-registry/DT-GOV-IDREG-001/`

Versioned files live inside the canonical asset location and retain their full controlled reference.

## 13. Cross-System Synchronization
The same Canonical ID must be used as the reference key across supported systems.

### GitHub
- folder/file metadata;
- manifest;
- commit references;
- release/tag metadata where applicable.

### Google Sheets
- primary/reference key column: `canonical_id`.

### Google Apps Script
- object lookup/reference key: `canonical_id`.

### Code / Database / API
Recommended field:

`canonical_id`

### Knowledge Base
Each controlled knowledge record stores canonical ID, version, status, and source path.

### RAG
Each chunk inherits at minimum:
- canonical_id;
- version;
- status;
- source document;
- section locator;
- repository/source reference.

### Dashboard / Automation
All events and status changes reference the same canonical ID.

## 14. Hierarchical Internal Addressing
Long-form governance/manual documents may use internal structural locators:

`BOOK → CHAPTER → SECTION → ARTICLE → PARAGRAPH`

Example controlled citation:

`DT-MAN-PEDOMAN-001-v1.0 / BOOK VI / CHAPTER III / Article 27 / Paragraph (2)`

For Indonesian legal/governance presentation this may render as:

`BUKU VI / BAB III / Pasal 27 / Ayat (2)`

The Canonical ID identifies the document; the structural locator identifies the precise internal provision.

## 15. File Naming
Derivative files should retain the canonical controlled reference.

Examples:
- `DT-GOV-IDREG-001-v1.0.md`
- `DT-GOV-IDREG-001-v1.0_Executive.pdf`
- `DT-GOV-IDREG-001-v1.0_Executive_Visual_Board.png`
- `DT-GOV-IDREG-001-v1.0_Repository_Package.zip`

Production Package retains its own Package ID and references the source Document ID.

## 16. Integrity & Checksum
Where SHA-256 is used:
- hash scope must be declared;
- expected and actual hash must be comparable;
- historical hash evidence must not be overwritten;
- a changed payload requires a new controlled version or approved change process.

Checksum does not replace governance approval; it proves byte-level integrity for the declared scope.

## 17. Collision & Duplicate Control
If a proposed ID already exists:
1. STOP issuance;
2. compare registry record;
3. determine whether it is the same asset/version;
4. if different, allocate a new sequence;
5. record incident if collision has propagated to other systems.

AI must never invent a replacement ID silently.

## 18. Supersession & Archive
A superseded document remains retrievable.

Registry must record:
- previous version/ID;
- successor;
- effective status;
- reason/reference for supersession.

RAG and Knowledge Base should prioritize latest `LOCK` source while preserving historical records for audit.

## 19. AI / RAG Retrieval Rule
AI must prefer:
1. exact canonical ID when supplied;
2. latest LOCK version for operational use;
3. precise internal locator when available;
4. canonical Master Markdown as substantive source.

Executive Visual Board is a summary/memory layer and must not override canonical Master Markdown.

## 20. Token Budgeting Principle
Canonical IDs and structured metadata support token efficiency by enabling targeted retrieval instead of replaying full conversation history.

Expected retrieval pattern:

`Task → Canonical ID / metadata lookup → relevant document/chunk → response`

not:

`Task → entire historical chat rewind → reconstruction → response`

## 21. Change Control
Material changes to this Standard require:
- documented reason;
- impact assessment;
- compatibility/migration consideration;
- Founder Review;
- Founder Approval;
- new controlled version;
- preserved prior version.

## 22. Governance Rules
- No silent ID renaming.
- No ID reuse.
- No duplicate canonical identity.
- No uncontrolled version overwrite.
- No deletion of historical chain-of-custody.
- No RAG citation to an ambiguous/unversioned source when a canonical source exists.
- No derivative artifact may present itself as the canonical substantive source unless designated as such.

## 23. PASS Criteria
PASS when:
- ID is unique;
- class/subject/sequence/version are valid;
- registry entry exists;
- relationships are traceable;
- repository mapping is valid;
- legacy mapping is preserved when applicable;
- no collision exists;
- controlled status is known.

## 24. FAIL Criteria
FAIL when:
- duplicate/reused ID exists;
- version history is overwritten;
- LOCKED ID is silently renamed;
- cross-system IDs conflict;
- repository path points to another asset;
- approval/package relationship is inconsistent;
- canonical source cannot be determined.

## 25. Initial Registry Baseline
Upon approval, the first baseline must register at minimum:
- EA-004 / `DT-STD-PI-v1.0` / PP-2026-001;
- EA-005 / `DT-STD-AHS-v1.0` / PP-2026-002;
- EA-006 / `DT-STD-EQC-v1.0` / PP-2026-003;
- `DT-GOV-IDREG-001-v1.0` itself.

## 26. Repository Metadata
- **Proposed Repository Path:** `/governance/id-registry/DT-GOV-IDREG-001/`
- **Knowledge Category:** Governance / Identity / Repository
- **Tags:** canonical-id, registry, repository, git, knowledge-base, rag, versioning, audit
- **Related Authorities:** EA-009, EA-010
- **Benchmark Packages:** PP-2026-001, PP-2026-002, PP-2026-003

## 27. Internal Consistency Check
- Golden Path compatibility: PASS
- Legacy ID preservation: PASS
- Cross-system mapping: PASS
- Versioning model: PASS
- Registry schema: PASS
- Repository compatibility: PASS
- Knowledge Base/RAG compatibility: PASS
- Founder authority preserved: PASS
- Placeholder review: Approval ID and Effective Date intentionally pending Founder decision.

## 28. Final Approval Status
- Founder Review: PASS
- Founder Approval: APPROVED
- Status: LOCK
- Effective Date: 09 August 2026

This version is the approved canonical substantive source for the Golden Documentation Pipeline.