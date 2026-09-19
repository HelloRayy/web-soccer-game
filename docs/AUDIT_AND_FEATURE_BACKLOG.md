# Laporan Audit Komprehensif & Spesifikasi Fitur Baru Goal Clash

Dokumen ini merangkum hasil audit arsitektur kode, performa runtime, dan logika gameplay, serta mendefinisikan spesifikasi teknis untuk fitur-fitur baru yang wajib diimplementasikan.

---

## 1. Audit Kualitas Kode & Arsitektur (Code Quality & Architecture Audit)

### 1.1 Performa Runtime & Siklus Render (Kritis)
- **Temuan**:
  - Hook `useGamepad.ts` menjalankan loop `requestAnimationFrame` sendiri dan memanggil `setGamepads` pada setiap frame (60 FPS).
  - Di dalam `GameView.tsx`, loop game `useGameLoop` memanggil `setRadarData` (membuat objek dan array baru melalui `players.map`), `setOffScreenBall`, dan `setActivePlayerData` pada setiap tick 16.6ms.
  - Komponen `HUDOverlay.tsx` me-render Radar Mini-Map menggunakan elemen DOM SVG yang di-diff dan di-rekonsiliasi oleh React 60 kali per detik.
- **Dampak**: Virtual DOM mengalami thrashing hebat, memicu Garbage Collection (GC) konstan dan penurunan frame-rate (micro-stutter) saat pertandingan berlangsung.
- **Solusi Rekayasa**:
  - Polling input gamepad harus dibaca secara sinkron di dalam loop game tanpa memicu `setState` React.
  - Render radar mini-map dialihkan langsung ke Canvas 2D terpisah atau di-throttle maksimal 10-15 FPS.

### 1.2 Masalah God-Object & File Monolitik
- **Temuan**:
  - `Player.ts` (1.432 baris) memegang lebih dari 50 properti dan menggabungkan logika fisika, deteksi tombol input, mesin status AI, pemancaran partikel, mekanik skill (Cruyff turn, volley, diving), serta perintah gambar kanvas (speech bubble, health bar).
  - `GameView.tsx` (858 baris) menggabungkan siklus kanvas, kamera dinamis, polling input, sinkronisasi WebRTC, wasit, audio, partikel, dan state React.
  - Ketergantungan sirkular yang ketat antara `Player`, `Ball`, `Field`, dan `TacticalAI`.
- **Solusi Rekayasa**:
  - Dekomposisi `Player.ts` menjadi modul-modul terpisah (`PlayerPhysics`, `PlayerInput`, `PlayerActions`).
  - Pindahkan seluruh instruksi render langsung ke `PixelSpriteRenderer.ts`.

### 1.3 Canvas Draw-Call Overload pada Lapangan
- **Temuan**:
  - Pada `Field.ts`, rendering penonton stadion mengiterasi 504 karakter penonton (7 tingkat x 72 kolom) per frame. Setiap penonton menghitung fungsi trigonometri `Math.sin` dan menjalankan 4 hingga 8 pemanggilan `ctx.fillRect`.
  - Terjadi lebih dari 3.500 instruksi Canvas 2D per frame hanya untuk latar belakang statis.
- **Solusi Rekayasa**:
  - Render tribun stadion dan penonton dasar sekali ke dalam `OffscreenCanvas` di memori, lalu cukup panggil `ctx.drawImage` satu kali per frame.

### 1.4 Masalah Audio Engine & Kebocoran Memori
- **Temuan**:
  - Metode `startCrowdAmbience()` di `audioService.ts` menghitung buffer pink noise dengan loop 144.000 iterasi di main thread setiap kali dipanggil.
  - Pemanggilan `stopCrowdAmbience()` hanya memanggil `.stop()` tanpa memutuskan sambungan node (`disconnect()`), menyebabkan kebocoran node audio di memori browser.
  - Loop musik menu `startMenuBGM()` menggunakan `window.setInterval(..., 280)` tanpa sinkronisasi timeline Web Audio API (`ctx.currentTime`), rentan drift tempo.
- **Solusi Rekayasa**:
  - Simpan satu instance buffer pink noise yang di-cache di memori.
  - Disconnect node audio saat menghentikan suara.
  - Gunakan penjadwalan timeline audio presisi.

### 1.5 Jaringan WebRTC & Ukuran Bundle Rilis
- **Temuan**:
  - Deteksi IP otomatis pada `networkService.ts` gagal karena browser modern menyembunyikan IP lokal menggunakan mDNS (`.local`) sesuai RFC 8828, sehingga fallback selalu ke `192.168.1.100`.
  - Event listener `window.addEventListener('storage', ...)` pada `peerService.ts` tidak pernah di-remove di metode `destroy()`.
  - File `src/game/AIAgent.ts` merupakan dead code yang sudah digantikan oleh `TacticalAI.ts`.
  - Paket devtools `agentation` masuk ke dalam rilis produksi, membengkakkan bundle hingga `1.104 kB`.
