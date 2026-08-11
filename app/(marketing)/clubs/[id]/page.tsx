import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { mockClubs } from '@/lib/registryMockData';
import { notFound } from 'next/navigation';

export default function ClubProfilePage({ params }: { params: { id: string } }) {
  const clubId = decodeURIComponent(params.id);
  const mockClub = mockClubs.find(c => c.id === clubId) || mockClubs[0];

  if (!mockClub) {
    notFound();
  }

  // Mock records for the club
  const homeHorses: any[] = [];
  const races: any[] = [];
  const trainers: any[] = [];
  const jockeys: any[] = [];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10 max-w-5xl">
      <Link href="/clubs" className="inline-flex items-center gap-2 text-textSecondary hover:text-primary transition-colors mb-6 text-sm font-medium">
        <ChevronLeft className="w-4 h-4" />
        Clubs
      </Link>

      {/* Header */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h1 className="text-3xl font-heading font-bold text-white mb-2">{mockClub.name}</h1>
        <p className="text-sm font-mono text-textSecondary tracking-wide uppercase">
          {mockClub.id}
        </p>
      </div>

      {/* Details Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          <div>
            <p className="text-xs text-textSecondary mb-1">Club name</p>
            <p className="font-medium">{mockClub.name}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Short code</p>
            <p className="font-medium">{mockClub.shortCode}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">City</p>
            <p className="font-medium">{mockClub.city}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">State</p>
            <p className="font-medium">{mockClub.state}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Website</p>
            <Link href={`https://${mockClub.website}`} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
              {mockClub.website}
            </Link>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Status</p>
            <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
              mockClub.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
              'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              {mockClub.status}
            </span>
          </div>
        </div>
      </div>

      {/* Home Horses Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">
          Home Horses ({homeHorses.length})
        </h3>
        {homeHorses.length > 0 ? (
          <div className="space-y-4">
            {homeHorses.map((horse: any) => (
              <div key={horse.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface/50 border border-border/50 rounded-lg">
                <p className="font-bold text-white mb-1 sm:mb-0">{horse.name}</p>
                <p className="text-sm font-mono text-textSecondary">{horse.id}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">No linked records.</p>
        )}
      </div>

      {/* Races Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">
          Races ({races.length})
        </h3>
        {races.length > 0 ? (
          <div className="space-y-4">
            {races.map((race: any) => (
              <div key={race.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface/50 border border-border/50 rounded-lg">
                <p className="font-bold text-white mb-1 sm:mb-0">{race.name}</p>
                <p className="text-sm font-mono text-textSecondary">{race.id}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">No linked records.</p>
        )}
      </div>

      {/* Licensed Trainers Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">
          Licensed Trainers ({trainers.length})
        </h3>
        {trainers.length > 0 ? (
          <div className="space-y-4">
            {trainers.map((trainer: any) => (
              <div key={trainer.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface/50 border border-border/50 rounded-lg">
                <p className="font-bold text-white mb-1 sm:mb-0">{trainer.name}</p>
                <p className="text-sm font-mono text-textSecondary">{trainer.id}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">No linked records.</p>
        )}
      </div>

      {/* Licensed Jockeys Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">
          Licensed Jockeys ({jockeys.length})
        </h3>
        {jockeys.length > 0 ? (
          <div className="space-y-4">
            {jockeys.map((jockey: any) => (
              <div key={jockey.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface/50 border border-border/50 rounded-lg">
                <p className="font-bold text-white mb-1 sm:mb-0">{jockey.name}</p>
                <p className="text-sm font-mono text-textSecondary">{jockey.id}</p>
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
