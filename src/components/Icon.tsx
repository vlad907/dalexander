/**
 * Small, consistent line-icon set for service cards and UI. Icons are
 * decorative (the adjacent heading carries the meaning), so they are marked
 * aria-hidden and inherit `currentColor` for easy theming.
 */
type IconProps = { name: string; className?: string };

const paths: Record<string, React.ReactNode> = {
  scroll: (
    <>
      <path d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M9 9h6M9 12h6M9 15h3.5" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M8 20h8M5 7h14" />
      <path d="M5 7l-2.5 6a3 3 0 0 0 5 0L5 7zM19 7l-2.5 6a3 3 0 0 0 5 0L19 7z" />
    </>
  ),
  building: (
    <>
      <path d="M4 20V8l8-4 8 4v12" />
      <path d="M3 20h18M8 11v6M12 11v6M16 11v6" />
    </>
  ),
  folder: (
    <>
      <path d="M3.5 7a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V7z" />
      <path d="M9 13l2 2 4-4" />
    </>
  ),
  signature: (
    <>
      <path d="M4 17c2.5-6 4-8 5-8 2 0-1 8 1 8 1.4 0 2.2-3 3.4-3 1 0 .6 2 1.6 2 .8 0 1.6-.8 2.5-1.5" />
      <path d="M4 20h16" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.4-7-9.5A3.5 3.5 0 0 1 12 8a3.5 3.5 0 0 1 7 2.5c0 5.1-7 9.5-7 9.5z" />
  ),
  phone: (
    <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5L15.5 12l4 1.5v3a2 2 0 0 1-2.2 2A15 15 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  fax: (
    <>
      <path d="M7 9V4h10v5" />
      <rect x="4" y="9" width="16" height="8" rx="2" />
      <path d="M7 14h10v6H7z" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  arrow: <path d="M5 12h13M13 6l6 6-6 6" />,
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] ?? null}
    </svg>
  );
}
