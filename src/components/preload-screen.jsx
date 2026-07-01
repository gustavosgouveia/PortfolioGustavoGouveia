import { motion } from "framer-motion";

export function PreloadScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center overflow-hidden bg-[rgba(10,25,47,0.98)]"
      role="status"
      aria-label="Carregando portfolio"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
    >
      <span className="sr-only">Carregando portfolio</span>
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,255,218,0.16),transparent_34%),radial-gradient(circle_at_70%_30%,rgba(204,214,246,0.08),transparent_28%)]"
        animate={{ opacity: [0.45, 0.9, 0.45], scale: [1, 1.08, 1] }}
        transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute h-72 w-72 rounded-full border border-[rgba(100,255,218,0.12)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_28px_rgba(100,255,218,0.9)]" />
      </motion.div>

      <motion.div
        className="absolute h-48 w-48 rounded-full border border-dashed border-[rgba(100,255,218,0.22)]"
        animate={{ rotate: -360 }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <motion.div
        className="relative grid size-32 place-items-center text-[var(--accent)]"
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: [1, 1.04, 1] }}
        transition={{ opacity: { duration: 0.35 }, scale: { duration: 1.65, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" } }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-[rgba(100,255,218,0.08)] blur-2xl"
          animate={{ opacity: [0.35, 0.85, 0.35], scale: [0.9, 1.25, 0.9] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <svg className="absolute inset-0 size-32 drop-shadow-[0_0_28px_rgba(100,255,218,0.35)]" viewBox="0 0 100 100" aria-hidden="true">
          <motion.polygon
            points="50 5 89 27.5 89 72.5 50 95 11 72.5 11 27.5"
            fill="rgba(100,255,218,0.035)"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.25, ease: "easeInOut" }}
          />
        </svg>
        <motion.span
          className="relative font-mono text-5xl font-semibold tracking-[-0.08em] text-[var(--accent)]"
          animate={{ opacity: [0.78, 1, 0.78], textShadow: ["0 0 12px rgba(100,255,218,0.22)", "0 0 34px rgba(100,255,218,0.72)", "0 0 12px rgba(100,255,218,0.22)"] }}
          transition={{ duration: 1.45, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          G
        </motion.span>
      </motion.div>
    </motion.div>
  );
}