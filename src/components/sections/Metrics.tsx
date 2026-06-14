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
                <div className="group surface-card h-full p-6 hover:-translate-y-1 hover:border-border-hover hover:shadow-md">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 font-display text-3xl font-semibold tracking-tight text-content sm:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-content">
                    {metric.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-content-muted">
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
