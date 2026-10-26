"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  /** Locale grouping for large numbers (e.g. 1,000). */
  format?: boolean;
};

/**
 * Tasteful count-up for trust statistics. Animates once when scrolled into
 * view. Under prefers-reduced-motion the final value is shown immediately.
 * The full value is always present as accessible text for screen readers.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  format = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  const render = (n: number) => {
    const rounded = Math.round(n);
    return format ? rounded.toLocaleString("en-US") : String(rounded);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const counter = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: value,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => setDisplay(counter.n),
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    }, ref);

    return () => ctx.revert();
  }, [value]);

  return (
    <span ref={ref} aria-label={`${prefix}${render(value)}${suffix}`}>
      <span aria-hidden="true">
        {prefix}
        {render(display)}
        {suffix}
      </span>
    </span>
  );
}
