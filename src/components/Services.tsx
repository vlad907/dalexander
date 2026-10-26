import Link from "next/link";
import { services } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

/**
 * Services: a clean, legible grid of cards with a modest staggered fade-in.
 * Cards with a detail page link to it; the rest link to the contact form.
 */
export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Some of our more popular services"
          intro="Since 1996 Attorney Daniel H. Alexander has been handling Estate Planning, Probate and Business Planning. That combination of experience provides insight into the inner workings of the Courts, families and businesses — and the needs and concerns of clients."
        />

        <Reveal
          as="ul"
          stagger
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <li key={s.title}>
              <Link
                href={s.href ?? "/#contact"}
                className="group flex h-full flex-col rounded-xl border border-line bg-paper p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-card-hover"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cream text-wine-800 transition-colors group-hover:bg-wine-900 group-hover:text-gold-400">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="text-2xl font-semibold text-wine-900">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                  {s.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-wine-800 transition-colors group-hover:text-gold-600">
                  {s.href ? "Find out more" : "Ask about this service"}
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
