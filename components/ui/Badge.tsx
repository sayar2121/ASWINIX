import React from 'react';
import { cn } from './Button'; 

const badgeVariantStyles = {
  default: 'border-transparent bg-primary text-white shadow-softBlue',
  secondary: 'border-transparent bg-secondary text-white',
  destructive: 'border-transparent bg-danger text-white shadow-soft',
  success: 'border-transparent bg-success text-white shadow-soft',
  warning: 'border-transparent bg-warning text-white shadow-soft',
  info: 'border-transparent bg-info text-white shadow-soft',
  outline: 'text-textPrimary border-border bg-transparent',
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariantStyles;
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        badgeVariantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariantStyles };
