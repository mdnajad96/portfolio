import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { Summary } from "@/components/sections/Summary";
import { Skills } from "@/components/sections/Skills";
import { ResearchInterests } from "@/components/sections/ResearchSection";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { CtaSection } from "@/components/sections/CtaSection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Summary />

      {/* Experience preview */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Experience"
            title="A career across design, manufacturing & research"
            description="From CNC programming to quality engineering at a global battery leader."
          />
          <ButtonLink href="/experience" variant="secondary" size="sm">
            Full timeline
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <div className="mt-12">
          <ExperienceTimeline />
        </div>
      </Section>

      {/* Projects preview */}
      <Section className="bg-surface-secondary/40">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Engineering work, end to end"
            description="Research, special-purpose machines, and industrial systems delivered into production."
          />
          <ButtonLink href="/projects" variant="secondary" size="sm">
            All projects
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <div className="mt-12">
          <ProjectsShowcase detailed={false} />
        </div>
      </Section>

      {/* Skills preview */}
      <Section>
        <SectionHeading
          eyebrow="Capabilities"
          title="A toolkit spanning CAD/CAM, manufacturing & research"
          description="Deep, hands-on expertise across the full engineering lifecycle."
        />
        <div className="mt-12">
          <Skills />
        </div>
      </Section>

      {/* Research preview */}
      <Section className="bg-surface-secondary/40">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Research"
            title="Where I focus my curiosity"
            description="Advancing manufacturing, materials, and Industry 4.0."
          />
          <ButtonLink href="/research" variant="secondary" size="sm">
            Research & publications
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <div className="mt-12">
          <ResearchInterests />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
