import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { firm } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Legal disclaimer and attorney advertising notice for the Law Offices of Daniel H. Alexander, APLC.",
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <PageShell eyebrow="Legal" title="Disclaimer" updated="October 2026">
      <p className="font-semibold uppercase tracking-wider text-wine-900">
        Attorney Advertising
      </p>
      <p>
        This website is a communication and may be considered attorney
        advertising under the rules of professional conduct. It is intended to
        provide general information about {firm.name} and is not a solicitation
        for any specific matter.
      </p>

      <h2>Not legal advice</h2>
      <p>
        The information on this site is provided for general informational
        purposes only and does not constitute legal advice. You should not act
        or refrain from acting on the basis of any content on this site without
        seeking advice from a licensed attorney about your specific situation.
      </p>

      <h2>No attorney–client relationship</h2>
      <p>
        Viewing this website, submitting the contact form, or communicating with
        the firm through this site does not create an attorney–client
        relationship. Such a relationship is formed only through a signed
        written agreement with the firm. Please do not send confidential or
        time-sensitive information through this website until an
        attorney–client relationship has been established.
      </p>

      <h2>No guarantee of results</h2>
      <p>
        Prior results do not guarantee a similar outcome. Any case results,
        testimonials, or descriptions of past matters are not a promise or
        guarantee regarding the outcome of your matter. Every case is different
        and is decided on its own particular facts and applicable law.
      </p>

      <h2>Jurisdiction</h2>
      <p>
        The firm practices law in the State of California. Nothing on this site
        should be construed as an offer to represent you in any jurisdiction
        where the firm is not licensed to practice.
      </p>
    </PageShell>
  );
}
