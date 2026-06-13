import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata = buildMetadata({
  title: "Publications",
  description:
    "Peer-reviewed publications by Muhammad Munajad, including research on magnesium hybrid metal composites via infiltrated stir casting in the Journal of Applied Science and Engineering.",
  path: "/publications",
  keywords: ["Journal Publication", "Magnesium Matrix Composites", "Stir Casting"],
});

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Peer-reviewed research"
        description="Published contributions to the engineering and materials science community."
      />

      <Section>
        <PublicationsSection />
      </Section>

      <CtaSection />
    </>
  );
}
