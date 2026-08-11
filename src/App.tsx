import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LobbyView } from './components/LobbyView';
import { TeamSelectView, CharacterData } from './components/TeamSelectView';
import { GameView } from './components/GameView';
import { MobileControllerView } from './components/MobileControllerView';
import { DebugControllerView } from './components/DebugControllerView';
import { DeviceType } from './components/ControllerSelectModal';
import { HostPeerService } from './services/peerService';
import { Agentation } from 'agentation';

const MainGameContainer: React.FC = () => {
  const [currentView, setCurrentView] = useState<'lobby' | 'team-select' | 'game'>('lobby');
  const [selectedMode, setSelectedMode] = useState<'1v1' | '2vBot'>('1v1');
  const [p1Device, setP1Device] = useState<DeviceType>('keyboard1');
  const [p2Device, setP2Device] = useState<DeviceType>('keyboard2');
  const [p1Character, setP1Character] = useState<CharacterData | null>(null);
  const [p2Character, setP2Character] = useState<CharacterData | null>(null);

  // Shared WebRTC PeerJS Host Service across Lobby & Game Views
  const [peerRoomId, setPeerRoomId] = useState('8492');
  const [isPeerConnected, setIsPeerConnected] = useState(false);
  const peerServiceRef = useRef<HostPeerService | null>(null);

  useEffect(() => {
    const hostService = new HostPeerService();
    peerServiceRef.current = hostService;

    hostService.onConnectionStateChange = (connected) => {
      setIsPeerConnected(connected);
    };

    hostService.init().then((roomId) => {
      setPeerRoomId(roomId);
    });

    return () => {
      hostService.destroy();
    };
  }, []);

  // Step 1: Confirm Controllers in Lobby ➔ Advance to Team Selection Screen (PES Flow)
  const handleConfirmControllers = (mode: '1v1' | '2vBot', p1Dev?: DeviceType, p2Dev?: DeviceType) => {
    setSelectedMode(mode);
    if (p1Dev) setP1Device(p1Dev);
    if (p2Dev) setP2Device(p2Dev);
    setCurrentView('team-select');
  };

  // Step 2: Confirm Teams/Characters in TeamSelectView ➔ Launch Match Engine
  const handleConfirmTeamsAndStart = (p1Char: CharacterData, p2Char: CharacterData) => {
    setP1Character(p1Char);
    setP2Character(p2Char);
    setCurrentView('game');
  };

  const handleReturnToLobby = () => {
    setCurrentView('lobby');
  };

  if (currentView === 'lobby') {
    return (
      <LobbyView
        onStartMatch={handleConfirmControllers}
        peerRoomId={peerRoomId}
        isPeerConnected={isPeerConnected}
      />
    );
  }

  if (currentView === 'team-select') {
    return (
      <TeamSelectView
        mode={selectedMode}
        p1Device={p1Device}
        p2Device={p2Device}
        onBackToControllers={() => setCurrentView('lobby')}
        onConfirmStartGame={handleConfirmTeamsAndStart}
      />
    );
  }

  return (
    <GameView
      selectedMode={selectedMode}
      p1Device={p1Device}
      p2Device={p2Device}
      onReturnToLobby={handleReturnToLobby}
      peerRoomId={peerRoomId}
      isPeerConnected={isPeerConnected}
      hostPeerService={peerServiceRef.current}
    />
  );
};

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#060D17] text-[#E2F1F8] flex flex-col select-none overflow-x-hidden font-['Inter',sans-serif]">
        <Routes>
          <Route path="/" element={<MainGameContainer />} />
          <Route path="/controller" element={<MobileControllerView />} />
          <Route path="/debug" element={<DebugControllerView />} />
        </Routes>

        {/* Agentation Visual Feedback & Annotation Devtool */}
        <Agentation />
      </div>
    </BrowserRouter>
  );
}

export default App;
