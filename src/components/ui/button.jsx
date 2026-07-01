import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-[rgba(100,255,218,0.4)] bg-[var(--accent)] px-6 py-3 text-[var(--background)] shadow-[0_18px_40px_rgba(100,255,218,0.18)] hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(100,255,218,0.25)]",
        secondary:
          "glass-panel border-[rgba(136,146,176,0.16)] px-6 py-3 text-[var(--text-primary)] hover:-translate-y-1 hover:border-[rgba(100,255,218,0.35)] hover:text-[var(--accent)]",
        ghost:
          "border-transparent px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
      },
      size: {
        default: "h-12",
        sm: "h-10 px-4 py-2 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };