import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { firm, offices } from "@/lib/site";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

/**
 * Classical, high-contrast serif for headings (echoing the firm's engraved
 * logo lettering) + clean grotesque sans for body. Loaded through next/font so
 * they self-host, avoid layout shift, and expose CSS variables for globals.css.
 */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const title = `${firm.name} | Chico Estate Planning, Probate & Business Attorney`;
const description =
  "Chico estate planning, probate and business planning attorney Daniel H. Alexander. Trusts, Wills, Powers of Attorney and business entities for Northern California since 1996.";

export const metadata: Metadata = {
  metadataBase: new URL(firm.url),
  title: { default: title, template: `%s | ${firm.name}` },
  description,
  keywords: [
    "Chico estate planning attorney",
    "Chico probate lawyer",
    "living trust Chico",
    "business planning attorney Northern California",
    "Daniel H. Alexander",
    "Butte County estate planning",
  ],
  authors: [{ name: firm.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: firm.url,
    siteName: firm.name,
    title,
    description: firm.valueProposition,
  },
  twitter: { card: "summary_large_image", title, description: firm.valueProposition },
  robots: { index: true, follow: true },
};

/** LegalService / Attorney structured data for local SEO rich results. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "Attorney"],
  name: firm.name,
  description:
    "Estate Planning, Probate and Business Planning law firm serving Northern California.",
  url: firm.url,
  telephone: firm.phoneDisplay,
  email: firm.email,
  faxNumber: firm.faxDisplay,
  areaServed: firm.serviceArea,
  address: offices.map((o) => ({
    "@type": "PostalAddress",
    streetAddress: o.street,
    addressLocality: o.city,
    addressRegion: "CA",
    addressCountry: "US",
  })),
  founder: { "@type": "Person", name: firm.attorney, jobTitle: "Attorney" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {/* Skip link for keyboard and screen-reader users. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-wine-900 focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to main content
        </a>
        <SmoothScroll>{children}</SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
