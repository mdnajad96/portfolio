import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Engineering projects by Muhammad Munajad — magnesium hybrid metal composites, a battery leakage detection machine, and industrial agricultural machinery systems.",
  path: "/projects",
  keywords: ["Engineering Projects", "Machine Design", "Composite Materials"],
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Engineering, from challenge to outcome"
        description="A closer look at representative work — the problem, the engineering approach, and the measurable result."
      />

      <Section>
        <ProjectsShowcase detailed />
      </Section>

      <CtaSection />
    </>
  );
}
