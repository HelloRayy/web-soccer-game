# Design System: Goal Clash Authentic Console UI ⚽🎮

Panduan Design System resmi untuk **Goal Clash (Web Soccer Game)**, dianalisis 100% presisi dari antarmuka konsol sepak bola modern.

---

## 1. Core Color Palette & Atmosphere

### Background & Lighting
- **Main Canvas BG**: `#05090C` (Deep Stadium Pitch Night)
- **Left Vignette Gradient**: `linear-gradient(to right, rgba(5,9,12,0.95) 0%, rgba(5,9,12,0.7) 40%, rgba(5,9,12,0) 100%)` (Memastikan teks menu di sisi kiri terbaca 100% tajam di atas foto stadion)
- **Stadium Lighting**: Floodlight Emerald Highlights `#17FFBF` / `#00E676`

### Typography & Colors
- **Active Menu Item**: `#FFFFFF` (Pure White, `font-extrabold`, `text-2xl` / `text-3xl`, `tracking-tight`)
- **Unselected Menu Items**: `rgba(255, 255, 255, 0.35)` / `#475569` (Muted Translucent Slate, `font-semibold`, `text-xl`, `hover:text-slate-200`)
- **Accent Highlight**: `#17FFBF` (Electric Mint Green) & `#00E676` (Stadium Emerald)

---

## 2. Layout Structure (EA FC 25 Console Layout)

```
+-----------------------------------------------------------------------------------------+
| [⚙] [👤]  Goal Clash                                        [User] [Level 0] [💎 0/1000] |
|                                                                                         |
|   Kick Off (ACTIVE - PURE WHITE BOLD)                                                   |
|   Master League                                               [ DYNAMIC PLAYERS IN      |
|   Become Legend                                                    ACTION GRAPHIC ]     |
|   Training                                                                              |
|   Statistics                                                                            |
|   Music & Sound                                                                         |
|                                                                                         |
| (L) Settings / Accessibility                       [🎵 Track Name | User] [RT 1 👥 0]  |
+-----------------------------------------------------------------------------------------+
```

### Key UI Components:

1. **Top-Left Header**:
   - Gear (Settings) & Person (Accessibility) icons stacked on far top-left.
   - Branding Logo: `Goal Clash` in bold italic metallic white.

2. **Top-Right Profile Badge**:
   - Username (`EferQ`), Level Badge (`Level 0`), and EXP Coins (`0/1,000` with purple diamond/shield icon).

3. **Left Vertical Menu Stack**:
   - Aligned left with generous padding (`pl-16` / `pl-20`).
   - Active item: Bold crisp white line with sharp brisk focus transition.
   - Unselected items: Translucent dark grey lines.

4. **Bottom-Right Music & HUD Bar**:
   - Dark pill widget showing active soundtrack: `🎵 Stick Around You` | `JINXSPRO` with green accent.
   - Controller HUD hints (`RT`, `LT`, social icons).

5. **Bottom-Left Helper Pill**:
   - `◄ L1 Settings / Accessibility Settings`.
