# Tasks Checklist: Football Control Standards

- [x] Task 1: Audit Xbox Gamepad Layout vs FIFA / EA FC / eFootball standards.
  - Acceptance: A=Pass, B=Tackle, Y=Through/Skill, X=Shoot, R1=Request Ball, R2=Sprint.
  - Verify: Layout is 100% matched with console standard layout.
  - Files: `src/game/Player.ts`, `src/components/MobileControllerView.tsx`

- [x] Task 2: Verify Gamepad & HP Remote Controller Responsiveness.
  - Acceptance: Pressing A, B, Y, X, R1, R2 on Xbox controller or HP Remote triggers exact actions instantly.
  - Verify: Game loop handles all button states smoothly.
  - Files: `src/components/GameView.tsx`, `src/services/peerService.ts`

- [x] Task 3: Build Verification & Deployment.
  - Acceptance: `npm run build` succeeds cleanly.
  - Verify: Automatic git commit & push executed to GitHub.
