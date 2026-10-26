"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { firm, asset } from "@/lib/site";
import { useSmoothScroll } from "@/components/SmoothScroll";
import { Icon } from "@/components/Icon";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pillars = ["Estate Planning", "Probate", "Business Planning"];

export function Hero() {
  const { scrollTo } = useSmoothScroll();
  const rootRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return; // Content is fully visible by default.

    const ctx = gsap.context(() => {
      // Calm entrance: a short, staggered fade + small rise. No preloader.
      gsap.fromTo(
        "[data-hero-item]",
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.12,
          delay: 0.15,
        },
      );

      // Very gentle parallax on the portrait panel as the hero scrolls away.
      if (panelRef.current) {
        gsap.to(panelRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const onConsult = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo("#contact");
    history.replaceState(null, "", "#contact");
  };

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative overflow-hidden bg-paper pt-[var(--header-h)]"
    >
      {/* Soft decorative field. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 to-paper" />
        <div className="absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-gold-100/60 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-wine-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        {/* Copy */}
        <div className="max-w-2xl">
          <p
            data-hero-item
            className="mb-6 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-line bg-paper/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-600"
          >
            {pillars.map((p, i) => (
              <span key={p} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-gold-500" />}
                {p}
              </span>
            ))}
          </p>
          <h1
            data-hero-item
            className="text-5xl font-semibold text-wine-900 sm:text-6xl lg:text-[4.4rem]"
          >
            Plan and Prosper.
          </h1>
          <p
            data-hero-item
            className="mt-3 font-serif text-2xl italic text-gold-600 sm:text-3xl"
          >
            {firm.journey}
          </p>
          <p data-hero-item className="mt-6 max-w-xl text-lg text-slate">
            {firm.intro}
          </p>

          <div data-hero-item className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={firm.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-wine-900 px-7 py-3.5 text-base font-semibold text-paper shadow-sm transition-all hover:bg-wine-800 hover:shadow-md"
            >
              <Icon name="phone" className="h-5 w-5" />
              Call {firm.phoneDisplay}
            </a>
            <a
              href="#contact"
              onClick={onConsult}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-wine-900/25 bg-paper px-7 py-3.5 text-base font-semibold text-wine-900 transition-all hover:border-wine-900/50 hover:bg-cream"
            >
              Get your Peace of Mind
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          <p data-hero-item className="mt-6 text-sm text-mist">
            Main office in Chico &middot; Satellite offices in Rocklin,
            Sacramento &amp; Lake Almanor
          </p>
        </div>

        {/* Portrait panel: the attorney on a calm burgundy field. */}
        <div ref={panelRef} data-hero-item className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl bg-wine-900 shadow-card">
            <div className="accent-rule absolute inset-x-0 top-0 z-20 h-1" />
            <img
              src={asset("/daniel-alexander.jpg")}
              alt="Attorney Daniel H. Alexander"
              width={533}
              height={800}
              className="h-[26rem] w-full object-cover object-top sm:h-[32rem]"
            />
            {/* Caption over a gradient scrim for legibility. */}
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-wine-950 via-wine-950/80 to-transparent p-7 pt-20">
              <p className="font-serif text-2xl font-semibold text-paper">
                Daniel H. Alexander
              </p>
              <p className="text-sm text-gold-400">
                Attorney / President &middot; Since 1996
              </p>
            </div>
          </div>

          {/* Award badges published on the firm's site. */}
          <div className="absolute -right-4 top-8 z-20 hidden gap-2 rounded-xl border border-line bg-paper p-2 shadow-card-hover sm:flex">
            <img
              src={asset("/award-lawyer-of-distinction.jpg")}
              alt="Lawyer of Distinction 2022"
              width={275}
              height={350}
              className="h-20 w-auto rounded"
            />
            <img
              src={asset("/award-top-ranked-2024.jpg")}
              alt="Top Ranked Lawyer 2024"
              width={186}
              height={271}
              className="h-20 w-auto rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
