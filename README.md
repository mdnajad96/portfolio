# Muhammad Munajad — Engineering Portfolio

A premium, production-ready personal portfolio for **Muhammad Munajad** —
Mechanical Engineer, Process Quality Engineer, Product Design Engineer, and
Researcher. Built to communicate technical expertise, engineering leadership,
research capability, and industrial experience.

🔗 **Domain:** https://muhammadmunajad.me

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS** with a custom engineering-inspired design system
- **Framer Motion** for scroll reveals and page transitions
- **Lucide Icons**
- **next-themes** for dark/light mode
- SEO-optimized, accessible, and Vercel deployment ready

## Features

- Premium light theme with optional dark mode toggle
- Engineering-inspired CAD/blueprint grid backgrounds and soft gradients
- Smooth animations, scroll-reveal effects, and page transitions
- Sticky, responsive navigation with mobile menu
- Resume download button and professional contact form
- Full SEO: per-page metadata, Open Graph/Twitter cards, JSON-LD Person
  schema, generated `sitemap.xml`, `robots.txt`, and web manifest
- Accessibility: skip link, focus-visible rings, reduced-motion support

## Pages

| Route | Description |
| ----- | ----------- |
| `/` | Home — hero, metrics, summary, previews of experience/projects/skills/research |
| `/about` | Biography, education, and skills |
| `/experience` | Career timeline |
| `/projects` | Project showcase (challenge → solution → approach → outcome) |
| `/research` | Research interests + featured publication |
| `/publications` | Peer-reviewed publications |
| `/leadership` | Leadership & community involvement |
| `/contact` | Contact details and form |

## Project Structure

```
src/
├── app/                # App Router pages, layout, SEO routes
│   ├── about/
│   ├── contact/
│   ├── experience/
│   ├── leadership/
│   ├── projects/
│   ├── publications/
│   ├── research/
│   ├── globals.css
│   ├── layout.tsx
│   ├── manifest.ts
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/         # Navbar, Footer, ThemeProvider/Toggle, PageTransition
│   ├── sections/       # Hero, Metrics, Summary, Timeline, Skills, Projects, etc.
│   └── ui/             # Container, Section, Reveal, Button, Badge, PageHeader…
└── lib/                # site config, content data, metadata + utils
public/                 # favicon, portrait, OG image, resume placeholder
```

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

> Replace `public/resume.pdf` and `public/portrait.svg` with the real resume
> and professional portrait. Update contact details in `src/lib/site.ts`.

## Deployment

Optimized for **Vercel** — import the repository and deploy. No environment
variables are required.

## License

© Muhammad Munajad. All rights reserved.
