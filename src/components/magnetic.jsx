import { motion } from "framer-motion";
import { useState } from "react";

export function Magnetic({ children, className }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className={className}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 160, damping: 14, mass: 0.3 }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left - bounds.width / 2;
        const y = event.clientY - bounds.top - bounds.height / 2;
        setOffset({ x: x * 0.14, y: y * 0.14 });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      {children}
    </motion.div>
  );
}