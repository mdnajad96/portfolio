import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink-950 text-white shadow-soft hover:bg-accent-700 hover:shadow-glow dark:bg-white dark:text-ink-950 dark:hover:bg-accent-300",
  secondary:
    "border border-ink-200 bg-white/70 text-ink-800 backdrop-blur hover:border-accent-400 hover:text-accent-700 dark:border-ink-700 dark:bg-ink-900/50 dark:text-ink-100 dark:hover:border-accent-500 dark:hover:text-white",
  ghost:
    "text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800/60",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

interface LinkButtonProps extends CommonProps {
  href: string;
  external?: boolean;
  download?: boolean;
}

export function ButtonLink({
  href,
  external,
  download,
  variant = "primary",
  size = "md",
  className,
  children,
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (external || download) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

type NativeButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: NativeButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
