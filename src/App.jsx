import React, { useState } from 'react';
import LiveActivityTicker from './components/LiveActivityTicker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CopilotWorkspace from './components/CopilotWorkspace';
import ActionsDAG from './components/ActionsDAG';
import SecurityRadar from './components/SecurityRadar';
import PricingCalculator from './components/PricingCalculator';
import DashboardView from './components/DashboardView';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import { Command, Sparkles, LayoutDashboard, Globe } from 'lucide-react';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [activeView, setActiveView] = useState('dashboard'); // Default to revised dashboard view!

  return (
    <div className="min-h-screen bg-[#05070d] text-[#f0f6fc] relative selection:bg-purple-500 selection:text-white">
      
      {/* Real-time Telemetry Bar */}
      <LiveActivityTicker />

      {/* Glassmorphic Navbar with View Switcher */}
      <Navbar 
        onOpenCommandPalette={() => setCommandPaletteOpen(true)} 
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Main Page View Switcher */}
      <main>
        {activeView === 'dashboard' ? (
          <DashboardView />
        ) : (
          <>
            <Hero />
            <CopilotWorkspace />
            <ActionsDAG />
            <SecurityRadar />
            <PricingCalculator />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette Modal (Cmd+K) */}
      <CommandPalette 
        isOpen={commandPaletteOpen} 
        onClose={() => setCommandPaletteOpen(false)} 
      />

      {/* Floating Action Trigger Button & View Switcher */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <button 
          onClick={() => setActiveView(activeView === 'dashboard' ? 'landing' : 'dashboard')}
          className="p-3.5 rounded-full bg-[#161b22] border border-white/20 text-gray-200 shadow-2xl hover:border-purple-400 hover:text-white transition-all flex items-center gap-2 text-xs font-semibold"
          title="Toggle Landing vs Dashboard View"
        >
          {activeView === 'dashboard' ? (
            <>
              <Globe className="w-4 h-4 text-purple-400" />
              <span className="hidden sm:inline">Landing Page</span>
            </>
          ) : (
            <>
              <LayoutDashboard className="w-4 h-4 text-teal-400" />
              <span className="hidden sm:inline">Dev Dashboard</span>
            </>
          )}
        </button>

        <button 
          onClick={() => setCommandPaletteOpen(true)}
          className="p-3.5 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 text-white shadow-2xl shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all group flex items-center gap-2 text-xs font-extrabold border border-white/20"
          title="Open Command Palette (Cmd+K)"
        >
          <Sparkles className="w-4 h-4 animate-spin duration-3000 text-amber-300" />
          <span className="hidden sm:inline">Cmd+K Swarm</span>
        </button>
      </div>

    </div>
  );
}
