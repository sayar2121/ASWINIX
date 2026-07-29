import { Search, Filter, ShieldCheck } from 'lucide-react';

export default function TrainersPage() {
  const trainers = [
    { rank: 1, name: 'S. Narang', stable: 'Narang Racing', horses: 42, wins: 28, winRate: '24.5%', rating: 'A+' },
    { rank: 2, name: 'M. Khan', stable: 'Khan Stables', horses: 35, wins: 22, winRate: '21.0%', rating: 'A' },
    { rank: 3, name: 'R. Mehra', stable: 'Mehra Equine', horses: 28, wins: 19, winRate: '19.8%', rating: 'A' },
    { rank: 4, name: 'A. Sharma', stable: 'Sharma Bloodstock', horses: 45, wins: 18, winRate: '14.2%', rating: 'B+' },
    { rank: 5, name: 'V. Rao', stable: 'Vanguard Racing', horses: 19, wins: 12, winRate: '18.5%', rating: 'B+' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-heading font-bold uppercase tracking-wide flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-secondary" />
            Trainer Analytics
          </h1>
          <p className="text-textSecondary mt-3 text-sm leading-relaxed">
            Evaluate stable performance, historical win rates, and AI-generated grades for the top trainers in the circuit.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input 
              type="text" 
              placeholder="Search trainers..." 
              className="bg-surface border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 bg-surface border border-border rounded-lg px-4 py-2 text-sm hover:bg-card transition-colors">
            <Filter className="w-4 h-4" />
            Season: 2026
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((t) => (
          <div key={t.rank} className="bg-card border border-border rounded-xl p-6 hover:border-secondary/50 transition-colors group relative overflow-hidden shadow-soft">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -z-10 group-hover:bg-secondary/10 transition-colors" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-surface border border-border flex items-center justify-center font-heading font-bold text-xl text-textSecondary group-hover:text-secondary transition-colors">
                #{t.rank}
              </div>
              <div>
                <h3 className="font-bold text-lg">{t.name}</h3>
                <p className="text-xs text-textSecondary uppercase tracking-wider">{t.stable}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-surface rounded-lg p-3 border border-border/50 text-center">
                <span className="block text-xs text-textSecondary mb-1">Active Horses</span>
                <span className="font-mono font-bold text-lg">{t.horses}</span>
              </div>
              <div className="bg-surface rounded-lg p-3 border border-border/50 text-center">
                <span className="block text-xs text-textSecondary mb-1">Total Wins</span>
                <span className="font-mono font-bold text-lg text-primary">{t.wins}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div className="flex flex-col">
                <span className="text-xs text-textSecondary mb-0.5">Win Rate</span>
                <span className="font-bold text-success">{t.winRate}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-textSecondary mb-0.5">AI Grade</span>
                <span className={`font-bold font-heading ${t.rating.includes('A') ? 'text-warning' : 'text-primary'}`}>
                  {t.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
