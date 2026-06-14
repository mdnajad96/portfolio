import { ArrowUpRight, TrendingUp } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const detailRows: Array<{ key: keyof Project; label: string }> = [
  { key: "challenge", label: "Challenge" },
  { key: "solution", label: "Solution" },
  { key: "approach", label: "Engineering Approach" },
  { key: "outcome", label: "Outcome" },
];

export function ProjectsShowcase({ detailed = true }: { detailed?: boolean }) {
  return (
    <div className="space-y-8">
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={index * 0.05}>
          <ProjectCard project={project} detailed={detailed} index={index} />
        </Reveal>
      ))}
    </div>
  );
}

function ProjectCard({
  project,
  detailed,
  index,
}: {
  project: Project;
  detailed: boolean;
  index: number;
}) {
  const Icon = project.icon;
  return (
    <article className="group surface-card overflow-hidden transition-all duration-300 hover:border-border-hover hover:shadow-lg">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        {/* Visual panel */}
        <div
          className={cn(
            "relative flex min-h-[240px] items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br p-8 lg:border-b-0 lg:border-r",
            project.accent,
          )}
        >
          <div
            className="absolute inset-0 bg-grid-light dark:bg-grid-dark"
            style={{ backgroundSize: "26px 26px" }}
            aria-hidden="true"
          />
          <div className="relative text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-border glass text-primary shadow-sm transition-transform duration-500 group-hover:scale-105">
              <Icon className="h-8 w-8" />
            </span>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-content-muted">
              {String(index + 1).padStart(2, "0")} · {project.category}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 sm:p-8">
          <h3 className="flex items-start justify-between gap-4 text-xl font-semibold text-content">
            {project.title}
            <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-content-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </h3>

          {/* Technology badges */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.topics.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          {/* Impact metrics */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.impact.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary"
              >
                <TrendingUp className="h-3.5 w-3.5" />
                {item}
              </span>
            ))}
          </div>

          {detailed ? (
            <dl className="mt-6 space-y-4">
              {detailRows.map((row) => (
                <div
                  key={row.key}
                  className="grid gap-1 sm:grid-cols-[160px_1fr] sm:gap-4"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    {row.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-content-secondary">
                    {project[row.key] as string}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="mt-5 text-sm leading-relaxed text-content-secondary">
              {project.solution}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
