import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "primary" | "outline";

const variants: Record<BadgeVariant, string> = {
  default:
    "border-border bg-surface-secondary text-content-secondary",
  primary:
    "border-primary/20 bg-primary-soft text-primary",
  outline: "border-border bg-transparent text-content-secondary",
};

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border px-3 py-1 text-xs font-medium transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
