import { CheckCircle2 } from "lucide-react";
import { summary } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Summary() {
  return (
    <Section className="bg-surface-secondary/40">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Professional Summary" title={summary.title} />
          <div className="mt-6 space-y-5">
            {summary.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-base leading-relaxed text-content-secondary">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="surface-card h-full p-7 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-content-muted">
              Highlights
            </h3>
            <ul className="mt-5 space-y-4">
              {summary.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-content-secondary">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
