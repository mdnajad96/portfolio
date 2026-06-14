import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-8 py-14 text-center shadow-lg sm:px-12 sm:py-20">
            {/* Decorative grid + glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tightest text-white text-balance sm:text-4xl">
                Let&apos;s build something that moves engineering forward.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 text-pretty">
                Open to product design, manufacturing, quality engineering, and
                research collaborations — as well as PhD opportunities.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <ButtonLink
                  href="/contact"
                  size="lg"
                  className="bg-white text-slate-900 shadow-md hover:bg-slate-100 hover:shadow-glow"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </ButtonLink>
                <ButtonLink
                  href={siteConfig.resumeUrl}
                  download
                  size="lg"
                  className="border border-white/20 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10"
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
