import React from 'react';
import { cn } from './Button';
import { Input } from './Input';
import { Button } from './Button';

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto rounded-xl border border-border bg-card shadow-soft">
      <table
        ref={ref}
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  )
);
Table.displayName = 'Table';

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn('[&_tr]:border-b border-border bg-surface', className)} {...props} />
  )
);
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  )
);
TableBody.displayName = 'TableBody';

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'border-b border-border transition-colors hover:bg-surface/50 data-[state=selected]:bg-surface',
        className
      )}
      {...props}
    />
  )
);
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        'h-12 px-4 text-left align-middle font-heading font-medium text-textSecondary [&:has([role=checkbox])]:pr-0',
        className
      )}
      {...props}
    />
  )
);
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
      {...props}
    />
  )
);
TableCell.displayName = 'TableCell';

export interface DataTableProps {
  children: React.ReactNode;
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  showExport?: boolean;
}

function DataTable({ children, searchPlaceholder = 'Search...', onSearch, showExport = true }: DataTableProps) {
  return (
    <div className="space-y-4 w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-72">
          <span className="material-symbols-rounded absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary">search</span>
          <Input 
            placeholder={searchPlaceholder} 
            className="pl-10 h-10" 
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button variant="secondary" size="sm" className="w-full sm:w-auto">
            <span className="material-symbols-rounded text-[18px] mr-2">filter_list</span>
            Filter
          </Button>
          {showExport && (
            <Button variant="secondary" size="sm" className="w-full sm:w-auto">
              <span className="material-symbols-rounded text-[18px] mr-2">download</span>
              Export
            </Button>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, DataTable };
