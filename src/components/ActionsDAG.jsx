import React, { useState } from 'react';
import { GitBranch, Play, CheckCircle2, RefreshCw, Server, Shield, Cpu, Package, Cloud, ChevronRight, Terminal, Zap } from 'lucide-react';

export default function ActionsDAG() {
  const [runningNodeId, setRunningNodeId] = useState(null);
  const [nodeLogs, setNodeLogs] = useState('Select a workflow node or click "Trigger Actions Pipeline" to inspect build stdout.');

  const nodes = [
    {
      id: 'checkout',
      name: 'Checkout & Setup',
      type: 'trigger',
      icon: GitBranch,
      time: '0.4s',
      status: 'success',
      log: 'git checkout sha:8f2a9e\nNode.js v20.12.0 initialized\nCached npm modules loaded (3.2s saved)'
    },
    {
      id: 'lint-test',
      name: 'Parallel Test Suite',
      type: 'job',
      icon: Cpu,
      time: '1.2s',
      status: 'success',
      log: 'Running vitest unit tests across 12 worker threads...\nPASS src/auth.test.ts (142ms)\nPASS src/api.test.ts (98ms)\nTest Suites: 18 passed, 18 total'
    },
    {
      id: 'security-scan',
      name: 'CodeQL Security Scan',
      type: 'job',
      icon: Shield,
      time: '2.1s',
      status: 'success',
      log: 'Analyzing AST patterns for CWE vulnerabilities...\n0 High, 0 Medium, 0 Low vulnerabilities identified.\nCodeQL rule pack 2026.4 applied.'
    },
    {
      id: 'docker-build',
      name: 'Build OCI Container Image',
      type: 'job',
      icon: Package,
      time: '3.8s',
      status: 'success',
      log: 'Building Docker container image ghcr.io/org/app:sha-8f2a9e...\nLayer cache hit for 8/10 layers\nImage compressed: 42.4 MB'
    },
    {
      id: 'deploy-gke',
      name: 'Deploy to Kubernetes (GKE)',
      type: 'deploy',
      icon: Cloud,
      time: '4.2s',
      status: 'success',
      log: 'kubectl apply -f k8s/deployment.yaml\nRolling update triggered on cluster us-central1-a\nHealth check 200 OK on https://api.github-next.io'
    }
  ];

  const handleRunPipeline = () => {
    setRunningNodeId('checkout');
    setNodeLogs('Triggering workflow run #1,492...\nExecuting Checkout & Setup...');

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < nodes.length) {
        setRunningNodeId(nodes[current].id);
        setNodeLogs(nodes[current].log);
      } else {
        clearInterval(interval);
        setRunningNodeId(null);
        setNodeLogs('Pipeline execution finished cleanly! All 5 nodes succeeded in 11.7s total.');
      }
    }, 1200);
  };

  return (
    <section id="actions" className="py-24 relative overflow-hidden bg-grid-pattern border-t border-white/10">
      
      {/* Background Orbs */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <GitBranch className="w-3.5 h-3.5" /> GitHub Actions & Visual DAG Workflows
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Blazing fast, visual CI/CD pipelines <br />
              built for modern cloud engineering.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handleRunPipeline}
              className="btn-primary text-xs py-2.5 px-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500"
            >
              <Play className="w-4 h-4" />
              <span>Trigger Actions Pipeline</span>
            </button>
          </div>
        </div>

        {/* Visual DAG Canvas Box */}
        <div className="glass-panel p-6 bg-[#0d1117]/95 rounded-3xl border-white/10 space-y-6">
          
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
              <span className="font-semibold text-white text-sm">main.yml Workflow DAG Graph</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400 font-mono">
              <span>Runner: ARM64 Apple Silicon / Linux</span>
              <span>Concurrency: 32 jobs</span>
            </div>
          </div>

          {/* DAG Nodes Flow Chart */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative py-6">
            {nodes.map((node, index) => {
              const Icon = node.icon;
              const isRunning = runningNodeId === node.id;

              return (
                <div key={node.id} className="relative group">
                  {/* Connector arrow line for desktop */}
                  {index < nodes.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-0">
                      <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors" />
                    </div>
                  )}

                  <div 
                    onClick={() => {
                      setRunningNodeId(node.id);
                      setNodeLogs(node.log);
                    }}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer relative z-10 ${
                      isRunning 
                        ? 'bg-blue-500/20 border-blue-400 shadow-xl shadow-blue-500/20 animate-pulse' 
                        : 'bg-white/[0.03] border-white/10 hover:border-blue-500/50 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        <Icon className="w-5 h-5" />
                      </div>
                      {isRunning ? (
                        <RefreshCw className="w-4 h-4 text-blue-400 animate-spin" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-teal-400" />
                      )}
                    </div>

                    <div className="text-xs text-gray-400 uppercase tracking-wider font-mono">Step {index + 1}</div>
                    <div className="text-sm font-bold text-white mt-0.5">{node.name}</div>

                    <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                      <span>Duration:</span>
                      <span className="text-teal-300 font-semibold">{node.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Node Output Terminal */}
          <div className="code-terminal">
            <div className="code-terminal-header">
              <span className="text-xs font-mono text-gray-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" /> Live Build Output Console
              </span>
              <span className="text-xs font-mono text-gray-400">Status: OK 200</span>
            </div>
            <div className="p-4 text-xs sm:text-sm font-mono text-gray-200 bg-[#090d13] min-h-[120px] whitespace-pre-wrap leading-relaxed">
              {nodeLogs}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
