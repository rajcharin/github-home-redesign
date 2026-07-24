import React, { useState, useEffect } from 'react';
import { Sparkles, Search, ChevronDown, Command, Menu, X, ArrowRight, Shield, Terminal, Cpu, GitBranch } from 'lucide-react';

function GithubLogo({ className = "w-6 h-6 text-white" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Navbar({ onOpenCommandPalette, activeView = 'landing', setActiveView }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#05070d]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container-xl flex items-center justify-between">
        
        {/* Left: Brand Logo & Links */}
        <div className="flex items-center gap-8">
          <a href="#" onClick={() => setActiveView?.('landing')} className="flex items-center gap-2 group text-white font-bold text-xl tracking-tight">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 via-blue-600 to-teal-400 p-[1px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all">
              <div className="w-full h-full bg-[#0d1117] rounded-full flex items-center justify-center">
                <GithubLogo className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 absolute -top-0.5 -right-0.5 animate-pulse" />
            </div>
            <span className="flex items-center gap-1.5 font-extrabold text-2xl tracking-tight text-white">
              GitHub <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300">AI Next</span>
            </span>
          </a>

          {/* View Switcher Tabs */}
          <div className="hidden sm:flex items-center p-1 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold">
            <button
              onClick={() => setActiveView?.('landing')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                activeView === 'landing' 
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20 font-bold' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              🌐 Landing Home
            </button>
            <button
              onClick={() => setActiveView?.('dashboard')}
              className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeView === 'dashboard' 
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20 font-bold' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              ⚡ Dev Dashboard
            </button>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium text-gray-300">
            <a href="#copilot" onClick={() => setActiveView?.('landing')} className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors">Copilot Swarms</a>
            <a href="#actions" onClick={() => setActiveView?.('landing')} className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors">Actions DAG</a>
            <a href="#security" onClick={() => setActiveView?.('landing')} className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors">Security Radar</a>
            <a href="#pricing" onClick={() => setActiveView?.('landing')} className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors">Pricing</a>
            <a 
              href="https://github.com/rajcharin/rajcharin" 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30 hover:bg-purple-600/30 transition-all font-mono text-xs flex items-center gap-1.5"
            >
              <span>🐺 rajcharin</span>
            </a>
          </nav>
        </div>

        {/* Right: Search / Palette & Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button 
            onClick={onOpenCommandPalette}
            className="flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-gray-400 hover:text-gray-200 text-xs transition-all shadow-inner group"
          >
            <Search className="w-3.5 h-3.5 text-gray-400 group-hover:text-purple-400 transition-colors" />
            <span>Search or jump to...</span>
            <kbd className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-gray-300 font-mono">
              <Command className="w-2.5 h-2.5" /> K
            </kbd>
          </button>

          <button 
            onClick={() => setActiveView?.('dashboard')}
            className="btn-primary text-xs py-2 px-4"
          >
            <span>Open Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>


        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel bg-[#0d1117]/98 border-t border-white/10 p-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <button 
            onClick={() => { onOpenCommandPalette(); setMobileMenuOpen(false); }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-purple-400" /> Search command palette...
            </span>
            <kbd className="px-2 py-0.5 rounded bg-white/10 text-xs font-mono">⌘K</kbd>
          </button>

          <div className="flex flex-col gap-2 font-medium text-gray-200">
            <a href="#copilot" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg hover:bg-white/5">Copilot & AI Swarms</a>
            <a href="#actions" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg hover:bg-white/5">Actions Workflows</a>
            <a href="#security" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg hover:bg-white/5">Security Radar</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg hover:bg-white/5">Pricing</a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a href="#pricing" className="btn-primary justify-center w-full">Start Free Trial</a>
          </div>
        </div>
      )}
    </header>
  );
}
