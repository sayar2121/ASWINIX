import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { mockRaces } from '@/lib/registryMockData';
import { notFound } from 'next/navigation';

export default function RaceProfilePage({ params }: { params: { id: string } }) {
  const raceId = decodeURIComponent(params.id);
  const mockRace = mockRaces.find(r => r.id === raceId) || mockRaces[0];

  if (!mockRace) {
    notFound();
  }

  // Mock runners
  const runners: { name: string; id: string }[] = [
    { name: 'EN-IND-2026-00001', id: 'EN-IND-2026-00001' },
    { name: 'EN-IND-2026-00002', id: 'EN-IND-2026-00002' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10 max-w-5xl">
      <Link href="/races" className="inline-flex items-center gap-2 text-textSecondary hover:text-primary transition-colors mb-6 text-sm font-medium">
        <ChevronLeft className="w-4 h-4" />
        Races
      </Link>

      {/* Header */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h1 className="text-3xl font-heading font-bold text-white mb-2">{mockRace.name}</h1>
        <p className="text-sm font-mono text-textSecondary tracking-wide uppercase">
          {mockRace.id}
        </p>
      </div>

      {/* Details Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          <div>
            <p className="text-xs text-textSecondary mb-1">Race name</p>
            <p className="font-medium">{mockRace.name}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Race date</p>
            <p className="font-medium">{mockRace.date}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Club</p>
            <p className="font-medium text-primary">{mockRace.clubName}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Distance (m)</p>
            <p className="font-medium">{mockRace.distance}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Grade</p>
            <p className="font-medium">{mockRace.grade}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Prize money (INR)</p>
            <p className="font-medium font-mono">{mockRace.prizeMoneyStr}</p>
          </div>
        </div>
      </div>

      {/* Runners Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">
          Runners ({runners.length})
        </h3>
        {runners.length > 0 ? (
          <div className="space-y-4">
            {runners.map((runner) => (
              <div key={runner.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface/50 border border-border/50 rounded-lg group hover:border-primary/50 transition-colors">
                <p className="font-bold text-white mb-1 sm:mb-0 group-hover:text-primary transition-colors">{runner.name}</p>
                <p className="text-sm font-mono text-textSecondary">{runner.id}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">No linked records.</p>
        )}
      </div>

    </div>
  );
}
