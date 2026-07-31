"use client";

import React, { useState, useRef, useEffect } from 'react';
import { cn } from './Button';

export interface DropdownItem {
  label: string;
  value: string;
  icon?: string;
}

export interface DropdownProps {
  options: DropdownItem[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function Dropdown({ options, value, onChange, placeholder = 'Select option', className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={cn('relative w-full', className)} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 h-[52px] rounded-[16px] bg-surface/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-left"
      >
        <span className={selectedOption ? 'text-white' : 'text-textSecondary/70'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className={cn('material-symbols-rounded text-textSecondary transition-transform', isOpen && 'rotate-180')}>
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-card glass border border-border rounded-xl shadow-premium overflow-hidden animate-fade-in py-1">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange?.(opt.value);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-3 text-sm text-textSecondary hover:bg-surface hover:text-white transition-colors flex items-center gap-2"
            >
              {opt.icon && <span className="material-symbols-rounded text-[18px]">{opt.icon}</span>}
              {opt.label}
              {value === opt.value && (
                <span className="material-symbols-rounded text-primary ml-auto text-[18px]">check</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
