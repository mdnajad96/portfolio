import { Container } from "./Container";
import { GridBackground, GlowAccent } from "./GridBackground";
import { Reveal } from "./Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}

/**
 * Consistent hero header for inner pages, with the engineering grid motif.
 */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-secondary/40 pb-12 pt-16 sm:pb-16 sm:pt-24">
      <GridBackground />
      <GlowAccent className="left-1/2 top-0 h-[320px] w-[640px] -translate-x-1/2" />
      <Container className="relative">
        <Reveal>
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tightest text-content text-balance sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-content-secondary text-pretty sm:text-lg">
              {description}
            </p>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
