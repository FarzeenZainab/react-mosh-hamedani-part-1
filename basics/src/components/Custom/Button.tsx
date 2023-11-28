import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * LEARNING -> class-variance-authority library
 *
 * ********************************************
 *
 * Problem cva() is solving:
 * When we create reusable component, we might need different variant of the components
 * Usually, we create these variants by conditionally passing classes to the component.
 * Example: className={`${btnOptions[variant ? variant : 'primary']} ${btnSize[size ? size: 'md']} ${shadowOptions[shadow?shadow: 'sm']}`}
 * so on an so forth
 *
 * Using this method make things though to maintain and scale, that's where cva() comes handy
 *
 * *******************************************
 *
 * Using cva()
 *
 */

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", // default styles
  {
    variants: {
      variant: {
        primary: [
          "bg-blue-500",
          "text-white",
          "border-transparent",
          "hover:bg-blue-600",
        ],
        secondary: [
          "bg-white",
          "text-gray-800",
          "border-gray-400",
          "hover:bg-gray-100",
        ],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
    },
  }
);

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
  onClick: () => void;
}

const Button = ({ variant, size }: ButtonProps) => {
  return (
    <button
      className={
        (cn(buttonVariants({ variant, size })),
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded")
      }
    >
      Button
    </button>
  );
};

export default Button;
