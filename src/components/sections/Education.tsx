import { education } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <div className="space-y-5">
      {education.map((item) => {
        const Icon = item.icon;
        return (
          <Reveal key={item.institution}>
            <article className="surface-card flex gap-5 p-6 sm:p-7">
              <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-accent-50 text-accent-700 dark:bg-ink-800 dark:text-accent-300">
                <Icon className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-ink-950 dark:text-white">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-accent-700 dark:text-accent-300">
                      {item.institution}
                    </p>
                  </div>
                  <span className="rounded-full bg-ink-100 px-3 py-1 font-mono text-xs font-medium text-ink-700 dark:bg-ink-800 dark:text-ink-200">
                    {item.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {item.detail}
                </p>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
