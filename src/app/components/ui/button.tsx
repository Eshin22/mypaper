import React from "react";

// Button Props interface for type checking
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"; 
  size?: "sm" | "md" | "icon"; // Added "icon" here
}

// Define the base styles and mappings for variants and sizes
const variantStyles = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  ghost: "text-gray-600 hover:bg-gray-50 hover:text-gray-900", 
};

const sizeStyles = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  icon: "h-6 w-6", // Added "icon" size styles
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "md", children, ...props }, ref) => {
    // Construct the className by combining the base, variant, and size classes
    const combinedClassName = [
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
      variantStyles[variant],
      sizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

// Display name for better debugging experience
Button.displayName = "Button";

export { Button };
