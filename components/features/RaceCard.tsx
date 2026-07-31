import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface RaceCardProps {
  time: string;
  trackName: string;
  distance: string;
  raceNumber: number;
  status?: 'Upcoming' | 'Live' | 'Finished';
}

export function RaceCard({ time, trackName, distance, raceNumber, status = 'Upcoming' }: RaceCardProps) {
  return (
    <Card className="hover:-translate-y-1 transition-transform duration-200">
      <CardContent className="p-5 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
              <span className="font-heading font-bold text-white">R{raceNumber}</span>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white">{trackName}</h4>
              <p className="text-xs text-textSecondary flex items-center gap-1">
                <span className="material-symbols-rounded text-[14px]">schedule</span>
                {time}
              </p>
            </div>
          </div>
          <Badge 
            variant={status === 'Live' ? 'destructive' : status === 'Finished' ? 'secondary' : 'default'}
            className={status === 'Live' ? 'animate-pulse' : ''}
          >
            {status}
          </Badge>
        </div>

        <div className="flex justify-between items-center bg-surface/50 rounded-lg p-3 border border-border">
          <div className="flex flex-col">
            <span className="text-[10px] text-textSecondary uppercase tracking-wider">Distance</span>
            <span className="font-mono font-semibold text-white">{distance}</span>
          </div>
          <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
            View Field
            <span className="material-symbols-rounded text-[16px] ml-1">arrow_forward</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
