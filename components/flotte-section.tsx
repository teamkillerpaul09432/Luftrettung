"use client"

import Image from "next/image"
import Link from "next/link"

const fleetData = [
  {
    title: "H145 mit Fünfblattrotor",
    status: "Aktiv",
    image: "/images/fleet/h145-5blade.jpg",
    description:
      "Ende 2020 übernimmt die DRF Luftrettung den EU-weit ersten Hubschrauber des Typs H145 mit Fünfblattrotor. Dieser Typ bietet höhere Nutzlast und deutlich ruhigere Flugeigenschaften.",
    slug: "h145-mit-fuenfblattrotor"
  },
  {
    title: "H145 mit Fünfblattrotor & Rettungswinde",
    status: "Aktiv",
    image: "/images/fleet/h145-winde.jpg",
    description:
      "Im April 2023 nimmt die DRF Luftrettung eine H145 mit Fünfblattrotor und Rettungswinde in Betrieb. Dadurch sind auch komplexe Bergungs- und Windeinsätze möglich.",
    slug: "h145-mit-fuenfblattrotor-rettungswinde"
  },
  {
    title: "H135",
    status: "Derzeit außer Betrieb",
    image: "/images/fleet/h135.jpg",
    description:
      "Seit September 2017 Teil der Flotte. Basierend auf der EC135 mit modernem Glascockpit. Aktuell außer Betrieb.",
    slug: "h135"
  }
]

export function FlotteSection() {
  return (
    <section id="fleet" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-primary font-mono uppercase tracking-widest text-sm mb-4">
            Unsere Flotte
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Aktuelle Luftfahrzeuge
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Moderne Hubschrauber für Rettung, Intensivtransport und Spezialmissionen.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetData.map((heli, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-background flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={heli.image}
                  alt={heli.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-1">
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {heli.title}
                  </h3>

                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {heli.status}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {heli.description}
                  </p>
                </div>

                {/* BUTTON */}
                <Link
                  href={`/flotte/${heli.slug}`}
                  className="mt-5 inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}