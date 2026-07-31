import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';

interface BulletinCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export function BulletinCard({ title, excerpt, date, category, readTime }: BulletinCardProps) {
  return (
    <Card className="hover:-translate-y-1 transition-transform duration-200 hover:border-primary/50 group">
      <CardContent className="p-5 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
            {category}
          </span>
          <span className="text-xs text-textSecondary flex items-center gap-1">
            <span className="material-symbols-rounded text-[14px]">schedule</span>
            {readTime}
          </span>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg text-white group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h4>
          <p className="text-sm text-textSecondary mt-2 line-clamp-3">
            {excerpt}
          </p>
        </div>

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/50">
          <span className="text-xs text-textSecondary">{date}</span>
          <button className="text-sm font-semibold text-primary group-hover:text-white transition-colors flex items-center gap-1">
            Read More
            <span className="material-symbols-rounded text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
