import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "white";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5":
              variant === "default",
            "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5":
              variant === "secondary",
            "bg-white text-primary hover:bg-gray-50 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-0.5":
              variant === "white",
            "border-2 border-primary text-primary hover:bg-primary/5":
              variant === "outline",
            "hover:bg-primary/10 hover:text-primary": variant === "ghost",
            "text-primary underline-offset-4 hover:underline": variant === "link",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-lg px-3 text-sm": size === "sm",
            "h-14 rounded-2xl px-8 text-lg font-semibold": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
