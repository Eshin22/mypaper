import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`shadow-md p-6 bg-white rounded-lg ${className}`}>
    {children}
  </div>
);

Card.displayName = "Card";
export { Card };

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="border-b pb-4 mb-4">{children}</div>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-semibold text-gray-900">{children}</h3>
);

export const CardDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-gray-500">{children}</p>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="space-y-4">{children}</div>
);

export const CardFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4 flex space-x-4">{children}</div>
);
