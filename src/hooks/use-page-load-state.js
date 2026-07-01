import { useEffect, useState } from "react";
import { preloadHeroParticles } from "../lib/scene-preload";

const MIN_PRELOAD_TIME = 900;
const PRELOAD_EXIT_DELAY = 180;

function waitForWindowLoad() {
  if (document.readyState === "complete") {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    window.addEventListener("load", resolve, { once: true });
  });
}

function waitForIdle() {
  return new Promise((resolve) => {
    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(() => resolve(), { timeout: 250 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(resolve, 80);
    return () => window.clearTimeout(timeoutId);
  });
}

export function usePageLoadState() {
  const [canMountHeavy, setCanMountHeavy] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let revealTimer = 0;

    const preparePage = async () => {
      await Promise.all([
        waitForWindowLoad(),
        preloadHeroParticles().catch(() => undefined),
        new Promise((resolve) => window.setTimeout(resolve, MIN_PRELOAD_TIME)),
      ]);

      if (cancelled) {
        return;
      }

      await waitForIdle();

      if (cancelled) {
        return;
      }

      setCanMountHeavy(true);
      revealTimer = window.setTimeout(() => {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            if (!cancelled) {
              setShowPreloader(false);
            }
          });
        });
      }, PRELOAD_EXIT_DELAY);
    };

    preparePage();

    return () => {
      cancelled = true;
      window.clearTimeout(revealTimer);
    };
  }, []);

  return { canMountHeavy, showPreloader };
}