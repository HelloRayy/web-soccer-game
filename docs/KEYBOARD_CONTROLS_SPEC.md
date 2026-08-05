# Spec: Laptop Keyboard Controls System

## Objective
Mengintegrasikan sistem kontrol **Keyboard Laptop (PC)** langsung ke engine game sepak bola, sehingga pemain dapat mengendalikan Player 1 (P1) menggunakan keyboard tanpa tergantung pada Gamepad Xbox fisik atau HP WebRTC.

## Keyboard Key Mapping Layout (Standard PC Gaming)

| Tombol Keyboard | Aksi Game Controller Equivalent | Fungsi In-Game |
|---|---|---|
| **W, A, S, D** | Left Stick (Axes 0, 1) | Pergerakan Pemain 360° (Atas, Kiri, Bawah, Kanan) |
| **J** | Tombol A | Short Pass (Umpan Pendek) |
| **K** | Tombol X | Shoot (Tembak Gawang) |
| **L** | Tombol Y | Through Pass (Umpan Terobosan) |
| **Space** | Tombol B | Cross / Slide Tackle |
| **Shift (Kiri)** | Right Trigger (RT) | Sprint / Lari Cepat |
| **E / R** | Right Bumper (RB / LB) | Request Pass Callout |
| **Start / Esc** | Start Button | Pause / Toggle HUD Overlay |

---

## Tech Stack & Commands
- **Framework**: React 19 + TypeScript + HTML5 Canvas
- **Hook Input**: Custom `useKeyboardInput` hook mendengarkan `keydown` dan `keyup` global window events
- **Verification Commands**:
  - Type Check: `npm run check-types`
  - Dev Server: `npm run dev`
  - Build: `npm run build`

---

## Code Integration Structure
```text
src/
├── hooks/
│   └── useKeyboardInput.ts    # [NEW] Hook listener keyboard event handler (WASD + JKL)
├── components/
│   ├── GameView.tsx           # [MODIFY] Menggabungkan input keyboard ke P1 controller state
│   └── HUDOverlay.tsx         # [MODIFY] Menampilkan Keyboard Controls Legend Badge
└── game/
    └── Player.ts              # [MODIFY] Mengolah input keyboard seamless bersama gamepad
```

---

## Boundaries & Rules
- **Always do**: Tangani `e.preventDefault()` untuk tombol spasi/panah agar halaman browser tidak mengalami scroll mendadak.
- **Ask first**: Mengubah skema tombol default atau menambahkan keybinding kustom.
- **Never do**: Menghalangi koneksi Gamepad Xbox / Remote HP saat keyboard digunakan (keduanya harus bekerja secara *hybrid co-existence*).

---

## Success Criteria
- [ ] Tombol `WASD` menggerakkan pemain P1 secara responsif ke 8 arah diagonal.
- [ ] Tombol `J` melakukan Umpan Pendek, `K` melakukan Tembakan, `L` Umpan Terobosan, dan `Shift` melakukan Sprint.
- [ ] Tampilan HUD menampilkan Keyboard Controls Legend Badge yang informatif.
- [ ] Type check `npm run check-types` dan build `npm run build` berhasil 100% tanpa error.
