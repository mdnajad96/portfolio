import { researchInterests } from "@/lib/data";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function ResearchInterests() {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {researchInterests.map((interest) => {
        const Icon = interest.icon;
        return (
          <RevealItem key={interest.title}>
            <div className="group surface-card h-full p-6 hover:-translate-y-1 hover:shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-50 text-accent-700 transition-colors group-hover:bg-accent-600 group-hover:text-white dark:bg-ink-800 dark:text-accent-300">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink-950 dark:text-white">
                {interest.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                {interest.description}
              </p>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
