import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Badge } from "./ui/badge";

export function SectionShell({ id, eyebrow, title, description, children, className, viewport }) {
  return (
    <motion.section
      id={id}
      className={cn("relative mx-auto max-w-6xl px-6 py-24 md:px-8 lg:px-12", className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport ?? { once: true, amount: 0.08 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-12 max-w-3xl">
        <Badge>{eyebrow}</Badge>
        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] md:text-5xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-8 text-[var(--text-secondary)] md:text-lg">{description}</p>
      </div>
      {children}
    </motion.section>
  );
}