- **Solusi Rekayasa**:
  - Tambahkan input manual IP host pada modal QR.
  - Hapus `AIAgent.ts` dan bersihkan storage listener pada `destroy()`.
  - Terapkan code-splitting rute dan konfigurasi chunking Rollup pada `vite.config.ts`.

---

## 2. Audit Logika & Mekanika Gameplay (Gameplay Logic Audit)

### 2.1 Cacat Kritis: Intersepsi Operan (Passing Lane Interception)
- **Deskripsi Masalah**:
  - Pada `GameView.tsx`, logika penerimaan bola memeriksa `else if (!ball.homingTargetPlayer && !ball.attachedPlayerId)`.
  - Jika tombol umpan ditekan, properti `ball.homingTargetPlayer` terisi. Akibatnya, pemain lawan yang berdiri tepat di jalur bola tidak dapat mengambil bola sama sekali karena kondisi evaluasi bernilai false. Bola meluncur menembus tubuh lawan seperti hantu sampai tiba di kaki rekan setim.
- **Solusi Perbaikan**:
  - Hapus proteksi eksklusif `homingTargetPlayer`.
  - Izinkan pemain mana pun (kawan maupun lawan) yang berada dalam radius jangkauan bola untuk memotong operan (intercept) jika jarak bola ke pemain memenuhi syarat jangkauan fisik.

### 2.2 Cacat Kritis: Ketinggian Bola 3D (Altitude Snapping Bug)
- **Deskripsi Masalah**:
  - Jarak penerimaan bola hanya diperhitungkan dalam koordinat 2D (`Math.hypot(dx, dy)`). Ketinggian bola (`ball.z`) sama sekali tidak diverifikasi.
  - Jika bola melambung tinggi (misalnya umpan chip atau sundulan setinggi 50px di udara), pemain yang berdiri di bawah bayangan bola akan langsung menyedot bola ke tanah secara instan (`z = 0`).
- **Solusi Perbaikan**:
  - Batasi kontrol bola kaki hanya bila `ball.z <= 12`. Jika `ball.z > 12` dan `<= 26`, hanya aksi sundulan (header) atau tendangan voli (volley) yang diizinkan berinteraksi dengan bola.

### 2.3 Akurasi Tembakan & Meteran Daya
- **Deskripsi Masalah**:
  - Tembakan darat dan roket memiliki akurasi 100% tanpa sebaran error. Jika stik analog tidak disentuh, tembakan otomatis membidik titik tengah garis gawang secara mutlak.
  - Sundulan dan tendangan voli udara tidak membaca arah stik sama sekali, selalu otomatis terarah ke titik tengah gawang lawan.
  - Meteran daya berosilasi bolak-balik (0% ke 100% lalu turun lagi) seperti permainan golf, bertentangan dengan standar game sepak bola arcade di mana menahan tombol meningkatkan daya hingga batas maksimal (overhit).
- **Solusi Perbaikan**:
  - Tambahkan toleransi sebaran arah (angle spray) berdasarkan durasi pengisian daya dan posisi pemain saat menendang.
  - Izinkan stik analog mengarahkan sundulan dan tendangan voli ke sudut tiang gawang yang diinginkan pemain.

### 2.4 Batas Lapangan Tanpa Peraturan (Pinball Arena Walls)
- **Deskripsi Masalah**:
  - Garis tepi lapangan memantulkan bola seperti dinding meja hoki udara atau arena futsal kandang besi.
  - Tidak ada lemparan ke dalam (throw-in), tendangan gawang (goal kick), tendangan sudut (corner kick), maupun sistem pelanggaran/kartu.
- **Solusi Perbaikan**:
  - Secara bertahap integrasikan aturan bola keluar lapangan dan restart permainan (kick-in / corner / goal kick).

---

## 3. Spesifikasi Fitur Baru & Perbaikan Wajib (New Feature Specifications)

### 3.1 Sistem Pemilihan Controller Eksklusif (Controller Mutual Exclusion & Warning)
- **Kebutuhan**:
  - Controller yang sudah dipilih oleh satu pemain/tim tidak boleh dapat dipilih oleh pemain/tim lain.
  - Contoh kasus: Jika Tim Home telah memilih `Keyboard 1 (WASD)` atau `Keyboard 2 (Arrow)`, maka opsi tersebut harus dinonaktifkan (disabled) pada daftar pilihan Tim Away.
- **Spesifikasi Antarmuka & UX**:
  - Status controller pada modal seleksi:
    - Opsi yang sudah terpasang di tim lawan diberi tanda visual jelas: label teks `SEDANG DIGUNAKAN LAWAN`, warna redup/abu-abu, dan atribut `disabled`.
    - Jika pengguna mencoba mengklik controller yang sedang dipakai, tampilkan banner peringatan interaktif (Warning Toast):
      `Controller ini sudah digunakan oleh [Tim Home / Tim Away]! Silakan pilih controller lain atau ubah pengaturan tim lawan.`
  - Validasi Start Match:
    - Tombol mulai pertandingan tidak dapat ditekan jika terdapat konflik controller ganda atau salah satu tim belum memiliki pengendali yang valid.

