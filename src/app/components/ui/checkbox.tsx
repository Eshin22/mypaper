import React from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => (
  <input
    ref={ref}
    {...props}
    type="checkbox"
    className="rounded-md border-gray-300 text-blue-600 focus:ring-blue-500"
  />
));

Checkbox.displayName = "Checkbox";
export { Checkbox };
