"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ScrollToOptions = { offset?: number };

/**
 * Exposes a smooth `scrollTo` that routes in-page anchors through Lenis when it
 * is active, and falls back to native scrolling (respecting reduced motion)
 * otherwise. Consumed by the header nav and any anchor CTA.
 */
const SmoothScrollContext = createContext<{
  scrollTo: (target: string | HTMLElement, options?: ScrollToOptions) => void;
}>({
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const prefersReduced = media.matches;
    setReduced(prefersReduced);

    // Reduced motion: skip Lenis and all smooth-scroll behavior entirely.
    if (prefersReduced) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.05, // Understated — quick to settle, not floaty.
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    // Drive Lenis from GSAP's ticker and keep ScrollTrigger in sync.
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Content height changes as fonts and images load; refresh triggers so
    // start/end positions stay accurate.
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts?.ready) {
      document.fonts.ready.then(refresh);
    }
    window.addEventListener("load", refresh);
    const refreshTimer = window.setTimeout(refresh, 500);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("load", refresh);
      window.clearTimeout(refreshTimer);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (
    target: string | HTMLElement,
    options: ScrollToOptions = {},
  ) => {
    const offset = options.offset ?? -(
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--header-h"),
      ) * 16 || 72
    );

    if (lenisRef.current && !reduced) {
      lenisRef.current.scrollTo(target, { offset, duration: 1.1 });
      return;
    }

    // Reduced-motion / no-Lenis fallback.
    const el =
      typeof target === "string" ? document.querySelector(target) : target;
    if (el instanceof HTMLElement) {
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
