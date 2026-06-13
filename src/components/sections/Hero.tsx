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

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <GridBackground />
      <GlowAccent className="left-1/2 top-0 h-[460px] w-[760px] -translate-x-1/2" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.span variants={item} className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-600" />
              {hero.eyebrow}
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-ink-950 dark:text-white sm:text-5xl lg:text-6xl"
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
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href={siteConfig.resumeUrl} download size="lg">
                <Download className="h-4 w-4" />
                Download Resume
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                <Mail className="h-4 w-4" />
                Contact Me
              </ButtonLink>
              <ButtonLink href="/projects" variant="ghost" size="lg">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-9 flex items-center gap-5"
            >
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink-400 dark:text-ink-500">
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
      className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 bg-white/70 text-ink-700 backdrop-blur transition-colors hover:border-accent-400 hover:text-accent-700 dark:border-ink-700 dark:bg-ink-900/50 dark:text-ink-200 dark:hover:border-accent-500 dark:hover:text-white"
    >
      {children}
    </a>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto max-w-sm lg:max-w-md">
      {/* Decorative technical frame */}
      <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent-500/20 via-cyan-400/10 to-transparent blur-2xl" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-100 bg-white shadow-card dark:border-ink-800 dark:bg-ink-900">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark" style={{ backgroundSize: "28px 28px" }} />
        <Image
          src="/portrait.svg"
          alt="Portrait of Muhammad Munajad, Mechanical Engineer"
          width={640}
          height={760}
          priority
          unoptimized
          className="relative h-auto w-full object-cover"
        />
        {/* Caption badge */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/40 bg-white/80 px-4 py-3 backdrop-blur-md dark:border-ink-700/60 dark:bg-ink-950/70">
          <div>
            <p className="text-sm font-semibold text-ink-950 dark:text-white">
              Muhammad Munajad
            </p>
            <p className="text-xs text-ink-500 dark:text-ink-400">
              Process Quality Engineer · CATL
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-2.5 py-1 text-[11px] font-medium text-accent-700 dark:bg-ink-800 dark:text-accent-300">
            <MapPin className="h-3 w-3" /> Indonesia
          </span>
        </div>
      </div>
    </div>
  );
}
