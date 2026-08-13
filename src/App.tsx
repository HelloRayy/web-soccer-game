import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SplashScreen } from './components/SplashScreen';
import { LobbyView } from './components/LobbyView';
import { TeamSelectView, CharacterData, PlayerNode } from './components/TeamSelectView';
import { GameView } from './components/GameView';
import { MobileControllerView } from './components/MobileControllerView';
import { DebugControllerView } from './components/DebugControllerView';
import { DeviceType } from './components/ControllerSelectModal';
import { HostPeerService } from './services/peerService';
import { Agentation } from 'agentation';

const MainGameContainer: React.FC = () => {
  const [currentView, setCurrentView] = useState<'splash' | 'lobby' | 'team-select' | 'game'>('splash');
  const [selectedMode, setSelectedMode] = useState<'1v1' | '2vBot'>('1v1');
  const [p1Device, setP1Device] = useState<DeviceType>('keyboard1');
  const [p2Device, setP2Device] = useState<DeviceType>('keyboard2');
  const [p1Character, setP1Character] = useState<CharacterData | null>(null);
  const [p2Character, setP2Character] = useState<CharacterData | null>(null);
  const [customSpawns, setCustomSpawns] = useState<PlayerNode[] | null>(null);

  const [peerRoomId, setPeerRoomId] = useState('8492');
  const [isPeerConnected, setIsPeerConnected] = useState(false);
  const [connectedPeerCount, setConnectedPeerCount] = useState(0);
  const peerServiceRef = useRef<HostPeerService | null>(null);

  useEffect(() => {
    const hostService = new HostPeerService();
    peerServiceRef.current = hostService;

    hostService.onConnectionStateChange = (connected) => {
      setIsPeerConnected(connected);
    };

    hostService.onPeerCountChange = (count) => {
      setConnectedPeerCount(count);
    };

    hostService.init().then((roomId) => {
      setPeerRoomId(roomId);
    });

    return () => {
      hostService.destroy();
    };
  }, []);

  const handleStartFromSplash = () => {
    setCurrentView('lobby');
  };

  // Step 1: Confirm Controllers in Lobby ➔ Advance to Team Selection Screen (PES Flow)
  const handleConfirmControllers = (mode: '1v1' | '2vBot', p1Dev?: DeviceType, p2Dev?: DeviceType) => {
    setSelectedMode(mode);
    if (p1Dev) setP1Device(p1Dev);
    if (p2Dev) setP2Device(p2Dev);
    setCurrentView('team-select');
  };

  // Step 2: Confirm Teams/Characters in TeamSelectView ➔ Launch Match Engine with Custom Spawns
  const handleConfirmTeamsAndStart = (p1Char: CharacterData, p2Char: CharacterData, spawns: PlayerNode[]) => {
    setP1Character(p1Char);
    setP2Character(p2Char);
    setCustomSpawns(spawns);
    setCurrentView('game');
  };

  const handleReturnToLobby = () => {
    setCurrentView('lobby');
  };

  if (currentView === 'splash') {
    return <SplashScreen onStartGame={handleStartFromSplash} />;
  }

  if (currentView === 'lobby') {
    return (
      <LobbyView
        onStartMatch={handleConfirmControllers}
        peerRoomId={peerRoomId}
        isPeerConnected={isPeerConnected}
        connectedPeerCount={connectedPeerCount}
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
      customSpawns={customSpawns}
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
