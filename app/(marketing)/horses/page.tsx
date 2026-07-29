import { Search, Filter, Star } from 'lucide-react';
import Image from 'next/image';

export default function HorsesPage() {
  const horses = [
    { name: 'Thunder Star', age: '4 YO', type: 'Bay Gelding', form: '1-1-2-1-3', winRate: '31%', rating: 5 },
    { name: 'Royal Empress', age: '3 YO', type: 'Chestnut Filly', form: '2-1-1-4-1', winRate: '28%', rating: 4 },
    { name: 'Ocean Drive', age: '5 YO', type: 'Brown Horse', form: '3-2-1-2-2', winRate: '22%', rating: 4 },
    { name: 'Silver Charm', age: '4 YO', type: 'Grey Colt', form: '1-4-3-1-1', winRate: '25%', rating: 3 },
    { name: 'Golden Ridge', age: '6 YO', type: 'Bay Mare', form: '4-3-2-5-1', winRate: '15%', rating: 3 },
    { name: 'Desert Storm', age: '3 YO', type: 'Bay Colt', form: '1-1-1-2-1', winRate: '40%', rating: 5 },
  ];

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold uppercase tracking-wide">Horse Database</h1>
          <p className="text-textSecondary mt-2">Comprehensive profiles, form analysis, and AI ratings for every runner.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input 
              type="text" 
              placeholder="Search horses..." 
              className="bg-surface border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 bg-surface border border-border rounded-lg px-4 py-2 text-sm hover:bg-card transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {horses.map((horse, idx) => (
          <div key={idx} className="bg-card border border-border rounded-xl p-6 flex flex-col hover:border-primary/50 transition-colors group relative overflow-hidden shadow-soft">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
            
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface mb-6 border border-border group-hover:border-primary/30 transition-colors flex items-center justify-center">
              <Image src="/images/home_image.png" alt={horse.name} fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" />
            </div>

            <div className="mb-4">
              <h3 className="font-heading font-bold text-xl uppercase tracking-wide group-hover:text-primary transition-colors">{horse.name}</h3>
              <p className="text-xs font-semibold text-textSecondary uppercase tracking-wider mt-1">{horse.age} • {horse.type}</p>
            </div>

            <div className="space-y-3 flex-1 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-textSecondary">Form</span>
                <span className="font-bold tracking-widest">{horse.form}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-textSecondary">Win Rate</span>
                <span className="font-bold text-success">{horse.winRate}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-textSecondary">AI Rating</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-3.5 h-3.5 ${star <= horse.rating ? 'text-warning fill-warning' : 'text-surface fill-surface stroke-border'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>

            <button className="w-full py-2.5 rounded-lg border border-border bg-surface text-textPrimary text-xs font-bold uppercase tracking-wider hover:bg-primary hover:border-primary transition-colors">
              View Full Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
