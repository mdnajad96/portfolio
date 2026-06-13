import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata = buildMetadata({
  title: "Experience",
  description:
    "Explore Muhammad Munajad's engineering career — Process Quality Engineer at CATL, Product Design Engineer, NTUST Researcher, Mechanical Design Engineer, Mold Designer, and CNC Programmer.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="A timeline of engineering impact"
        description="Nine-plus years spanning precision machining, mold and machine design, automation, materials research, and manufacturing quality."
      />

      <Section>
        <ExperienceTimeline />
      </Section>

      <CtaSection />
    </>
  );
}
