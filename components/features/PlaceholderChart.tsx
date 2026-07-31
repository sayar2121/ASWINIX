import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface PlaceholderChartProps {
  title: string;
  type: 'bar' | 'line' | 'pie' | 'radar' | 'heat';
  height?: number;
}

const iconMap = {
  bar: 'bar_chart',
  line: 'show_chart',
  pie: 'pie_chart',
  radar: 'radar',
  heat: 'grid_on',
};

export function PlaceholderChart({ title, type, height = 250 }: PlaceholderChartProps) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-textSecondary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className="w-full rounded-lg bg-surface/50 border border-border/50 flex flex-col items-center justify-center relative overflow-hidden"
          style={{ height: `${height}px` }}
        >
          {/* Subtle animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 opacity-50 pointer-events-none" />
          
          <span className="material-symbols-rounded text-5xl text-border mb-2 relative z-10">
            {iconMap[type]}
          </span>
          <span className="text-xs text-textSecondary relative z-10">
            {type.charAt(0).toUpperCase() + type.slice(1)} Chart View
          </span>
          <span className="text-[10px] text-textSecondary/50 mt-1 relative z-10">Data Visualization Ready</span>
        </div>
      </CardContent>
    </Card>
  );
}
