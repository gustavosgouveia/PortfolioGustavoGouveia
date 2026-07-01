import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export const Card = forwardRef(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("glass-panel rounded-[28px] border p-6", className)} {...props} />;
});

Card.displayName = "Card";