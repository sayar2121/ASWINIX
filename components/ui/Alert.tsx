import React from 'react';
import { cn } from './Button';

const alertVariantStyles = {
  info: 'bg-info/10 text-info border-info/20',
  success: 'bg-success/10 text-success border-success/20',
  warning: 'bg-warning/10 text-warning border-warning/20',
  danger: 'bg-danger/10 text-danger border-danger/20',
};

const alertIconMap = {
  info: 'info',
  success: 'check_circle',
  warning: 'warning',
  danger: 'error',
};

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof alertVariantStyles;
  icon?: string;
  title?: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', icon, title, children, ...props }, ref) => {
    const iconName = icon || alertIconMap[variant];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11',
          alertVariantStyles[variant],
          className
        )}
        {...props}
      >
        <div className="flex gap-3">
          <span className="material-symbols-rounded text-xl leading-none">{iconName}</span>
          <div className="flex flex-col gap-1">
            {title && <h5 className="font-heading font-medium leading-none tracking-tight">{title}</h5>}
            <div className="text-sm opacity-90">{children}</div>
          </div>
        </div>
      </div>
    );
  }
);
Alert.displayName = 'Alert';

export { Alert };
