import React from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => (
  <select
    ref={ref}
    {...props}
    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
));

Select.displayName = "Select";
export { Select };

export const SelectTrigger = ({
  children,
  className = "",
  ...props
}: React.HTMLProps<HTMLDivElement>) => (
  <div
    className={`relative ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const SelectContent = ({
  children,
  className = "",
  ...props
}: React.HTMLProps<HTMLDivElement>) => (
  <div
    className={`absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const SelectItem = ({ children, value }: { children: React.ReactNode; value: string }) => (
  <option value={value} className="px-4 py-2 text-gray-700 hover:bg-gray-100">
    {children}
  </option>
);

export const SelectValue = ({ placeholder }: { placeholder: string }) => (
  <span className="block py-2 px-4 text-gray-600">{placeholder}</span>
);
