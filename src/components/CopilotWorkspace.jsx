import React, { useState } from 'react';
import { Bot, CheckCircle2, Play, GitPullRequest, Code, ShieldCheck, Cpu, ArrowRight, Sparkles, Layers, Terminal } from 'lucide-react';

export default function CopilotWorkspace() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const steps = [
    {
      agent: 'Planner Agent',
      icon: Layers,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/20',
      title: '1. Architecture & Specification Breakdown',
      status: 'Done',
      output: 'Parsed Issue #482 "Add Auth Provider & OAuth". Created execution plan with 4 sub-modules: JWT validator, Auth middleware, OAuth callback handler, Unit tests.'
    },
    {
      agent: 'Coder Agent',
      icon: Code,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
      title: '2. Code Generation & Dependency Wiring',
      status: activeStep >= 1 ? 'Done' : 'Pending',
      output: 'Generated src/auth/oauth.ts and updated middleware.ts. Refactored session tokens with zero security flaws.'
    },
    {
      agent: 'Security & QA Agent',
      icon: ShieldCheck,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10 border-teal-500/20',
      title: '3. Automated Testing & Vulnerability Audit',
      status: activeStep >= 2 ? 'Done' : 'Pending',
      output: 'Ran 24 integration tests (100% pass). Verified CodeQL security scans with 0 high/critical alerts.'
    }
  ];

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(0);
    }
  };

  return (
    <section id="copilot" className="py-24 relative overflow-hidden border-t border-white/10">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Copilot Agent Swarms
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Autonomous AI multi-agents <br />
              working together on your repository.
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm sm:text-base leading-relaxed">
            Assign complex issues or feature requests. Copilot Swarms break down tasks, write high-performance code, and present complete, tested Pull Requests.
          </p>
        </div>

        {/* Interactive Swarm Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls & Step Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-2xl glass-panel bg-[#0d1117]/80 border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wide">Swarm Pipeline Progress</span>
                <button 
                  onClick={handleNextStep}
                  className="btn-primary text-xs py-1.5 px-3"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{activeStep === 2 ? 'Restart Swarm' : 'Simulate Next Step'}</span>
                </button>
              </div>

              {/* Step Cards */}
              <div className="space-y-3">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeStep === idx;
                  const isPast = activeStep > idx;

                  return (
                    <div 
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isActive 
                          ? `${step.bgColor} shadow-lg shadow-purple-500/5` 
                          : isPast 
                          ? 'bg-white/[0.02] border-white/10 opacity-80' 
                          : 'bg-white/[0.01] border-white/5 opacity-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-white/5 ${step.color}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-mono text-gray-400">{step.agent}</div>
                            <div className="text-sm font-semibold text-white">{step.title}</div>
                          </div>
                        </div>
                        {isPast || isActive ? (
                          <CheckCircle2 className="w-5 h-5 text-teal-400" />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-gray-600" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/20 text-xs text-purple-300 flex items-center gap-3">
              <Bot className="w-6 h-6 text-purple-400 flex-shrink-0" />
              <span>Swarms run in isolated sandbox environments with direct access to repo context, language server protocol (LSP), and test runners.</span>
            </div>
          </div>

          {/* Right Live Preview Box (7 cols) */}
          <div className="lg:col-span-7 glass-panel glass-panel-glow p-6 bg-[#0d1117]/95 rounded-3xl border-white/10">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <GitPullRequest className="w-5 h-5 text-teal-400" />
                <span className="font-semibold text-white text-sm">Pull Request #483 created by Copilot Swarm</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-teal-500/20 text-teal-300 border border-teal-500/30">
                Ready for Merge
              </span>
            </div>

            {/* PR Details */}
            <div className="py-4 space-y-4">
              <h3 className="text-lg font-bold text-white">
                feat(auth): implement OAuth 2.0 PKCE flow & Session Refresh Middleware
              </h3>

              {/* Agent Output Terminal */}
              <div className="code-terminal">
                <div className="code-terminal-header">
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" /> {steps[activeStep].agent} Live Logs
                  </span>
                  <span className="text-xs font-mono text-teal-400">Execution time: 1.4s</span>
                </div>
                <div className="p-4 text-xs font-mono text-gray-300 bg-[#090d13] leading-relaxed">
                  <div className="text-purple-400 font-semibold mb-1">❯ {steps[activeStep].title}</div>
                  <p>{steps[activeStep].output}</p>
                </div>
              </div>

              {/* Files Changed */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-gray-400">Files changed (3):</div>
                <div className="space-y-1 text-xs font-mono">
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 text-gray-300">
                    <span className="text-teal-400">src/auth/oauth.ts</span>
                    <span className="text-teal-400">+142 lines</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 text-gray-300">
                    <span className="text-teal-400">src/middleware.ts</span>
                    <span className="text-teal-400">+28 lines</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 text-gray-300">
                    <span className="text-teal-400">tests/oauth.test.ts</span>
                    <span className="text-teal-400">+85 lines</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-gray-400">All checks passed. 1 approve required.</span>
              <button className="btn-primary text-xs py-2 px-4 bg-teal-600 hover:bg-teal-500 border-teal-400/30">
                <span>Merge Pull Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
