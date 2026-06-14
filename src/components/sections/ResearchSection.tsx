import { researchInterests } from "@/lib/data";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function ResearchInterests() {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {researchInterests.map((interest) => {
        const Icon = interest.icon;
        return (
          <RevealItem key={interest.title} className="h-full">
            <div className="group surface-card h-full p-6 hover:-translate-y-1 hover:border-border-hover hover:shadow-md">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-content">
                {interest.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-content-muted">
                {interest.description}
              </p>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
