/**
 * Central site configuration.
 * Single source of truth for identity, URLs, and contact details
 * used across metadata, structured data, navigation, and the footer.
 */

export const siteConfig = {
  name: "Muhammad Munajad",
  shortName: "Munajad",
  title:
    "Mechanical Engineer | Process Quality Engineer | Product Design Engineer | Researcher",
  role: "Process Quality Engineer at CATL Karawang",
  description:
    "Muhammad Munajad is a Mechanical Engineer with 9+ years of experience in product development, manufacturing systems, quality engineering, advanced materials research, CAD/CAM, and CNC programming. M.Sc. from National Taiwan University of Science and Technology.",
  url: "https://muhammadmunajad.me",
  locale: "en_US",
  location: "Karawang, Indonesia",
  email: "munajad.engineer@gmail.com",
  resumeUrl: "/resume.pdf",
  ogImage: "/og-image.svg",
  links: {
    github: "https://github.com/mdnajad96",
    linkedin: "https://www.linkedin.com/in/muhammadmunajad",
    email: "mailto:munajad.engineer@gmail.com",
  },
  keywords: [
    "Muhammad Munajad",
    "Mechanical Engineer Portfolio",
    "Product Design Engineer",
    "Manufacturing Engineer",
    "Quality Engineer",
    "Research Engineer",
    "Mechanical Engineering Research",
    "Manufacturing Innovation",
    "PhD Candidate",
    "CATL",
    "Magnesium Matrix Composites",
    "CAD CAM CNC",
    "NTUST",
    "Process Quality Engineer",
    "Additive Manufacturing",
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
] as const;
