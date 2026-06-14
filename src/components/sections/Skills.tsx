import { skillCategories } from "@/lib/data";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((category) => {
        const Icon = category.icon;
        return (
          <RevealItem key={category.title} className="h-full">
            <div className="group surface-card relative h-full overflow-hidden p-7 hover:-translate-y-1 hover:border-border-hover hover:shadow-md">
              {/* Accent bar that grows on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-primary to-info transition-transform duration-500 group-hover:scale-x-100"
              />

              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-content">
                  {category.title}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-content-muted">
                {category.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-border bg-surface-secondary/70 px-3 py-1.5 text-sm font-medium text-content-secondary transition-colors hover:border-primary/40 hover:bg-primary-soft hover:text-primary"
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
