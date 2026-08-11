import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { mockOwners } from '@/lib/registryMockData';
import { notFound } from 'next/navigation';

export default async function OwnerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const ownerId = decodeURIComponent(resolvedParams.id);
  const mockOwner = mockOwners.find(o => o.id === ownerId) || mockOwners[0];

  if (!mockOwner) {
    notFound();
  }

  // Mock horses owned by the owner
  const horsesOwned = [
    { name: 'Monsoon Sonnet', id: 'HR-RWITC-2026-00001' },
    { name: 'Western Ghat', id: 'HR-RWITC-2026-00002' },
  ];

  // Mock stud farms owned by the owner
  const studFarms = [
    { name: 'Nanoli Stud Farm', id: 'ST-MH-2026-00001' }
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10 max-w-5xl">
      <Link href="/owners" className="inline-flex items-center gap-2 text-textSecondary hover:text-primary transition-colors mb-6 text-sm font-medium">
        <ChevronLeft className="w-4 h-4" />
        Owners
      </Link>

      {/* Header */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h1 className="text-3xl font-heading font-bold text-white mb-2">{mockOwner.name}</h1>
        <p className="text-sm font-mono text-textSecondary tracking-wide uppercase">
          {mockOwner.id}
        </p>
      </div>

      {/* Details Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          <div>
            <p className="text-xs text-textSecondary mb-1">Display name</p>
            <p className="font-medium">{mockOwner.name}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Owner type</p>
            <p className="font-medium">{mockOwner.type}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Registered colours</p>
            <p className="font-medium">{mockOwner.registeredColours}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Home club</p>
            <p className="font-medium text-primary">{mockOwner.homeClub}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Status</p>
            <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
              mockOwner.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
              'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              {mockOwner.status}
            </span>
          </div>
        </div>
      </div>

      {/* Horses Owned Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">
          Horses Owned ({horsesOwned.length})
        </h3>
        <div className="space-y-4">
          {horsesOwned.map(horse => (
            <div key={horse.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface/50 border border-border/50 rounded-lg">
              <p className="font-bold text-white mb-1 sm:mb-0">{horse.name}</p>
              <p className="text-sm font-mono text-textSecondary">{horse.id}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stud Farms Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">
          Stud Farms ({studFarms.length})
        </h3>
        {studFarms.length > 0 ? (
          <div className="space-y-4">
            {studFarms.map(farm => (
              <div key={farm.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface/50 border border-border/50 rounded-lg group hover:border-primary/50 transition-colors">
                <p className="font-bold text-white mb-1 sm:mb-0 group-hover:text-primary transition-colors">{farm.name}</p>
                <p className="text-sm font-mono text-textSecondary">{farm.id}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">No stud farms associated with this owner.</p>
        )}
      </div>

    </div>
  );
}
