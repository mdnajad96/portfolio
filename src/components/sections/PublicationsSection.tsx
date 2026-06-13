import { BookOpen, ExternalLink, Quote } from "lucide-react";
import { publications } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function PublicationsSection() {
  return (
    <div className="space-y-6">
      {publications.map((pub, index) => (
        <Reveal key={pub.title} delay={index * 0.05}>
          <article className="surface-card overflow-hidden">
            {pub.featured ? (
              <div className="flex items-center gap-2 border-b border-ink-100 bg-accent-50/60 px-7 py-3 dark:border-ink-800 dark:bg-ink-900/60">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-700 dark:text-accent-300">
                  <Quote className="h-3.5 w-3.5" /> Featured Publication
                </span>
              </div>
            ) : null}

            <div className="p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="hidden h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-accent-50 text-accent-700 dark:bg-ink-800 dark:text-accent-300 sm:grid">
                  <BookOpen className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-ink-950 dark:text-white sm:text-xl">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                    <span className="font-medium text-ink-800 dark:text-ink-100">
                      {pub.venue}
                    </span>{" "}
                    · {pub.year} · {pub.authors}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {pub.abstract}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {pub.topics.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <ButtonLink href={pub.doiUrl} external size="sm">
                  <ExternalLink className="h-4 w-4" />
                  View DOI
                </ButtonLink>
                <span className="font-mono text-xs text-ink-400 dark:text-ink-500">
                  DOI: {pub.doi}
                </span>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
