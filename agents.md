# Panduan dan Aturan AI Agent (Goal Clash Repository)

Dokumen ini berisi aturan operasional wajib bagi seluruh AI coding assistant / agent yang bekerja di dalam repositori ini.

---

## 1. Aturan Wajib: Git Pull Pertama Kali (Mandatory Initial Pull)

Sebelum melakukan eksplorasi kode, refactoring, perbaikan bug, atau implementasi fitur apa pun:

**AI Agent WAJIB mengeksekusi `git pull origin main` terlebih dahulu di awal setiap tugas.**

### Alasan & Tujuan:
1. Mencegah terjadinya konflik merge (*merge conflicts*) akibat perbedaan commit antara branch lokal dan remote repository.
2. Memastikan seluruh dependensi, asset, dan kode basis yang dianalisis selalu merefleksikan commit terbaru dari `origin/main`.
3. Menghindari overwrite atau penimpaan tidak sengaja terhadap pekerjaan yang baru saja diselesaikan.

### Prosedur Penanganan Workspace Kotor:
Jika perintah `git pull origin main` terhambat oleh perubahan lokal yang belum di-commit (misalnya artifact build di `dist/`):
1. Periksa file yang terkena dampak dengan `git status`.
2. Jika hanya file output build statis (`dist/`), bersihkan dengan `git restore dist/`.
3. Jalankan kembali `git pull origin main` hingga status repositori `up to date`.

---

## 2. Aturan Verifikasi & Selesai Tugas (Verification & Delivery)

1. **Verifikasi Tipe & Build**:
   - Selalu jalankan `npm run check-types` atau `npm run build` untuk memastikan tidak ada kesalahan kompilasi TypeScript sebelum menyelesaikan pekerjaan.
2. **Komitmen & Push**:
   - Setelah pekerjaan terverifikasi bebas error, jalankan:
     1. `git add .`
     2. `git commit -m "<deskripsi commit yang jelas>"`
     3. `git push`
