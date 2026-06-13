/**
 * Minimal className combiner — joins truthy class fragments with a space.
 * Avoids an extra dependency while keeping JSX readable.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
