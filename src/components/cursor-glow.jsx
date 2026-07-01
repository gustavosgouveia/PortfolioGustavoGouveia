import { motion } from "framer-motion";
import { useCursorGlow } from "../hooks/use-cursor-glow";

export function CursorGlow({ enabled = true }) {
  const { x, y, visible } = useCursorGlow(enabled);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed z-40 hidden h-48 w-48 rounded-full bg-[rgba(100,255,218,0.14)] blur-3xl md:block"
      animate={{
        opacity: visible ? 1 : 0,
        x: x - 96,
        y: y - 96,
      }}
      transition={{ type: "spring", damping: 26, stiffness: 200, mass: 0.4 }}
    />
  );
}