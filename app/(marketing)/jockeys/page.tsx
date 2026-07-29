import { Search, Filter, TrendingUp, Users } from 'lucide-react';

export default function JockeysPage() {
  const jockeys = [
    { rank: 1, name: 'A. Singh', rides: 142, wins: 44, places: 38, winRate: '31.0%', roi: '+14.5%', trend: 'up' },
    { rank: 2, name: 'P. Chauhan', rides: 128, wins: 35, places: 41, winRate: '27.3%', roi: '+8.2%', trend: 'up' },
    { rank: 3, name: 'S. John', rides: 156, wins: 38, places: 45, winRate: '24.4%', roi: '-2.1%', trend: 'down' },
    { rank: 4, name: 'K. Verma', rides: 94, wins: 21, places: 28, winRate: '22.3%', roi: '+18.4%', trend: 'up' },
    { rank: 5, name: 'N. Patel', rides: 112, wins: 24, places: 31, winRate: '21.4%', roi: '-5.6%', trend: 'down' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-heading font-bold uppercase tracking-wide flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            Jockey Statistics
          </h1>
          <p className="text-textSecondary mt-3 text-sm leading-relaxed">
            Detailed performance metrics, win rates, and return on investment (ROI) for top jockeys across all major tracks.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input 
              type="text" 
              placeholder="Search jockeys..." 
              className="bg-surface border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 bg-surface border border-border rounded-lg px-4 py-2 text-sm hover:bg-card transition-colors">
            <Filter className="w-4 h-4" />
            Season: 2026
          </button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface/50 border-b border-border/50 text-xs text-textSecondary uppercase tracking-wider">
                <th className="p-4 font-semibold w-16 text-center">Rank</th>
                <th className="p-4 font-semibold">Jockey Name</th>
                <th className="p-4 font-semibold text-right">Total Rides</th>
                <th className="p-4 font-semibold text-right">Wins</th>
                <th className="p-4 font-semibold text-right">Places</th>
                <th className="p-4 font-semibold text-right">Win %</th>
                <th className="p-4 font-semibold text-right">ROI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {jockeys.map((j) => (
                <tr key={j.rank} className="group hover:bg-surface/30 transition-colors cursor-pointer">
                  <td className="p-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-surface border border-border mx-auto font-bold text-sm">
                      {j.rank}
                    </div>
                  </td>
                  <td className="p-4 font-bold text-primary group-hover:text-secondary transition-colors">
                    {j.name}
                  </td>
                  <td className="p-4 text-right font-mono text-sm">{j.rides}</td>
                  <td className="p-4 text-right font-mono text-sm font-bold">{j.wins}</td>
                  <td className="p-4 text-right font-mono text-sm">{j.places}</td>
                  <td className="p-4 text-right font-mono text-sm font-bold text-success">
                    {j.winRate}
                  </td>
                  <td className="p-4 text-right">
                    <span className={`inline-flex items-center gap-1 text-sm font-bold ${j.roi.startsWith('+') ? 'text-success' : 'text-danger'}`}>
                      {j.roi.startsWith('+') ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingUp className="w-3.5 h-3.5 rotate-180" />}
                      {j.roi}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
