import React, { useEffect } from 'react';
import { cn } from './Button';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div 
        className={cn(
          'relative z-50 w-full max-w-lg rounded-xl border border-border glass bg-card/90 p-6 shadow-premium transition-all',
          className
        )}
      >
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-textSecondary hover:text-white transition-colors"
        >
          <span className="material-symbols-rounded">close</span>
        </button>
        {title && (
          <h2 className="text-xl font-heading font-bold mb-4">{title}</h2>
        )}
        <div className="mt-2">
          {children}
        </div>
      </div>
    </div>
  );
}
