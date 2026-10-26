/**
 * Single source of truth for firm-specific content.
 *
 * All copy, contact details, services, team, and structured data live here so
 * the components stay presentational and the firm's details can be updated in
 * one place. Copy is sourced from dalexander.com.
 */

/**
 * Base path the site is served under. Empty for local dev and root/custom-domain
 * deploys; set to e.g. "/dalexander" by CI for a GitHub Pages project site.
 * Next prefixes `next/link`, `next/image`, and `_next` assets automatically, but
 * raw `<img src>` paths are not, so prepend `asset()` to those.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public-folder path with the active base path. */
export const asset = (path: string) => `${basePath}${path}`;

export type Office = {
  city: string;
  label: string;
  street: string;
  locality: string;
  note?: string;
};

export const offices: Office[] = [
  {
    city: "Chico",
    label: "Main Office",
    street: "901 Bruce Rd., Ste. 230",
    locality: "Chico, CA 95928",
  },
  {
    city: "Rocklin",
    label: "Satellite Office",
    street: "2217 Plaza Dr. #B",
    locality: "Rocklin, CA 95765",
    note: "By appointment only",
  },
  {
    city: "Sacramento",
    label: "Satellite Office",
    street: "2207 J St.",
    locality: "Sacramento, CA 95816",
    note: "By appointment only",
  },
  {
    city: "Lake Almanor",
    label: "Satellite Office",
    street: "401 Peninsula Dr. #4",
    locality: "Lake Almanor, CA 96137",
    note: "By appointment only",
  },
];

export const firm = {
  name: "Law Offices of Daniel H. Alexander, APLC",
  shortName: "Alexander Law",
  attorney: "Daniel H. Alexander",
  journey: "You choose the journey ... we will guide you.",
  valueProposition:
    "Providing Peace of Mind through Estate and Business Planning.",
  intro:
    "Life is a journey. Our goal is to provide you peace of mind knowing that your Estate is well planned through the use of Trusts, Wills, Powers of Attorney, etc. and/or your Business is well planned through entities such as Corporations. All of that comes along with the guidance and support you deserve.",
  // Contact
  phoneDisplay: "(530) 317-3669",
  phoneHref: "tel:+15303173669",
  tollFreeDisplay: "(800) 530-4LAW",
  tollFreeHref: "tel:+18005304529",
  faxDisplay: "(530) 891-8040",
  email: "lexie@dalexander.com",
  emailHref: "mailto:lexie@dalexander.com",
  address: {
    street: "901 Bruce Rd., Ste. 230",
    city: "Chico",
    state: "CA",
    zip: "95928",
    full: "901 Bruce Rd., Ste. 230, Chico, CA 95928",
  },
  mailNote: "Send all correspondence and mail to our Chico office.",
  serviceArea:
    "Northern California including Butte County, Plumas County, Placer County, Sacramento County, Lassen County, Glenn County, and surrounding Counties",
  url: "https://www.dalexander.com",
  cta: "Schedule a Consultation",
} as const;

export type Service = {
  title: string;
  blurb: string;
  /** Icon key mapped to an inline SVG in the Icon component. */
  icon: string;
  /** Detail page, when the firm publishes one. */
  href?: string;
};

export const services: Service[] = [
  {
    title: "Estate Planning",
    blurb:
      "Trusts, Pour-over Wills, Powers of Attorney for Finances and Health, Deeds and documents to transfer assets into the Trust — with the proper guidance to avoid Probate.",
    icon: "scroll",
    href: "/estate-planning/",
  },
  {
    title: "Probate",
    blurb:
      "Things don't always go as planned. When you need an attorney in Probate matters, we will be here for you — with over 20 years of experience, our firm has you covered.",
    icon: "scale",
    href: "/probate/",
  },
  {
    title: "Business Planning",
    blurb:
      "Corporations, Limited Liability Companies, Partnerships and Succession Planning. We will work with you to set up the business entity you need.",
    icon: "building",
    href: "/business-planning/",
  },
  {
    title: "Estate Administration",
    blurb:
      "Trust Administration and Estate Litigation, including resolving probate and trust litigation matters when necessary.",
    icon: "folder",
  },
  {
    title: "Powers of Attorney & Directives",
    blurb:
      "Financial Durable Powers of Attorney and Advanced Health Care Directives, so a trusted agent can act for you if you are ever unable to.",
    icon: "signature",
    href: "/estate-planning/#powers-of-attorney",
  },
  {
    title: "Charitable Giving",
    blurb:
      "Nonprofit Entities, Foundations and Charitable Trusts for clients and organizations who want their generosity to last for generations.",
    icon: "heart",
  },
];

export type Stat = {
  /** Numeric target for the count-up animation. */
  value: number;
  /** Text appended after the number, e.g. "+" or "%". */
  suffix?: string;
  prefix?: string;
  /** Group digits (1,000). Off for years. */
  format?: boolean;
  label: string;
};

