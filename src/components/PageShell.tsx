import Link from "next/link";
import { firm, asset } from "@/lib/site";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

/**
 * Chrome for standalone pages (service detail and legal pages): a masthead
 * linking home, a title band, a readable prose column, a call-to-action, and
 * the shared footer.
 */
export function PageShell({
  eyebrow,
  title,
  lede,
  updated,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto flex h-[var(--header-h)] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" aria-label={`${firm.name} — home`}>
            <img
              src={asset("/firm-logo.png")}
              alt=""
              width={1200}
              height={341}
              className="h-11 w-auto sm:h-14"
            />
          </Link>
          <div className="flex items-center gap-5">
            <a
              href={firm.phoneHref}
              className="hidden items-center gap-2 text-sm font-semibold text-wine-900 hover:text-gold-600 sm:flex"
            >
              <Icon name="phone" className="h-4 w-4" />
              {firm.phoneDisplay}
            </a>
            <Link
              href="/"
              className="text-sm font-semibold text-wine-900 hover:text-gold-600"
            >
              &larr; Home
            </Link>
          </div>
        </div>
      </header>

      <div className="bg-wine-900">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          {eyebrow && (
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">
              <span className="h-px w-6 bg-gold-400" />
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-semibold text-paper sm:text-6xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-3 font-serif text-2xl italic text-gold-400">{lede}</p>
          )}
          {updated && (
            <p className="mt-3 text-sm text-paper/60">Last updated: {updated}</p>
          )}
        </div>
      </div>

      <main id="main" className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="space-y-5 text-slate [&_a]:text-wine-900 [&_a]:underline [&_h2]:mt-10 [&_h2]:scroll-mt-8 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-wine-900 [&_strong]:font-semibold [&_strong]:text-wine-900">
          {children}
        </div>

        <div className="mt-14 rounded-2xl border border-line bg-cream/50 p-6 sm:p-8">
          <p className="font-serif text-2xl font-semibold text-wine-900">
            Questions? Give us a call.
          </p>
          <p className="mt-2 text-sm text-slate">
            Schedule an appointment or ask a question — we are here to help.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={firm.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-wine-900 px-5 py-2.5 text-sm font-semibold text-paper no-underline hover:bg-wine-800"
            >
              <Icon name="phone" className="h-4 w-4" />
              {firm.phoneDisplay}
            </a>
            <a
              href={firm.tollFreeHref}
              className="inline-flex items-center gap-2 rounded-full border border-wine-900/25 px-5 py-2.5 text-sm font-semibold text-wine-900 no-underline hover:bg-cream"
            >
              Toll free {firm.tollFreeDisplay}
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-2 py-2.5 text-sm font-semibold text-wine-900 hover:text-gold-600"
            >
              Send a message <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
