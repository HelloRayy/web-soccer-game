# Implementation Plan: 4-Player Multi-Device Controller System (2v2 WebRTC)

Sistem arsitektur **4-Player Multi-Device Smartphone Controller (2v2 Local Multiplayer)** via WebRTC PeerJS. Memungkinkan hingga 4 HP menyambung secara instan ke layar utama (PC/Laptop/TV) untuk bertanding 2v2 (Tim Merah vs Tim Kuning), di mana slot yang tidak diisi HP akan dikendalikan oleh AI.

---

## 🏗️ Technical Architecture Decisions

1. **Multi-Peer Channel Manager (`peerService.ts`)**:
   - Mengelola `Map<string, ClientConnection>` untuk mendukung hingga 4 koneksi HP secara bersamaan.
   - Melakukan broadcast status ketersediaan slot (`slotState: { p1: boolean, p2: boolean, p3: boolean, p4: boolean }`) secara real-time ke seluruh HP yang terhubung.

2. **Mobile Role Selection Screen (`MobileControllerView.tsx`)**:
   - **Lobby Pemilihan Slot di HP**:
     - 🔴 **P1 (Home 1 - Kamu)**
     - 🟢 **P2 (Home 2 - Rekan)**
     - 🟡 **P3 (Away 1 - Musuh 1)**
     - 🔵 **P4 (Away 2 - Musuh 2)**
   - Slot yang telah dipilih oleh HP lain akan otomatis terunci (`🔒 TERPAKAI`).
   - Fitur "Ganti Slot" (*Change Role*) tersedia kapan saja dari layar HP.

3. **Hybrid Dynamic AI & Human Control (`GameView.tsx`)**:
   - Arena pertandingan mendukung 4 pemain aktif:
     - `p1` (Home 1): Human HP / Xbox / AI Fallback
     - `p2` (Home 2): Human HP / Xbox / AI Fallback
     - `p3` (Away 1): Human HP / AI Fallback
     - `p4` (Away 2): Human HP / AI Fallback
   - Transisi *seamless*: Jika HP terputus atau belum memilih slot, AI langsung mengambil alih tanpa menghentikan pertandingan.

---

## 📋 Task Breakdown

### Phase 1: Multi-Peer & Slot Reservation Service
- [ ] **Task 1**: Update `HostPeerService` & `ClientPeerService` untuk mendukung Multi-Client broadcast & slot reservation messaging.
- [ ] **Task 2**: Implementasi sinyal registrasi slot (`SELECT_SLOT`, `RELEASE_SLOT`, `SLOT_STATE_UPDATE`).

### Phase 2: Mobile Lobby & Role Selection UI
- [ ] **Task 3**: Tampilkan layar **Lobby Pemilihan Slot (P1, P2, P3, P4)** di HP setelah terhubung via WebRTC.
- [ ] **Task 4**: Sinkronisasi status slot terunci (`🔒 TERPAKAI`) secara real-time di seluruh HP.

### Phase 3: 4-Player Match Arena Engine Integration
- [ ] **Task 5**: Perbarui `GameView.tsx` & `Player.ts` untuk mengelola 4 pemain (P1, P2 vs P3, P4) dengan warna indikator visual khas.
- [ ] **Task 6**: Integrasikan logika input hybrid (Remote HP / Xbox Gamepad / Dynamic AI Fallback).

---

## 📊 Verification Plan

### Automated Tests
- Verification build: `npm run build` dengan 0 errors.

### Manual Verification
1. Buka Game Arena di PC/Laptop.
2. Hubungkan HP ke-1 & HP ke-2 -> Pilih slot P1 & P2.
3. Hubungkan HP ke-3 & HP ke-4 -> Pilih slot P3 & P4.
4. Mainkan pertandingan 2v2 secara real-time dengan 4 HP controller!
