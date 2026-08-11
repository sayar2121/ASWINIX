import React from 'react';
import Link from 'next/link';
import { Search, Map } from 'lucide-react';
import { mockStudFarms } from '@/lib/registryMockData';

export default function StudFarmsPage() {
  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-heading font-bold uppercase tracking-wide flex items-center gap-3">
            <Map className="w-8 h-8 text-primary" />
            Stud Farms
          </h1>
          <p className="text-textSecondary mt-3 text-sm leading-relaxed">
            Breeding operations and their locations.
          </p>
          <div className="mt-2 text-xs text-muted-foreground font-mono bg-muted/50 p-2 rounded-md inline-block">
            ID PATTERN · ST-[REGION]-[YEAR]-[SEQ]
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input 
              type="text" 
              placeholder="Search stud farms..." 
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
                <th className="p-4">Stud name</th>
                <th className="p-4">Location</th>
                <th className="p-4">Region code</th>
                <th className="p-4">Owner</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {mockStudFarms.map((s) => (
                <tr key={s.id} className="group hover:bg-surface/30 transition-colors">
                  <td className="p-4 font-mono text-sm">
                    <Link href={`/stud-farms/${s.id}`} className="hover:text-primary transition-colors block w-full h-full">
                      {s.id}
                    </Link>
                  </td>
                  <td className="p-4 font-medium">
                    <Link href={`/stud-farms/${s.id}`} className="hover:text-primary transition-colors block w-full h-full">
                      {s.name}
                    </Link>
                  </td>
                  <td className="p-4 text-sm">{s.location}</td>
                  <td className="p-4 text-sm">{s.regionCode}</td>
                  <td className="p-4 text-sm text-primary">{s.ownerName}</td>
                  <td className="p-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${s.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {s.status}
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
