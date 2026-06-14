import { leadership } from "@/lib/data";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function LeadershipSection() {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2">
      {leadership.map((item) => {
        const Icon = item.icon;
        return (
          <RevealItem key={item.organization} className="h-full">
            <div className="group surface-card flex h-full gap-4 p-6 hover:-translate-y-1 hover:border-border-hover hover:shadow-md">
              <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-base font-semibold leading-snug text-content">
                  {item.organization}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-primary">
                  {item.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-content-muted">
                  {item.description}
                </p>
              </div>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
