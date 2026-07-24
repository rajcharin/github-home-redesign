import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle2, Lock, Sparkles, RefreshCw, Key, ArrowRight, Eye, ShieldAlert } from 'lucide-react';

export default function SecurityRadar() {
  const [scanning, setScanning] = useState(false);
  const [patched, setPatched] = useState(false);

  const findings = [
    {
      id: 1,
      severity: 'Critical',
      title: 'Potential JWT Secret Leak in public config',
      location: 'config/auth.json:L14',
      cwe: 'CWE-798: Hardcoded Credentials',
      status: patched ? 'Auto-Patched by AI' : 'Vulnerable'
    },
    {
      id: 2,
      severity: 'High',
      title: 'Outdated NPM Dependency (express < 4.19.2)',
      location: 'package.json:L28',
      cwe: 'CVE-2024-29041',
      status: patched ? 'Auto-Patched by AI' : 'Vulnerable'
    },
    {
      id: 3,
      severity: 'Medium',
      title: 'Unescaped SQL query string parameter',
      location: 'db/users.ts:L45',
      cwe: 'CWE-89: SQL Injection',
      status: patched ? 'Auto-Patched by AI' : 'Vulnerable'
    }
  ];

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
    }, 1500);
  };

  const handleApplyFixes = () => {
    setPatched(true);
  };

  return (
    <section id="security" className="py-24 relative overflow-hidden border-t border-white/10">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-teal-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5" /> Advanced Security Radar & Secret Push Protection
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Block vulnerabilities before <br />
              they reach your main branch.
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm sm:text-base leading-relaxed">
            Automated CodeQL analysis, push protection against exposed API keys, and instant AI-generated patch PRs for 100% compliant security.
          </p>
        </div>

        {/* Security Radar Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Radar Scanner Visualizer (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-8 bg-[#0d1117]/95 rounded-3xl border-white/10 text-center space-y-6 relative overflow-hidden">
            <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
              
              {/* Radar Circles */}
              <div className="absolute inset-0 rounded-full border border-teal-500/20 animate-ping opacity-30" />
              <div className="absolute inset-4 rounded-full border border-teal-500/30" />
              <div className="absolute inset-12 rounded-full border border-teal-500/40" />

              {/* Pulsing Radar Sweep */}
              {scanning && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500/30 to-transparent animate-spin duration-1000" />
              )}

              {/* Center Shield Icon */}
              <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 relative z-10 shadow-lg shadow-teal-500/20">
                <Shield className="w-8 h-8" />
              </div>
            </div>

            <div>
              <div className="text-xl font-bold text-white">Continuous Security Radar</div>
              <p className="text-xs text-gray-400 mt-1">Scanning 1.2M lines of code across all active branches</p>
            </div>

            <div className="flex justify-center gap-3">
              <button 
                onClick={handleScan} 
                disabled={scanning}
                className="btn-secondary text-xs py-2 px-4"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${scanning ? 'animate-spin text-teal-400' : ''}`} />
                <span>{scanning ? 'Scanning Codebase...' : 'Run Security Radar'}</span>
              </button>
            </div>
          </div>

          {/* Findings & Auto-Fix Panel (7 cols) */}
          <div className="lg:col-span-7 glass-panel glass-panel-glow p-6 bg-[#0d1117]/95 rounded-3xl border-white/10 space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-400" />
                <span className="font-semibold text-white text-sm">Security Vulnerability Audit Report</span>
              </div>
              <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full ${
                patched ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}>
                {patched ? '3 Vulnerabilities Remediated' : '3 Actionable Findings'}
              </span>
            </div>

            {/* Findings List */}
            <div className="space-y-3">
              {findings.map((item) => (
                <div key={item.id} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        item.severity === 'Critical' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                        item.severity === 'High' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
                        'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}>
                        {item.severity}
                      </span>
                      <span className="text-sm font-semibold text-white">{item.title}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                      <span>{item.location}</span>
                      <span>•</span>
                      <span>{item.cwe}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {patched ? (
                      <span className="flex items-center gap-1 text-xs font-mono text-teal-400">
                        <CheckCircle2 className="w-4 h-4" /> Patched
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-mono text-amber-400">
                        <AlertTriangle className="w-4 h-4" /> Needs Fix
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* AI Auto-Fix Action Bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="text-xs text-gray-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Copilot Security Agent ready to auto-generate fix PR</span>
              </div>

              <button 
                onClick={handleApplyFixes}
                disabled={patched}
                className={`btn-primary text-xs py-2 px-4 ${
                  patched ? 'bg-teal-600 cursor-not-allowed opacity-80' : 'bg-gradient-to-r from-purple-600 to-teal-600'
                }`}
              >
                <span>{patched ? 'All Vulnerabilities Patched!' : 'Apply Copilot AI Security Fixes'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
