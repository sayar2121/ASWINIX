import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Star, TrendingUp, Trophy, Calendar, Info, Activity } from 'lucide-react';
import { mockHorses } from '@/lib/registryMockData';
import { notFound } from 'next/navigation';

export default async function HorseProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  // Try to find by slugified name, or default to first horse
  const horseName = decodeURIComponent(resolvedParams.id).replace(/-/g, ' ');
  const mockHorse = mockHorses.find(h => h.name.toLowerCase() === horseName) || mockHorses[0];

  if (!mockHorse) {
    notFound();
  }

  // Adding some dummy extended data for the profile
  const extendedData = {
    age: '4 YO',
    winRate: '31%',
    form: '1-1-2-1-3',
    rating: 5,
    trainer: 'C. Waller',
    jockey: 'J. McDonald',
    owner: 'Magic Bloodstock',
    prizeMoney: '$1.2M',
    career: '12 starts (4-3-2)',
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10">
      <Link href="/horses" className="inline-flex items-center gap-2 text-textSecondary hover:text-primary transition-colors mb-8 text-sm font-medium">
        <ChevronLeft className="w-4 h-4" />
        Back to Horses
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Image & Quick Facts */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg p-2">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface">
              <Image 
                src="/images/home_image.png" 
                alt={mockHorse.name} 
                fill 
                className="object-cover opacity-80" 
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${
                  mockHorse.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
                  mockHorse.status === 'Inactive' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 
                  'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {mockHorse.status}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h1 className="text-3xl font-heading font-bold uppercase tracking-wider text-white mb-1">{mockHorse.name}</h1>
              <p className="text-sm text-textSecondary font-mono bg-surface p-2 rounded-lg inline-block border border-border/50">
                ID: {mockHorse.id}
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 shadow-lg space-y-4">
            <h3 className="font-heading font-bold text-lg uppercase tracking-wide border-b border-border/50 pb-2 mb-4">Pedigree</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-textSecondary uppercase tracking-wider">Sire</p>
                <p className="font-medium">{mockHorse.sire}</p>
              </div>
              <div>
                <p className="text-xs text-textSecondary uppercase tracking-wider">Dam</p>
                <p className="font-medium">{mockHorse.dam}</p>
              </div>
              <div>
                <p className="text-xs text-textSecondary uppercase tracking-wider">Foaled</p>
                <p className="font-medium">{mockHorse.foaledDate}</p>
              </div>
              <div>
                <p className="text-xs text-textSecondary uppercase tracking-wider">Color / Sex</p>
                <p className="font-medium">{mockHorse.color} {mockHorse.sex}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Stats & Connections */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Top Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card border border-border p-5 rounded-2xl">
              <Activity className="w-5 h-5 text-primary mb-3" />
              <p className="text-xs text-textSecondary uppercase tracking-wider">Current Form</p>
              <p className="text-2xl font-bold tracking-widest">{extendedData.form}</p>
            </div>
            <div className="bg-card border border-border p-5 rounded-2xl">
              <TrendingUp className="w-5 h-5 text-success mb-3" />
              <p className="text-xs text-textSecondary uppercase tracking-wider">Win Rate</p>
              <p className="text-2xl font-bold text-success">{extendedData.winRate}</p>
            </div>
            <div className="bg-card border border-border p-5 rounded-2xl">
              <Trophy className="w-5 h-5 text-yellow-500 mb-3" />
              <p className="text-xs text-textSecondary uppercase tracking-wider">Prize Money</p>
              <p className="text-2xl font-bold">{extendedData.prizeMoney}</p>
            </div>
            <div className="bg-card border border-border p-5 rounded-2xl">
              <Star className="w-5 h-5 text-warning mb-3" />
              <p className="text-xs text-textSecondary uppercase tracking-wider">AI Rating</p>
              <div className="flex items-center gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-4 h-4 ${star <= extendedData.rating ? 'text-warning fill-warning' : 'text-surface fill-surface stroke-border'}`} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Connections */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
            <h3 className="font-heading font-bold text-lg uppercase tracking-wide border-b border-border/50 pb-2 mb-6">Connections</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center">
                  <Info className="w-5 h-5 text-textSecondary" />
                </div>
                <div>
                  <p className="text-xs text-textSecondary uppercase tracking-wider">Trainer</p>
                  <p className="font-bold text-white">{extendedData.trainer}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center">
                  <Info className="w-5 h-5 text-textSecondary" />
                </div>
                <div>
                  <p className="text-xs text-textSecondary uppercase tracking-wider">Jockey</p>
                  <p className="font-bold text-white">{extendedData.jockey}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center">
                  <Info className="w-5 h-5 text-textSecondary" />
                </div>
                <div>
                  <p className="text-xs text-textSecondary uppercase tracking-wider">Owner</p>
                  <p className="font-bold text-white">{extendedData.owner}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Career Summary */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
            <h3 className="font-heading font-bold text-lg uppercase tracking-wide border-b border-border/50 pb-2 mb-6">Career Summary</h3>
            <p className="text-textSecondary leading-relaxed">
              {mockHorse.name} is a {extendedData.age} {mockHorse.color.toLowerCase()} {mockHorse.sex.toLowerCase()} sired by {mockHorse.sire} out of {mockHorse.dam}. 
              Registered with the Aswinix Racing Registry (ID: {mockHorse.id}), this thoroughbred is currently listed as {mockHorse.status.toLowerCase()} 
              and has a career record of {extendedData.career}, amassing {extendedData.prizeMoney} in total earnings.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
