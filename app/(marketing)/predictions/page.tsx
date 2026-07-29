import { Target, Trophy, Filter, ArrowUpRight } from 'lucide-react';

export default function PredictionsPage() {
  const predictions = [
    { track: 'Hyderabad', race: 6, horse: 'Thunder Star', conf: '94%', odds: '2.50', status: 'HIGH CONFIDENCE', time: '2h ago' },
    { track: 'Bangalore', race: 4, horse: 'Royal Empress', conf: '88%', odds: '3.20', status: 'VALUE BET', time: '3h ago' },
    { track: 'Mumbai', race: 5, horse: 'Ocean Drive', conf: '82%', odds: '4.50', status: 'SOLID PICK', time: '5h ago' },
    { track: 'Pune', race: 2, horse: 'Silver Charm', conf: '76%', odds: '6.00', status: 'LONG SHOT', time: '6h ago' },
    { track: 'Chennai', race: 7, horse: 'Golden Ridge', conf: '89%', odds: '2.80', status: 'HIGH CONFIDENCE', time: '1h ago' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-heading font-bold uppercase tracking-wide flex items-center gap-3">
            <Target className="w-8 h-8 text-primary" />
            AI Predictions
          </h1>
          <p className="text-textSecondary mt-3 text-sm leading-relaxed">
            Our proprietary machine learning models analyze millions of data points including historical performance, track conditions, jockey stats, and trainer form to provide the most accurate racing predictions.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-surface border border-border rounded-lg px-4 py-2 text-sm hover:bg-card transition-colors">
            <Filter className="w-4 h-4" />
            All Tracks
          </button>
          <button className="flex items-center gap-2 bg-gradient-primary text-white rounded-lg px-6 py-2 text-sm font-bold hover:brightness-110 transition-all shadow-premium">
            <Trophy className="w-4 h-4" />
            Premium Access
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface/50 border-b border-border/50 text-xs text-textSecondary uppercase tracking-wider">
                <th className="p-4 font-semibold">Track & Race</th>
                <th className="p-4 font-semibold">Predicted Winner</th>
                <th className="p-4 font-semibold">AI Confidence</th>
                <th className="p-4 font-semibold">Est. Odds</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {predictions.map((p, idx) => (
                <tr key={idx} className="group hover:bg-surface/30 transition-colors">
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="font-bold">{p.track}</span>
                      <span className="text-xs text-textSecondary uppercase tracking-wider">Race {p.race}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="font-bold text-primary">{p.horse}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1.5 bg-bg rounded-full overflow-hidden border border-border/50">
                        <div 
                          className="h-full bg-gradient-primary rounded-full relative" 
                          style={{ width: p.conf }}
                        />
                      </div>
                      <span className="text-sm font-bold">{p.conf}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="font-mono text-sm">{p.odds}</span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider ${
                      p.status === 'HIGH CONFIDENCE' ? 'bg-success/10 text-success border border-success/20' : 
                      p.status === 'VALUE BET' ? 'bg-primary/10 text-primary border border-primary/20' : 
                      p.status === 'LONG SHOT' ? 'bg-warning/10 text-warning border border-warning/20' :
                      'bg-surface text-textSecondary border border-border'
                    }`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
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
