import { ArrowRight } from "lucide-react";

import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResearchInterests } from "@/components/sections/ResearchSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "Research",
  description:
    "Research by Muhammad Munajad in advanced manufacturing, composite materials, metal additive manufacturing, manufacturing quality, product development, and Industry 4.0.",
  path: "/research",
  keywords: [
    "Mechanical Engineering Research",
    "Composite Materials",
    "Metal Additive Manufacturing",
  ],
});

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Advancing manufacturing and materials"
        description="Research that connects fundamental materials science with practical, manufacturable engineering outcomes."
      />

      <Section>
        <SectionHeading
          eyebrow="Research Interests"
          title="Focus areas"
          description="The questions and domains that drive my research agenda."
        />
        <div className="mt-12">
          <ResearchInterests />
        </div>
      </Section>

      <Section className="bg-ink-50/40 dark:bg-ink-950">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Publications"
            title="Featured publication"
            description="Peer-reviewed research output."
          />
          <ButtonLink href="/publications" variant="secondary" size="sm">
            All publications
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <div className="mt-12">
          <PublicationsSection />
        </div>
      </Section>
    </>
  );
}
