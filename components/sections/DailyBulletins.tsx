export default function DailyBulletins() {
  const bulletins = [
    {
      time: '10 MIN AGO',
      tag: 'TOP PICK',
      tagColor: 'bg-danger text-white',
      title: 'Hyderabad Race 6 Top Pick',
      desc: 'Thunder Star looks exceptional today.',
      number: '1',
      numColor: 'text-danger border-danger/30'
    },
    {
      time: '35 MIN AGO',
      tag: 'VALUE BET',
      tagColor: 'bg-primary text-white',
      title: 'Bangalore Race 4 Value Bet',
      desc: 'Royal Empress offers strong value.',
      number: '2',
      numColor: 'text-primary border-primary/30'
    },
    {
      time: '1 HR AGO',
      tag: 'TRACK UPDATE',
      tagColor: 'bg-success/20 text-success border border-success/30',
      title: 'Mumbai Track Report',
      desc: 'Good to Firm. Speed favored today.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12 text-success/30 group-hover:text-success/60 transition-colors">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      time: '2 HR AGO',
      tag: 'JOCKEY INSIGHT',
      tagColor: 'bg-secondary/20 text-secondary border border-secondary/30',
      title: 'Jockey A. Singh',
      desc: 'on fire! 3 wins in last 5 rides.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12 text-secondary/30 group-hover:text-secondary/60 transition-colors">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12 relative z-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-heading font-bold uppercase tracking-wide">Daily AI Bulletins</h2>
        <button className="text-primary text-sm font-medium hover:text-secondary transition-colors">View All Bulletins</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {bulletins.map((bulletin, idx) => (
          <div 
            key={idx} 
            className="group relative bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-soft transition-all duration-300 flex flex-col h-full overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/10 transition-colors" />

            <div className="flex items-center justify-between mb-4 relative z-10">
              <span className="text-[10px] text-textSecondary font-bold tracking-wider">{bulletin.time}</span>
              <span className={`text-[9px] font-bold px-2 py-1 rounded tracking-wider ${bulletin.tagColor}`}>
                {bulletin.tag}
              </span>
            </div>

            <h4 className="font-heading font-bold text-base mb-2 relative z-10 group-hover:text-primary transition-colors">{bulletin.title}</h4>
            <p className="text-sm text-textSecondary mb-6 flex-1 relative z-10 leading-relaxed">{bulletin.desc}</p>
            
            <div className="flex items-center justify-between mt-auto relative z-10">
              <button className="text-danger text-xs font-bold uppercase tracking-wider flex items-center gap-1 group/btn hover:text-primary transition-colors">
                Read More 
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
              
              {bulletin.number ? (
                <div className={`w-10 h-10 rounded-full border ${bulletin.numColor} flex items-center justify-center`}>
                  <span className="font-heading font-bold text-lg">{bulletin.number}</span>
                </div>
              ) : (
                <div className="mr-2">
                  {bulletin.icon}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
