import { leadership } from "@/lib/data";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function LeadershipSection() {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2">
      {leadership.map((item) => {
        const Icon = item.icon;
        return (
          <RevealItem key={item.organization}>
            <div className="group surface-card flex h-full gap-4 p-6 hover:-translate-y-1 hover:shadow-card">
              <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-accent-50 text-accent-700 transition-colors group-hover:bg-accent-600 group-hover:text-white dark:bg-ink-800 dark:text-accent-300">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-base font-semibold leading-snug text-ink-950 dark:text-white">
                  {item.organization}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-accent-700 dark:text-accent-300">
                  {item.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
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
