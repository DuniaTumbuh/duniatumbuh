# DT-DOC-KB-STORAGE-ARCHITECTURE-v0.1
## Documentation, Knowledge Base, Binary Evidence & AI Retrieval Architecture

**Project:** Dunia Tumbuh  
**Status:** DRAFT / FOUNDER REVIEW REQUIRED  
**Date:** 2026-09-05

## 1. Purpose

Create one organized documentation model for Dunia Tumbuh so humans and authorized AI operators can reliably find the correct document, understand which copy is authoritative, retrieve supporting binary evidence, and avoid conflicting versions across GitHub, Google Drive and cloud storage.

## 2. Source-of-Truth Principle

Dunia Tumbuh must not have competing canonical sources.

Recommended authority order:

1. **GitHub canonical repository** — authoritative for Markdown governance, standards, production rules, manifests, indexes, checksums, version metadata and approval state.
2. **Google Drive Dunia Tumbuh** — human-friendly operational document library and collaboration/archive layer for PDFs, review packages, presentations, spreadsheets, reference images and approved working copies.
3. **Cloud/Object Storage** — large binary media and immutable production evidence such as video masters, GLB/FBX packages, high-resolution source images, audio masters and large archives.
4. **Local workstations / chat workspaces** — temporary working locations only; never canonical by themselves.

**Control:** A file existing in Google Drive or cloud does not automatically become canonical. Canonical status is established by the registered version/status and checksum recorded in the GitHub knowledge/index layer.

## 3. Storage by Artifact Type

| Artifact | GitHub | Google Drive | Cloud/Object Storage |
|---|---|---|---|
| Markdown governance/standards | PRIMARY | optional rendered/read-only mirror | no |
| Production learning libraries | PRIMARY | optional PDF/MD mirror | no |
| Assembly maps/checklists | PRIMARY | optional human-readable mirror | no |
| PDF executive records | manifest/link + checksum | PRIMARY human archive | optional |
| PNG/JPEG canonical references | manifest/checksum; small critical refs may be versioned selectively | PRIMARY review/reference library | recommended for master binaries |
| Video masters / long source clips | metadata only | review proxy if useful | PRIMARY |
| GLB/FBX/ZIP production binaries | metadata/checksum only or selective qualified binary | transfer copy if useful | PRIMARY |
| Audio masters | metadata/checksum | review copy | PRIMARY |
| Temporary screenshots/crops | no unless evidence-critical | temporary/review folder | normally no |
| Failed AI generations | evidence register only | selected evidence | only if required for reproducibility |

## 4. Recommended Google Drive Folder Model

```text
Dunia Tumbuh/
  00_GOVERNANCE/
  01_STANDARDS/
  02_CANONICAL_IP/
    NIMO/
    LUMI/
    TUKI/
    MOMO/
  03_PRODUCTION/
    PILOT_EP01_NIMO/
      01_STORY_SCRIPT/
      02_KEYFRAMES/
      03_FLOW_VIDEO/
      04_PORTAL/
      05_AUDIO_VOICE/
      06_ASSEMBLY_QC/
      07_RELEASE/
  04_AR_WEBAR/
  05_EDUCATION/
  06_EXECUTIVE_ARCHIVE/
  90_WORKING_TEMP/
  99_QUARANTINE_UNVERIFIED/
```

Folders describe retrieval purpose, not canonical authority.

## 5. Recommended Cloud/Object Storage Model

Use immutable/versioned object paths where practical:

```text
dt/
  canonical-ip/nimo/
  production/pilot-ep01/source/
  production/pilot-ep01/derived/
  production/pilot-ep01/master/
  ar/beta-001/assets/
  audio/nimo/
  evidence/failures/
```

Large binaries should be accompanied by SHA-256, size, MIME/type, creation date, production status and a GitHub manifest record.

## 6. AI Retrieval Manifest

Create machine-readable indexes in GitHub. Minimum fields:

