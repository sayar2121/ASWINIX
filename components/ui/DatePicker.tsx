import React from 'react';
import { cn } from './Button';

export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && <label className="text-sm font-semibold text-textSecondary uppercase tracking-wider">{label}</label>}
        <div className="relative">
          <input
            type="date"
            className={cn(
              "w-full h-[52px] rounded-[16px] bg-surface/50 border border-border px-4 py-2 text-sm text-white placeholder:text-textSecondary/70",
              "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
              "[color-scheme:dark]",
              error && "border-danger focus:border-danger focus:ring-danger",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && <span className="text-xs text-danger">{error}</span>}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';
