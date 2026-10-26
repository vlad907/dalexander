import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { firm } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the Law Offices of Daniel H. Alexander, APLC collects and uses information submitted through this website.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <PageShell eyebrow="Legal" title="Privacy Policy" updated="October 2026">
      <p>
        {firm.name} (&ldquo;the firm,&rdquo; &ldquo;we,&rdquo; or
        &ldquo;us&rdquo;) respects your privacy. This policy explains what
        information we collect through this website and how we use it.
      </p>

      <h2>Information we collect</h2>
      <p>
        We collect the information you voluntarily provide through our contact
        form — such as your name, phone number, email address, and your
        comments — so that we can respond to your inquiry. We
        do not sell your personal information.
      </p>

      <h2>How we use your information</h2>
      <p>
        Information you submit is used solely to evaluate and respond to your
        request, and to communicate with you about a potential or existing
        matter. Please do not include confidential or sensitive details in your
        initial message.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This site may use privacy-respecting analytics to understand general
        traffic patterns. Any embedded maps or third-party services are subject
        to their own privacy policies. You can configure your browser to refuse
        non-essential cookies.
      </p>

      <h2>Data retention and security</h2>
      <p>
        We retain inquiry information only as long as necessary for the purposes
        described above or as required by applicable law, and we take reasonable
        measures to protect it.
      </p>

      <h2>Your choices</h2>
      <p>
        You may request that we update or delete the information you have
        submitted by contacting our office using the details below.
      </p>
    </PageShell>
  );
}
