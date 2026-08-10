import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LobbyView } from './components/LobbyView';
import { GameView } from './components/GameView';
import { MobileControllerView } from './components/MobileControllerView';
import { DebugControllerView } from './components/DebugControllerView';
import { DeviceType } from './components/ControllerSelectModal';
import { HostPeerService } from './services/peerService';
import { Agentation } from 'agentation';

const MainGameContainer: React.FC = () => {
  const [currentView, setCurrentView] = useState<'lobby' | 'game'>('lobby');
  const [selectedMode, setSelectedMode] = useState<'1v1' | '2vBot'>('1v1');
  const [p1Device, setP1Device] = useState<DeviceType>('keyboard1');
  const [p2Device, setP2Device] = useState<DeviceType>('keyboard2');

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

  const handleStartMatch = (mode: '1v1' | '2vBot', p1Dev?: DeviceType, p2Dev?: DeviceType) => {
    setSelectedMode(mode);
    if (p1Dev) setP1Device(p1Dev);
    if (p2Dev) setP2Device(p2Dev);
    setCurrentView('game');
  };

  const handleReturnToLobby = () => {
    setCurrentView('lobby');
  };

  if (currentView === 'lobby') {
    return (
      <LobbyView
        onStartMatch={handleStartMatch}
        peerRoomId={peerRoomId}
        isPeerConnected={isPeerConnected}
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
    />
  );
};

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col select-none overflow-hidden">
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
