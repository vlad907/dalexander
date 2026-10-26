"use client";

import { firm } from "@/lib/site";
import { useSmoothScroll } from "@/components/SmoothScroll";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

/** Conversion band that sits above the contact section. */
export function CTABand() {
  const { scrollTo } = useSmoothScroll();

  return (
    <section aria-label="Schedule a consultation" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-2xl bg-wine-900 px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="accent-rule absolute inset-x-0 top-0 h-1" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-500/15 blur-2xl"
          />
          <h2 className="relative mx-auto max-w-2xl text-4xl font-semibold text-paper sm:text-5xl">
            Find out the difference and get your Peace of Mind
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-paper/75">
            We may not take every case, but when we do we give it our all. Give
            us a call or send a message to set up an appointment.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={firm.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-paper px-7 py-3.5 text-base font-semibold text-wine-900 transition-colors hover:bg-cream"
            >
              <Icon name="phone" className="h-5 w-5" />
              Call {firm.phoneDisplay}
            </a>
            <a
              href={firm.tollFreeHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-paper transition-colors hover:bg-white/10"
            >
              Toll free {firm.tollFreeDisplay}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
                history.replaceState(null, "", "#contact");
              }}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-base font-semibold text-gold-400 transition-colors hover:text-paper"
            >
              Send a message
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
