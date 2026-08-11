import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { mockTrainers, mockRaceEntries } from '@/lib/registryMockData';
import { notFound } from 'next/navigation';

export default async function TrainerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const trainerId = decodeURIComponent(resolvedParams.id);
  const mockTrainer = mockTrainers.find(t => t.id === trainerId) || mockTrainers[0];

  if (!mockTrainer) {
    notFound();
  }

  // Find associated race entries for this trainer
  const entries = mockRaceEntries.filter(e => e.trainerName === mockTrainer.name);

  // Mock horses in training for the trainer
  const horsesInTraining = [
    { name: 'Monsoon Sonnet', id: 'HR-RWITC-2026-00001' },
    { name: 'Western Ghat', id: 'HR-RWITC-2026-00002' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10 max-w-5xl">
      <Link href="/trainers" className="inline-flex items-center gap-2 text-textSecondary hover:text-primary transition-colors mb-6 text-sm font-medium">
        <ChevronLeft className="w-4 h-4" />
        Trainers
      </Link>

      {/* Header */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h1 className="text-3xl font-heading font-bold text-white mb-2">{mockTrainer.name}</h1>
        <p className="text-sm font-mono text-textSecondary tracking-wide uppercase">
          {mockTrainer.id}
        </p>
      </div>

      {/* Details Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          <div>
            <p className="text-xs text-textSecondary mb-1">Full name</p>
            <p className="font-medium">{mockTrainer.name}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Licence grade</p>
            <p className="font-medium">{mockTrainer.licenseGrade}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Stable name</p>
            <p className="font-medium">{mockTrainer.stables}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Licensing club</p>
            <p className="font-medium text-primary">{mockTrainer.licensingClub}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Status</p>
            <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
              mockTrainer.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
              'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              {mockTrainer.status}
            </span>
          </div>
        </div>
      </div>

      {/* Horses in Training Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">
          Horses In Training ({horsesInTraining.length})
        </h3>
        <div className="space-y-4">
          {horsesInTraining.map(horse => (
            <div key={horse.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface/50 border border-border/50 rounded-lg">
              <p className="font-bold text-white mb-1 sm:mb-0">{horse.name}</p>
              <p className="text-sm font-mono text-textSecondary">{horse.id}</p>
            </div>
          ))}
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
          <p className="text-muted-foreground text-sm">No active race entries found for this trainer.</p>
        )}
      </div>

    </div>
  );
}
