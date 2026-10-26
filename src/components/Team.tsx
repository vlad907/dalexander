import { team, asset } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

/** The four-person team, each with portrait, role, and responsibilities. */
export function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-cream/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="A report card worth bragging about"
          intro="For over 20 years we have run a tight ship with as little delegation as possible between team members. From there we bring in support staff as needed to be sure our clients have a professional and personalized experience."
        />

        <Reveal
          as="ul"
          stagger
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((m) => (
            <li
              key={m.name}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-paper shadow-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-wine-900">
                <img
                  src={asset(m.photo)}
                  alt={m.name}
                  width={533}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute right-3 top-3 rounded-full bg-paper/90 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-wine-900">
                  Since {m.since}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold text-wine-900">{m.name}</h3>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-gold-600">
                  {m.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate">{m.bio}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
