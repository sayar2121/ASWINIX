import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { mockStudFarms } from '@/lib/registryMockData';
import { notFound } from 'next/navigation';

export default async function StudFarmProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const studId = decodeURIComponent(resolvedParams.id);
  const mockStud = mockStudFarms.find(s => s.id === studId) || mockStudFarms[0];

  if (!mockStud) {
    notFound();
  }

  // Mock bred horses
  const bredHorses = [
    { name: 'Monsoon Sonnet', id: 'HR-RWITC-2026-00001' },
    { name: 'Western Ghat', id: 'HR-RWITC-2026-00002' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10 max-w-5xl">
      <Link href="/stud-farms" className="inline-flex items-center gap-2 text-textSecondary hover:text-primary transition-colors mb-6 text-sm font-medium">
        <ChevronLeft className="w-4 h-4" />
        Stud Farms
      </Link>

      {/* Header */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h1 className="text-3xl font-heading font-bold text-white mb-2">{mockStud.name}</h1>
        <p className="text-sm font-mono text-textSecondary tracking-wide uppercase">
          {mockStud.id}
        </p>
      </div>

      {/* Details Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft mb-8">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          <div>
            <p className="text-xs text-textSecondary mb-1">Stud name</p>
            <p className="font-medium">{mockStud.name}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Location</p>
            <p className="font-medium">{mockStud.location}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Region code</p>
            <p className="font-medium">{mockStud.regionCode}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Owner</p>
            <p className="font-medium text-primary">{mockStud.ownerName}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary mb-1">Status</p>
            <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
              mockStud.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
              'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              {mockStud.status}
            </span>
          </div>
        </div>
      </div>

      {/* Bred Horses Card */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-soft">
        <h3 className="font-heading font-bold text-sm text-textSecondary uppercase tracking-wider mb-6">
          Bred Horses ({bredHorses.length})
        </h3>
        {bredHorses.length > 0 ? (
          <div className="space-y-4">
            {bredHorses.map((horse: any) => (
              <div key={horse.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface/50 border border-border/50 rounded-lg group hover:border-primary/50 transition-colors">
                <p className="font-bold text-white mb-1 sm:mb-0 group-hover:text-primary transition-colors">{horse.name}</p>
                <p className="text-sm font-mono text-textSecondary">{horse.id}</p>
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