export const stats: Stat[] = [
  { value: 1996, format: false, label: "Serving Northern California since" },
  { value: 7991, suffix: "+", label: "Matters completed" },
  { value: 4, label: "Office locations" },
  { value: 6, suffix: "+", label: "Counties served" },
];

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  since: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Daniel H. Alexander",
    role: "Attorney / President",
    photo: "/daniel-alexander.jpg",
    since: "1996",
    bio: "Consults with and represents clients and drafts documents in Estate Planning, Probate and Business Planning matters.",
  },
  {
    name: "Karrie Alexander",
    role: "Chief Financial Officer",
    photo: "/karrie-alexander.jpg",
    since: "2009",
    bio: "Handles client billing and office financial matters. Bachelor's degree from Chico State University.",
  },
  {
    name: "Paige Johnson",
    role: "Front Office Manager & Notary",
    photo: "/paige-johnson.jpg",
    since: "2011",
    bio: "Notarizes and handles most client communication and the day-to-day operations. Bachelor's degree from the University of Oklahoma.",
  },
  {
    name: "Lexie Biermann",
    role: "Certified Estate Planner & Notary",
    photo: "/lexie-biermann.jpg",
    since: "2022",
    bio: "Handles document drafting, meeting with clients, notarizing and other matters. Bachelor's degree from Arizona State University.",
  },
];

/** Credentials listed on the firm's Team page. */
export const credentials = {
  memberships: [
    "Butte County Bar Association",
    "California State Bar Association",
    "California Lawyers Association (CLA)",
    "Trust & Estates Section of CLA",
    "American Bar Association (ABA)",
  ],
  service: [
    "Butte County Office of Education — Trustee / Board Member (President of the Board 2025)",
    "Chico Noon Exchange Club — President 2018–2019; current Member and Board of Directors",
    "Butte College Foundation — Board of Directors; President 2015–2016; Vice President 2021–2023; Chair of the Board 2024–2025",
    "California State Bar Association's CYLA program — Past Director, District One",
  ],
};

export type Testimonial = {
  quote: string;
  author: string;
  matter: string;
};

/** Client reviews as published on the firm's Home and Reviews pages. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Great professional service. I am impressed with his ability to convey information in a friendly, clear and professional manner. I appreciate that he took the time to help me with my questions. I highly recommend him.",
    author: "Rosario Clerici",
    matter: "Client review",
  },
  {
    quote:
      "Very personable and did a great job explaining the details of what a trust is. We felt comfortable discussing the many hard decisions we had to make for the benefit of our family. We highly recommend him.",
    author: "Mindy Honea",
    matter: "Client review",
  },
  {
    quote:
      "Mr. Alexander was compassionate and understood our situation. Without wasting time, he got right to work to resolve our issue and provided the peace of mind he promised. I can't imagine using any other attorney going forward.",
    author: "Former client",
    matter: "Actual client name not used",
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "What is an Estate Plan?",
    a: "Simply put, an estate plan is a blueprint for the protection of you and your assets while you are alive and for the distribution of your assets when you die. While you are living, it should address your children, your finances, assets and retirement income, as well as your health and well-being. When you pass, it addresses not only who will receive your assets, but also the methods and timing of the distribution.",
  },
  {
    q: "What does a good Estate Plan include?",
    a: "A good Estate Plan will usually include a Trust, Pour-over Will, Financial Durable Powers of Attorney, Advanced Health Care Directive (Power of Attorney for Health Care with a physician directive), and documents to transfer assets into the trust called Trust Funding.",
  },
  {
    q: "Why does funding my trust matter?",
    a: "Funding your trust is the process of transferring your assets to your trust, or making the trust the beneficiary of a particular asset, and is probably the most important step to take after your trust has been signed. Failure to fund your trust with your assets may cause those assets to go through a Probate process.",
  },
  {
    q: "Which business structure is right for me?",
    a: "The business structure you choose influences everything from day-to-day operations to taxes to how much of your personal assets are at risk. In general, the most popular business entity is the S Corporation — but you should seek the advice of an attorney before setting up your business structure. Call us to discuss the best options for you.",
  },
  {
    q: "What does your probate representation include?",
    a: "We make all court appearances, prepare all court pleadings and documents, and help with all your duties as personal representative of the estate — explaining the probate process to you and then guiding you every step of the way.",
  },
  {
    q: "Which areas do you serve?",
    a: "Our main office is in Chico, with satellite offices in Rocklin, Sacramento and Lake Almanor (by appointment only). We serve Northern California including Butte, Plumas, Placer, Sacramento, Lassen and Glenn Counties and surrounding counties.",
  },
];

/** "Our Strategy" — the firm's stated, straightforward process. */
export const steps = [
  {
    title: "Set up an appointment",
    body: "Give us a call or send a message. Our front office will listen, explain the process and get you scheduled.",
  },
  {
    title: "Fill out the questionnaire",
    body: "Complete our Estate Planning Questionnaire and provide it to us with some documentation.",
  },
  {
    title: "Consult, review & sign",
    body: "Meet with your attorney to consult, review, adjust and sign your plan — and leave with peace of mind.",
  },
];

/** Communities listed on the firm's Service Areas page. */
export const communities = [
  "Chico",
  "Paradise",
  "Oroville",
  "Yuba City",
  "Marysville",
  "Roseville",
  "Colfax",
  "Lincoln",
  "Loomis",
  "Rocklin",
  "Sacramento",
  "Folsom",
  "Lake Almanor",
];
