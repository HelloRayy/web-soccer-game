import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Swords, Bot, Info, Settings, User, Gem, Shield, Music } from 'lucide-react';
import { QRCodeModal } from './QRCodeModal';
import { ControllerSelectModal, DeviceType } from './ControllerSelectModal';

interface LobbyViewProps {
  onStartMatch: (mode: '1v1' | '2vBot', p1Device?: DeviceType, p2Device?: DeviceType) => void;
  peerRoomId: string;
  isPeerConnected: boolean;
  connectedPeerCount?: number;
}

type MenuItemId = '1v1' | '2vBot' | 'extras' | 'settings';

interface MenuItemConfig {
  id: MenuItemId;
  label: string;
  subtitle: string;
  accentColor: string;
  bgGradient: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MENU_ITEMS: MenuItemConfig[] = [
  {
    id: '1v1',
    label: 'Kick Off',
    subtitle: 'Sharpen your skills in 1 vs 1 Head to Head Local & Remote PVP Match Engine',
    accentColor: '#17FFBF',
    bgGradient: 'radial-gradient(circle at 70% 30%, #092e22 0%, #03140e 45%, #010705 100%)',
    tag: 'PVP STADIUM KICK OFF',
    icon: Swords,
  },
  {
    id: '2vBot',
    label: 'Master League',
    subtitle: 'Team up with a friend in 2 Players Co-Op vs AI Enemy Bots Tournament',
    accentColor: '#FFD13B',
    bgGradient: 'radial-gradient(circle at 70% 30%, #2e2409 0%, #171103 45%, #070501 100%)',
    tag: 'CHAMPIONS CO-OP ARENA',
    icon: Bot,
  },
  {
    id: 'extras',
    label: 'Extras & Controls',
    subtitle: 'Configure Keyboard, Gamepad USB & HP Remote Control Mappings',
    accentColor: '#00D8F6',
    bgGradient: 'radial-gradient(circle at 70% 30%, #092a33 0%, #03141a 45%, #010608 100%)',
    tag: 'TACTICAL CONTROLS & SCHEMATICS',
    icon: Info,
  },
  {
    id: 'settings',
    label: 'Settings',
    subtitle: 'WebRTC PeerJS Mobile Remote Connection & Debug Telemetry Route',
    accentColor: '#A855F7',
    bgGradient: 'radial-gradient(circle at 70% 30%, #260933 0%, #12031a 45%, #050108 100%)',
    tag: 'WEBRTC PEER CONNECTIVITY',
    icon: Smartphone,
  }
];

export const LobbyView: React.FC<LobbyViewProps> = ({ onStartMatch, peerRoomId, isPeerConnected, connectedPeerCount = 0 }) => {
  const [selectedMode, setSelectedMode] = useState<'1v1' | '2vBot'>('1v1');
  const [activeItem, setActiveItem] = useState<MenuItemId>('1v1');
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [showControlsModal, setShowControlsModal] = useState(false);
  const [showControllerSelectModal, setShowControllerSelectModal] = useState(false);

  const currentConfig = MENU_ITEMS.find((item) => item.id === activeItem) || MENU_ITEMS[0];

  // Console Keyboard Navigation (UP / DOWN / ENTER)
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
    <div className="relative w-screen h-screen select-none overflow-hidden font-['Inter',sans-serif] text-slate-100 flex flex-col justify-between p-6 sm:p-10">
      
      {/* 0. FULL SCREEN DYNAMIC BASE BACKGROUND WITH INSTANT CROSSFADE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentConfig.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.05, ease: 'easeOut' }}
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: currentConfig.bgGradient }}
        />
      </AnimatePresence>

      {/* BACKGROUND VIGNETTE GRADIENT (Authentic EA FC 25 Left Dark Overlay) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030608] via-[#030608]/85 to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030608]/90 via-transparent to-[#030608]/70 z-0 pointer-events-none" />

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
        connectedPeerCount={connectedPeerCount}
        selectedMode={selectedMode}
      />

      {/* Controls Spec Modal */}
      {showControlsModal && (
        <div className="fixed inset-0 z-50 bg-[#05090C]/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#0A1526] border-2 border-[#17FFBF]/40 max-w-md w-full p-6 flex flex-col gap-4 text-[#E2F1F8] relative rounded-2xl font-mono shadow-2xl">
            <button
              onClick={() => setShowControlsModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0F1E36] border border-[#17FFBF]/60 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-xl font-black text-white flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-wider">
              <Shield className="w-5 h-5 text-[#17FFBF]" /> PETUNJUK KONTROL GAME
            </h3>
            <div className="flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="bg-[#05090C] p-3 rounded-xl border border-[#142840] flex justify-between items-center">
                <span className="text-slate-400">P1 Move / Action:</span>
                <span className="text-[#17FFBF] font-bold">WASD + J/K/L + Space</span>
              </div>
              <div className="bg-[#05090C] p-3 rounded-xl border border-[#142840] flex justify-between items-center">
                <span className="text-slate-400">P2 Move / Action:</span>
                <span className="text-amber-400 font-bold">Arrow Keys + Numpad / N,M</span>
              </div>
              <div className="bg-[#05090C] p-3 rounded-xl border border-[#142840] flex justify-between items-center">
                <span className="text-slate-400">Joystick / Gamepad:</span>
                <span className="text-[#17FFBF] font-bold">Plug & Play Controller</span>
              </div>
              <div className="bg-[#05090C] p-3 rounded-xl border border-[#142840] flex justify-between items-center">
                <span className="text-slate-400">HP Remote Controller:</span>
                <span className="text-cyan-400 font-bold">Scan QR Code HP</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 1. TOP HEADER BAR (FL 25 / EA FC 25 Console Layout) */}
      <div className="relative z-20 w-full flex justify-between items-center pointer-events-auto pl-2 sm:pl-4">
        {/* TOP-LEFT ICONS & BRANDING LOGO */}
        <div className="flex items-center gap-5">
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

          {/* FL 25 Metallic Logo */}
          <h1 className="text-3xl sm:text-5xl font-black italic tracking-tighter text-white font-['Plus_Jakarta_Sans',sans-serif] leading-none uppercase drop-shadow-lg flex items-center gap-1">
            FL <span className="text-[#17FFBF]">25</span>
          </h1>
        </div>

        {/* TOP-RIGHT USER PROFILE BADGE */}
        <div className="flex items-center gap-4 font-mono text-xs text-slate-300">
          <span className="font-bold text-white text-sm">EferQ</span>
          <span className="bg-[#0A1526]/80 border border-white/10 px-3 py-1.5 rounded-xl text-slate-300 font-semibold backdrop-blur-md">
            Level 0
          </span>
          <div className="flex items-center gap-1.5 text-purple-300 font-bold bg-[#0A1526]/80 border border-white/10 px-3 py-1.5 rounded-xl backdrop-blur-md">
            <Gem className="w-4 h-4 fill-purple-400 text-purple-400" />
            <span>0/1,000</span>
          </div>
        </div>
      </div>

      {/* 2. CENTER-LEFT VERTICAL MENU STACK (Kick Off = Bold, Other Items = Medium) */}
      <div className="relative z-10 my-auto w-full max-w-2xl flex flex-col items-start justify-center pl-6 sm:pl-16 md:pl-24">
        <div className="flex flex-col gap-5 sm:gap-6 w-full max-w-xl relative">
          {MENU_ITEMS.map((item) => {
            const isActive = activeItem === item.id;
            const isKickOff = item.id === '1v1';

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveItem(item.id)}
                onClick={() => handleItemClick(item)}
                className="relative cursor-pointer group py-0.5 select-none"
              >
                {/* Kick Off is font-bold, other items are font-medium */}
                <span
                  className={`text-3xl sm:text-5xl md:text-6xl tracking-tight transition-colors duration-75 block ${
                    isKickOff ? 'font-bold' : 'font-medium'
                  } ${
                    isActive
                      ? 'text-white drop-shadow-md'
                      : 'text-slate-400/40 hover:text-slate-300'
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
          <span className="w-5 h-5 rounded-full bg-[#0A1526] border border-white/20 flex items-center justify-center text-[10px] font-bold text-white shadow">
            ◄ L
          </span>
          <span>Settings / Accessibility Settings</span>
        </div>

        {/* Bottom-Right Soundtrack & Social HUD Widget */}
        <div className="flex items-center gap-3">
          {/* Track Banner Pill */}
          <div className="bg-[#0A1526]/80 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-5 text-xs text-white shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4 text-[#17FFBF] animate-pulse" />
              <span className="font-bold tracking-wide">Stick Around You</span>
            </div>
            <span className="font-black text-[#17FFBF] tracking-widest uppercase">JINXSPRO</span>
          </div>

          {/* Controller HUD Badges */}
          <div className="flex items-center gap-2 text-slate-300 bg-[#0A1526]/80 border border-white/10 px-3.5 py-2 rounded-xl text-xs font-bold backdrop-blur-md">
            <span className="text-white font-extrabold">RT</span>
            <span className="text-emerald-400">1</span>
            <span>👥 {connectedPeerCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
