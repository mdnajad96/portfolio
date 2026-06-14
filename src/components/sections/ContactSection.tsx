import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: siteConfig.links.email,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "in/muhammadmunajad",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/mdnajad96",
    href: siteConfig.links.github,
    icon: Github,
    external: true,
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: null,
    icon: MapPin,
    external: false,
  },
] as const;

export function ContactSection() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
      <Reveal>
        <div className="space-y-3">
          {channels.map((channel) => {
            const Icon = channel.icon;
            const inner = (
              <div className="group flex items-center gap-4 rounded-2xl border border-border glass p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-hover hover:shadow-md">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-content-muted">
                    {channel.label}
                  </p>
                  <p className="truncate text-sm font-medium text-content">
                    {channel.value}
                  </p>
                </div>
              </div>
            );

            return channel.href ? (
              <a
                key={channel.label}
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="block"
              >
                {inner}
              </a>
            ) : (
              <div key={channel.label}>{inner}</div>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <ContactForm />
      </Reveal>
    </div>
  );
}
