import { cn } from "../../lib/utils";

export function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[rgba(100,255,218,0.18)] bg-[rgba(17,34,64,0.78)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]",
        className,
      )}
      {...props}
    />
  );
}