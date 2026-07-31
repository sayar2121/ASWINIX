import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';

interface JockeyCardProps {
  name: string;
  winRate: number; // percentage
  rides: number;
  recentWins: number;
  rating: number; // AI Rating 0-100
}

export function JockeyCard({ name, winRate, rides, recentWins, rating }: JockeyCardProps) {
  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardContent className="p-5 flex flex-col gap-3">
        <div className="flex justify-between items-start border-b border-border pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center overflow-hidden">
              <span className="material-symbols-rounded text-textSecondary">person</span>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white">{name}</h4>
              <p className="text-xs text-textSecondary">Jockey</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-textSecondary uppercase tracking-wider">AI Rating</span>
            <span className="font-mono font-bold text-xl text-primary">{rating}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-sm pt-1">
          <div className="flex flex-col items-center justify-center p-2 bg-surface/30 rounded-lg border border-border/50">
            <span className="text-[10px] text-textSecondary uppercase mb-1">Win Rate</span>
            <span className="font-mono font-bold text-white">{winRate}%</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-surface/30 rounded-lg border border-border/50">
            <span className="text-[10px] text-textSecondary uppercase mb-1">Rides</span>
            <span className="font-mono font-bold text-white">{rides}</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-surface/30 rounded-lg border border-border/50">
            <span className="text-[10px] text-textSecondary uppercase mb-1">Recent Wins</span>
            <span className="font-mono font-bold text-success">{recentWins}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
