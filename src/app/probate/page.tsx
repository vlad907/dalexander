import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { firm } from "@/lib/site";

export const metadata: Metadata = {
  title: "Probate / Estates",
  description:
    "Stress free probate representation from a Chico firm with 20+ years of experience. We make all court appearances and prepare all court pleadings and documents.",
};

export default function ProbatePage() {
  return (
    <PageShell eyebrow="Probate / Estates" title="Probate" lede={firm.journey}>
      <p className="text-lg">
        <strong>Stress free probate representation.</strong> The process of
        settling a loved one&apos;s estate after their death can feel complex
        and overwhelming. With 20+ years of experience, we can help ease your
        concerns and anxieties by explaining the probate process to you and
        then guiding you every step of the way.
      </p>
      <p>
        We make all court appearances, prepare all court pleadings and
        documents, and help with all your duties as personal representative of
        the estate.
      </p>

      <h2 id="representation">What we handle</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Probate &mdash; Testate (with a Will) and Intestate (without a Will) representation</li>
        <li>Estate Administration &mdash; Trust Administration and Estate Litigation</li>
        <li>Resolving probate and trust litigation matters when necessary</li>
      </ul>

      <p>
        Things don&apos;t always go as planned, and when you need an attorney in
        Probate matters, we will be here for you. Call for a Probate
        consultation today:{" "}
        <a href={firm.phoneHref}>{firm.phoneDisplay}</a>.
      </p>
    </PageShell>
  );
}
