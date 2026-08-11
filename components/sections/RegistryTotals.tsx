import React from 'react';
import Link from 'next/link';
import { getRegistryTotals } from '@/lib/registryMockData';

export default function RegistryTotals() {
  const totals = getRegistryTotals();

  const cards = [
    { title: 'Horses', count: totals.horses, link: '/horses', pattern: 'HR-[CLUB]-[YEAR]-[SEQ]' },
    { title: 'Jockeys', count: totals.jockeys, link: '/jockeys', pattern: 'JK-[CLUB]-[YEAR]-[SEQ]' },
    { title: 'Trainers', count: totals.trainers, link: '/trainers', pattern: 'TR-[CLUB]-[YEAR]-[SEQ]' },
    { title: 'Owners', count: totals.owners, link: '/owners', pattern: 'OW-[CLUB]-[YEAR]-[SEQ]' },
    { title: 'Clubs', count: totals.clubs, link: '/clubs', pattern: 'CL-IND-[SEQ]' },
    { title: 'Stud Farms', count: totals.studFarms, link: '/stud-farms', pattern: 'ST-[REGION]-[YEAR]-[SEQ]' },
    { title: 'Races', count: totals.races, link: '/races', pattern: 'RC-[CLUB]-[YEAR]-[SEQ]' },
    { title: 'Race Entries', count: totals.raceEntries, link: '/race-entries', pattern: 'EN-IND-[YEAR]-[SEQ]' },
  ];

  return (
    <section className="container mx-auto px-4 py-12 relative z-10" id="registry-totals">
      <div className="mb-8">
        <h2 className="text-3xl font-heading font-bold uppercase tracking-wide">Registry Totals</h2>
        <p className="text-muted-foreground mt-2">Live totals across the Indian horse racing ecosystem registry.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(card => (
          <Link href={card.link} key={card.title} className="group">
            <div className="bg-card border border-border p-6 rounded-xl h-full transition-all hover:border-primary hover:shadow-md hover:-translate-y-1">
              <h3 className="text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
              <p className="text-3xl font-serif font-bold text-foreground mb-6">{card.count}</p>
              <div className="text-[10px] text-muted-foreground font-mono uppercase">
                {card.pattern}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
