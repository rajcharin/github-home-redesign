import React, { useState } from 'react';
import { 
  GitPullRequest, GitBranch, Shield, Sparkles, Star, Search, Plus, 
  Terminal, CheckCircle2, AlertTriangle, Play, RefreshCw, Cpu, Layers, 
  BookOpen, Lock, Activity, ArrowRight, UserCheck, Bot, ExternalLink, Filter
} from 'lucide-react';
import confetti from 'canvas-confetti';

const REPOSITORIES = [
  {
    name: 'rajcharin/rajcharin',
    description: '🐺 Wolf Mode • DevSecOps Lead Profile README & Skill Matrix',
    language: 'Go',
    langColor: '#00ADD8',
    stars: 142,
    forks: 28,
    isPrivate: false,
    updated: 'Just now'
  },
  {
    name: 'rajcharin/github-home-redesign',
    description: '✨ Super-enhanced GitHub Homepage & Developer Dashboard React app',
    language: 'TypeScript',
    langColor: '#3178C6',
    stars: 89,
    forks: 12,
    isPrivate: false,
    updated: '5m ago'
  },
  {
    name: 'rajcharin/gke-microservices-zero-trust',
    description: '🛡️ Rust + Go Microservices with Istio Service Mesh & CodeQL radar',
    language: 'Rust',
    langColor: '#DEA584',
    stars: 210,
    forks: 45,
    isPrivate: true,
    updated: '1h ago'
  },
  {
    name: 'rajcharin/poc-manifests',
    description: '⚡ POC Kubernetes manifests for GitOps ArgoCD automated deployments',
    language: 'HCL',
    langColor: '#844FBA',
    stars: 64,
    forks: 8,
    isPrivate: true,
    updated: '3h ago'
  },
  {
    name: 'rajcharin/cortex-ventures',
    description: '🧠 Nexus Cortex Enterprise Vault & Multi-Agent Knowledge System',
    language: 'Kotlin',
    langColor: '#A97BFF',
    stars: 175,
    forks: 31,
    isPrivate: true,
    updated: '1d ago'
  }
];

const RECENT_ACTIVITIES = [
  {
    id: 1,
    type: 'pr',
    repo: 'rajcharin/rajcharin',
    title: 'feat: add skill icons & DevSecOps badges to profile',
    user: 'rajcharin',
    time: '12m ago',
    status: 'Merged',
    statusBg: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
  },
  {
    id: 2,
    type: 'agent',
    repo: 'rajcharin/github-home-redesign',
    title: 'Copilot Swarm generated 24 unit tests (100% coverage)',
    user: 'Copilot Agent',
    time: '25m ago',
    status: 'Passed',
    statusBg: 'bg-teal-500/20 text-teal-300 border-teal-500/30'
  },
  {
    id: 3,
    type: 'security',
    repo: 'rajcharin/gke-microservices-zero-trust',
    title: 'CodeQL Security Scan: 0 Critical, 0 High findings (Threat Level Zero)',
    user: 'Security Radar',
    time: '1h ago',
    status: 'Hardened 🛡️',
    statusBg: 'bg-teal-500/20 text-teal-300 border-teal-500/30'
  },
  {
    id: 4,
    type: 'actions',
    repo: 'rajcharin/poc-manifests',
    title: 'Actions Workflow #1492: ArgoCD Sync deployed to GKE us-central1',
    user: 'GitHub Actions',
    time: '2h ago',
    status: 'Success',
    statusBg: 'bg-blue-500/20 text-blue-300 border-blue-500/30'
  }
];

