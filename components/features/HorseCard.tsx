import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';

interface HorseCardProps {
  name: string;
  age: number;
  weight: string;
  jockey: string;
  trainer: string;
  recentForm: string; // e.g. "1-2-1-3"
  rating: number; // 0-100
}

export function HorseCard({ name, age, weight, jockey, trainer, recentForm, rating }: HorseCardProps) {
  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardContent className="p-5 flex flex-col gap-3">
        <div className="flex justify-between items-start border-b border-border pb-3">
          <div>
            <h4 className="font-heading font-bold text-lg text-white">{name}</h4>
            <p className="text-xs text-textSecondary">{age}yo • {weight}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-textSecondary uppercase tracking-wider">AI Rating</span>
            <span className="font-mono font-bold text-xl text-primary">{rating}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm pt-1">
          <div>
            <p className="text-xs text-textSecondary">Jockey</p>
            <p className="font-medium text-white truncate">{jockey}</p>
          </div>
          <div>
            <p className="text-xs text-textSecondary">Trainer</p>
            <p className="font-medium text-white truncate">{trainer}</p>
          </div>
        </div>

        <div className="bg-surface/50 rounded p-2 flex justify-between items-center mt-1 border border-border">
          <span className="text-xs text-textSecondary">Recent Form</span>
          <span className="font-mono font-semibold tracking-widest text-white">{recentForm}</span>
        </div>
      </CardContent>
    </Card>
  );
}
