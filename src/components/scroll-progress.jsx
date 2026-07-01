import { motion } from "framer-motion";
import { useScrollProgress } from "../hooks/use-scroll-progress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 bg-[var(--accent)] shadow-[0_0_24px_rgba(100,255,218,0.55)]"
      animate={{ width: `${progress}%` }}
      transition={{ type: "spring", damping: 18, stiffness: 140 }}
    />
  );
}