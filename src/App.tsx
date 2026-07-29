import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { GameView } from './components/GameView';
import { MobileControllerView } from './components/MobileControllerView';
import { Agentation } from 'agentation';

const Navigation: React.FC = () => {
  const location = useLocation();

  // Hide top header on game view `/` and controller `/controller` for full edge-to-edge screen
  if (location.pathname === '/' || location.pathname === '/controller') {
    return null;
  }

  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-slate-100 p-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-6">
        <Link to="/" className="font-extrabold text-xl tracking-tight text-cyan-400 hover:text-cyan-300">
          ⚽ Soccer Web Game
        </Link>
        <Link to="/" className="text-sm font-semibold hover:text-cyan-400 transition">
          Arena Game
        </Link>
        <Link to="/controller" className="text-sm font-semibold hover:text-cyan-400 transition">
          📱 Mobile Remote
        </Link>
      </div>
    </nav>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col select-none">
        <Navigation />

        <Routes>
          <Route path="/" element={<GameView />} />
          <Route path="/controller" element={<MobileControllerView />} />
        </Routes>

        {/* Agentation Visual Feedback & Annotation Devtool */}
        <Agentation />
      </div>
    </BrowserRouter>
  );
}

export default App;
