import { Check } from 'lucide-react';

export default function PremiumBanner() {
  const benefits = [
    'Daily AI Bulletins',
    'Advanced Analytics',
    'Premium Predictions',
    'Real-Time Alerts',
    'Watchlist & Tools',
    'And Much More'
  ];

  return (
    <section className="container mx-auto px-4 py-8 mb-20 relative z-10">
      <div className="w-full rounded-2xl bg-gradient-premium p-[1px]">
        <div className="w-full h-full bg-bg rounded-2xl p-8 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight">
              Unlock Premium Insights
            </h2>
            <p className="text-textSecondary text-lg max-w-xl">
              Join Aswinix today and take your racing strategy to the next level.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 max-w-2xl">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-textPrimary/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center lg:items-end min-w-[280px] bg-card/50 p-6 rounded-xl border border-border/50 backdrop-blur-sm">
            <span className="text-sm text-textSecondary uppercase tracking-widest font-semibold mb-2">STARTING FROM</span>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-heading font-bold text-warning">₹499</span>
              <span className="text-textSecondary text-sm">/ month</span>
            </div>
            <span className="text-xs text-textSecondary mb-6">7-Day Free Trial • Cancel Anytime</span>
            
            <button className="w-full py-4 rounded-xl bg-gradient-primary text-white font-bold text-sm hover:brightness-110 transition-all shadow-premium">
              START FREE TRIAL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