### 3.2 Sistem Instant Goal Replay Otomatis (Automatic Goal Replay)
- **Kebutuhan**:
  - Saat gol terjadi, permainan tidak langsung kembali ke kickoff secara mendadak, melainkan memutar ulang cuplikan gol otomatis dari detik-detik sebelum bola masuk gawang.
- **Arsitektur Teknis**:
  - **Circular Snapshot Buffer**:
    - Engine menyimpan riwayat frame pertandingan selama 4 detik terakhir (~240 frame pada 60 FPS).
    - Data per frame mencakup: posisi X, Y, Z bola, sudut rotasi bola, posisi X, Y setiap pemain, facing angle, dan status aksi (kicking, diving, tackling).
  - **Transisi Replay**:
    - Ketika status wasit mendeteksi gol (`goalScored = true`), engine menghentikan loop pertandingan normal dan beralih ke status `STATE_GOAL_REPLAY`.
    - Kecepatan pemutaran diperlambat (Slow-Motion 0.6x speed).
    - Tampilan HUD menampilkan overlay teks arcade retro: `REPLAY` dengan indikator garis waktu di bagian atas layar.
    - Kamera secara dinamis berfokus pada lintasan bola dan pemain penendang gol.
  - **Kontrol Pengguna**:
    - Pemain dapat menekan tombol aksi (Space / Enter / Button A gamepad) untuk melakukan `SKIP REPLAY` dan langsung menuju layar perayaan / kickoff.

### 3.3 Pembersihan & Penghapusan Popup Overlay (Remove Popup Clutter)
- **Kebutuhan**:
  - Hilangkan modal dan banner popup berlebih yang mengganggu visibilitas lapangan pertandingan.
  - Reduksi tumpukan banner callout arcade yang menutupi bagian atas gawang.
- **Spesifikasi Pembersihan**:
  - Nonaktifkan modal overlay yang tidak relevan selama gameplay aktif.
  - Batasi notifikasi HUD hanya pada elemen krusial: papan skor minimalis, waktu pertandingan, dan indikator peluit wasit.
  - Seluruh jendela modal (seperti QR code, controller setting) hanya boleh muncul saat permainan dalam keadaan dijeda (Pause) atau di layar lobi.

### 3.4 Penyempurnaan Sistem Audio (Audio Feedback Overhaul)
- **Kebutuhan**:
  - Perbesar dan pertegas efek suara saat melakukan passing.
  - Rombak total audio pencetak gol yang terdengar tidak wajar/aneh.
- **Spesifikasi Perbaikan Audio**:
  - **Passing SFX**:
    - Tingkatkan gain volume tendangan umpan dari `0.6` menjadi `0.95`.
    - Tambahkan frekuensi transien rendah (punchy thud 90Hz) untuk memberikan sensasi hantaman sepatu ke bola yang padat dan renyah di telinga.
  - **Goal Celebration SFX**:
    - Hapus klakson sawtooth frekuensi F3/A3 statis yang terdengar sumbang.
    - Ganti dengan aransemen audio stadion megah:
      1. Klakson stadion harmoni ganda berdaya tinggi (Stadium Foghorn).
      2. Ledakan sub-bass berdengung lembut (Sub-Drop Boom 45Hz).
      3. Sorakan penonton stadion yang melonjak drastis (Crowd Roar Crescendo) secara simultan dengan gema peluit wasit panjang.

---

## 4. Daftar Tugas Pengembang (Action Checklist for Developers)

- [ ] **Task 1 (Controller Mutual Exclusion)**: Implementasikan validasi bentrok controller di `ControllerSelectModal.tsx` dan `LobbyView.tsx` dengan warning banner jika controller sudah terpilih oleh tim lawan.
- [ ] **Task 2 (Passing Interception & 3D Altitude Fix)**: Hapus proteksi `homingTargetPlayer` di `GameView.tsx` agar lawan bisa memotong jalur operan, serta batasi kontrol bola hanya bila `ball.z <= 12`.
- [ ] **Task 3 (Goal Replay System)**: Bangun circular frame buffer (240 frame) di game loop dan terapkan playback mode slow-motion saat terjadi gol dengan tombol skip.
- [ ] **Task 4 (UI Clutter Clean-up)**: Hapus seluruh popup yang tidak diperlukan selama pertandingan berlangsung dan sederhanakan overlay HUD.
- [ ] **Task 5 (Audio Synthesis Rework)**: Perbesar volume audio passing dan rombak synthesized horn/crowd surge suara gol di `audioService.ts`.
- [ ] **Task 6 (Codebase Quality & Performance)**: Hapus dead code `AIAgent.ts`, optimasi loop crowd di `Field.ts`, dan pisahkan polling input dari state React.
- [ ] **Task 7 (Build Verification)**: Jalankan `npm run build` dan pastikan zero error TypeScript sebelum commit.
