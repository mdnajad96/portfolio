import { education } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <div className="space-y-5">
      {education.map((item) => {
        const Icon = item.icon;
        return (
          <Reveal key={item.institution}>
            <article className="group surface-card flex gap-5 p-6 transition-all duration-300 hover:border-border-hover hover:shadow-md sm:p-7">
              <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-content">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {item.institution}
                    </p>
                  </div>
                  <span className="rounded-full bg-surface-secondary px-3 py-1 font-mono text-xs font-medium text-content-secondary">
                    {item.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-content-secondary">
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
