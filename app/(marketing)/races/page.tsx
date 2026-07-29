import { Clock, Filter, Search, ChevronRight } from 'lucide-react';

export default function RacesPage() {
  const races = [
    { id: 1, time: '2:15 PM', track: 'Hyderabad', no: 3, name: 'The Golconda Derby Stakes', dist: '2400m', type: 'Turf', status: 'LIVE', class: 'Grade 1' },
    { id: 2, time: '2:30 PM', track: 'Bangalore', no: 4, name: 'The Chief Minister\'s Cup', dist: '1200m', type: 'Turf', status: 'UP NEXT', class: 'Grade 3' },
    { id: 3, time: '3:00 PM', track: 'Mumbai', no: 5, name: 'The Indian Oaks', dist: '2400m', type: 'Turf', status: '', class: 'Grade 1' },
    { id: 4, time: '3:15 PM', track: 'Chennai', no: 6, name: 'The South India Derby Stakes', dist: '2400m', type: 'Turf', status: '', class: 'Grade 1' },
    { id: 5, time: '3:45 PM', track: 'Pune', no: 7, name: 'The Pune Derby', dist: '2000m', type: 'Turf', status: '', class: 'Grade 1' },
    { id: 6, time: '4:15 PM', track: 'Kolkata', no: 2, name: 'The Calcutta Derby Stakes', dist: '2400m', type: 'Turf', status: '', class: 'Grade 1' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold uppercase tracking-wide">Live & Upcoming Races</h1>
          <p className="text-textSecondary mt-2">Comprehensive data and live odds for all major tracks.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input 
              type="text" 
              placeholder="Search races..." 
              className="bg-surface border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 bg-surface border border-border rounded-lg px-4 py-2 text-sm hover:bg-card transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {races.map((race) => (
          <div key={race.id} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group relative overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-soft">
            {/* Ambient Background */}
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -z-10 transition-colors ${
              race.status === 'LIVE' ? 'bg-danger/10 group-hover:bg-danger/20' : 
              race.status === 'UP NEXT' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-white/5'
            }`} />

            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-surface border border-border flex flex-col items-center justify-center text-center">
                  <span className="text-sm font-bold">{race.time.split(' ')[0]}</span>
                  <span className="text-[9px] text-textSecondary font-semibold uppercase">{race.time.split(' ')[1]}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{race.track}</h3>
                  <p className="text-xs text-textSecondary uppercase tracking-wider">Race {race.no}</p>
                </div>
              </div>
              
              {race.status === 'LIVE' && (
                <span className="px-2.5 py-1 rounded-md bg-danger/10 text-danger border border-danger/20 text-[10px] font-bold tracking-wider flex items-center gap-1.5 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse" />
                  LIVE
                </span>
              )}
              {race.status === 'UP NEXT' && (
                <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold tracking-wider">
                  UP NEXT
                </span>
              )}
            </div>

            <div className="flex-1">
              <h4 className="font-semibold text-textPrimary/90 group-hover:text-primary transition-colors">{race.name}</h4>
              <div className="flex items-center gap-4 mt-3 text-xs text-textSecondary">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {race.dist}
                </span>
                <span>•</span>
                <span>{race.type}</span>
                <span>•</span>
                <span className="text-accent">{race.class}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center">
              <span className="text-xs font-semibold text-textSecondary group-hover:text-white transition-colors">View Race Card</span>
              <ChevronRight className="w-4 h-4 text-textSecondary group-hover:text-primary transition-colors group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
