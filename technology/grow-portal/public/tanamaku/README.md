# DT-TANAM-AKU-WEB-001 v0.1

Production candidate for `https://duniatumbuh.com/tanamaku`.

## Locked product architecture
Interactive 2D mobile web experience. This is separate from `/ar/tomat` (3D/WebAR tomato).

## Canonical visual identity
The 10 vegetable PNGs under `assets/` are copied byte-for-byte from the Owner-provided, already-cropped files. Do not redraw/reinterpret them with AI.

Included: Mentimun, Wortel Kuroda, Kacang Panjang, Cabai Rawit Merah, Seledri Super, Kangkung Super, Bayam Hijau, Tomat, Terong Ungu, Cabai Merah Besar.
Excluded: Pakcoy, Selada.

## Functional scope
- 10-plant selector
- plant profile
- growth journey
- planting guide
- care guide
- nutrition note
- plant-specific troubleshooting decision menu
- local-only planting-date tracker
- no account, child name, email, photo, analytics or database required
- mobile responsive
- reduced-motion support

## Evidence policy
Growth and harvest timing is shown as a range/general guide, never a guarantee. The copy intentionally separates direct-sow vs nursery guidance and warns that seed quality, media, temperature/light, water and variety affect growth.

Primary evidence baseline reviewed:
- Kementan, Teknologi Budidaya Sayuran (2012)
- Kementan/BSIP, Katalog Hortikultura Tanaman Sayuran (2024)
- Kementan, Budidaya Tanaman Sayuran (BPTP Jambi)
- Kementan, Ayo Berkebun di Pekarangan
- Dinas Pertanian dan Pangan Kota Yogyakarta, Teknik Penyemaian Benih Sayuran
- Kemendikbud, Buku Siswa Budidaya Tanaman Sayur (general harvest timing)

## Deployment
Static hosting is sufficient. Serve this directory at `/tanamaku/`.
Before QR print release:
1. deploy route;
2. open/read-back from mobile;
3. test all 10 selector cards;
4. test local date tracker;
5. scan digital QR;
6. scan one physical print proof.
