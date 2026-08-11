import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Swords, Bot, Shield, Info, Settings, User, Music, Gem, Trophy, ChevronRight, Play } from 'lucide-react';
import { QRCodeModal } from './QRCodeModal';
import { ControllerSelectModal, DeviceType } from './ControllerSelectModal';

interface LobbyViewProps {
  onStartMatch: (mode: '1v1' | '2vBot', p1Device?: DeviceType, p2Device?: DeviceType) => void;
  peerRoomId: string;
  isPeerConnected: boolean;
}

type MenuItemId = '1v1' | '2vBot' | 'extras' | 'settings';

interface MenuItemConfig {
  id: MenuItemId;
  label: string;
  subtitle: string;
  accentColor: string;
  tag: string;
  bgSymbol: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MENU_ITEMS: MenuItemConfig[] = [
  {
    id: '1v1',
    label: 'Kick Off',
    subtitle: 'Sharpen your skills in 1 vs 1 Head to Head Local & Remote PVP Match Engine',
    accentColor: '#17FFBF',
    tag: 'PVP STADIUM KICK OFF',
    bgSymbol: '⚽',
    icon: Swords,
  },
  {
    id: '2vBot',
    label: 'Master League',
    subtitle: 'Team up with a friend in 2 Players Co-Op vs AI Enemy Bots Tournament',
    accentColor: '#FFD13B',
    tag: 'CHAMPIONS CO-OP ARENA',
    bgSymbol: '🏆',
    icon: Bot,
  },
  {
    id: 'extras',
    label: 'Extras & Controls',
    subtitle: 'Configure Keyboard, Gamepad USB & HP Remote Control Mappings',
    accentColor: '#00D8F6',
    tag: 'TACTICAL CONTROLS & SCHEMATICS',
    bgSymbol: '🎮',
    icon: Info,
  },
  {
    id: 'settings',
    label: 'Settings',
    subtitle: 'WebRTC PeerJS Mobile Remote Connection & Debug Telemetry Route',
    accentColor: '#A855F7',
    tag: 'WEBRTC PEER CONNECTIVITY',
    bgSymbol: '📱',
    icon: Smartphone,
  }
];

const FIFA_SPRING_TRANSITION = {
  type: 'spring' as const,
  stiffness: 1000,
  damping: 50,
  mass: 0.5
};

export const LobbyView: React.FC<LobbyViewProps> = ({ onStartMatch, peerRoomId, isPeerConnected }) => {
  const [selectedMode, setSelectedMode] = useState<'1v1' | '2vBot'>('1v1');
  const [activeItem, setActiveItem] = useState<MenuItemId>('1v1');
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [showControlsModal, setShowControlsModal] = useState(false);
  const [showControllerSelectModal, setShowControllerSelectModal] = useState(false);

  const currentConfig = MENU_ITEMS.find((item) => item.id === activeItem) || MENU_ITEMS[0];

  // PlayStation Keyboard Navigation Support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showControlsModal || showControllerSelectModal || isQRModalOpen) return;

      const currentIndex = MENU_ITEMS.findIndex((item) => item.id === activeItem);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % MENU_ITEMS.length;
        setActiveItem(MENU_ITEMS[nextIndex].id);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + MENU_ITEMS.length) % MENU_ITEMS.length;
        setActiveItem(MENU_ITEMS[prevIndex].id);
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleItemClick(currentConfig);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, showControlsModal, showControllerSelectModal, isQRModalOpen, currentConfig]);

  const handleItemClick = (item: MenuItemConfig) => {
    setActiveItem(item.id);
    if (item.id === '1v1' || item.id === '2vBot') {
      setSelectedMode(item.id);
      setShowControllerSelectModal(true);
    } else if (item.id === 'extras') {
      setShowControlsModal(true);
    } else if (item.id === 'settings') {
      setIsQRModalOpen(true);
    }
  };

  const handleConfirmControllerStart = (p1Device: DeviceType, p2Device: DeviceType) => {
    setShowControllerSelectModal(false);
    onStartMatch(selectedMode, p1Device, p2Device);
  };

  return (
    <div className="relative w-screen h-screen bg-[#05090C] text-[#E2F1F8] flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden font-['Inter',sans-serif]">
      {/* BACKGROUND VIGNETTE GRADIENT (Authentic EA FC 25 Left Dark Overlay) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05090C] via-[#05090C]/80 to-transparent z-0 pointer-events-none" />

      {/* System Modals */}
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        roomId={peerRoomId}
        isConnected={isPeerConnected}
      />

      <ControllerSelectModal
        isOpen={showControllerSelectModal}
        onClose={() => setShowControllerSelectModal(false)}
        onConfirmStart={handleConfirmControllerStart}
        peerRoomId={peerRoomId}
        isPeerConnected={isPeerConnected}
        selectedMode={selectedMode}
      />

      {/* Controls Spec Modal */}
      {showControlsModal && (
        <div className="fixed inset-0 z-50 bg-[#05090C]/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#0A1526] border-2 border-[#17FFBF]/40 max-w-md w-full p-6 flex flex-col gap-4 text-[#E2F1F8] relative rounded-xl font-mono">
            <button
              onClick={() => setShowControlsModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-none bg-[#0F1E36] border border-[#17FFBF]/60 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-xl font-black text-white flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-wider">
              <Shield className="w-5 h-5 text-[#17FFBF]" /> PETUNJUK KONTROL GAME
            </h3>
            <div className="flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="bg-[#05090C] p-3 border border-[#142840] flex justify-between items-center">
                <span className="text-slate-400">P1 Move / Action:</span>
                <span className="text-[#17FFBF] font-bold">WASD + J/K/L + Space</span>
              </div>
              <div className="bg-[#05090C] p-3 border border-[#142840] flex justify-between items-center">
                <span className="text-slate-400">P2 Move / Action:</span>
                <span className="text-amber-400 font-bold">Arrow Keys + Numpad / N,M</span>
              </div>
              <div className="bg-[#05090C] p-3 border border-[#142840] flex justify-between items-center">
                <span className="text-slate-400">Joystick / Gamepad:</span>
                <span className="text-[#17FFBF] font-bold">Plug & Play Controller</span>
              </div>
              <div className="bg-[#05090C] p-3 border border-[#142840] flex justify-between items-center">
                <span className="text-slate-400">HP Remote Controller:</span>
                <span className="text-cyan-400 font-bold">Scan QR Code HP</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 1. TOP HEADER BAR (FL 25 / EA FC 25 Console Layout) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="relative z-20 w-full flex justify-between items-center pointer-events-auto pl-2 sm:pl-4"
      >
        {/* TOP-LEFT ICONS & BRANDING LOGO */}
        <div className="flex items-center gap-5">
          {/* Vertical Stacked Icons: Settings Gear & Accessibility Person */}
          <div className="flex flex-col gap-2 text-slate-400">
            <button
              onClick={() => setShowControlsModal(true)}
              className="hover:text-white transition cursor-pointer"
              title="Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsQRModalOpen(true)}
              className="hover:text-white transition cursor-pointer"
              title="Accessibility & Connectivity"
            >
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* FL 25 / FC 26 Metallic Logo */}
          <h1 className="text-3xl sm:text-5xl font-black italic tracking-tighter text-white font-['Plus_Jakarta_Sans',sans-serif] leading-none uppercase drop-shadow-lg flex items-center gap-1">
            FL <span className="text-[#17FFBF]">25</span>
          </h1>
        </div>

        {/* TOP-RIGHT USER PROFILE BADGE (EferQ | Level 0 | EXP) */}
        <div className="flex items-center gap-4 font-mono text-xs text-slate-300">
          <span className="font-bold text-white">EferQ</span>
          <span className="bg-[#0A1526] border border-[#142840] px-2.5 py-1 rounded text-slate-400 font-semibold">
            Level 0
          </span>
          <div className="flex items-center gap-1 text-purple-400 font-bold bg-[#0A1526] border border-[#142840] px-2.5 py-1 rounded">
            <Gem className="w-3.5 h-3.5 fill-purple-400" />
            <span>0/1,000</span>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE: EA FC 25 DYNAMIC PLAYER PORTAL ARTWORK */}
      <div className="hidden md:block absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 w-[560px] lg:w-[640px] h-[520px] pointer-events-none z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentConfig.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="w-full h-full relative flex flex-col items-center justify-center"
          >
            <div
              className="w-[380px] h-[360px] rounded-[48px] border-4 bg-[#0A1526]/80 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center text-center p-6 transition-colors duration-100 shadow-2xl"
              style={{ borderColor: currentConfig.accentColor }}
            >
              <div className="text-8xl mb-3">{currentConfig.bgSymbol}</div>
              <span
                className="text-sm font-mono font-black tracking-widest uppercase px-4 py-1 rounded-full border"
                style={{ color: currentConfig.accentColor, borderColor: `${currentConfig.accentColor}80`, backgroundColor: `${currentConfig.accentColor}20` }}
              >
                {currentConfig.tag}
              </span>
              <p className="text-xs text-slate-300 font-medium mt-3 max-w-xs leading-relaxed font-mono">
                {currentConfig.subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. CENTER-LEFT VERTICAL MENU STACK (Authentic EA FC 25 Console Geometric Font & Large Spacing) */}
      <div className="relative z-10 my-auto w-full max-w-xl flex flex-col items-start justify-center pl-10 sm:pl-24">
        <div className="flex flex-col gap-7 sm:gap-8 w-full max-w-md relative font-['Poppins',sans-serif]">
          {MENU_ITEMS.map((item) => {
            const isActive = activeItem === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveItem(item.id)}
                onClick={() => handleItemClick(item)}
                className="relative cursor-pointer group flex items-center"
              >
                {/* ACTIVE ITEM SELECTION: Large Geometric White Text ONLY */}
                <span
                  className={`text-3xl sm:text-5xl tracking-tight transition-all duration-120 ${
                    isActive
                      ? 'text-white font-black drop-shadow-2xl'
                      : 'text-slate-400/50 font-medium hover:text-slate-200'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. BOTTOM HUD BAR (FL 25 Soundtrack Widget & Helpers) */}
      <div className="relative z-10 w-full flex items-center justify-between pointer-events-auto pt-4 font-mono text-xs pl-2 sm:pl-6">
        {/* Bottom-Left Helper Badge */}
        <div className="flex items-center gap-2 text-slate-400 font-semibold">
          <span className="w-5 h-5 rounded-full bg-[#0A1526] border border-[#142840] flex items-center justify-center text-[10px] font-bold text-white">
            ◄ L
          </span>
          <span>Settings / Accessibility Settings</span>
        </div>

        {/* Bottom-Right Soundtrack & Social HUD Widget */}
        <div className="flex items-center gap-3">
          {/* Track Banner Pill */}
          <div className="bg-[#0A1526]/90 border border-[#17FFBF]/40 px-4 py-2 rounded-xl flex items-center gap-6 text-xs text-white shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4 text-[#17FFBF] animate-pulse" />
              <span className="font-bold tracking-wide">Stick Around You</span>
            </div>
            <span className="font-black text-[#17FFBF] tracking-widest uppercase">JINXSPRO</span>
          </div>

          {/* Controller HUD Badges */}
          <div className="flex items-center gap-1.5 text-slate-400 bg-[#0A1526] border border-[#142840] px-3 py-2 rounded-xl text-[11px] font-bold">
            <span className="text-white">RT</span>
            <span>1</span>
            <span>👥 0</span>
          </div>
        </div>
      </div>
    </div>
  );
};
