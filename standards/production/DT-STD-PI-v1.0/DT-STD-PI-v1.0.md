# Dunia Tumbuh — Production Identity Standard v1.0

## Document Control
- **Document ID:** DT-STD-PI-v1.0
- **Approval ID:** EA-004
- **Version:** v1.0
- **Status:** LOCK
- **Effective Date:** 08 August 2026
- **Owner:** Founder Dunia Tumbuh
- **Source Workspace:** DT-002 Production Studio

## 1. Purpose
Menetapkan kontrol identitas produksi Dunia Tumbuh agar seluruh aset konsisten dengan keputusan Founder, Gold Master, brand identity, character identity, dan sumber resmi yang telah LOCK.

## 2. Scope
Berlaku pada aset visual, karakter, logo/tagline, storyboard, prompt, image/video generation, animasi, dan output produksi lain yang membawa identitas Dunia Tumbuh.

## 3. SSOT / Reference Priority
1. Keputusan Founder.
2. Latest LOCKED Gold Master / SSOT.
3. LOCKED Production Standard.
4. Approved requirement / Storyboard / PRD.
5. Approved asset / prompt.
6. Conversation context.
7. Model knowledge.

Konflik antar-sumber wajib **STOP / FLAG**. AI tidak boleh berimprovisasi.

## 4. Mandatory Identity Contract
Pemeriksaan mencakup logo/tagline resmi, brand color/typography, Character DNA/Gold Master, silhouette/proportion, bentuk kepala/wajah, warna wajah/tubuh, elemen khas, badge/accessories, scarf, tail, palette, dan key visual details.

Untuk Nimo: silhouette/proportion, face-body color, spiral hair/jambul, leaf ears, eyes, badge, scarf, dan tail wajib mengikuti Gold Master.

## 5. Production Identity Gate
1. Identifikasi Asset ID/version.
2. Tentukan Gold Master/SSOT yang berlaku.
3. Verifikasi logo/tagline/brand rules bila relevan.
4. Verifikasi character identity bila relevan.
5. Verifikasi Storyboard/PRD/approved requirement.
6. Generation dapat dimulai.

Mandatory reference hilang atau konflik → generation ditunda.

## 6. PASS / REJECT / REVISION
**PASS:** 100% mandatory identity elements sesuai sumber LOCK.

**REJECT:** identity failure, termasuk silhouette/proportion, face/body color, spiral hair/jambul, leaf ear, eyes, badge, scarf, tail, logo/tagline, atau perubahan identity tanpa otorisasi. Output REJECT tidak boleh menjadi seed/reference berikutnya.

**REVISION:** masalah non-identity seperti pose, expression, camera, lighting, composition, environment, selama identity contract tidak rusak.

## 7. Exception & Change Control
Pengecualian hanya melalui Founder-approved Executive Change Request (ECR): Change ID, reason, affected asset/standard, impact, compatibility, migration, explicit Founder approval.

## 8. Version Control
`DRAFT → REVIEW → APPROVED → LOCKED → SUPERSEDED / ARCHIVED`

Minor change tidak mengubah identity contract. Major identity change memerlukan Founder approval. Versi LOCK tidak ditimpa; versi lama disimpan untuk audit/rollback. Production menggunakan latest approved LOCKED version.

## 9. Governance
AI wajib menggunakan sumber LOCK dan tidak membuat alternatif atau improvisasi terhadap keputusan final. Perubahan logo, tagline, character identity, atau filosofi LOCK memerlukan Founder approval.

## 10. Repository Metadata
- **Repository Path:** `/standards/production/DT-STD-PI-v1.0/`
- **Knowledge Category:** Production Standards
- **Tags:** production, identity, brand, character, gold-master, ssot, governance
- **Related Documents:** EA-005; EA-006; EA-009
- **Supersedes:** None

## 11. Revision History
| Version | Date | Decision | Approval |
|---|---|---|---|
| v1.0 | 08 Aug 2026 | Initial approved release | EA-004 |

## 12. Final Status
**APPROVED — LOCK**

Controlled Master Markdown for packaging under EA-009.