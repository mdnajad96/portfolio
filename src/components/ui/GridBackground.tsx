import { cn } from "@/lib/utils";

/**
 * Decorative CAD/blueprint grid background.
 * Uses inline CSS gradients so the grid renders identically in light and
 * dark themes via currentColor-based opacity. Purely presentational.
 */
export function GridBackground({
  className,
  fade = true,
}: {
  className?: string;
  fade?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-grid-light dark:bg-grid-dark",
          fade && "grid-mask",
        )}
        style={{ backgroundSize: "40px 40px" }}
      />
    </div>
  );
}

/**
 * Soft engineering-inspired radial glow used behind hero/section content.
 */
export function GlowAccent({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -z-10 blur-3xl",
        className,
      )}
    >
      <div className="h-full w-full rounded-full bg-gradient-to-tr from-accent-400/30 via-cyan-300/20 to-transparent" />
    </div>
  );
}
