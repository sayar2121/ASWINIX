import { Brain, Search, Target, Users, Zap, FileText, Trophy } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI PREDICTIONS",
      description: "Advanced machine learning models for accurate race predictions.",
      color: "from-primary to-primary",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "HORSE INTELLIGENCE",
      description: "Deep insights on form, performance, breeding, health & statistics.",
      color: "from-secondary to-secondary",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "JOCKEY ANALYTICS",
      description: "Performance trends, win rate, combinations & riding style.",
      color: "from-accent to-accent",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "TRAINER INSIGHTS",
      description: "Trainer form, strategies, strike rate & historical performance.",
      color: "from-primary to-secondary",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "SMART BULLETINS",
      description: "AI-powered daily bulletins with top picks & expert recommendations.",
      color: "from-secondary to-primary",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "REAL-TIME UPDATES",
      description: "Live odds, race changes, scratchings & track alerts instantly.",
      color: "from-accent to-primary",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "WINNING TOOLS",
      description: "Advanced analytics, custom filters, watchlist & performance tracker.",
      color: "from-premium-start to-premium-end",
    }
  ];

  return (
    <section className="py-20 w-full relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {features.map((feature, i) => (
            <AnimateIn key={i} direction="up" delay={i * 0.1}>
              <div 
                className="group relative rounded-xl border border-border bg-card hover:bg-surface transition-all duration-300 p-6 flex flex-col items-center text-center gap-4 hover:-translate-y-2 hover:shadow-premium h-full"
              >
                {/* Glowing Icon Container */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${feature.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full`} />
                  <div className={`relative w-16 h-16 rounded-full border border-border bg-surface flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors`}>
                    {feature.icon}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-sm tracking-wide text-textPrimary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                    {feature.title}
                  </h4>
                  <p className="text-[11px] leading-relaxed text-textSecondary line-clamp-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
