import { skillCategories } from "@/lib/data";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2">
      {skillCategories.map((category) => {
        const Icon = category.icon;
        return (
          <RevealItem key={category.title}>
            <div className="group surface-card h-full overflow-hidden p-7 hover:-translate-y-1 hover:shadow-card">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-50 text-accent-700 transition-colors group-hover:bg-accent-600 group-hover:text-white dark:bg-ink-800 dark:text-accent-300">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-ink-950 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-ink-100 bg-ink-50/70 px-3.5 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-accent-300 hover:text-accent-700 dark:border-ink-700 dark:bg-ink-900/50 dark:text-ink-200 dark:hover:border-accent-500 dark:hover:text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
