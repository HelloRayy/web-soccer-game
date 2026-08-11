import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Swords, Bot, Shield, Info, Settings, Menu as MenuIcon, Trophy, ChevronRight, Play } from 'lucide-react';
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
  btnClass: string;
}

const MENU_ITEMS: MenuItemConfig[] = [
  {
    id: '1v1',
    label: 'KICK OFF (1V1 MATCH)',
    subtitle: 'Sharpen your skills in 1 vs 1 Head to Head Local & Remote PVP Match Engine',
    accentColor: '#17FFBF',
    tag: 'PVP STADIUM KICK OFF',
    bgSymbol: '⚽',
    icon: Swords,
    btnClass: 'val-btn-emerald'
  },
  {
    id: '2vBot',
    label: 'WORLD CUP (2VBOT)',
    subtitle: 'Team up with a friend in 2 Players Co-Op vs AI Enemy Bots Tournament',
    accentColor: '#FFD13B',
    tag: 'CHAMPIONS CO-OP ARENA',
    bgSymbol: '🏆',
    icon: Bot,
    btnClass: 'val-btn-gold'
  },
  {
    id: 'extras',
    label: 'EXTRAS (KONTROL SPEC)',
    subtitle: 'Configure Keyboard, Gamepad USB & HP Remote Control Mappings',
    accentColor: '#00D8F6',
    tag: 'TACTICAL CONTROLS & SCHEMATICS',
    bgSymbol: '🎮',
    icon: Info,
    btnClass: 'val-btn-emerald'
  },
  {
    id: 'settings',
    label: 'SETTINGS (CONNECT HP)',
    subtitle: 'WebRTC PeerJS Mobile Remote Connection & Debug Telemetry Route',
    accentColor: '#A855F7',
    tag: 'WEBRTC PEER CONNECTIVITY',
    bgSymbol: '📱',
    icon: Smartphone,
    btnClass: 'val-btn-emerald'
  }
];

