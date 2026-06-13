import { Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { GridBackground } from "@/components/ui/GridBackground";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <GridBackground />
      <Container className="relative text-center">
        <p className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-accent-700 dark:text-accent-300">
          Error 404
        </p>
        <h1 className="mx-auto mt-4 max-w-xl font-display text-4xl font-semibold tracking-tightest text-ink-950 dark:text-white sm:text-5xl">
          This page is off the blueprint
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-600 dark:text-ink-300">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/" size="lg">
            <Home className="h-4 w-4" />
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
