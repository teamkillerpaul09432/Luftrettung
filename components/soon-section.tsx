"use client"

export function SoonSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-card px-4">
      <div className="max-w-md w-full bg-background border border-border rounded-xl shadow-lg p-8 text-center">
        
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
          Diese Seite befindet sich noch in Bearbeitung.
        </h1>

        <p className="text-muted-foreground text-sm">
          Wir arbeiten aktuell an den Inhalten und sind bald für dich da.
        </p>

      </div>
    </section>
  )
}