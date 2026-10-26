import { testimonials } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

/**
 * Client reviews as published on the firm's site, with the firm's own
 * testimonial disclaimer displayed alongside.
 */
export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="What our clients are saying"
          align="center"
        />

        <Reveal as="ul" stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.author}
              className="flex h-full flex-col rounded-xl border border-line bg-paper p-7 shadow-card"
            >
              <span
                aria-hidden="true"
                className="font-serif text-6xl leading-none text-gold-400"
              >
                &ldquo;
              </span>
              <blockquote className="mt-1 flex-1 text-slate">{t.quote}</blockquote>
              <footer className="mt-5 border-t border-line pt-4">
                <p className="text-sm font-semibold text-wine-900">{t.author}</p>
                <p className="text-sm text-mist">{t.matter}</p>
              </footer>
            </li>
          ))}
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-xs leading-relaxed text-mist">
            Testimonials or endorsements do not constitute a guarantee,
            warranty, or prediction regarding the outcome of your legal matter.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
