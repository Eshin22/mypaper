import React from "react";

export interface TabsProps {
  children: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

const Tabs = ({ children, defaultValue, value, onValueChange, className }: TabsProps) => (
  <div className={`tabs-container ${className}`} role="tablist">
    {children}
  </div>
);

Tabs.displayName = "Tabs";
export { Tabs };

export const TabsList = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex space-x-4 border-b-2 ${className}`} role="tablist">
    {children}
  </div>
);

export const TabsTrigger = ({
  children,
  value,
  onValueChange,
  className = "",
}: {
  children: React.ReactNode;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}) => (
  <button
    role="tab"
    className={`px-4 py-2 text-sm font-medium text-gray-700 rounded-t-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    onClick={() => onValueChange(value)}
  >
    {children}
  </button>
);

export const TabsContent = ({
  children,
  value,
  className = "",
}: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) => (
  <div
    role="tabpanel"
    className={`tab-content ${className} ${value === value ? "block" : "hidden"}`}
  >
    {children}
  </div>
);

TabsContent.displayName = "TabsContent";
