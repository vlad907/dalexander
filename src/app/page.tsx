import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Strategy } from "@/components/Strategy";
import { Attorney } from "@/components/Attorney";
import { Team } from "@/components/Team";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <Strategy />
        <Attorney />
        <Team />
        <Reviews />
        <FAQ />
        <CTABand />
        <Contact />
      </main>
      <Footer />
      {/* Bottom padding on mobile so the fixed call bar never covers content. */}
      <div className="h-14 lg:hidden" aria-hidden="true" />
      <MobileCallBar />
    </>
  );
}
