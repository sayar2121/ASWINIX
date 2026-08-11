import React from 'react';
import RegistryTotals from '@/components/sections/RegistryTotals';

export default function RegistryDashboard() {


  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-heading font-bold uppercase tracking-wide mb-2">Aswinix Racing Registry (ARR)</h1>
        <p className="text-muted-foreground max-w-3xl">
          A unified digital registry and intelligence platform for the horse-racing industry, providing permanent unique identities and interconnected records for horses, jockeys, trainers, owners, clubs, breeders, and races.
        </p>
      </div>

      <div className="-mx-4 -mt-8">
        <RegistryTotals />
      </div>
    </div>
  );
}
