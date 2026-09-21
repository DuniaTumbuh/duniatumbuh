# DT-TANAM-AKU-GAME-001 — IMPLEMENTATION-04 GATE

Status: CONTROLLED UI VERTICAL SLICE ADDED / VISUAL + FUNCTIONAL QC REQUIRED

Scope:
- S01 Benihku
- S03 Tanamanku
- S04 Misi Hari Ini
- S05 Apa yang Kamu Lihat?
- minimal Jurnalku/Kebunku navigation for read-back

Controls:
- Preview exists only under /tanamaku/game/ on controlled branch.
- Existing /tanamaku files are unchanged.
- Existing /ar/tomat is unchanged.
- Tomat uses existing canonical Tanam Aku crop asset.
- Nimo is text-only in this slice; no noncanonical generated mascot is introduced.
- Journey stage remains observation-driven.
- localStorage persistence uses the qualified GAME-001 storage adapter.
- double reward/replay protection remains in the transaction engine.
- no FOOD nutrition claims in GAME-001 UI.

Acceptance before PASS:
1. Desktop visual QC.
2. Mobile visual QC.
3. S01 → S04 → S03 loop.
4. S03 → S04 soil mission → S05 observation → S03.
5. Sprout confirmation changes stage only after observation.
6. Reload preserves stars/journal/stage.
7. Existing /tanamaku regression unchanged.
8. Existing /ar/tomat regression unchanged.

No Railway production, DNS, or main mutation is authorized by this gate.
