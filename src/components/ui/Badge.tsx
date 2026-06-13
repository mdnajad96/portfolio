import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-ink-200 bg-ink-50 px-3 py-1 text-xs font-medium text-ink-700 transition-colors dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
