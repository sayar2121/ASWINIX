import { Newspaper, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function NewsPage() {
  const news = [
    { id: 1, category: 'TRACK UPDATE', title: 'Heavy rain in Mumbai expected to affect weekend races', date: '2 hours ago', img: 'M' },
    { id: 2, category: 'JOCKEY NEWS', title: 'Top Jockey A. Singh announces return from injury', date: '5 hours ago', img: 'A' },
    { id: 3, category: 'RACE PREVIEW', title: 'Indian Derby Preview: Who are the top contenders?', date: '1 day ago', img: 'D' },
    { id: 4, category: 'INDUSTRY', title: 'New regulations introduced for turf clubs starting 2026', date: '2 days ago', img: 'I' },
    { id: 5, category: 'HORSES', title: 'Thunder Star breaks track record during morning trials', date: '3 days ago', img: 'T' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-heading font-bold uppercase tracking-wide flex items-center gap-3">
            <Newspaper className="w-8 h-8 text-primary" />
            Latest Racing News
          </h1>
          <p className="text-textSecondary mt-3 text-sm leading-relaxed">
            Stay updated with track reports, jockey changes, race previews, and breaking news from the Indian racing circuit.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Featured Article */}
        <div className="lg:col-span-8">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-card border border-border group cursor-pointer flex items-center justify-center">
            <Image src="/images/home_image.png" alt="Featured News" fill className="object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent z-10" />

            <div className="absolute bottom-0 left-0 p-8 z-20 w-full max-w-3xl">
              <span className="px-2.5 py-1 rounded bg-primary/20 text-primary border border-primary/30 text-xs font-bold tracking-wider mb-4 inline-block">
                FEATURED
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                The Rise of AI in Horse Racing: How ASWINIX is Changing the Game
              </h2>
              <p className="text-textSecondary mb-4 line-clamp-2">
                Discover how machine learning models are outperforming traditional handicapping methods and giving punters a significant edge in predicting winners.
              </p>
              <span className="text-xs font-bold text-textSecondary uppercase tracking-wider">
                Just Now • By Editorial Team
              </span>
            </div>
          </div>
        </div>

        {/* Recent News List */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <h3 className="font-heading font-bold uppercase tracking-wide border-b border-border/50 pb-2 mb-2">Recent Updates</h3>
          
          <div className="flex flex-col gap-4 flex-1">
            {news.map((item) => (
              <div key={item.id} className="group flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors cursor-pointer">
                <div className="w-20 h-20 shrink-0 rounded-lg bg-surface border border-border flex items-center justify-center">
                   <span className="font-heading font-bold text-2xl text-textSecondary group-hover:text-primary transition-colors">{item.img}</span>
                </div>
                
                <div className="flex flex-col justify-center flex-1">
                  <span className="text-[10px] font-bold text-secondary tracking-wider mb-1">{item.category}</span>
                  <h4 className="text-sm font-bold leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">{item.title}</h4>
                  <span className="text-[10px] text-textSecondary">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full py-3 mt-auto rounded-xl border border-border bg-surface text-textPrimary text-sm font-bold uppercase tracking-wider hover:bg-card transition-colors flex items-center justify-center gap-2">
            View All News <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
