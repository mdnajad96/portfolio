import { metrics } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Metrics() {
  return (
    <section className="relative py-12 sm:py-16">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <RevealItem key={metric.label}>
                <div className="group surface-card h-full p-6 hover:-translate-y-1 hover:shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 text-accent-700 transition-colors group-hover:bg-accent-600 group-hover:text-white dark:bg-ink-800 dark:text-accent-300">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink-800 dark:text-ink-200">
                    {metric.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {metric.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
