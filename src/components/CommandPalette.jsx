import React, { useState, useEffect } from 'react';
import { Search, Command, Sparkles, GitBranch, Shield, Zap, ArrowRight, X, Terminal, Cpu } from 'lucide-react';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent toggles
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commands = [
    {
      id: 'copilot',
      category: 'Features',
      icon: Sparkles,
      color: 'text-purple-400',
      title: 'Copilot AI Swarms Demo',
      description: 'Explore multi-agent code creation & automated PRs',
      action: () => {
        window.location.hash = '#copilot';
        onClose();
      }
    },
    {
      id: 'actions',
      category: 'Features',
      icon: GitBranch,
      color: 'text-blue-400',
      title: 'GitHub Actions Visual DAG',
      description: 'Interactive node graph & live build console',
      action: () => {
        window.location.hash = '#actions';
        onClose();
      }
    },
    {
      id: 'security',
      category: 'Features',
      icon: Shield,
      color: 'text-teal-400',
      title: 'Security Radar & Secret Scanning',
      description: 'Real-time CWE scanner & AI automated patch generator',
      action: () => {
        window.location.hash = '#security';
        onClose();
      }
    },
    {
      id: 'pricing',
      category: 'Navigation',
      icon: Zap,
      color: 'text-amber-400',
      title: 'Interactive Pricing Calculator',
      description: 'Calculate seat estimation & plan breakdown',
      action: () => {
        window.location.hash = '#pricing';
        onClose();
      }
    }
  ];

  const filtered = commands.filter(c => 
    c.title.toLowerCase().includes(query.toLowerCase()) || 
    c.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-150">
      
      <div className="w-full max-w-xl glass-panel bg-[#0d1117]/98 border-white/20 shadow-2xl rounded-3xl overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Input header */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input 
            type="text"
            placeholder="Type a command or search feature..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none outline-none text-white placeholder-gray-500 text-sm font-medium"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-2 max-h-80 overflow-y-auto space-y-1">
          {filtered.length > 0 ? (
            filtered.map((cmd) => {
              const Icon = cmd.icon;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className="w-full p-3 rounded-2xl flex items-center justify-between hover:bg-white/5 transition-colors text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-white/5 ${cmd.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {cmd.title}
                      </div>
                      <div className="text-xs text-gray-400">{cmd.description}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </button>
              );
            })
          ) : (
            <div className="p-8 text-center text-xs text-gray-400 font-mono">
              No matching commands found for "{query}". Try searching "Copilot", "Actions", or "Pricing".
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-[#161b22] border-t border-white/5 flex items-center justify-between text-xs text-gray-400 font-mono">
          <div className="flex items-center gap-2">
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">↵</kbd>
            <span>to select</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] ml-2">esc</kbd>
            <span>to close</span>
          </div>
          <div className="flex items-center gap-1 text-purple-400">
            <Command className="w-3 h-3" /> GitHub AI Navigation
          </div>
        </div>

      </div>
    </div>
  );
}
