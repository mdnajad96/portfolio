"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { hero } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { GridBackground, GlowAccent } from "@/components/ui/GridBackground";

// Hoisted static variant sets so the Hero doesn't reallocate objects
// on every render.
const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const heroItemBase: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const heroItemReduced: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const heroItem: Variants = reduceMotion ? heroItemReduced : heroItemBase;

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <GridBackground />
      <GlowAccent className="left-1/2 top-0 h-[460px] w-[760px] -translate-x-1/2" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Copy */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.span
              variants={heroItem}
              className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3.5 py-1.5 text-xs font-medium text-content-secondary"
            >
              <span className="status-dot" />
              Open to opportunities &amp; collaborations
            </motion.span>

            <motion.span
              variants={heroItem}
              className="mt-4 block font-mono text-xs uppercase tracking-[0.22em] text-content-muted"
            >
              {hero.eyebrow}
            </motion.span>

            <motion.h1
              variants={heroItem}
              className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-content sm:text-5xl lg:text-6xl"
            >
              {hero.headlineLines.map((line, i) => (
                <span key={line} className="block">
                  <span className={i === 2 ? "text-gradient" : undefined}>
                    {line}
                  </span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-6 max-w-xl text-base leading-relaxed text-content-secondary text-pretty sm:text-lg"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              variants={heroItem}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href={siteConfig.resumeUrl} download size="lg">
                <Download className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
                Download Resume
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                <Mail className="h-4 w-4" />
                Contact Me
              </ButtonLink>
              <ButtonLink href="/projects" variant="ghost" size="lg">
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </ButtonLink>
            </motion.div>

            {/* Trust indicators / achievement highlights */}
            <motion.ul
              variants={heroItem}
              className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6"
            >
              {hero.trustSignals.map((signal) => (
                <li
                  key={signal}
                  className="inline-flex items-center gap-2 text-sm font-medium text-content-secondary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {signal}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={heroItem}
              className="mt-8 flex items-center gap-5"
            >
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-content-muted">
                Connect
              </span>
              <div className="flex items-center gap-2">
                <SocialLink
                  href={siteConfig.links.linkedin}
                  label="LinkedIn"
                  external
                >
                  <Linkedin className="h-4 w-4" />
                </SocialLink>
                <SocialLink
                  href={siteConfig.links.github}
                  label="GitHub"
                  external
                >
                  <Github className="h-4 w-4" />
                </SocialLink>
                <SocialLink href={siteConfig.links.email} label="Email">
                  <Mail className="h-4 w-4" />
                </SocialLink>
              </div>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <Portrait />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function SocialLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-surface/70 text-content-secondary backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-border-hover hover:text-primary hover:shadow-sm"
    >
      {children}
    </a>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto max-w-sm lg:max-w-md">
      {/* Decorative technical glow */}
      <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/25 via-info/15 to-transparent blur-2xl" />
      {/* Floating accent ring */}
      <div
        aria-hidden="true"
        className="absolute -right-4 -top-4 h-24 w-24 animate-float rounded-2xl border border-primary/20 bg-primary-soft/40 backdrop-blur-sm"
      />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-lg">
        <div
          className="absolute inset-0 bg-grid-light dark:bg-grid-dark"
          style={{ backgroundSize: "28px 28px" }}
        />
        <Image
          src="/Munajad.jpeg"
          alt="Portrait of Muhammad Munajad, Mechanical Engineer"
          width={640}
          height={760}
          priority
          className="relative h-auto w-full object-cover"
        />
        {/* Caption badge — glass */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-border glass px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-content">
              Muhammad Munajad
            </p>
            <p className="text-xs text-content-muted">
              Process Quality Engineer · CATL
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-medium text-primary">
            <MapPin className="h-3 w-3" /> Indonesia
          </span>
        </div>
      </div>
    </div>
  );
}
