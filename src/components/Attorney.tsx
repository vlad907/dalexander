import { firm, asset, credentials } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

/** Attorney profile, with bio and credentials from the firm's Team page. */
export function Attorney() {
  return (
    <section id="attorney" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Your Attorney"
          title="Meet Daniel H. Alexander"
          align="center"
        />

        <Reveal className="mx-auto mt-12 max-w-5xl">
          <div className="grid gap-8 rounded-2xl border border-line bg-cream/40 p-6 shadow-card sm:p-10 md:grid-cols-[260px_1fr]">
            <div className="mx-auto w-full max-w-[260px]">
              <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-wine-900 shadow-card">
                <img
                  src={asset("/daniel-alexander.jpg")}
                  alt="Daniel H. Alexander, estate planning attorney in Chico, California"
                  width={533}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="accent-rule absolute inset-x-0 bottom-0 h-1" />
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-wine-900">
                Daniel H. Alexander
              </h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gold-600">
                Attorney / President &middot; {firm.name}
              </p>

              <div className="mt-5 space-y-4 text-slate">
                <p>
                  Mr. Alexander grew up in Northern California, lives in Chico
                  and provides legal services to Northern California. Since 1996
                  he has been handling Probate, Estate Planning and Business
                  Planning. His combination of experience in these areas of law
                  has provided him insight into the inner workings of families
                  and businesses, as well as the needs and concerns of
                  charitable organizations and individual clients.
                </p>
                <p>
                  He graduated with a bachelor&apos;s degree from California
                  State University, Sacramento and received his Juris Doctorate
                  from Cal Northern School of Law. He is also a graduate of the
                  Pepperdine University School of Law&apos;s Straus Institute
                  for Dispute Resolution Program, a past instructor at
                  California State University, Chico, and has presented many
                  times on Estate Planning, Probate and Business Planning.
                </p>
              </div>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <CredentialList title="Active Memberships" items={credentials.memberships} />
                <CredentialList title="Community Service" items={credentials.service} />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={firm.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-wine-900 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-wine-800"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  {firm.phoneDisplay}
                </a>
                <a
                  href={firm.emailHref}
                  className="inline-flex items-center gap-2 rounded-full border border-wine-900/25 px-5 py-2.5 text-sm font-semibold text-wine-900 transition-colors hover:bg-cream"
                >
                  <Icon name="mail" className="h-4 w-4" />
                  Email the office
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CredentialList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-mist">
        {title}
      </p>
      <ul className="mt-3 space-y-2 text-sm text-slate">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
