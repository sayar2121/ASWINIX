import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';

interface WeatherCardProps {
  location: string;
  temperature: number;
  condition: string;
  trackCondition: string; // e.g., 'Good (4)', 'Heavy (8)'
  icon: string; // Material symbol name like 'rainy', 'sunny'
}

export function WeatherCard({ location, temperature, condition, trackCondition, icon }: WeatherCardProps) {
  return (
    <Card className="bg-gradient-to-br from-surface to-bg border-border">
      <CardContent className="p-5 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-heading font-bold text-lg text-white">{location}</h4>
            <p className="text-xs text-textSecondary uppercase tracking-wider">{condition}</p>
          </div>
          <span className="material-symbols-rounded text-4xl text-primary">{icon}</span>
        </div>

        <div className="flex items-end gap-2">
          <span className="font-mono font-bold text-4xl text-white">{temperature}°</span>
          <span className="text-sm text-textSecondary mb-1">C</span>
        </div>

        <div className="mt-2 bg-surface/50 rounded-lg p-3 border border-border flex items-center justify-between">
          <span className="text-xs text-textSecondary">Track Rating</span>
          <span className={`font-mono font-bold text-sm ${
            trackCondition.toLowerCase().includes('heavy') ? 'text-danger' : 
            trackCondition.toLowerCase().includes('soft') ? 'text-warning' : 'text-success'
          }`}>
            {trackCondition}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
