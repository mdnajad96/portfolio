import { CheckCircle2 } from "lucide-react";

import { buildMetadata } from "@/lib/metadata";
import { summary } from "@/lib/data";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Get to know Muhammad Munajad — a Mechanical Engineer with 9+ years across product design, manufacturing systems, quality engineering, and advanced materials research.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Engineer, problem-solver, and lifelong learner"
        description="A multidisciplinary mechanical engineer bridging the shop floor, the design office, and the research lab."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Biography"
              title={summary.title}
            />
            <div className="mt-6 space-y-5">
              {summary.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-base leading-relaxed text-ink-600 dark:text-ink-300">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="surface-card h-full p-7 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
                At a glance
              </h3>
              <ul className="mt-5 space-y-4">
                {summary.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600 dark:text-accent-400" />
                    <span className="text-sm leading-relaxed text-ink-700 dark:text-ink-200">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-ink-50/40 pt-0 dark:bg-ink-950">
        <SectionHeading eyebrow="Education" title="Academic foundation" />
        <div className="mt-10">
          <Education />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills & expertise"
          description="A toolkit built over a decade across CAD/CAM, manufacturing, and research."
        />
        <div className="mt-12">
          <Skills />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
