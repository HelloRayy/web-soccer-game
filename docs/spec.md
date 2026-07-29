# Spec: AI Agent & Match Game Logic (Web Game Soccer)

## 1. Objective
Dokumen spesifikasi ini mendefinisikan logika inti (*Core Game Logic*) untuk game sepak bola berbasis web (Vanilla JS + HTML5 Canvas):
1. **Xbox Controller Input Integration**: Memetakan input gamepad Xbox 360 secara real-time ke kontrol pemain (Pergerakan 360°, Lari, Pass, Shoot, Tackle).
2. **AI Agent Logic (Bot Opponent)**: Kecerdasan buatan berbasis *Finite State Machine* (FSM) untuk tim lawan.
3. **Win / Lose & Match Game Loop Logic**: Pengaturan aturan pertandingan (Skor, Timer, Keputusan Menang/Kalah/Seri, Overtime/Golden Goal).

---

## 2. Tech Stack & Commands
- **Language**: JavaScript (ES6+ Vanilla Classes, No Framework).
- **Rendering Engine**: HTML5 Canvas 2D Context.
- **Input System**: HTML5 Gamepad API (Xbox 360 Controller Engine).
- **Dev Commands**:
  - Dev / Serve: `python3 -m http.server 8080` (buka `http://localhost:8080`)
  - Test / Check syntax: `node -c js/**/*.js`

---

## 3. Project Structure
```text
web-game-soccer/
├── index.html                  # Main entry point & canvas layout
├── style.css                   # Theme & UI overlay styling
├── js/
│   ├── router.js               # Route manager (/ & /debugging-controller & /play)
│   ├── gamepad.js              # Gamepad API engine (Xbox 360 input reader)
│   ├── ui.js                   # UI overlay renderer & debugger
│   └── game/                   # Core Game Engine Modules
│       ├── Game.js             # Main Loop (60 FPS), Match Timer, State Management
│       ├── Field.js            # Pitch dimensions, Goals, Boundaries, Collision physics
│       ├── Ball.js             # Ball physics, friction, kick forces, goal detection
│       ├── Player.js           # Player entity (Human + Input state, velocity, stamina)
│       ├── AIAgent.js          # AI Bot FSM Logic (States: CHASE, DRIBBLE, PASS, SHOOT, DEFEND)
│       └── MatchRules.js       # Score tracking, Win/Lose conditions, Golden Goal
├── docs/
│   └── spec.md                 # Specification Document
└── tasks/
    ├── plan.md                 # Implementation Plan
    └── todo.md                 # Task Checklist
```

---

## 4. Input Mapping (Xbox 360 Controller -> Gameplay Logic)

| Tombol / Axis | Aksi Menyerang (Attacking) | Aksi Bertahan (Defending) |
|---|---|---|
| **Left Stick (Axes 0, 1)** | Pergerakan Pemain (Vector X, Y 360°) | Pergerakan Pemain (Vector X, Y 360°) |
| **Tombol A (Index 0)** | Short Pass (Umpan Pendek) | Press / Change Player |
| **Tombol X (Index 2)** | Shoot (Tembak Gawang + Power Meter) | Slide Tackle |
| **Tombol Y (Index 3)** | Through Pass (Umpan Terobosan) | Goalkeeper Charge (GK Maju) |
| **Tombol B (Index 1)** | Lofted Pass / Cross | Secondary Defending Press |
| **Right Trigger / RT (Index 7)**| Sprint (Lari Cepat + Stamina Drain) | Sprint (Lari Cepat + Stamina Drain) |
| **Start Button (Index 9)** | Pause / Resume Game | Pause / Resume Game |

---

## 5. AI Agent Logic (Finite State Machine)

AI Bot mengendalikan pemain lawan secara otonom berdasarkan evaluasi posisi bola & jarak:

