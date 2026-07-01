import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Suspense, lazy } from "react";
import { heroContent, personalInfo, resumeHref } from "../../data/portfolio";
import { preloadHeroParticles } from "../../lib/scene-preload";
import { Magnetic } from "../magnetic";

const HeroParticles = lazy(async () => {
  const module = await preloadHeroParticles();
  return { default: module.HeroParticles };
});

function HeroBackdropFallback() {
  return <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(100,255,218,0.12),transparent_35%)]" />;
}

export function HeroSection({ canMountHeavy }) {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 md:px-12 lg:px-24">
      {canMountHeavy ? (
        <Suspense fallback={<HeroBackdropFallback />}>
          <HeroParticles />
        </Suspense>
      ) : (
        <HeroBackdropFallback />
      )}
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-5xl">
          <motion.p
            className="font-mono text-base text-[var(--accent)] md:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {heroContent.greeting}
          </motion.p>
          <motion.h1
            className="mt-5 text-[clamp(2.75rem,8vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--text-primary)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {personalInfo.shortName}.
          </motion.h1>
          <motion.p
            className="mt-3 max-w-5xl text-[clamp(2rem,5.8vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-[var(--text-secondary)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.19 }}
          >
            {heroContent.headline}
          </motion.p>
          <motion.p
            className="mt-7 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            {heroContent.supportingText}
          </motion.p>
          <motion.div
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-md border border-[var(--accent)] px-7 py-4 font-mono text-sm text-[var(--accent)] transition duration-300 hover:-translate-y-1 hover:bg-[rgba(100,255,218,0.1)]"
              >
                {heroContent.cta.projects}
                <ArrowRight className="size-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={resumeHref}
                download
                className="inline-flex items-center gap-3 rounded-md border border-[rgba(136,146,176,0.22)] px-7 py-4 font-mono text-sm text-[var(--text-secondary)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[rgba(100,255,218,0.08)] hover:text-[var(--accent)]"
              >
                <Download className="size-4" />
                {heroContent.cta.resume}
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
}