import React from 'react';
import Link from 'next/link';
import { Search, Hash } from 'lucide-react';
import { mockRaceEntries } from '@/lib/registryMockData';

export default function RaceEntriesPage() {
  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-heading font-bold uppercase tracking-wide flex items-center gap-3">
            <Hash className="w-8 h-8 text-primary" />
            Race Entries
          </h1>
          <p className="text-textSecondary mt-3 text-sm leading-relaxed">
            Runners declared in a race, with results and weights.
          </p>
          <div className="mt-2 text-xs text-muted-foreground font-mono bg-muted/50 p-2 rounded-md inline-block">
            ID PATTERN · EN-IND-[YEAR]-[SEQ]
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input 
              type="text" 
              placeholder="Search race entries..." 
              className="bg-surface border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors min-w-[250px]"
            />
          </div>
          <button className="flex items-center gap-2 bg-surface border border-border rounded-lg px-4 py-2 text-sm hover:bg-card transition-colors">
            Export CSV
          </button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface/50 border-b border-border/50 text-xs text-textSecondary font-medium">
                <th className="p-4">Registry ID</th>
                <th className="p-4">Race</th>
                <th className="p-4">Horse</th>
                <th className="p-4">Jockey</th>
                <th className="p-4">Finish position</th>
                <th className="p-4">Weight carried (kg)</th>
                <th className="p-4">Starting price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {mockRaceEntries.map((e) => (
                <tr key={e.id} className="group hover:bg-surface/30 transition-colors">
                  <td className="p-4 font-mono text-sm">
                    <Link href={`/race-entries/${e.id}`} className="hover:text-primary transition-colors block w-full h-full">
                      {e.id}
                    </Link>
                  </td>
                  <td className="p-4 text-sm text-primary">{e.raceName}</td>
                  <td className="p-4 text-sm font-medium">{e.horseName}</td>
                  <td className="p-4 text-sm text-primary">{e.jockeyName}</td>
                  <td className="p-4 text-sm">{e.finishPosition}</td>
                  <td className="p-4 text-sm font-mono">{e.weightCarried}</td>
                  <td className="p-4 text-sm font-mono">{e.startingPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
