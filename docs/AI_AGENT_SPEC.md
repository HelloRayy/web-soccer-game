# Spesifikasi Logika Resmi: Soccer Web Game Engine & Tactical Passing Grid

> **Status Engine**: 🔒 **LOGIC LOCKED & TACTICAL PASSING GRID INTEGRATED**  
> **Tech Stack**: React 19 + Vite + TypeScript + Tailwind CSS v4 + React Router v7  
> **World Dimensions**: 2200px x 1350px (Large Stadium Field)  
> **Tactical Grid**: Canvas 2D Interactive Passing Grid Overlay  

---

## 🎯 Tactical Passing Grid Lines System

1. **Vektor Grid Umpan Presisi (*Pass Grid Line Network*)** ([GameView.tsx](file:///home/rayhan/Windows-D/project/web-game-soccer/src/components/GameView.tsx)):
   - Menampilkan garis grid umpan cyan putus-putus (*dashed line*) yang mengisyaratkan skenario operan langsung dari pengoper menuju Player 2.
   - Dilengkapi **Grid Tick Markers** (garis penanda skala jarak) setiap 50px di sepanjang lintasan umpan.

2. **Kerucut Sudut Pandang Umpan (*Passing Vision Cone*)**:
   - Area kerucut semi-transparan cyan $60^\circ$ di depan pemain pengarah bola yang memperlihatkan jangkauan pandangan umpan.

3. **Lingkaran Jarak Radial (*Concentric Distance Grid Rings*)**:
   - 3 lingkaran grid radial konsentris ($R = 140\text{px}, 280\text{px}, 420\text{px}$) di sekeliling pemain untuk mengukur skala jangkauan Umpan Pendek, Umpan Menengah, dan Umpan Jauh Terobosan.

4. **Target Lock Brackets pada Penerima (Player 2)**:
   - Siku target pengunci hijau emerald (*4 Corner Brackets*) melingkari Player 2 sebagai penerima umpan presisi.

---

## 🔒 Ringkasan Modul Logika yang Dikunci (Locked Core Logic)

### 1. Engine Fisika Bola & Dribble Attachment ([Ball.ts](file:///home/rayhan/Windows-D/project/web-game-soccer/src/game/Ball.ts))
- **Dribble Ball Attachment**: Bola terkunci nempel di depan pergerakan pemain (`attachToPlayer`) saat mendribble.
- **Homing Curved Pass Trajectory**: Bola meluncur dengan efek *curved arc steering* mengejar pergerakan pemain (P1 ➔ P2 maupun P2 ➔ P1) sampai bola diambil.
- **Kecepatan Umpan Smooth**: Kecepatan umpan diatur halus ($4.2 - 8.5 \text{ px/frame}$) dengan *release timer* $120\text{ms}$ agar transisi kontrol bola responsif dan realistis.

### 2. Engine Kontrol & Input Player ([Player.ts](file:///home/rayhan/Windows-D/project/web-game-soccer/src/game/Player.ts))
- **Pergerakan 360°**: Left Analog Stick Xbox 360 untuk navigasi arah pemain.
- **Right Trigger (RT)**: Sprint (Lari Cepat).
- **Tombol X**: Simple Shoot.
- **Tombol A**: Direct Pass presisi mengincar Player 2.
- **Tombol Y**: Through Pass terobosan mengincar ruang kosong di depan pergerakan Player 2.
- **Tombol RB / R1 / LB**: **Request Pass Callout** (Player 2 seketika mengoper balik ke Player 1).
- **Tombol Start (Index 9)**: Toggle Tampilan HUD Overlay.
- **Tombol Ctrl / Xbox Back**: Toggle Tampilan Kursor Mouse.
