"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { ButtonLink } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink-100 bg-white/80 backdrop-blur-xl dark:border-ink-800 dark:bg-ink-950/70"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-display text-base font-semibold tracking-tight text-ink-950 dark:text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink-950 text-sm font-bold text-white transition-colors group-hover:bg-accent-700 dark:bg-white dark:text-ink-950">
            M
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-accent-700 dark:text-white"
                  : "text-ink-600 hover:text-ink-950 dark:text-ink-300 dark:hover:text-white",
              )}
            >
              {item.label}
              {isActive(item.href) ? (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full bg-accent-50 dark:bg-ink-800/70"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink
            href="/contact"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Let&apos;s talk
          </ButtonLink>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-700 lg:hidden dark:border-ink-700 dark:text-ink-200"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink-100 bg-white/95 backdrop-blur-xl lg:hidden dark:border-ink-800 dark:bg-ink-950/90"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-accent-50 text-accent-700 dark:bg-ink-800/70 dark:text-white"
                      : "text-ink-700 hover:bg-ink-50 dark:text-ink-200 dark:hover:bg-ink-800/50",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
