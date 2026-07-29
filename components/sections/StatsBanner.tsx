import { TrendingUp, ArrowUpRight } from 'lucide-react';

export default function StatsBanner() {
  const stats = [
    {
      label: 'AI RACING INDEX',
      value: '2,580.75',
      trend: '+18.42 (0.72%)',
      isPositive: true,
    },
    {
      label: 'WIN STRIKE RATE',
      value: '28.6%',
      trend: '+2.3%',
      isPositive: true,
    },
    {
      label: 'PLACE STRIKE RATE',
      value: '46.1%',
      trend: '+1.8%',
      isPositive: true,
    },
    {
      label: 'ROI (30 DAYS)',
      value: '18.7%',
      trend: '+3.4%',
      isPositive: true,
    },
    {
      label: 'RACES ANALYZED',
      value: '2.4M+',
      trend: 'Last 30 Days',
      isPositive: null, // neutral
    },
  ];

  return (
    <section className="w-full border-y border-border bg-surface/50 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-border/50">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 flex flex-col justify-center space-y-2 group">
              <span className="text-xs text-textSecondary font-semibold tracking-wider uppercase">
                {stat.label}
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-heading font-bold">{stat.value}</span>
                {/* Mockup for mini sparkline chart */}
                <div className="w-16 h-8 opacity-50 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 100 30" className="w-full h-full stroke-primary fill-none stroke-2">
                    <path d="M 0,25 Q 10,20 20,22 T 40,15 T 60,18 T 80,5 T 100,10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium">
                {stat.isPositive !== null && (
                  stat.isPositive ? 
                    <ArrowUpRight className="w-4 h-4 text-success" /> : 
                    <TrendingUp className="w-4 h-4 text-danger rotate-90" />
                )}
                <span className={
                  stat.isPositive === true ? "text-success" : 
                  stat.isPositive === false ? "text-danger" : 
                  "text-textSecondary"
                }>
                  {stat.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
