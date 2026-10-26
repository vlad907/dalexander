import Link from "next/link";
import { firm, offices } from "@/lib/site";
import { Icon } from "@/components/Icon";

const quickLinks = [
  { href: "/estate-planning/", label: "Estate Planning" },
  { href: "/probate/", label: "Probate" },
  { href: "/business-planning/", label: "Business Planning" },
  { href: "/#team", label: "Our Team" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-wine-950 text-paper/80">
      <div className="accent-rule h-1" />
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Firm */}
          <div>
            <p className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="font-serif text-6xl font-semibold leading-none text-gold-400"
              >
                A
              </span>
              <span className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-[0.12em] text-paper">
                  ALEXANDER
                </span>
                <span className="text-[0.68rem] uppercase tracking-[0.18em] text-gold-400">
                  Providing Peace of Mind
                </span>
              </span>
            </p>
            <p className="mt-5 max-w-sm text-sm text-paper/70">
              We are a dynamic Estate and Business Planning firm that for over
              20 years has been handling Probate, Estate Planning, and Business
              Planning. We may not take every case, but when we do we give it
              our all!
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={firm.phoneHref} className="flex items-center gap-2 hover:text-paper">
                <Icon name="phone" className="h-4 w-4 text-gold-400" />
                {firm.phoneDisplay} / toll free {firm.tollFreeDisplay}
              </a>
              <p className="flex items-center gap-2">
                <Icon name="fax" className="h-4 w-4 text-gold-400" />
                Fax {firm.faxDisplay}
              </p>
              <a href={firm.emailHref} className="flex items-center gap-2 break-all hover:text-paper">
                <Icon name="mail" className="h-4 w-4 text-gold-400" />
                {firm.email}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-paper">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy/" className="hover:text-paper">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer/" className="hover:text-paper">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </nav>

          {/* Offices */}
          <div>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-paper">
              Offices
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {offices.map((o) => (
                <li key={o.city}>
                  <span className="text-paper">{o.city}</span>
                  {o.note ? "" : " (Main)"}
                  <br />
                  <span className="text-paper/60">
                    {o.street}, {o.locality}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Required disclaimers */}
        <div className="mt-12 space-y-3 border-t border-white/10 pt-8 text-xs leading-relaxed text-paper/55">
          <p>
            Disclaimer: Testimonials or endorsements do not constitute a
            guarantee, warranty, or prediction regarding the outcome of your
            legal matter. The information provided on this website does not,
            and is not intended to, constitute legal advice; instead, all
            information, content, and materials available on this site are for
            general informational purposes only.
          </p>
          <p className="pt-2 text-paper/45">
            &copy; {year} {firm.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
