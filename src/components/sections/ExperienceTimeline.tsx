import { MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Vertical rail */}
      <div
        aria-hidden="true"
        className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-400/60 via-ink-200 to-transparent dark:via-ink-700 sm:left-[27px]"
      />

      <ol className="space-y-8">
        {experience.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={`${item.company}-${item.period}`} className="relative pl-14 sm:pl-20">
              {/* Node */}
              <span
                className={[
                  "absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-xl border shadow-soft sm:h-14 sm:w-14",
                  item.current
                    ? "border-accent-300 bg-accent-600 text-white"
                    : "border-ink-100 bg-white text-ink-700 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200",
                ].join(" ")}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>

              <Reveal delay={index * 0.04}>
                <article className="surface-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-card sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-ink-950 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-accent-700 dark:text-accent-300">
                        {item.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 sm:items-end">
                      <span className="rounded-full bg-ink-100 px-3 py-1 font-mono text-xs font-medium text-ink-700 dark:bg-ink-800 dark:text-ink-200">
                        {item.period}
                      </span>
                      {item.location ? (
                        <span className="inline-flex items-center gap-1 text-xs text-ink-500 dark:text-ink-400">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {item.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.focus.map((f) => (
                      <Badge key={f}>{f}</Badge>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
