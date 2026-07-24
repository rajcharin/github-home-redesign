import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, ArrowRight, Play, CheckCircle2, Cpu, Code2, Bot, Layers, Copy, RefreshCw, Zap, Flame, Shield, ArrowUpRight, GitBranch } from 'lucide-react';
import GlobeCanvas from './GlobeCanvas';

const PRESET_PROMPTS = [
  {
    id: 'rajcharin-wolf',
    label: '🐺 Wolf Mode: Go + Rust Zero Trust',
    speed: '164 tokens/sec',
    latency: '34ms',
    prompt: 'Scaffold high-throughput Axum/Rust microservice with Go API Gateway, zero-trust security & GKE DAG pipeline.',
    code: `// rajcharin/devsecops/main.rs
use axum::{routing::get, Router};
use devsecops::ZeroTrustGuard;

#[tokio::main]
async fn main() {
    let guard = ZeroTrustGuard::init("THREAT_LEVEL_ZERO");
    let app = Router::new()
        .route("/healthz", get(|| async { "STATUS: STABLE ✓" }))
        .layer(guard.middleware());

    println!("🐺 [WOLF MODE ACTIVATED] Server online on 0.0.0.0:8080");
    axum::Server::bind(&"0.0.0.0:8080".parse().unwrap()).serve(app.into_make_service()).await.unwrap();
}`
  },
  {
    id: 'next-nestjs',
    label: '✨ Next.js + NestJS + Kotlin',
    speed: '182 tokens/sec',
    latency: '28ms',
    prompt: 'Create full-stack enterprise architecture with Spring Boot / Kotlin microservices and Next.js 15 App Router.',
    code: `// github-copilot/agent.ts
import { AgentSwarm } from '@github/copilot-sdk';

export const enterpriseSwarm = new AgentSwarm({
  model: 'gemini-1.5-pro',
  stack: ['Next.js 15', 'NestJS', 'Kotlin', 'Spring Boot'],
  securityPolicy: 'DevSecOps Hardened'
});

await enterpriseSwarm.executeGoal({
  task: 'Build Auth + Zero Trust Session Refresh flow',
  verify: 'pnpm test && pnpm security:audit'
});`
  },
  {
    id: 'security-audit',
    label: '🛡️ DevSecOps: Threat Level Zero Scan',
    speed: '210 tokens/sec',
    latency: '19ms',
    prompt: 'Run automated CodeQL scan, secret push protection, and dependency vulnerability auto-patching.',
    code: `// .github/workflows/devsecops-radar.yml
name: DevSecOps Radar Scan
on: [push, pull_request]
jobs:
  codeql-audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: github/codeql-action/analyze@v3
        with:
          category: "/language:rust,go,typescript"
          auto-patch-pr: true`
  }
];

