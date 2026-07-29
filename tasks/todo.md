# Todo Checklist: Modern React 19 + Vite Soccer Game

- [ ] Task 1: Setup React 19 + Vite + TS + Tailwind CSS v4 (`package.json`, `vite.config.ts`, `index.html`)
  - Acceptance: Project React 19 terinialisasi dan dapat di-build dengan cepat via Vite.
  - Verify: Server Vite dev berjalan tanpa warning.

- [ ] Task 2: Type Definitions (`src/types/game.ts`)
  - Acceptance: Definisi tipe data TypeScript untuk GamepadState, Vector2D, PlayerEntity, BallState, dan MatchRulesState.
  - Verify: Type-checking `tsc --noEmit` lolos.

- [ ] Task 3: React Game Hooks (`src/hooks/useGamepad.ts`, `src/hooks/useGameLoop.ts`)
  - Acceptance: Hook `useGamepad` membaca controller P1 & P2, `useGameLoop` menggerakkan 60 FPS requestAnimationFrame.
  - Verify: Data Gamepad ter-update 60 FPS dalam state/ref React.

- [ ] Task 4: Xbox 360 Debugger Component (`src/components/DebuggerView.tsx`)
  - Acceptance: Tampilan visual Xbox 360 controller interaktif & tabel data mentah di route `/debugging-controller`.
  - Verify: Menguji tombol & stick Xbox 360 di browser.

- [ ] Task 5: Game Physics & Ball Shift Touch (`src/game/Field.ts`, `src/game/Ball.ts`)
  - Acceptance: Modul Canvas Pitch 2D ter-render, bola bergeser/terdefleksi saat menyentuh pemain.
  - Verify: Efek *ball shift* terlihat saat bola menyentuh pemain.

- [ ] Task 6: Player Entity & Xbox Controls (`src/game/Player.ts`)
  - Acceptance: Pemain merespon 360° Left Stick, RT Sprint, X Shoot, A Pass, Y Through Pass.
  - Verify: Pemain dapat digerakkan dengan controller Xbox 360 fisik.

- [ ] Task 7: Simple MVP AI Bot (`src/game/AIAgent.ts`)
  - Acceptance: AI Bot mengejar bola, mendribble ke gawang lawan, menembak, dan mempress pemain human.
  - Verify: AI Bot bermain di mode 2v2 Co-op.

- [ ] Task 8: Match Rules Engine & Timer (`src/game/MatchRules.ts`)
  - Acceptance: Aturan First-to-3 Goals OR 3-Min Countdown Timer + Golden Goal Overtime ter-enforce.
  - Verify: Game Over terpicu saat tim mencetak 3 gol atau timer habis.

- [ ] Task 9: Debug Text HUD & Game Over Overlay (`src/components/HUDOverlay.tsx`)
  - Acceptance: Debug Text HUD menampilkan timer, skor, mode, dan overlay Victory/Defeat.
  - Verify: Tampilan hasil akhir muncul jelas di layar.
