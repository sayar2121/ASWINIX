import React from 'react';
import { RaceCard } from '@/components/features/RaceCard';

export default function LiveRaces() {
  const liveRaces = [
    { id: '1', time: '2:15 PM', track: 'Hyderabad', raceNo: 3, distance: '1400m', status: 'Live' as const },
    { id: '2', time: '2:30 PM', track: 'Bangalore', raceNo: 4, distance: '1200m', status: 'Upcoming' as const },
    { id: '3', time: '3:00 PM', track: 'Mumbai', raceNo: 5, distance: '1600m', status: 'Upcoming' as const },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-heading font-bold text-lg tracking-wide uppercase text-white">Today's Races</h3>
        <button className="text-primary text-sm font-medium hover:text-white transition-colors">View All</button>
      </div>

      <div className="flex flex-col gap-4">
        {liveRaces.map((race) => (
          <RaceCard 
            key={race.id}
            time={race.time}
            trackName={race.track}
            distance={race.distance}
            raceNumber={race.raceNo}
            status={race.status}
          />
        ))}
      </div>
    </div>
  );
}
