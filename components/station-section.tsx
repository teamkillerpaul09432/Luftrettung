import Image from "next/image"
import { MapPin, Plane, Building2 } from "lucide-react"

const specs = [
  { label: "Hubschraubertyp", value: "Eurocopter H135" },
  { label: "Reisegeschwindigkeit", value: "254 km/h" },
  { label: "Reichweite", value: "ca. 620 km" },
]

export function StationSection() {
  return (
    <section id="station" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/frankfurt.png"
              alt="Frankfurt am Main - Standort von Christoph 2"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2 text-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">Frankfurt am Main, Hessen</span>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-primary font-mono uppercase tracking-widest text-sm mb-4">
                Die Station
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Standort an der BG Unfallklinik
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Christoph 2 ist an der BG Unfallklinik Frankfurt am Main stationiert. 
                Diese zentrale Lage ermöglicht schnelle Einsätze im gesamten Rhein-Main-Gebiet 
                sowie in angrenzenden Teilen von Hessen, Rheinland-Pfalz und Bayern.
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 bg-card rounded-lg">
              <Building2 className="w-6 h-6 text-primary mt-1" />
              <div>
                <p className="font-semibold text-foreground">BG Unfallklinik Frankfurt</p>
                <p className="text-sm text-muted-foreground">Friedberger Landstraße 430, 60389 Frankfurt am Main</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-card rounded-lg">
              <Plane className="w-6 h-6 text-primary mt-1" />
              <div>
                <p className="font-semibold text-foreground">Technische Daten</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2">
                  {specs.map((spec, index) => (
                    <div key={index}>
                      <p className="text-xs text-muted-foreground">{spec.label}</p>
                      <p className="text-sm text-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
