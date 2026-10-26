import { stats } from "@/lib/site";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";

/**
 * Trust bar: at-a-glance credibility metrics with tasteful count-up on scroll.
 * "Matters completed" is the counter value published on dalexander.com.
 */
export function TrustBar() {
  return (
    <section aria-label="Firm at a glance" className="bg-wine-900 text-paper">
      <Reveal
        as="dl"
        stagger
        className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-5 py-14 sm:px-8 lg:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse px-3 text-center">
            <dt className="mx-auto mt-2 max-w-[12rem] text-sm text-paper/70">
              {s.label}
            </dt>
            <dd className="font-serif text-5xl font-semibold text-gold-400 [font-variant-numeric:lining-nums] sm:text-6xl">
              <CountUp
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                format={s.format ?? s.value >= 1000}
              />
            </dd>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
