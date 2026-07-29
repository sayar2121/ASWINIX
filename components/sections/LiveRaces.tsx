import { ChevronRight, Clock } from 'lucide-react';
import Image from 'next/image';

export default function LiveRaces() {
  const liveRaces = [
    { id: '1', time: '2:15 PM', track: 'Hyderabad', raceNo: 3, class: 'Class 3 | 1400m | Turf', status: 'LIVE' },
    { id: '2', time: '2:30 PM', track: 'Bangalore', raceNo: 4, class: 'Class 4 | 1200m | Turf', status: 'UP NEXT' },
    { id: '3', time: '3:00 PM', track: 'Mumbai', raceNo: 5, class: 'Class 2 | 1600m | Turf', status: '' },
    { id: '4', time: '3:15 PM', track: 'Chennai', raceNo: 6, class: 'Class 3 | 1400m | Turf', status: '' },
    { id: '5', time: '3:45 PM', track: 'Pune', raceNo: 7, class: 'Class 4 | 1000m | Turf', status: '' },
  ];

  return (
    <div className="w-full h-full bg-surface border border-border rounded-2xl p-6 flex flex-col shadow-soft relative overflow-hidden group z-10">
      
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading font-bold text-lg tracking-wide uppercase">Today's Live Races</h3>
        <button className="text-primary text-sm font-medium hover:text-secondary transition-colors">View All</button>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
        {liveRaces.map((race, idx) => {
          let timeBorderColor = "border-border/50";
          if (race.status === 'LIVE') timeBorderColor = "border-primary/50 text-primary";
          if (race.status === 'UP NEXT') timeBorderColor = "border-secondary/50 text-secondary";
          
          return (
            <div 
              key={race.id} 
              className="group/row flex items-center p-3 rounded-xl bg-card border border-border hover:border-primary/50 cursor-pointer transition-all hover:shadow-soft gap-2 xl:gap-3"
            >
              {/* Time Box */}
              <div className={`flex flex-col items-center justify-center w-[48px] h-[48px] xl:w-[52px] xl:h-[52px] flex-shrink-0 rounded-full border bg-bg/50 ${timeBorderColor}`}>
                <span className="text-[13px] font-bold leading-tight">{race.time.split(' ')[0]}</span>
                <span className="text-[9px] uppercase font-bold text-textSecondary mt-0.5">{race.time.split(' ')[1]}</span>
              </div>
              
              {/* Race Info */}
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[13px] xl:text-sm leading-tight text-white/90 whitespace-nowrap">Race {race.raceNo}</span>
                  {race.status === 'LIVE' && (
                    <span className="px-1.5 py-0.5 rounded flex items-center gap-1 bg-danger/10 text-danger border border-danger/20 text-[8px] font-bold tracking-wider uppercase flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse" />
                      LIVE
                    </span>
                  )}
                  {race.status === 'UP NEXT' && (
                    <span className="px-1.5 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/20 text-[8px] font-bold tracking-wider uppercase flex-shrink-0">
                      UP NEXT
                    </span>
                  )}
                </div>
                <span className="font-bold text-[13px] xl:text-sm leading-tight text-white/90 truncate">{race.track}</span>
                <span className="text-[9px] xl:text-[10px] text-textSecondary truncate mt-0.5">{race.class}</span>
              </div>
              
              {/* Thumbnail Image */}
              <div className="relative w-[60px] h-[36px] xl:w-[72px] xl:h-[42px] rounded-md overflow-hidden flex-shrink-0 opacity-80 group-hover/row:opacity-100 transition-opacity hidden sm:block">
                <Image src="/images/news_thumbnail_1785257296123.png" alt="Race thumbnail" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/50 to-transparent w-1/2" />
              </div>
              
              <ChevronRight className="w-4 h-4 text-textSecondary group-hover/row:text-primary transition-colors group-hover/row:translate-x-1 flex-shrink-0 ml-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
