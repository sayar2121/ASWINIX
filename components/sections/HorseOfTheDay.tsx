import { Star } from 'lucide-react';
import Image from 'next/image';

export default function HorseOfTheDay() {
  return (
    <div className="w-full h-full bg-surface border border-border rounded-2xl p-6 flex flex-col shadow-soft relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      
      <div className="flex items-center gap-2 mb-4 relative z-10">
        <Star className="w-5 h-5 text-warning fill-warning" />
        <h3 className="font-heading font-bold text-lg tracking-wide uppercase">Horse of the Day</h3>
      </div>

      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-card mb-6 border border-border group-hover:border-primary/30 transition-colors">
        {/* Placeholder for Horse Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-10" />
        
        {/* Abstract horse silhouette for now */}
        <div className="w-full h-full flex items-center justify-center text-primary overflow-hidden">
           <Image src="/images/horse_profile_1785257284644.png" alt="Horse of the Day" fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
        </div>
        
        <div className="absolute bottom-4 left-4 z-20">
          <h4 className="font-heading font-bold text-xl uppercase tracking-wide text-white drop-shadow-md">Thunder Star</h4>
          <span className="text-xs font-semibold text-textSecondary uppercase tracking-wider">4 YO • Bay Gelding</span>
        </div>
      </div>

      <div className="space-y-4 flex-1">
        <div className="flex justify-between items-center pb-3 border-b border-border/50">
          <span className="text-sm text-textSecondary">Form</span>
          <span className="text-sm font-bold tracking-widest">1-1-2-1-3</span>
        </div>
        <div className="flex justify-between items-center pb-3 border-b border-border/50">
          <span className="text-sm text-textSecondary">Today's Jockey</span>
          <span className="text-sm font-bold">A. Singh</span>
        </div>
        <div className="flex justify-between items-center pb-3 border-b border-border/50">
          <span className="text-sm text-textSecondary">Win Rate</span>
          <span className="text-sm font-bold text-success">31%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-textSecondary">AI Rating</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-3.5 h-3.5 text-warning fill-warning" />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4">
        <button className="w-full py-2.5 rounded-xl border border-border bg-card text-textPrimary text-sm font-semibold hover:bg-primary hover:border-primary transition-colors">
          VIEW FULL PROFILE
        </button>
      </div>
    </div>
  );
}
