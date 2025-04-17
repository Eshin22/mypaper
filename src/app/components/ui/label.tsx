import React from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => (
  <label
    ref={ref}
    {...props}
    className="block text-sm font-medium text-gray-700"
  />
));

Label.displayName = "Label";
export { Label };
