import React from 'react';
import { ProgressBar } from '@/components/ui/ProgressBar';

interface ConfidenceMeterProps {
  score: number; // 0-100
  label?: string;
  className?: string;
}

export function ConfidenceMeter({ score, label = "AI Confidence", className }: ConfidenceMeterProps) {
  let colorVariant: 'primary' | 'success' | 'warning' | 'danger' = 'primary';
  if (score >= 80) colorVariant = 'success';
  else if (score >= 50) colorVariant = 'warning';
  else colorVariant = 'danger';

  return (
    <div className={`flex flex-col gap-2 ${className || ''}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-textSecondary uppercase tracking-wider">{label}</span>
        <span className="text-lg font-mono font-bold text-white">{score}%</span>
      </div>
      <ProgressBar value={score} colorVariant={colorVariant} />
    </div>
  );
}
