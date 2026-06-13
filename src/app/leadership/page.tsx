import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata = buildMetadata({
  title: "Leadership",
  description:
    "Leadership and community involvement by Muhammad Munajad across academic societies, student organizations, and international communities.",
  path: "/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership & Community"
        title="Leading beyond engineering"
        description="Service, organization, and community building across academic and international communities."
      />

      <Section>
        <LeadershipSection />
      </Section>

      <CtaSection />
    </>
  );
}
