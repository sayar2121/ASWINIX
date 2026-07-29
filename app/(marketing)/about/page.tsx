import { Brain, Database, Zap, Shield } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    { icon: <Brain className="w-8 h-8 text-primary" />, title: 'AI-First Approach', desc: 'Our proprietary machine learning models analyze millions of data points to find edges that human punters miss.' },
    { icon: <Database className="w-8 h-8 text-secondary" />, title: 'Deep Data', desc: 'We maintain the most comprehensive historical and real-time database of Indian horse racing statistics.' },
    { icon: <Zap className="w-8 h-8 text-accent" />, title: 'Real-Time Insights', desc: 'Get live odds, track condition updates, and late scratchings delivered instantly to your dashboard.' },
    { icon: <Shield className="w-8 h-8 text-success" />, title: 'Trust & Transparency', desc: 'We log and verify all our past predictions so you can verify our strike rate and ROI.' },
  ];

  return (
    <div className="container mx-auto px-4 py-20 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6">
          The Future of <span className="text-transparent bg-clip-text bg-gradient-primary">Horse Racing</span>
        </h1>
        <p className="text-lg text-textSecondary leading-relaxed">
          ASWINIX was founded with a single vision: to build the world's most advanced, data-driven intelligence platform for horse racing. We combine cutting-edge artificial intelligence with deep domain expertise to help you predict smarter and race smarter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl bg-card border border-border overflow-hidden flex items-center justify-center p-8 group">
          <Image src="/images/home_image.png" alt="AI Engine Data" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-tr from-bg/80 via-bg/40 to-secondary/10 z-10" />
          
          <div className="relative z-20 w-full h-full border border-border/50 rounded-xl bg-surface/30 backdrop-blur-md flex flex-col items-center justify-center text-center p-8">
             <div className="w-24 h-24 rounded-full bg-gradient-primary p-[2px] mb-6">
               <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
                 <span className="font-heading font-bold text-4xl text-transparent bg-clip-text bg-gradient-primary">A</span>
               </div>
             </div>
             <h3 className="text-2xl font-heading font-bold mb-2">Our Engine</h3>
             <p className="text-textSecondary text-sm">Processing 2.4M+ historical races</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-heading font-bold uppercase tracking-wide mb-4">Core Values</h2>
            <p className="text-textSecondary mb-8">What drives us to build the best platform.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-surface border border-border p-6 rounded-xl hover:border-primary/30 transition-colors">
                <div className="mb-4">{v.icon}</div>
                <h4 className="font-bold mb-2">{v.title}</h4>
                <p className="text-xs text-textSecondary leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
