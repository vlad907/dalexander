import { Reveal } from "@/components/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

/** Consistent, quiet section header used across the page. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: Props) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p
          className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-600 ${
            centered ? "justify-center" : ""
          }`}
        >
          {centered && <span className="h-px w-6 bg-gold-500" />}
          {eyebrow}
          {centered && <span className="h-px w-6 bg-gold-500" />}
        </p>
      )}
      <h2 className="text-4xl font-semibold text-wine-900 sm:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-slate">{intro}</p>}
    </Reveal>
  );
}
