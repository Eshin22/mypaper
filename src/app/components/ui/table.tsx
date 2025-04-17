// components/ui/table.tsx
import React from "react";

export const Table = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left border-collapse">{children}</table>
  </div>
);

export const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-gray-100">{children}</thead>
);

export const TableBody = ({ children }: { children: React.ReactNode }) => (
  <tbody className="divide-y">{children}</tbody>
);

export const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr className="hover:bg-gray-50">{children}</tr>
);

export const TableHead = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <th className={`px-4 py-2 font-semibold ${className}`}>{children}</th>
);

export const TableCell = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <td className={`px-4 py-2 ${className}`}>{children}</td>
);