const FIFA_SPRING_TRANSITION = {
  type: 'spring' as const,
  stiffness: 950,
  damping: 45,
  mass: 0.6
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
    <div className="relative w-screen h-screen bg-[#060D17] bg-stadium-pattern text-[#E2F1F8] flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden font-['Inter',sans-serif]">
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
        <div className="fixed inset-0 z-50 bg-[#060D17]/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-[#0A1526] border-2 border-[#17FFBF]/40 max-w-md w-full p-6 flex flex-col gap-4 text-[#E2F1F8] relative rounded-xl">
            <button
              onClick={() => setShowControlsModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-none bg-[#0F1E36] border border-[#17FFBF]/60 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-xl font-black text-white flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-wider">
              <Shield className="w-5 h-5 text-[#17FFBF]" /> PETUNJUK KONTROL GAME
            </h3>
            <div className="flex flex-col gap-2.5 text-xs text-slate-300 font-mono">
              <div className="bg-[#060D17] p-3 border border-[#142840] flex justify-between items-center">
                <span className="text-slate-400">P1 Move / Action:</span>
                <span className="text-[#17FFBF] font-bold">WASD + J/K/L + Space</span>
              </div>
              <div className="bg-[#060D17] p-3 border border-[#142840] flex justify-between items-center">
                <span className="text-slate-400">P2 Move / Action:</span>
                <span className="text-amber-400 font-bold">Arrow Keys + Numpad / N,M</span>
              </div>
              <div className="bg-[#060D17] p-3 border border-[#142840] flex justify-between items-center">
                <span className="text-slate-400">Joystick / Gamepad:</span>
                <span className="text-[#17FFBF] font-bold">Plug & Play Controller</span>
              </div>
              <div className="bg-[#060D17] p-3 border border-[#142840] flex justify-between items-center">
                <span className="text-slate-400">HP Remote Controller:</span>
                <span className="text-cyan-400 font-bold">Scan QR Code HP</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 1. TOP-LEFT BRANDING TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="relative z-20 w-full flex justify-between items-start pointer-events-auto pl-2 sm:pl-6 pt-2"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white text-[#060D17] rounded-xl flex items-center justify-center text-2xl font-black transform -rotate-3 shadow-lg">
            ⚽
          </div>
          <h1 className="text-3xl sm:text-5xl font-black italic tracking-tighter text-white font-['Plus_Jakarta_Sans',sans-serif] leading-none uppercase drop-shadow-md">
            FC<span className="text-[#17FFBF]">26</span> SOCCER™
          </h1>
        </div>
      </motion.div>

      {/* RIGHT SIDE: DYNAMIC PLAYER PORTAL PANELS */}
      <div className="hidden md:block absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 w-[540px] lg:w-[620px] h-[500px] pointer-events-none z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentConfig.id}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
            className="w-full h-full relative"
          >
            <div
              className="absolute right-12 top-10 w-[380px] h-[360px] rounded-[48px] border-4 bg-[#0A1526] overflow-hidden flex flex-col items-center justify-center text-center p-6"
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

      {/* 2. CENTER-LEFT MENU NAVIGATION STACK (Electric Mint Teal Active Box #17FFBF) */}
      <div className="relative z-10 my-auto w-full max-w-lg flex flex-col items-start justify-center pl-6 sm:pl-16">
        <div className="flex flex-col gap-2 w-full max-w-sm sm:max-w-md relative">
          {MENU_ITEMS.map((item) => {
            const isActive = activeItem === item.id;
            const ItemIcon = item.icon;

            if (isActive) {
              return (
                <motion.div
                  key={item.id}
                  layoutId="activeFifaBox"
                  transition={FIFA_SPRING_TRANSITION}
                  className="w-full relative cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  {/* Outer Parallelogram Border Frame (#17FFBF) */}
                  <div className="w-full bg-[#17FFBF] p-[2px] clip-parallelogram">
                    {/* Inner Parallelogram Fill */}
                    <div className={`${item.btnClass} clip-parallelogram w-full py-3.5 px-7 text-left group overflow-hidden`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex items-center mr-3">
                            <ItemIcon className="w-5 h-5 text-[#060D17] shrink-0" />
                          </div>

                          <span className="text-lg sm:text-xl font-black tracking-wider uppercase font-['Plus_Jakarta_Sans',sans-serif] text-[#060D17]">
                            {item.label}
                          </span>
                        </div>

                        <Play className="w-5 h-5 fill-[#060D17] text-[#060D17]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // UNSELECTED ITEM: Plain Text Line (Clean & Muted, direct Mint Teal hover #17FFBF)
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveItem(item.id)}
                onClick={() => handleItemClick(item)}
                className="py-2.5 px-4 cursor-pointer group flex items-center justify-between text-slate-400 hover:text-[#17FFBF] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-slate-600 group-hover:bg-[#17FFBF] transition-colors" />
                  <span className="text-lg sm:text-xl font-bold tracking-wider uppercase font-['Plus_Jakarta_Sans',sans-serif]">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. BOTTOM HUD */}
      <div className="relative z-10 w-full flex items-center justify-between pointer-events-auto pt-4 border-t border-[#142840]/80 font-mono text-xs pl-2 sm:pl-6">
        <div className="flex items-center gap-6 font-bold text-slate-300 uppercase">
          <div className="flex items-center gap-2">
            <span className="controller-btn-b">B</span>
            <span>BACK</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="controller-btn-a">A</span>
            <span>SELECT</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-slate-400">
            <span className="px-1.5 py-0.5 bg-[#0A1526] border border-[#142840] text-[10px]">NAV: ▲ ▼ ARROWS / ENTER</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.location.href = '/debug'}
            className="w-9 h-9 bg-[#0A1526] border border-[#142840] hover:border-[#17FFBF] text-slate-300 hover:text-white flex items-center justify-center cursor-pointer transition"
            title="Debug Joysticks"
          >
            <Settings className="w-4 h-4" />
          </button>

          <button
            onClick={() => setShowControlsModal(true)}
            className="w-9 h-9 bg-[#0A1526] border border-[#142840] hover:border-[#17FFBF] text-slate-300 hover:text-white flex items-center justify-center cursor-pointer transition"
            title="Game Menu"
          >
            <MenuIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
