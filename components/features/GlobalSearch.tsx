"use client";

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('');

  const categories = ['Horse', 'Race', 'Trainer', 'Jockey', 'Race Club', 'Bulletin', 'News'];

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-2xl mt-20 items-start !p-0 overflow-hidden bg-card/95 backdrop-blur-xl border-primary/20 shadow-premium">
      <div className="flex flex-col w-full">
        {/* Search Input Area */}
        <div className="relative border-b border-border/50 bg-black/20">
          <span className="material-symbols-rounded absolute left-6 top-1/2 -translate-y-1/2 text-primary text-[28px]">
            search
          </span>
          <Input 
            autoFocus
            placeholder="Search across all of ASWINIX..." 
            className="pl-[60px] pr-12 h-[72px] text-xl bg-transparent border-none rounded-none shadow-none focus-visible:ring-0 text-white placeholder:text-textSecondary/50"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* We let Modal handle the close button, but we can pad the right side of the input so text doesn't overlap */}
        </div>
        
        {/* Content Area */}
        <div className="p-6">
          <div className="flex gap-2 flex-wrap items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-textSecondary mr-2">Filter by:</span>
            {categories.map((cat) => (
              <Badge key={cat} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors text-[10px] py-1 px-3">
                {cat}
              </Badge>
            ))}
          </div>

        {query && (
          <div className="mt-6 border-t border-border/50 pt-6 min-h-[200px]">
            <p className="text-sm text-textSecondary mb-4">Searching for "{query}"...</p>
            {/* Search results would go here */}
            <div className="flex flex-col items-center justify-center h-40 opacity-50">
              <span className="material-symbols-rounded text-4xl mb-2 animate-spin text-primary">sync</span>
              <p className="font-mono text-sm tracking-widest uppercase">AI Engine processing...</p>
            </div>
          </div>
        )}
        
        {!query && (
          <div className="mt-6 border-t border-border/50 pt-6">
            <h4 className="text-[10px] font-bold text-textSecondary uppercase tracking-widest mb-4">Recent Searches</h4>
            <div className="flex flex-col gap-1">
              <Button variant="ghost" className="justify-start px-3 py-2 h-auto text-textPrimary hover:text-white hover:bg-surface/50 rounded-lg">
                <span className="material-symbols-rounded text-[18px] mr-3 text-textSecondary">history</span>
                Flemington Race 4
              </Button>
              <Button variant="ghost" className="justify-start px-3 py-2 h-auto text-textPrimary hover:text-white hover:bg-surface/50 rounded-lg">
                <span className="material-symbols-rounded text-[18px] mr-3 text-textSecondary">history</span>
                James McDonald (Jockey)
              </Button>
            </div>
          </div>
        )}
        </div>
      </div>
    </Modal>
  );
}
