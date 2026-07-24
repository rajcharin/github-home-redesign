import React from 'react';
import { Sparkles, Heart, Globe, Terminal, Shield, CheckCircle2 } from 'lucide-react';

function GithubLogo({ className = "w-6 h-6 text-purple-400" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#05070d] border-t border-white/10 pt-16 pb-12 text-sm text-gray-400">
      <div className="container-xl space-y-12">
        
        {/* Top Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Column 1: Brand */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <GithubLogo className="w-6 h-6 text-purple-400" />
              <span>GitHub AI Next</span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              The world's leading AI-powered developer platform. Accelerating human creativity, code velocity, and software security.
            </p>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>All Systems Operational (99.999% SLA)</span>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="space-y-3">
            <div className="font-semibold text-white text-xs uppercase tracking-wider">Product</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#copilot" className="hover:text-white transition-colors">Copilot Swarms</a></li>
              <li><a href="#actions" className="hover:text-white transition-colors">Actions & Workflows</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Advanced Security Radar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Codespaces</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub Issues & Projects</a></li>
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div className="space-y-3">
            <div className="font-semibold text-white text-xs uppercase tracking-wider">Platform</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Developer API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CLI & SDKs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise Cloud</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketplace Integrations</a></li>
            </ul>
          </div>

          {/* Column 4: Ecosystem */}
          <div className="space-y-3">
            <div className="font-semibold text-white text-xs uppercase tracking-wider">Ecosystem</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">GitHub Universe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub Education</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Open Source Fund</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub Next Research</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} GitHub, Inc. Redesign Concept built for Google Antigravity pair programming.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Security Docs</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Status</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
