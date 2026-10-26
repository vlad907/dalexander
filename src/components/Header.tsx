"use client";

import { useEffect, useState } from "react";
import { firm, asset } from "@/lib/site";
import { useSmoothScroll } from "@/components/SmoothScroll";
import { Icon } from "@/components/Icon";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#strategy", label: "Our Strategy" },
  { href: "#attorney", label: "Attorney" },
  { href: "#team", label: "Team" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { scrollTo } = useSmoothScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Subtle background/shadow once the user scrolls past the hero threshold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lightweight scroll-spy for the current section (progressive enhancement).
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is HTMLElement => el instanceof HTMLElement);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollTo(href);
    // Keep the URL hash in sync without triggering a native jump.
    history.replaceState(null, "", href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line bg-paper/90 backdrop-blur-md shadow-[0_1px_0_rgba(60,22,18,0.06)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        {/* Logo — white JPG background drops out via multiply blending. */}
        <a
          href="#top"
          onClick={handleNav("#top")}
          className="shrink-0"
          aria-label={`${firm.name} — home`}
        >
          <img
            src={asset("/firm-logo.png")}
            alt=""
            width={1200}
            height={341}
            className="h-11 w-auto sm:h-14"
          />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNav(link.href)}
              aria-current={active === link.href ? "true" : undefined}
              className={`relative text-sm font-medium transition-colors hover:text-wine-900 ${
                active === link.href ? "text-wine-900" : "text-slate"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-gold-500 transition-transform duration-300 ${
                  active === link.href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Contact actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={firm.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-wine-900 transition-colors hover:text-gold-600 xl:flex"
          >
            <Icon name="phone" className="h-4 w-4" />
            {firm.phoneDisplay}
          </a>
          <a
            href="#contact"
            onClick={handleNav("#contact")}
            className="hidden rounded-full bg-wine-900 px-5 py-2.5 text-sm font-semibold text-paper shadow-sm transition-all hover:bg-wine-800 hover:shadow-md sm:inline-block"
          >
            {firm.cta}
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-wine-900 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-line bg-paper px-5 pb-6 pt-2 lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNav(link.href)}
              className="border-b border-line/70 py-3 text-base font-medium text-wine-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href={firm.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 rounded-full border border-wine-900 py-3 text-sm font-semibold text-wine-900"
          >
            <Icon name="phone" className="h-4 w-4" />
            {firm.phoneDisplay}
          </a>
          <a
            href="#contact"
            onClick={handleNav("#contact")}
            className="mt-3 rounded-full bg-wine-900 py-3 text-center text-sm font-semibold text-paper"
          >
            {firm.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}
