import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { mockRaceEntries } from '@/lib/registryMockData';
import { notFound } from 'next/navigation';

export default async function RaceEntryProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const entryId = decodeURIComponent(resolvedParams.id);
  const mockEntry = mockRaceEntries.find(e => e.id === entryId) || mockRaceEntries[0];

  if (!mockEntry) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10 max-w-5xl">
      <Link href="/race-entries" className="inline-flex items-center gap-2 text-textSecondary hover:text-primary transition-colors mb-6 text-sm font-medium">
        <ChevronLeft className="w-4 h-4" />
        Race Entries
      </Link>

      {/* Header */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h1 className="text-3xl font-heading font-bold text-white mb-2">{mockEntry.id}</h1>
        <p className="text-sm font-mono text-textSecondary tracking-wide uppercase">
          {mockEntry.id}
        </p>
      </div>

      {/* Details Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          <div>
            <p className="text-xs text-textSecondary mb-1">Race</p>
            <p className="font-medium text-primary">{mockEntry.raceName}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Horse</p>
            <p className="font-medium text-primary">{mockEntry.horseName}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Jockey</p>
            <p className="font-medium text-primary">{mockEntry.jockeyName}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Trainer</p>
            <p className="font-medium text-primary">{mockEntry.trainerName}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Owner</p>
            <p className="font-medium text-primary">{mockEntry.ownerName}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Finish position</p>
            <p className="font-medium">{mockEntry.finishPosition}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Weight carried (kg)</p>
            <p className="font-medium font-mono">{mockEntry.weightCarried}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Starting price</p>
            <p className="font-medium font-mono">{mockEntry.startingPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