export default function Hero() {
  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const [customInput, setCustomInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [displayedCode, setDisplayedCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Gemini 1.5 Pro');
  const [activeTab, setActiveTab] = useState('code'); // 'code' | 'diff' | 'terminal'

  const currentPreset = PRESET_PROMPTS[activePromptIndex];

  useEffect(() => {
    let timeoutId;
    setIsGenerating(true);
    setDisplayedCode('');
    let idx = 0;
    const codeToType = currentPreset.code;

    const interval = setInterval(() => {
      if (idx < codeToType.length) {
        setDisplayedCode(prev => prev + codeToType.charAt(idx));
        idx++;
      } else {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 12);

    return () => clearInterval(interval);
  }, [activePromptIndex]);

  const handleCopy = () => {
    navigator.clipboard.writeText(displayedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-grid-pattern min-h-[90vh] flex flex-col justify-center">
      
      {/* Background Interactive Particle Canvas */}
      <GlobeCanvas />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-purple-600/25 via-blue-600/20 to-teal-400/15 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

      <div className="container-xl relative z-10">
        
        {/* Top Feature Pill */}
        <div className="flex justify-center mb-8">
          <a href="#copilot" className="badge-pill hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-pointer group shadow-xl shadow-purple-500/10">
            <span className="flex h-2.5 w-2.5 rounded-full bg-teal-400 animate-ping" />
            <span className="flex h-2.5 w-2.5 rounded-full bg-teal-400" />
            <span className="text-gray-200 group-hover:text-white font-semibold">GitHub Copilot Workspace 2.0 & Multi-Agent Swarms</span>
            <span className="text-purple-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
              Explore Swarms <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05]">
            Build the Future with <br />
            <span className="gradient-text-purple-blue">AI-Powered Swarms</span>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            From prompt to production. Harness multi-agent swarms, visual DAG workflows, and continuous DevSecOps radar in one unified ecosystem.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="#copilot" className="btn-ai-glow text-base py-4 px-8 shadow-2xl">
              <Sparkles className="w-5 h-5 animate-spin duration-3000" />
              <span>Launch Copilot Swarm</span>
            </a>

            <a href="#actions" className="btn-secondary text-base py-4 px-8">
              <Play className="w-5 h-5 text-purple-400 fill-purple-400/20" />
              <span>Watch Interactive DAG Demo</span>
            </a>
          </div>
        </div>

        {/* Super-Enhanced Interactive AI Code Sandbox */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="glass-panel glass-panel-glow p-3 sm:p-5 rounded-3xl bg-[#0d1117]/95 border-white/15 shadow-2xl relative">
            
            {/* Top Prompt Controls Header */}
            <div className="p-4 rounded-2xl bg-[#161b22]/90 border border-white/10 space-y-4">
              
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400">
                  <Bot className="w-4 h-4 text-purple-400" />
                  <span>Copilot Multi-Model Arena</span>
                </div>

                {/* Model Selector & Telemetry */}
                <div className="flex items-center gap-4 text-xs">
                  <div className="hidden sm:flex items-center gap-3 text-gray-400 font-mono">
                    <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-400" /> {currentPreset.speed}</span>
                    <span className="flex items-center gap-1"><Flame className="w-3 h-3 text-purple-400" /> {currentPreset.latency}</span>
                  </div>

                  <select 
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="bg-[#0d1117] text-purple-300 border border-purple-500/40 rounded-xl px-3 py-1.5 text-xs font-semibold outline-none focus:border-purple-400 cursor-pointer shadow-inner"
                  >
                    <option>Gemini 1.5 Pro</option>
                    <option>Claude 3.5 Sonnet</option>
                    <option>GPT-4o</option>
                    <option>DeepSeek Coder V2</option>
                  </select>
                </div>
              </div>

              {/* Preset Prompts Pills */}
              <div className="flex flex-wrap gap-2">
                {PRESET_PROMPTS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActivePromptIndex(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      activePromptIndex === idx
                        ? 'bg-gradient-to-r from-purple-600/40 to-blue-600/40 text-white border border-purple-400 shadow-lg shadow-purple-500/20'
                        : 'bg-white/5 text-gray-400 hover:text-gray-200 border border-white/5 hover:border-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Custom Input prompt box */}
              <div className="flex gap-2">
                <input 
                  type="text"
                  placeholder="Or describe your custom app requirement..."
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  className="flex-1 bg-[#0d1117] border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-500 outline-none focus:border-purple-500 font-mono"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && customInput.trim()) {
                      setActivePromptIndex((activePromptIndex + 1) % PRESET_PROMPTS.length);
                    }
                  }}
                />
                <button 
                  onClick={() => setActivePromptIndex((activePromptIndex + 1) % PRESET_PROMPTS.length)}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-lg shadow-purple-600/30"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Execute Prompt</span>
                </button>
              </div>

            </div>

            {/* Code Terminal View with Tab Switcher */}
            <div className="mt-4 code-terminal">
              
              <div className="code-terminal-header">
                <div className="flex items-center gap-4">
                  <div className="window-dots">
                    <div className="window-dot dot-red" />
                    <div className="window-dot dot-yellow" />
                    <div className="window-dot dot-green" />
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 text-xs font-mono">
                    <button 
                      onClick={() => setActiveTab('code')}
                      className={`px-3 py-1 rounded-lg transition-colors flex items-center gap-1.5 ${
                        activeTab === 'code' ? 'bg-purple-600/30 text-purple-300 font-bold border border-purple-500/30' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Code2 className="w-3.5 h-3.5" /> main.rs
                    </button>
                    <button 
                      onClick={() => setActiveTab('diff')}
                      className={`px-3 py-1 rounded-lg transition-colors flex items-center gap-1.5 ${
                        activeTab === 'diff' ? 'bg-purple-600/30 text-purple-300 font-bold border border-purple-500/30' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <GitBranch className="w-3.5 h-3.5" /> AI Diff (+142 -0)
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {isGenerating && (
                    <span className="flex items-center gap-1.5 text-xs text-purple-400 font-mono animate-pulse">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Generating AST tokens...
                    </span>
                  )}
                  <button 
                    onClick={handleCopy}
                    className="p-1.5 rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    title="Copy Code"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Code Box */}
              <div className="p-4 text-xs sm:text-sm font-mono overflow-x-auto min-h-[190px] bg-[#070a0f] text-gray-200 leading-relaxed">
                {activeTab === 'code' ? (
                  <pre className="whitespace-pre-wrap">
                    <code>{displayedCode}</code>
                    {isGenerating && <span className="inline-block w-2 h-4 bg-purple-400 ml-1 animate-ping" />}
                  </pre>
                ) : (
                  <div className="space-y-1 text-xs">
                    <div className="text-teal-400">+ // DevSecOps zero-trust guard initialized</div>
                    <div className="text-teal-400">+ use axum::routing::get;</div>
                    <div className="text-teal-400">+ pub async fn zero_trust_handler() {"{"} ... {"}"}</div>
                    <div className="text-gray-500">// 140 lines added by Copilot Agent</div>
                  </div>
                )}
              </div>

              {/* Terminal Footer Info */}
              <div className="p-3 bg-[#161b22] border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-gray-400 gap-2">
                <div className="flex items-center gap-2 text-teal-300 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Agent validation passed (0 errors, Threat Level: ZERO 🛡️)</span>
                </div>
                <a href="#copilot" className="text-purple-300 font-bold hover:underline flex items-center gap-1">
                  Execute in Web Container <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
