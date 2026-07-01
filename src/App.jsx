import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { BackgroundGrid } from "./components/background-grid";
import { CursorGlow } from "./components/cursor-glow";
import { PreloadScreen } from "./components/preload-screen";
import { ScrollProgress } from "./components/scroll-progress";
import { SiteHeader } from "./components/site-header";
import { usePageLoadState } from "./hooks/use-page-load-state";
import { PortfolioPage } from "./pages/portfolio-page";

const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export default function App() {
  const location = useLocation();
  const { canMountHeavy, showPreloader } = usePageLoadState();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--text-primary)]">
      <ScrollProgress />
      <CursorGlow enabled={canMountHeavy} />
      <BackgroundGrid />
      <SiteHeader />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <PortfolioPage canMountHeavy={canMountHeavy} />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <AnimatePresence>{showPreloader ? <PreloadScreen /> : null}</AnimatePresence>
    </div>
  );
}