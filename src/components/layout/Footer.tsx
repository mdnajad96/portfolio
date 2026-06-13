import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-100 bg-ink-50/40 dark:border-ink-800 dark:bg-ink-950">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-ink-950 dark:text-white"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink-950 text-sm font-bold text-white dark:bg-white dark:text-ink-950">
                M
              </span>
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-600 dark:text-ink-400">
              {siteConfig.title}. Building reliable machines, better processes,
              and forward-looking engineering research.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-ink-500 dark:text-ink-400">
              <MapPin className="h-4 w-4" />
              {siteConfig.location}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
              Navigate
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-600 transition-colors hover:text-accent-700 dark:text-ink-300 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
              Connect
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-600 transition-colors hover:text-accent-700 dark:text-ink-300 dark:hover:text-white"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-600 transition-colors hover:text-accent-700 dark:text-ink-300 dark:hover:text-white"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.email}
                  className="inline-flex items-center gap-2 text-sm text-ink-600 transition-colors hover:text-accent-700 dark:text-ink-300 dark:hover:text-white"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-100 pt-6 text-sm text-ink-500 sm:flex-row sm:items-center dark:border-ink-800 dark:text-ink-400">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs">
            Built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
}
