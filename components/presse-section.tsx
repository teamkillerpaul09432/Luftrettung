import Image from "next/image"
import Link from "next/link"
import { Newspaper } from "lucide-react"
import type { PressReport } from "@/app/actions/press"

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

export function PresseSection({ reports }: { reports: PressReport[] }) {
  return (
    <section id="presse" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-12">
          <p className="text-primary font-mono uppercase tracking-widest text-sm mb-4">
            Aktuelles
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Presseberichte
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Neuigkeiten, Einsätze und Mitteilungen der Luftrettung.
          </p>
        </div>

        {reports.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-background py-20 text-center">
            <Newspaper className="h-10 w-10 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Aktuell sind keine Presseberichte verfügbar.</p>
          </div>
        ) : (
          /* GRID */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report) => (
              <article
                key={report.id}
                className="border border-border rounded-lg overflow-hidden bg-background flex flex-col"
              >
                {/* IMAGE */}
                {report.imageUrl ? (
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src={report.imageUrl || "/placeholder.svg"}
                      alt={report.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative w-full aspect-[16/10] bg-muted flex items-center justify-center">
                    <Newspaper className="h-10 w-10 text-muted-foreground" />
                  </div>
                )}

                {/* CONTENT */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="space-y-2 flex-1">
                    <p className="text-xs text-primary uppercase tracking-wide">
                      {formatDate(report.publishedAt)}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground text-balance">
                      {report.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line line-clamp-5">
                      {report.content}
                    </p>
                  </div>

                  {report.authorName && (
                    <p className="mt-5 text-xs text-muted-foreground">
                      Veröffentlicht von {report.authorName}
                    </p>
                  )}

                  <Link
                    href={`/presse/${report.id}`}
                    className="mt-5 inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
                  >
                    Mehr lesen
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
