import React from 'react';
import Link from 'next/link';
import { Search, Flag } from 'lucide-react';
import { mockRaces } from '@/lib/registryMockData';

export default function RacesPage() {
  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-heading font-bold uppercase tracking-wide flex items-center gap-3">
            <Flag className="w-8 h-8 text-primary" />
            Races
          </h1>
          <p className="text-textSecondary mt-3 text-sm leading-relaxed">
            Scheduled and historic races held by member clubs.
          </p>
          <div className="mt-2 text-xs text-muted-foreground font-mono bg-muted/50 p-2 rounded-md inline-block">
            ID PATTERN · RC-[CLUB]-[YEAR]-[SEQ]
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input 
              type="text" 
              placeholder="Search races..." 
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
                <th className="p-4">Race name</th>
                <th className="p-4">Race date</th>
                <th className="p-4">Club</th>
                <th className="p-4">Distance (m)</th>
                <th className="p-4">Grade</th>
                <th className="p-4 text-right">Prize money (INR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {mockRaces.map((r) => (
                <tr key={r.id} className="group hover:bg-surface/30 transition-colors">
                  <td className="p-4 font-mono text-sm">
                    <Link href={`/races/${r.id}`} className="hover:text-primary transition-colors block w-full h-full">
                      {r.id}
                    </Link>
                  </td>
                  <td className="p-4 font-medium">
                    <Link href={`/races/${r.id}`} className="hover:text-primary transition-colors block w-full h-full">
                      {r.name}
                    </Link>
                  </td>
                  <td className="p-4 text-sm">{r.date}</td>
                  <td className="p-4 text-sm text-primary">{r.clubName}</td>
                  <td className="p-4 text-sm font-mono">{r.distance}</td>
                  <td className="p-4 text-sm">{r.grade}</td>
                  <td className="p-4 text-sm text-right font-mono">{r.prizeMoneyStr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
