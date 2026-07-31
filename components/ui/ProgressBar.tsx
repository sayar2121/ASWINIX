import React from 'react';
import { cn } from './Button';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  colorVariant?: 'primary' | 'success' | 'warning' | 'danger';
  showLabel?: boolean;
}

const colorMap = {
  primary: 'bg-primary shadow-softBlue',
  success: 'bg-success shadow-soft',
  warning: 'bg-warning shadow-soft',
  danger: 'bg-danger shadow-soft',
};

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, value, colorVariant = 'primary', showLabel = false, ...props }, ref) => {
    const clampedValue = Math.min(100, Math.max(0, value));

    return (
      <div ref={ref} className={cn('w-full flex flex-col gap-1', className)} {...props}>
        {showLabel && (
          <div className="flex justify-end w-full">
            <span className="text-xs font-mono font-bold text-textPrimary">{clampedValue}%</span>
          </div>
        )}
        <div className="h-2 w-full overflow-hidden rounded-full bg-surface">
          <div
            className={cn('h-full w-full flex-1 transition-all duration-500 ease-in-out', colorMap[colorVariant])}
            style={{ transform: `translateX(-${100 - clampedValue}%)` }}
          />
        </div>
      </div>
    );
  }
);
ProgressBar.displayName = 'ProgressBar';

export { ProgressBar };
