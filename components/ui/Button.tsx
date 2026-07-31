import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const variantStyles = {
  primary: 'bg-primary text-white shadow-softBlue hover:bg-primary/90',
  secondary: 'border border-secondary bg-transparent text-white hover:bg-secondary/10',
  ghost: 'bg-transparent text-primary hover:bg-primary/10',
  danger: 'bg-danger text-white hover:bg-danger/90 shadow-soft',
};

const sizeStyles = {
  default: 'h-[52px] px-6 py-2 rounded-md',
  sm: 'h-9 rounded-sm px-3',
  lg: 'h-14 rounded-lg px-8',
  icon: 'h-[52px] w-[52px] rounded-md',
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 duration-150',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
