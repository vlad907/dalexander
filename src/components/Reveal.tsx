"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealProps = {
  children: ReactNode;
  /** Render as a different element (e.g. "ul", "section"). Defaults to div. */
  as?: ElementType;
  /** Stagger direct children instead of animating the container as one unit. */
  stagger?: boolean;
  /** Per-item / element delay in seconds. */
  delay?: number;
  className?: string;
};

/**
 * The site's single reveal primitive: a gentle fade + ~20px upward slide on
 * scroll-enter, with an optional modest stagger for grids and lists.
 *
 * Uses `gsap.fromTo` (not `.from`) so React StrictMode's double effect invoke
 * cannot leave elements stuck in a hidden state. Under prefers-reduced-motion
 * the effect is skipped entirely and content renders fully visible (the
 * `.reveal` initial-hidden CSS is itself neutralized by a reduced-motion rule).
 */
export function Reveal({
  children,
  as,
  stagger = false,
  delay = 0,
  className = "",
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return; // Content stays visible; no animation.
    }

    const ctx = gsap.context(() => {
      const targets = stagger
        ? gsap.utils.toArray<HTMLElement>(el.children)
        : [el];

      gsap.fromTo(
        targets,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          delay,
          ease: "power2.out",
          stagger: stagger ? 0.09 : 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [stagger, delay]);

  // The `reveal` class provides the initial hidden state before JS runs and is
  // neutralized under reduced motion. When staggering, children carry their own
  // hidden state instead of the container.
  return (
    <Tag
      ref={ref}
      className={`${stagger ? "" : "reveal"} ${className}`.trim()}
      data-stagger={stagger ? "" : undefined}
    >
      {children}
    </Tag>
  );
}
