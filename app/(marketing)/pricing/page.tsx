import { Check, X } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-20 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6">
          Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-primary">Pricing</span>
        </h1>
        <p className="text-lg text-textSecondary leading-relaxed">
          Choose the plan that fits your racing strategy. Upgrade, downgrade, or cancel anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Basic Plan */}
        <div className="bg-card border border-border rounded-2xl p-8 flex flex-col hover:-translate-y-2 hover:shadow-premium transition-all duration-300">
          <div className="mb-8">
            <h3 className="text-xl font-heading font-bold uppercase mb-2">Basic</h3>
            <p className="text-sm text-textSecondary h-10">For casual punters following the daily action.</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-heading font-bold text-white">Free</span>
            </div>
          </div>
          
          <ul className="space-y-4 flex-1 mb-8">
            <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-primary" /> Live Race Updates</li>
            <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-primary" /> Basic Horse Profiles</li>
            <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-primary" /> Daily News & Bulletins</li>
            <li className="flex items-center gap-3 text-sm text-textSecondary"><X className="w-4 h-4" /> AI Win Predictions</li>
            <li className="flex items-center gap-3 text-sm text-textSecondary"><X className="w-4 h-4" /> Jockey & Trainer Analytics</li>
          </ul>
          
          <button className="w-full py-3 rounded-xl bg-surface border border-border text-white font-bold text-sm hover:bg-card hover:scale-105 transition-all">
            CURRENT PLAN
          </button>
        </div>

        {/* Premium Plan */}
        <div className="relative rounded-2xl bg-gradient-premium p-[1px] shadow-premium hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(var(--primary),0.4)] transition-all duration-300">
          <div className="absolute -top-4 inset-x-0 flex justify-center z-10">
             <span className="bg-gradient-premium text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-premium">
               Most Popular
             </span>
          </div>
          
          <div className="bg-bg rounded-2xl p-8 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            
            <div className="mb-8">
              <h3 className="text-xl font-heading font-bold uppercase mb-2 text-transparent bg-clip-text bg-gradient-premium">Pro Intelligence</h3>
              <p className="text-sm text-textSecondary h-10">Advanced AI models and comprehensive data for serious punters.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-heading font-bold text-white">₹499</span>
                <span className="text-textSecondary text-sm">/mo</span>
              </div>
            </div>
            
            <ul className="space-y-4 flex-1 mb-8">
              <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-primary" /> Everything in Basic</li>
              <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-secondary" /> Premium AI Predictions</li>
              <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-secondary" /> Detailed Form Analysis</li>
              <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-secondary" /> Jockey & Trainer Stats</li>
              <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-secondary" /> Real-time Odds Tracking</li>
            </ul>
            
            <button className="w-full py-3 rounded-xl bg-gradient-primary text-white font-bold text-sm hover:brightness-110 transition-all">
              START 7-DAY FREE TRIAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
