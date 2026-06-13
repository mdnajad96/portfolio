import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  /** when true, removes the default horizontal container */
  bleed?: boolean;
}

/**
 * Consistent vertical rhythm wrapper for page sections.
 */
export function Section({
  children,
  className,
  containerClassName,
  id,
  bleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-16 sm:py-20 lg:py-28", className)}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
