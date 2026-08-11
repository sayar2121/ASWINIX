import React from 'react';
import Link from 'next/link';

export default function RegistryLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { name: 'Dashboard', path: '/registry' },
    { name: 'Horses', path: '/horses' },
    { name: 'Jockeys', path: '/jockeys' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Owners', path: '#' },
    { name: 'Clubs', path: '#' },
    { name: 'Stud Farms', path: '#' },
    { name: 'Races', path: '/races' },
    { name: 'Race Entries', path: '#' },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-12 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="sticky top-24 bg-card border border-border rounded-xl p-4 flex flex-col gap-2">
          <h2 className="text-lg font-heading font-bold uppercase tracking-wide mb-2 text-foreground/80 px-2">Registry Menu</h2>
          {links.map(link => (
            <Link 
              key={link.name} 
              href={link.path}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
