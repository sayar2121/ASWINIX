import React, { useEffect } from 'react';
import { cn } from './Button';

export interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  position?: 'left' | 'right';
  className?: string;
}

export function SidePanel({ isOpen, onClose, title, children, position = 'right', className }: SidePanelProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div 
        className={cn(
          'relative z-50 h-full w-full max-w-sm glass bg-card/95 shadow-premium transition-transform flex flex-col',
          position === 'right' ? 'ml-auto animate-slide-in-right border-l' : 'mr-auto animate-slide-in-left border-r',
          className
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <h2 className="text-xl font-heading font-bold">{title || 'Panel'}</h2>
          <button 
            onClick={onClose}
            className="text-textSecondary hover:text-white transition-colors flex items-center justify-center p-1 rounded-full hover:bg-surface"
          >
            <span className="material-symbols-rounded text-[24px]">close</span>
          </button>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
