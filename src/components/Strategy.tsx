import { steps, firm, asset } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

/**
 * "Our Strategy": the firm's straightforward three-step process on a deep
 * burgundy band, paired with the team photo.
 */
export function Strategy() {
  return (
    <section id="strategy" className="scroll-mt-24 bg-wine-950 py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Intro column */}
          <Reveal>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">
              <span className="h-px w-6 bg-gold-400" />
              Our Strategy
            </p>
            <h2 className="text-4xl font-semibold text-paper sm:text-5xl">
              Plans that will last for generations
            </h2>
            <p className="mt-4 text-lg text-paper/75">
              We focus on our clients with comprehensive Estate and Business
              Plans. Our process is usually straightforward — and you have
              guidance and support at every step.
            </p>
            <div className="relative mt-8 overflow-hidden rounded-xl">
              <img
                src={asset("/team-outside.jpg")}
                alt="The team at the Law Offices of Daniel H. Alexander"
                width={1100}
                height={733}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="accent-rule absolute inset-x-0 bottom-0 h-1" />
            </div>
          </Reveal>

          {/* Steps */}
          <div className="flex flex-col justify-center">
            <Reveal as="ol" stagger className="space-y-5">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-5 rounded-xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <span
                    aria-hidden="true"
                    className="font-serif text-5xl font-semibold leading-none text-gold-400 [font-variant-numeric:lining-nums]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-paper">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-paper/70">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </Reveal>
            <Reveal className="mt-8">
              <a
                href={firm.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-wine-900 transition-colors hover:bg-cream"
              >
                <Icon name="phone" className="h-4 w-4" />
                Set up your appointment
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