export default function DashboardView() {
  const [repoSearch, setRepoSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'prs' | 'security' | 'actions'
  const [agentPrompt, setAgentPrompt] = useState('');
  const [agentRunning, setAgentRunning] = useState(false);
  const [agentOutput, setAgentOutput] = useState('');
  const [selectedRepo, setSelectedRepo] = useState('rajcharin/rajcharin');

  const filteredRepos = REPOSITORIES.filter(r => 
    r.name.toLowerCase().includes(repoSearch.toLowerCase()) || 
    r.description.toLowerCase().includes(repoSearch.toLowerCase())
  );

  const handleRunSwarm = () => {
    if (!agentPrompt.trim()) return;
    setAgentRunning(true);
    setAgentOutput(`❯ Copilot Agent Swarm initializing on ${selectedRepo}...\n[1/3] Parsing specification...\n[2/3] Generating TypeScript AST & running tests...\n[3/3] Created PR #842 with 100% test pass rate!`);

    setTimeout(() => {
      setAgentRunning(false);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
    }, 1800);
  };

  return (
    <div className="pt-24 pb-20 container-xl space-y-8 animate-in fade-in duration-300">
      
      {/* Top Welcome & Quick Actions Bar */}
      <div className="glass-panel p-6 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#0d1117] to-[#0d1117] border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-teal-400 p-[1px] shadow-lg shadow-purple-500/20">
              <div className="w-full h-full bg-[#0d1117] rounded-2xl flex items-center justify-center font-bold text-xl text-white font-mono">
                RC
              </div>
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-teal-400 border-2 border-[#0d1117] shadow-sm animate-pulse" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-white">Welcome back, rajcharin</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono">
                🐺 Wolf Mode Active
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              DevSecOps Tech Lead • Threat Level: <strong className="text-teal-400 font-mono">ZERO (Hardened 🛡️)</strong>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button className="btn-secondary text-xs py-2 px-4">
            <Plus className="w-4 h-4 text-purple-400" />
            <span>New Repository</span>
          </button>

          <button 
            onClick={() => {
              setAgentPrompt('Audit zero trust security rules on main branch');
              handleRunSwarm();
            }}
            className="btn-primary text-xs py-2 px-4 bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-500 hover:to-teal-500"
          >
            <Sparkles className="w-4 h-4 animate-spin duration-3000" />
            <span>Launch Agent Swarm</span>
          </button>
        </div>
      </div>

      {/* Main Dashboard 3-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sidebar (4 cols): Repositories & Organizations */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Repositories Card */}
          <div className="glass-panel p-5 bg-[#0d1117]/95 rounded-3xl border-white/10 space-y-4">
            
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" /> Top Repositories
              </span>
              <span className="text-xs text-gray-400 font-mono">{REPOSITORIES.length} active</span>
            </div>

            {/* Search repos */}
            <div className="relative">
              <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Find a repository..."
                value={repoSearch}
                onChange={(e) => setRepoSearch(e.target.value)}
                className="w-full bg-[#161b22] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-gray-200 placeholder-gray-500 outline-none focus:border-purple-500/50"
              />
            </div>

            {/* Repo list */}
            <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
              {filteredRepos.map((repo) => (
                <div 
                  key={repo.name}
                  onClick={() => setSelectedRepo(repo.name)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                    selectedRepo === repo.name
                      ? 'bg-purple-600/15 border-purple-500/50 shadow-md shadow-purple-500/10'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-xs text-white truncate max-w-[200px] flex items-center gap-1.5">
                      {repo.isPrivate && <Lock className="w-3 h-3 text-amber-400 flex-shrink-0" />}
                      <span className="hover:text-purple-300 transition-colors">{repo.name}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono">{repo.updated}</span>
                  </div>

                  <p className="text-[11px] text-gray-400 mt-1 line-clamp-1">{repo.description}</p>

                  <div className="mt-2 flex items-center gap-4 text-[10px] text-gray-400 font-mono">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.langColor }} />
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400/20" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitBranch className="w-3 h-3 text-gray-500" /> {repo.forks}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Teams & Organizations Card */}
          <div className="glass-panel p-5 bg-[#0d1117]/95 rounded-3xl border-white/10 space-y-3">
            <div className="font-bold text-white text-sm flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-teal-400" /> Organization Memberships
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-gray-200">Cortex-Ventures</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300">Owner</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-gray-200">DevSecOps-Squad</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-teal-500/20 text-teal-300">Tech Lead</span>
              </div>
            </div>
          </div>

        </div>

        {/* Center & Right Column (8 cols): Copilot Agent Workspace & Feed */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Copilot Swarm Command Terminal */}
          <div className="glass-panel glass-panel-glow p-5 bg-[#0d1117]/95 rounded-3xl border-white/10 space-y-4">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-purple-400" />
                <span className="font-bold text-white text-sm">Copilot Agent Swarm Terminal</span>
              </div>
              <span className="text-xs font-mono text-gray-400">Target: <strong className="text-purple-300">{selectedRepo}</strong></span>
            </div>

            {/* Prompt input */}
            <div className="flex gap-2">
              <input 
                type="text"
                placeholder={`Instruct Copilot Swarm on ${selectedRepo}...`}
                value={agentPrompt}
                onChange={(e) => setAgentPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleRunSwarm()}
                className="flex-1 bg-[#161b22] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-gray-200 placeholder-gray-500 outline-none focus:border-purple-500/50 font-mono"
              />
              <button 
                onClick={handleRunSwarm}
                disabled={agentRunning}
                className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-md shadow-purple-600/20"
              >
                {agentRunning ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
                <span>Execute</span>
              </button>
            </div>

            {/* Agent terminal output */}
            {agentOutput && (
              <div className="code-terminal">
                <div className="code-terminal-header">
                  <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" /> Swarm Execution Output
                  </span>
                  <span className="text-[10px] font-mono text-teal-400">Status: PASS ✓</span>
                </div>
                <div className="p-3 text-xs font-mono text-gray-300 bg-[#070a0f] whitespace-pre-wrap leading-relaxed">
                  {agentOutput}
                </div>
              </div>
            )}

          </div>

          {/* Activity Feed with Filter Tabs */}
          <div className="glass-panel p-5 bg-[#0d1117]/95 rounded-3xl border-white/10 space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-teal-400" />
                <span className="font-bold text-white text-sm">Recent Activity & Telemetry</span>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-1 text-xs font-mono">
                {['all', 'prs', 'security', 'actions'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-1 rounded-lg uppercase tracking-wider transition-colors ${
                      activeFilter === filter 
                        ? 'bg-purple-600/30 text-purple-300 font-bold border border-purple-500/40' 
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Activities list */}
            <div className="space-y-3">
              {RECENT_ACTIVITIES.map((act) => (
                <div key={act.id} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <GitPullRequest className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="font-bold text-xs text-white">{act.title}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-gray-400 font-mono">
                      <span>{act.repo}</span>
                      <span>•</span>
                      <span>by {act.user}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${act.statusBg}`}>
                      {act.status}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">{act.time}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* DevSecOps Status Card */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-teal-950/30 via-[#0d1117] to-[#0d1117] border border-teal-500/30 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">DevSecOps Security Radar: Hardened 🛡️</div>
                <div className="text-xs text-gray-400">All 5 repositories scanned with 0 critical vulnerabilities. Secret push protection active.</div>
              </div>
            </div>

            <button className="btn-secondary text-xs py-2 px-4 border-teal-500/30 hover:border-teal-500/60">
              <span>View Security Report</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
