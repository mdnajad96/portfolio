import { ArrowUpRight } from "lucide-react";
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
    <article className="group surface-card overflow-hidden hover:shadow-card">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        {/* Visual panel */}
        <div
          className={cn(
            "relative flex min-h-[220px] items-center justify-center overflow-hidden border-b border-ink-100 bg-gradient-to-br p-8 dark:border-ink-800 lg:border-b-0 lg:border-r",
            project.accent,
          )}
        >
          <div
            className="absolute inset-0 bg-grid-light dark:bg-grid-dark"
            style={{ backgroundSize: "26px 26px" }}
            aria-hidden="true"
          />
          <div className="relative text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-white/60 bg-white/80 text-accent-700 shadow-soft backdrop-blur dark:border-ink-700 dark:bg-ink-900/70 dark:text-accent-300">
              <Icon className="h-8 w-8" />
            </span>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
              {String(index + 1).padStart(2, "0")} · {project.category}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 sm:p-8">
          <h3 className="flex items-start justify-between gap-4 text-xl font-semibold text-ink-950 dark:text-white">
            {project.title}
            <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-ink-300 transition-colors group-hover:text-accent-600 dark:text-ink-600" />
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.topics.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          {detailed ? (
            <dl className="mt-6 space-y-4">
              {detailRows.map((row) => (
                <div
                  key={row.key}
                  className="grid gap-1 sm:grid-cols-[160px_1fr] sm:gap-4"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-700 dark:text-accent-300">
                    {row.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {project[row.key] as string}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="mt-5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              {project.solution}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
