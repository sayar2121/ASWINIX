export default function AITopPredictions() {
  const predictions = [
    { num: 1, name: 'Thunder Star', jockey: 'J: A. Singh | T: R. Mehra', prob: 72, conf: 'HIGH', color: 'bg-primary' },
    { num: 2, name: 'Royal Empress', jockey: 'J: P. Chauhan | T: S. Narang', prob: 58, conf: 'HIGH', color: 'bg-success' },
    { num: 3, name: 'Ocean Drive', jockey: 'J: K. Verma | T: M. Khan', prob: 46, conf: 'MEDIUM', color: 'bg-warning' },
    { num: 4, name: 'Silver Charm', jockey: 'J: N. Patel | T: A. Sharma', prob: 34, conf: 'MEDIUM', color: 'bg-textSecondary' },
    { num: 5, name: 'Golden Ridge', jockey: 'J: R. Dar | T: V. Rao', prob: 28, conf: 'LOW', color: 'bg-danger' },
  ];

  return (
    <div className="w-full h-full bg-surface border border-border rounded-2xl p-6 flex flex-col shadow-soft relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-heading font-bold text-lg tracking-wide uppercase">AI Top Predictions</h3>
          <p className="text-xs text-textSecondary mt-1">Hyderabad • Race 6 • 1400m • Turf</p>
        </div>
        <button className="text-primary text-sm font-medium hover:text-secondary transition-colors">View Full Analysis</button>
      </div>

      <div className="flex-1 w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border/50 text-[10px] text-textSecondary uppercase tracking-wider">
              <th className="pb-3 font-semibold">#</th>
              <th className="pb-3 font-semibold">Horse</th>
              <th className="pb-3 font-semibold">Win Probability</th>
              <th className="pb-3 font-semibold text-right">AI Confidence</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {predictions.map((p) => (
              <tr key={p.num} className="group hover:bg-card/50 transition-colors">
                <td className="py-4 font-bold text-sm text-textSecondary">{p.num}</td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded border border-border/50 ${p.color} flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold font-heading">{p.num}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm group-hover:text-primary transition-colors">{p.name}</span>
                      <span className="text-[10px] text-textSecondary">{p.jockey}</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 w-1/3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-card rounded-full overflow-hidden border border-border">
                      <div 
                        className="h-full bg-gradient-primary rounded-full relative overflow-hidden" 
                        style={{ width: `${p.prob}%` }}
                      >
                         <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]" />
                      </div>
                    </div>
                    <span className="text-sm font-bold w-8 text-right">{p.prob}%</span>
                  </div>
                </td>
                <td className="py-4 text-right">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    p.conf === 'HIGH' ? 'text-success' : 
                    p.conf === 'MEDIUM' ? 'text-warning' : 'text-danger'
                  }`}>
                    {p.conf}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <button className="w-full py-3 rounded-xl bg-gradient-primary text-white font-bold text-sm hover:brightness-110 transition-all shadow-soft shadow-primary/20">
          VIEW FULL PREDICTION & ANALYSIS
        </button>
      </div>
    </div>
  );
}
