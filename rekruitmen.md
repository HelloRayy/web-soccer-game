# Dokumentasi Rekruitmen Fitur & Perbaikan Bug Game: Goal Clash

Dokumen ini disusun berdasarkan Game Design Document resmi ([docs/GDD.md](file:///home/rayhan/Windows-D/project/web-game-soccer/docs/GDD.md)) dan review visual pengujian game. Dokumen ini menjadi acuan spesifikasi teknis dan daftar tugas bagi seluruh anggota tim pengembang untuk penambahan fitur maupun perbaikan bug.

---

## 1. Identitas Game (Berdasarkan GDD Bagian A - Overview)

- **Judul Resmi Game**: **Goal Clash** (menggantikan nama placeholder `FL 25` / `FC 26`).
- **Platform**: Web Application (HTML5 Canvas 2D + React + TypeScript).
- **Genre**: Sport, Multiplayer (PvP Lokal/Remote & PvBot).
- **Deskripsi Inti**: Game sepak bola 2D realtime di mana pemain mengendalikan karakter untuk merebut bola, menggiring, mengoper, dan mencetak gol ke gawang lawan dalam batas waktu pertandingan.

---

## 2. Perbaikan Visual & Antarmuka Pengguna (GDD Bagian B.3 - UI Design)

### 2.1 Penggantian Branding Menjadi "Goal Clash"
- **Komponen Target**:
  - `src/components/LobbyView.tsx` (Header menu utama).
  - `src/components/SplashScreen.tsx` (Layar cover awal).
  - `index.html` (Title bar peramban).
- **Spesifikasi Kebutuhan**:
  - Hapus teks dan logo placeholder `FL 25`.
  - Pasang logo/teks judul resmi: **Goal Clash** dengan styling modern, bold, dan kontras tinggi sesuai desain antarmuka.
  - Perbarui favicon dan metadata halaman agar konsisten menampilkan **Goal Clash**.

### 2.2 Penghapusan Visual Aiming Arrow / Dashed Line di Lapangan
- **Komponen Target**: `src/components/GameView.tsx` (fungsi `drawPassAimAssist`).
- **Masalah Saat Ini**: Terdapat garis putus-putus (*dashed line*), busur kerucut (*cone*), dan lingkaran target di depan pemain pembawa bola.
- **Spesifikasi Kebutuhan**:
  - Hapus total seluruh render visual panah, cone assist, dan garis putus-putus pada pemain saat membawa bola.
  - Tampilan visual lapangan dan pemain harus bersih (*clean pitch visual*) sesuai referensi mockup gameplay pada GDD tanpa elemen overlay bidikan yang mengganggu.

### 2.3 Penyesuaian Alur & Komponen Layar UI (Sesuai GDD B.3)
- **Main Menu (`LobbyView.tsx`)**:
  - Menyediakan navigasi menu: Kick Off (PvP), Master League (PvBot), Extras & Controls, Settings.
- **Match Mode Select (`MatchModeModal.tsx`)**:
  - Pemilihan jenis pertandingan: Player vs Player (1v1) atau Player vs Bot (2vBot).
- **Controller Select (`ControllerSelectModal.tsx`)**:
  - Pengalokasian peranti pengendali ke sisi Home atau Away (Keyboard WASD, Keyboard Panah, USB Gamepad, HP Remote).
- **Formasi & Posisi (`TeamSelectView.tsx`)**:
  - Penataan posisi node pemain di lapangan sebelum pertandingan dimulai.
- **Score Board HUD (`HUDOverlay.tsx`)**:
  - Penampil skor, timer mundur pertandingan, status jeda (*pause*), dan tombol navigasi kembali ke lobby.
- **Controller Mobile (`MobileControllerView.tsx`)**:
  - Antarmuka stik virtual pada smartphone (d-pad pergerakan + tombol aksi Shoot, Pass, Sprint).

---

## 3. Kontrol Pemain & Mekanika Pertandingan (GDD Bagian B.5 & B.1)

### 3.1 Kontrol & Interaksi Pemain (User Control & Interaction)
- **Pergerakan (Movement)**:
  - Input WASD (P1), Tombol Panah (P2), Analog Joystick Gamepad, dan Virtual D-pad HP Remote.
- **Operan Bola (Pass)**:
  - Tombol aksi untuk umpan pendek mendatar (*short pass*) dan umpan terobosan (*through pass*).
- **Tembakan Gawang (Shoot)**:
  - Tombol aksi tembak dengan pengukur tenaga (*power gauge*) yang proporsional.
- **Lari Cepat (Sprint)**:
  - Akselerasi kecepatan tambahan dengan konsumsi stamina dinamis.

### 3.2 Fisika Lapangan & Perebutan Bola
- **Body Shielding**: Pemain yang menguasai bola mampu melindungi bola dari belakang; rebutan hanya terjadi bila lawan memotong jalur atau melakukan tekel sukses.
- **Collision Physics**: Kontak antar pemain harus memiliki efek dorong fisik tanpa tembus (*no clip*).
- **Goalkeeper Defense**: Kiper bergerak mengamankan area kotak penalti dan merespon arah laju tembakan bola ke gawang.

---

## 4. Integrasi Sistem Audio (GDD Bagian B.6 - Audio Specification)

Sesuai spesifikasi GDD Bagian 6 (Audio), sistem audio wajib mengintegrasikan efek suara berikut:

1. **Musik Menu (Menu BGM)**: Musik latar pada layar Splash, Main Menu, dan Setup Tim.
2. **Efek Tendangan Bola (Kick Ball SFX)**: Efek benturan saat menendang umpan atau menembak ke gawang.
3. **Suara Peluit Wasit (Referee Whistle SFX)**:
   - Peluit pendek saat kickoff babak pertama.
   - Peluit panjang saat gol tercipta.
   - Peluit panjang ganda saat waktu pertandingan berakhir (*full time*).
4. **Sorakan Penonton (Crowd Cheering SFX)**:
   - Suara riuh atmosfer penonton stadion saat permainan berlangsung.
   - Puncak sorakan riuh saat peluang emas atau bola masuk ke dalam gawang.
5. **Suara Gol (Goal Horn / Explosion SFX)**:
   - Efek suara pengumuman gol yang terpicu bersamaan dengan banner perayaan gol di layar.

---

## 5. Kondisi Kemenangan & Alur Game (GDD Bagian B.7 & B.8)

- **Win Condition**: Tim yang mencetak skor gol terbanyak saat durasi waktu pertandingan habis dinyatakan sebagai pemenang (*Winner*).
- **Lose Condition**: Tim dengan skor gol lebih sedikit dinyatakan kalah.
- **Draw Condition**: Jika skor seimbang saat waktu habis, sediakan opsi perpanjangan waktu (*Golden Goal*) atau menu kembali ke lobi utama.

---

## 6. Daftar Tugas Pengembang (Action Checklist for Developers)

- [ ] **Task 1 (UI Branding)**: Ganti seluruh teks dan logo `FL 25` menjadi **Goal Clash** di `src/components/LobbyView.tsx`, `src/components/SplashScreen.tsx`, dan `index.html`.
- [ ] **Task 2 (Visual Clean-up)**: Nonaktifkan pemanggilan `drawPassAimAssist` di `src/components/GameView.tsx` agar garis panah/cone putus-putus hilang dari lapangan.
- [ ] **Task 3 (Audio System)**: Buat modul `src/services/audioService.ts` dan masukkan asset audio peluit, tendangan, sorakan penonton, musik menu, dan suara gol.
- [ ] **Task 4 (Gameplay Verification)**: Uji pertandingan mode PvP dan PvBot untuk memastikan kontrol WASD, Panah, Gamepad, dan HP Remote berjalan lancar.
- [ ] **Task 5 (Quality Gate)**: Pastikan `npm run build` sukses 100% tanpa error TypeScript sebelum perubahan di-commit.
