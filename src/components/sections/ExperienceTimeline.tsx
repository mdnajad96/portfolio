import { MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Vertical rail */}
      <div
        aria-hidden="true"
        className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent sm:left-[27px]"
      />

      <ol className="space-y-8">
        {experience.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={`${item.company}-${item.period}`}
              className="relative pl-14 sm:pl-20"
            >
              {/* Node */}
              <span
                className={cn(
                  "absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-xl border shadow-sm sm:h-14 sm:w-14",
                  item.current
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-surface text-content-secondary",
                )}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>

              <Reveal delay={index * 0.04}>
                <article className="surface-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-hover hover:shadow-md sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-content">
                        {item.role}
                        {item.current ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-0.5 text-[11px] font-medium text-success">
                            <span className="h-1.5 w-1.5 rounded-full bg-success" />
                            Current
                          </span>
                        ) : null}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {item.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 sm:items-end">
                      <span className="rounded-full bg-surface-secondary px-3 py-1 font-mono text-xs font-medium text-content-secondary">
                        {item.period}
                      </span>
                      {item.location ? (
                        <span className="inline-flex items-center gap-1 text-xs text-content-muted">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-content-secondary">
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
