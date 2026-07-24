import React, { useState, useEffect } from 'react';
import { GitPullRequest, ShieldCheck, Zap, Bot, Terminal, Activity } from 'lucide-react';

const INITIAL_EVENTS = [
  { id: 1, icon: GitPullRequest, color: 'text-purple-400', text: '@rajcharin merged PR #483 [Go + Rust Zero Trust API]' },
  { id: 2, icon: ShieldCheck, color: 'text-teal-400', text: 'Copilot Security Agent auto-patched CVE-2024-29041 in 0.4s' },
  { id: 3, icon: Zap, color: 'text-amber-400', text: 'Actions DAG pipeline #1492 deployed to GKE us-central1-a' },
  { id: 4, icon: Bot, color: 'text-blue-400', text: 'Multi-agent swarm created 14 unit tests with 100% pass rate' }
];

export default function LiveActivityTicker() {
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % events.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [events.length]);

  const current = events[activeIdx];
  const Icon = current.icon;

  return (
    <div className="bg-[#090d13]/90 border-b border-white/10 py-2 px-4 backdrop-blur-md relative z-40">
      <div className="container-xl flex items-center justify-between text-xs font-mono">
        
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-teal-400 font-bold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 animate-pulse" /> Live Telemetry
          </span>
          <span className="text-gray-600">|</span>
          <div className="flex items-center gap-2 text-gray-300 animate-in fade-in slide-in-from-bottom-1 duration-300">
            <Icon className={`w-3.5 h-3.5 ${current.color}`} />
            <span>{current.text}</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-gray-400">
          <span>Global Latency: <strong className="text-teal-300">18ms</strong></span>
          <span>Security Radar: <strong className="text-purple-300">Active 🛡️</strong></span>
        </div>

      </div>
    </div>
  );
}
