import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { GridBackground } from "@/components/ui/GridBackground";
import { Reveal } from "@/components/ui/Reveal";

export function CtaSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-ink-950 px-8 py-14 text-center shadow-card dark:border-ink-800 sm:px-12 sm:py-20">
            <GridBackground fade={false} className="opacity-30" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-accent-600/30 blur-3xl"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tightest text-white sm:text-4xl">
                Let&apos;s build something that moves engineering forward.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-300">
                Open to product design, manufacturing, quality engineering, and
                research collaborations — as well as PhD opportunities.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <ButtonLink
                  href="/contact"
                  size="lg"
                  className="bg-white text-ink-950 hover:bg-accent-300"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink
                  href={siteConfig.resumeUrl}
                  download
                  variant="secondary"
                  size="lg"
                  className="border-ink-700 bg-ink-900/40 text-white hover:border-accent-500 hover:text-white"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