```yaml
id: DT-ARTIFACT-ID
project: Dunia Tumbuh
workstream: DT-002
artifact_type: markdown|pdf|image|video|audio|3d|archive
status: WORKING|CANDIDATE|APPROVED|LOCKED|REJECTED|EVIDENCE_ONLY
canonical: true|false
version: v1.0
sha256: ...
size_bytes: ...
github_path: ...
drive_file_id: ...
cloud_uri: ...
source_artifact_ids: [...]
approved_by: ...
approved_date: ...
notes: ...
```

AI operators should resolve the manifest before selecting a similarly named asset.

## 7. Google Apps Script Retrieval Layer

Google Apps Script can be useful as a lightweight retrieval/index service for Drive, but should not decide canonical truth by itself.

Recommended pattern:

```text
AI / internal tool
  -> retrieval request by canonical ID
  -> Apps Script index/search endpoint
  -> Drive metadata + file ID discovery
  -> GitHub manifest/status/hash verification
  -> authorized binary/text retrieval
```

Apps Script responsibilities may include:

- search approved Drive folders by canonical ID;
- return file ID, filename, MIME type, modified time and folder location;
- read small text/JSON/Markdown mirrors when authorized;
- expose a controlled manifest/index to internal automation;
- reject `90_WORKING_TEMP` and `99_QUARANTINE_UNVERIFIED` by default;
- never return secrets or unrestricted private child/event data;
- log retrieval requests where appropriate.

## 8. RAG / AI Safety Rules

An AI should prefer:

1. canonical/LOCKED Markdown and manifests;
2. approved exact binary by SHA-256;
3. supporting review/evidence artifact;
4. working files only when explicitly requested.

If multiple files conflict, AI must abstain and report the conflict instead of selecting the newest timestamp automatically.

AI must not treat:

- a recent upload as automatically canonical;
- a Flow/AI derivative as the canonical Nimo Master;
- a PDF mirror as newer than its GitHub canonical source without version proof;
- an unverified Drive copy as production authority.

## 9. Sync Rule

Recommended sync direction:

**GitHub metadata/control -> Drive/Cloud references, not uncontrolled bidirectional overwrite.**

When an approved binary is added to Drive or cloud:

1. calculate SHA-256;
2. assign canonical artifact ID;
3. store binary in approved location;
4. register exact Drive file ID/cloud URI in GitHub manifest;
5. verify read-back;
6. update status only after approval gate.

When Markdown changes:

1. edit on controlled `dt-*` branch;
2. review/read-back;
3. Founder approval if required;
4. merge to `main`;
5. optionally render/mirror PDF to Drive after merge.

## 10. Security / Privacy

- Never store passwords, API keys, service-account secrets or private tokens in GitHub/Drive documents.
- Apps Script secrets belong in appropriate protected properties/secret storage, not source files.
- Child photos/event data must follow DT privacy controls and should not be exposed to broad AI retrieval.
- Use least-privilege sharing on Drive and cloud buckets.
- Keep ACO and Dunia Tumbuh storage, credentials and indexes isolated.

## 11. Current Recommendation

**YES — use Google Drive Dunia Tumbuh in addition to GitHub, but with separated responsibilities.**

GitHub remains the canonical control plane. Google Drive becomes the operational human/document library. Cloud/Object Storage should hold large master binaries. A GitHub manifest connects them using canonical IDs and hashes so Google Apps Script and future AI retrieval can discover the right asset without creating a second source of truth.

## 12. Implementation Gates

- Gate A — Founder approves storage architecture.
- Gate B — Create Drive folder taxonomy and access policy.
- Gate C — Create GitHub artifact-manifest schema/index.
- Gate D — Populate priority canonical assets and verify SHA/read-back.
- Gate E — Build read-only Apps Script retrieval prototype.
- Gate F — RAG/AI retrieval test with conflict and abstention cases.

No Drive/cloud mutation or Apps Script deployment is implied by this draft until separately authorized and technically connected.
