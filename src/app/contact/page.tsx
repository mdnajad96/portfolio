import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Muhammad Munajad for engineering roles, manufacturing and quality projects, research collaborations, and PhD opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start a conversation"
        description="Whether it's a role, a project, or a research collaboration, I'd be glad to hear from you."
      />

      <Section>
        <ContactSection />
      </Section>
    </>
  );
}
