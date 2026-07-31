import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface RecommendationCardProps {
  horseName: string;
  raceName: string;
  winProbability: number;
  reason: string;
}

export function RecommendationCard({ horseName, raceName, winProbability, reason }: RecommendationCardProps) {
  return (
    <Card className="relative overflow-hidden border-secondary/50 shadow-premium">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-premium opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3 rounded-full pointer-events-none" />
      
      <CardContent className="p-6 relative z-10 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="secondary" className="mb-2">AI Top Pick</Badge>
            <h3 className="text-2xl font-heading font-bold text-white">{horseName}</h3>
            <p className="text-sm text-textSecondary">{raceName}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-premium">
              {winProbability}%
            </div>
            <p className="text-xs text-textSecondary uppercase tracking-wider">Win Prob</p>
          </div>
        </div>
        
        <div className="bg-surface/50 rounded-lg p-4 border border-border">
          <p className="text-sm text-white/90 leading-relaxed">
            <span className="material-symbols-rounded inline-block align-bottom text-secondary mr-2 text-[18px]">
              analytics
            </span>
            {reason}
          </p>
        </div>

        <Button variant="primary" className="w-full mt-2">
          View Full Analysis
        </Button>
      </CardContent>
    </Card>
  );
}
