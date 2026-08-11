import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { mockJockeys, mockRaceEntries } from '@/lib/registryMockData';
import { notFound } from 'next/navigation';

export default function JockeyProfilePage({ params }: { params: { id: string } }) {
  const jockeyId = decodeURIComponent(params.id);
  const mockJockey = mockJockeys.find(j => j.id === jockeyId) || mockJockeys[0];

  if (!mockJockey) {
    notFound();
  }

  // Find associated race entries for this jockey
  const entries = mockRaceEntries.filter(e => e.jockeyName === mockJockey.name);

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10 max-w-5xl">
      <Link href="/jockeys" className="inline-flex items-center gap-2 text-textSecondary hover:text-primary transition-colors mb-6 text-sm font-medium">
        <ChevronLeft className="w-4 h-4" />
        Jockeys
      </Link>

      {/* Header */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h1 className="text-3xl font-heading font-bold text-white mb-2">{mockJockey.name}</h1>
        <p className="text-sm font-mono text-textSecondary tracking-wide uppercase">
          {mockJockey.id}
        </p>
      </div>

      {/* Details Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          <div>
            <p className="text-xs text-textSecondary mb-1">Full name</p>
            <p className="font-medium">{mockJockey.name}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Date of birth</p>
            <p className="font-medium">{mockJockey.dob}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Nationality</p>
            <p className="font-medium">{mockJockey.nationality}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Licence type</p>
            <p className="font-medium">{mockJockey.licenseType}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Licensing club</p>
            <p className="font-medium text-primary">{mockJockey.licensingClub}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Status</p>
            <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
              mockJockey.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
              'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              {mockJockey.status}
            </span>
          </div>
        </div>
      </div>

      {/* Race Entries Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">
          Race Entries ({entries.length})
        </h3>
        {entries.length > 0 ? (
          <div className="space-y-4">
            {entries.map(entry => (
              <div key={entry.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface/50 border border-border/50 rounded-lg group hover:border-primary/50 transition-colors">
                <div>
                  <p className="font-bold text-white mb-1 group-hover:text-primary transition-colors">{entry.id}</p>
                  <p className="text-sm text-textSecondary">{entry.name}</p>
                </div>
                <div className="mt-2 sm:mt-0 text-right">
                  <p className="text-sm font-mono text-textSecondary">Pos: {entry.finishPosition} | Wgt: {entry.weightCarried}kg</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">No active race entries found for this jockey.</p>
        )}
      </div>

    </div>
  );
}
