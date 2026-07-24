import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PricingCalculator() {
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'monthly' | 'yearly'
  const [seats, setSeats] = useState(10);
  const [selectedPlan, setSelectedPlan] = useState('enterprise');

  const discount = billingCycle === 'yearly' ? 0.8 : 1.0;

  const plans = [
    {
      id: 'free',
      name: 'GitHub Free',
      description: 'The baseline for individual developers and small open source projects.',
      basePrice: 0,
      badge: 'Popular for Personal',
      features: [
        'Unlimited public/private repositories',
        '2,000 Action build minutes/mo',
        '500 MB packages storage',
        'Community Support & Discussions'
      ]
    },
    {
      id: 'team',
      name: 'GitHub Team',
      description: 'Advanced collaboration for growing engineering teams.',
      basePrice: 4,
      badge: 'Great for Startups',
      features: [
        'Everything in Free, plus:',
        '3,000 Action build minutes/mo',
        '2 GB packages storage',
        'Draft pull requests & Code review assignees',
        'Protected branches & Required approvals'
      ]
    },
    {
      id: 'enterprise',
      name: 'GitHub Enterprise',
      description: 'Unified AI platform with governance, security radar, & SAML SSO.',
      basePrice: 21,
      badge: 'Recommended for Scale',
      highlighted: true,
      features: [
        'Everything in Team, plus:',
        '50,000 Action build minutes/mo',
        '50 GB packages storage',
        'Copilot Agent Swarms & Multi-model routing',
        'SAML single sign-on (SSO) & SCIM provisioning',
        'Advanced Security Radar & Secret Push Protection'
      ]
    },
    {
      id: 'copilot-enterprise',
      name: 'Copilot Enterprise',
      description: 'Full AI transformation tailored to enterprise codebases & fine-tuning.',
      basePrice: 39,
      badge: 'Ultimate AI Power',
      features: [
        'Everything in Enterprise, plus:',
        'Custom fine-tuned Copilot models on private code',
        'Knowledge Bases & Architecture doc synthesis',
        'CLI + IDE + Web Copilot Chat access',
        '24/7 Priority SLA support & Dedicated Architect'
      ]
    }
  ];

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-grid-pattern border-t border-white/10">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> Transparent Pricing Calculator
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Flexible plans for every stage <br />
            of developer growth.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Scale seamlessly from open source projects to global enterprise engineering organizations.
          </p>

          {/* Controls: Billing Toggle & Seat Slider */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
            
            {/* Billing Toggle */}
            <div className="flex items-center gap-3 p-1.5 rounded-full bg-[#0d1117] border border-white/10">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  billingCycle === 'monthly' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Monthly Billing
              </button>
              <button 
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  billingCycle === 'yearly' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Yearly Billing
                <span className="px-2 py-0.5 rounded-full bg-teal-400/20 text-teal-300 text-[10px]">Save 20%</span>
              </button>
            </div>

            {/* Seat Count Slider */}
            <div className="flex items-center gap-3 p-2 px-4 rounded-2xl bg-[#0d1117] border border-white/10 text-xs text-gray-300">
              <Users className="w-4 h-4 text-purple-400" />
              <span>Seats:</span>
              <input 
                type="range"
                min="1"
                max="200"
                value={seats}
                onChange={(e) => setSeats(Number(e.target.value))}
                className="w-28 accent-purple-500 cursor-pointer"
              />
              <span className="font-bold text-white font-mono">{seats} seats</span>
            </div>

          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            const monthlyPricePerSeat = Math.round(plan.basePrice * discount);
            const totalMonthly = monthlyPricePerSeat * seats;

            return (
              <div 
                key={plan.id}
                onClick={() => handleSelectPlan(plan.id)}
                className={`glass-panel p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between relative ${
                  plan.highlighted 
                    ? 'bg-gradient-to-b from-purple-900/40 via-[#0d1117] to-[#0d1117] border-purple-500/50 shadow-2xl shadow-purple-500/20 scale-[1.02]' 
                    : isSelected
                    ? 'border-purple-400 bg-[#0d1117]/95'
                    : 'border-white/10 hover:border-white/20 bg-[#0d1117]/80'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
                    {plan.badge}
                  </span>
                )}

                <div className="space-y-4">
                  <div className="text-xl font-bold text-white">{plan.name}</div>
                  <p className="text-xs text-gray-400 leading-relaxed">{plan.description}</p>

                  <div className="py-2 border-y border-white/5 space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white font-mono">${monthlyPricePerSeat}</span>
                      <span className="text-xs text-gray-400">/ seat / month</span>
                    </div>
                    {plan.basePrice > 0 && (
                      <div className="text-xs text-purple-300 font-mono">
                        Estimated total: ${totalMonthly.toLocaleString()}/mo ({seats} seats)
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2.5 text-xs text-gray-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <button className={`w-full py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all ${
                    plan.highlighted 
                      ? 'btn-primary justify-center' 
                      : 'btn-secondary justify-center'
                  }`}>
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
