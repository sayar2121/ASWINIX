import React from 'react';

interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
}

interface RegistryTableProps<T> {
  title: string;
  description: string;
  data: T[];
  columns: Column<T>[];
  idPattern: string;
}

export function RegistryTable<T extends { id: string }>({ title, description, data, columns, idPattern }: RegistryTableProps<T>) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold uppercase tracking-wide mb-2">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-2 text-xs text-muted-foreground font-mono bg-muted/50 p-2 rounded-md inline-block">
          ID pattern · {idPattern}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 border-b border-border text-muted-foreground uppercase text-xs font-semibold">
              <tr>
                {columns.map((col, i) => (
                  <th key={i} className="px-6 py-4">{col.header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                  {columns.map((col, i) => (
                    <td key={i} className="px-6 py-4 whitespace-nowrap">
                      {typeof col.accessor === 'function' 
                        ? col.accessor(item) 
                        : String(item[col.accessor] ?? '-')}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {data.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">
            No records found.
          </div>
        )}
      </div>
    </div>
  );
}
