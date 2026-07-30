# Tasks Checklist: 4-Player Multi-Device Controller System (2v2 WebRTC)

- [ ] Task 1: Extend PeerJS Service for Multi-Client Connections (`HostPeerService.ts` & `ClientPeerService.ts`).
  - Acceptance: Supports up to 4 concurrent mobile client connections and broadcasts slot reservation states.
  - Verify: Multiple devices can connect to the same Room ID simultaneously.
  - Files: `src/services/peerService.ts`

- [ ] Task 2: Implement Mobile Role Selection Screen in `MobileControllerView.tsx`.
  - Acceptance: Renders Slot Lobby (P1, P2, P3, P4) upon scanning QR/connecting Room ID with real-time lock states.
  - Verify: Selecting P1/P2/P3/P4 locks the slot for other connected devices.
  - Files: `src/components/MobileControllerView.tsx`

- [ ] Task 3: Expand Arena Player Engine to 4 Active Players (`p1`, `p2`, `p3`, `p4`) in `GameView.tsx`.
  - Acceptance: Arena supports 2v2 matches with P1, P2 (Home) vs P3, P4 (Away). Unclaimed slots run seamless AI.
  - Verify: Input routing correctly dispatches to P1, P2, P3, P4 based on claimed slots.
  - Files: `src/components/GameView.tsx`, `src/game/Player.ts`

- [ ] Task 4: End-to-End Build & Deployment Verification.
  - Acceptance: `npm run build` succeeds cleanly. Automatic git commit & push to GitHub.
  - Verify: Clean build & remote push verified.
