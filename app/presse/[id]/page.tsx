import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getPressReport } from "@/app/actions/press"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

export default async function PressReportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const report = await getPressReport(Number(id))

  if (!report) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 lg:py-32 bg-card">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-primary font-mono uppercase tracking-widest text-sm mb-4">
                Pressebericht
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                {report.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span>{new Date(report.publishedAt).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}</span>
                {report.authorName && <span>von {report.authorName}</span>}
              </div>
            </div>

            {report.imageUrl ? (
              <div className="relative w-full aspect-[16/6] mb-10 overflow-hidden rounded-3xl bg-muted">
                <img
                  src={report.imageUrl}
                  alt={report.title}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}

            <div className="prose prose-invert max-w-none text-muted-foreground">
              <p>{report.content}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
