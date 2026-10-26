import { firm, offices, communities } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";

/** Google Maps embed for the main office address (no API key required). */
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${firm.name}, ${firm.address.full}`,
)}&output=embed`;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch with our team"
          intro="For all of your questions, we have the answers. Send a message below, or call the office directly — we look forward to meeting you."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Form */}
          <Reveal>
            <ContactForm />
          </Reveal>

          {/* Office details + map */}
          <Reveal className="space-y-6">
            <ul className="space-y-5">
              <ContactRow icon="phone" label="Phone">
                <a
                  href={firm.phoneHref}
                  className="font-semibold text-wine-900 hover:text-gold-600"
                >
                  {firm.phoneDisplay}
                </a>
                <span className="text-slate"> &middot; toll free </span>
                <a
                  href={firm.tollFreeHref}
                  className="font-semibold text-wine-900 hover:text-gold-600"
                >
                  {firm.tollFreeDisplay}
                </a>
              </ContactRow>
              <ContactRow icon="fax" label="Fax">
                <span className="text-slate">{firm.faxDisplay}</span>
              </ContactRow>
              <ContactRow icon="mail" label="Email">
                <a
                  href={firm.emailHref}
                  className="break-all font-medium text-wine-900 hover:text-gold-600"
                >
                  {firm.email}
                </a>
              </ContactRow>
            </ul>

            <ul className="grid gap-3 sm:grid-cols-2">
              {offices.map((o) => (
                <li
                  key={o.city}
                  className={`rounded-xl border p-4 ${
                    o.note ? "border-line bg-paper" : "border-wine-900/20 bg-cream/60"
                  }`}
                >
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-600">
                    <Icon name="pin" className="h-3.5 w-3.5" />
                    {o.label}
                  </p>
                  <p className="mt-1 font-serif text-xl font-semibold text-wine-900">
                    {o.city}
                  </p>
                  <address className="text-sm not-italic text-slate">
                    {o.street}
                    <br />
                    {o.locality}
                  </address>
                  {o.note && <p className="mt-1 text-xs text-mist">{o.note}</p>}
                </li>
              ))}
            </ul>
            <p className="text-xs text-mist">{firm.mailNote}</p>

            <div className="overflow-hidden rounded-xl border border-line shadow-card">
              <iframe
                title={`Map to ${firm.name} in ${firm.address.city}`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-60 w-full border-0"
              />
            </div>
          </Reveal>
        </div>

        {/* Service areas */}
        <Reveal className="mt-16 rounded-2xl border border-line bg-cream/40 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
            Proudly serving
          </p>
          <p className="mt-2 max-w-3xl text-slate">{firm.serviceArea}.</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {communities.map((c) => (
              <li
                key={c}
                className="rounded-full border border-line bg-paper px-3 py-1 text-sm text-wine-800"
              >
                {c}
              </li>
            ))}
            <li className="px-1 py-1 text-sm text-mist">and more&hellip;</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cream text-wine-800"
      >
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-mist">
          {label}
        </p>
        <div className="mt-0.5">{children}</div>
      </div>
    </li>
  );
}
