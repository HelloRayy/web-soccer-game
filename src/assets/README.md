# Folder Assets Project (Figma Assets)

Tempat menyimpan asset gambar & grafik hasil ekspor dari Figma:

- **`src/assets/`**: Digunakan untuk asset yang di-import langsung di dalam komponen React (misal: `.svg`, `.png`, `.jpg`).
- **`public/assets/`**: Digunakan untuk asset statis yang dipanggil via URL langsung (misal: `/assets/sprite.png`).

---

### Cara Ekspor dari Figma:
1. Pilih elemen/layer di Figma (misal Karakter, Lapangan, Bola, atau HUD Icon).
2. Di panel kanan (Export), pilih format **SVG** (untuk vektor) atau **PNG** (2x / 3x untuk rasio tajam).
3. Simpan file hasil ekspor ke dalam folder ini.