```text
               ┌────────────────┐
               │   EVALUATION   │
               └───────┬────────┘
                       │
       ┌───────────────┴───────────────┐
       ▼                               ▼
 [AI Pegang Bola]               [Pemain Pegang Bola]
       │                               │
 ┌─────┴───────────────┐         ┌─────┴───────────────┐
 │ - ATTACK_DRIBBLE    │         │ - DEFEND_PRESS      │
 │ - ATTACK_PASS       │         │ - INTERCEPT_PASS    │
 │ - ATTACK_SHOOT      │         │ - GOALKEEPER_SAVE   │
 └─────────────────────┘         └─────────────────────┘
```

### FSM States:
1. **CHASE_BALL**: Bergerak mengejar bola jika bola bebas (unpossessed).
2. **ATTACK_DRIBBLE**: Menggiring bola menuju area penalti lawan jika ada ruang kosong.
3. **ATTACK_PASS**: Mengoper ke teman satu tim yang posisinya lebih bebas (*open pass lane*).
4. **ATTACK_SHOOT**: Menembak langsung ke gawang jika posisi tembak ideal (< 15 meter dari gawang).
5. **DEFEND_PRESS**: Memotong jalur & menekan pemain yang membawa bola.
6. **GOALKEEPER_AI**: Menjaga garis gawang & memotong bola yang masuk area 6-yard.

---

## 6. Win / Lose & Match Loop Logic

### Aturan Pertandingan (Match Rules):
1. **Match Duration**: 2 Babak (misal: 3 menit per babak = 6 menit total waktu nyata).
2. **Kondisi Menang (WIN)**: Skor Pemain > Skor AI Bot ketika timer babak 2 habis.
3. **Kondisi Kalah (LOSE)**: Skor Pemain < Skor AI Bot ketika timer babak 2 habis.
4. **Kondisi Seri & Overtime (DRAW / GOLDEN GOAL)**:
   - Jika skor sama saat babak 2 selesai: Masuk ke *Golden Goal Extra Time* (Siapa cetak gol pertama langsung MENANG).
   - Jika tetap seri hingga Extra Time habis: Masuk ke *Penalty Shootout Mode*.
5. **HUD & Overlay Result**:
   - Realtime Display: Timer, Score Board (PLAYER vs AI), Controller Input Indicator.
   - End Game Modal: Tampilan Hasil "VICTORY", "DEFEAT", atau "DRAW" beserta statistik pertandingan (Total Tembakan, Tembakan Akurat, Ball Possession %).

---

## 7. Boundaries & Rules
- **Always do**: Gunakan RequestAnimationFrame untuk 60FPS loop, tangani pemutusan koneksi controller secara gracefully, pastikan collision bola & gawang presisi.
- **Ask first**: Penambahan library fisika eksternal, pembuatan sprite/asset gambar kompleks.
- **Never do**: Mengharuskan framework bundler (Webpack/Vite), menggunakan hardcoded pixel offset tanpa scaling Canvas yang dynamic.

---

## 8. Success Criteria & Open Questions

### Success Criteria:
- [ ] Xbox 360 controller merespon akurat untuk pergerakan 360° dan akselerasi pemain di Canvas.
- [ ] AI Agent mampu mengejar bola, melakukan passing antar bot, dan menembak saat dekat gawang.
- [ ] Timer pertandingan berjalan dan otomatis memicu Win/Lose Overlay saat waktu habis.
- [ ] Game Loop stabil di 60 FPS tanpa memory leak.

### Asumsi & Topik Diskusi (Open Questions):
1. **Formasi & Jumlah Pemain**: Apakah match ini 1v1 (Single Player vs Single AI Bot + Goalkeepers) atau 5v5 (Futsal/Arcade Style)?
2. **Durasi Pertandingan**: Apakah 3 menit per babak (total 6 menit) sudah pas atau ingin 1.5 menit per babak?
3. **Mekanisme Shoot**: Apakah tembakan menggunakan Power Meter (tahan tombol X) atau tembakan dengan fixed power?
