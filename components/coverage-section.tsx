"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

const regions = [
  { name: "Frankfurt", distance: 0, duration: 0 },
  { name: "Offenbach", distance: 8, duration: 4 },
  { name: "Hanau", distance: 20, duration: 8 },
  { name: "Wiesbaden", distance: 35, duration: 13 },
  { name: "Mainz", distance: 38, duration: 14 },
  { name: "Darmstadt", distance: 30, duration: 12 },
  { name: "Bad Homburg", distance: 18, duration: 7 },
  { name: "Aschaffenburg", distance: 40, duration: 15 },
  { name: "Gießen", distance: 65, duration: 25 },
  { name: "Limburg", distance: 60, duration: 23 },
]

export function CoverageSection() {
  const [selectedRegion, setSelectedRegion] = useState<typeof regions[0] | null>(null)

  const maxDistance = 70
  const maxPixel = 300

  return (
    <section id="einsatzgebiet" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-mono uppercase tracking-widest text-sm mb-4">
            Einsatzgebiet
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Schnelle Hilfe in der Region
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mit einem Einsatzradius von etwa 70 Kilometern deckt Christoph 2 das
            gesamte Rhein-Main-Gebiet sowie Teile von Hessen, Rheinland-Pfalz und Bayern ab.
            In wenigen Minuten erreichen wir jeden Notfallort.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-[16/9] lg:aspect-[21/9] bg-card rounded-lg p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">

            {/* Static concentric rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="w-[600px] h-[600px] border border-foreground/30 rounded-full" />
              <div className="absolute w-[450px] h-[450px] border border-foreground/30 rounded-full" />
              <div className="absolute w-[300px] h-[300px] border border-foreground/30 rounded-full" />
              <div className="absolute w-[150px] h-[150px] border border-foreground/30 rounded-full" />
            </div>

            {/* Dynamic region rings */}
            {regions.map((region) => {
              const isSelected = selectedRegion?.name === region.name
              const pixelRadius = (region.distance / maxDistance) * maxPixel

              return (
                <div
                  key={region.name}
                  className="absolute rounded-full flex items-center justify-center bg-red-600/40 border-2 border-red-500 text-black transition-all z-0"
                  style={{
                    width: pixelRadius * 2,
                    height: pixelRadius * 2,
                    transform: isSelected ? "scale(1)" : "scale(0)",
                    boxShadow: isSelected
                      ? "0 0 25px rgba(220,38,38,0.8)"
                      : "0 0 0px rgba(220,38,38,0)",
                    transition: "transform 0.6s ease-in-out, box-shadow 0.6s ease-in-out",
                  }}
                >
                  <span
                    className={`font-semibold transition-opacity duration-500 ${
                      isSelected ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {region.name}
                  </span>
                </div>
              )
            })}

            {/* Distance markers */}
            <div className="absolute top-1/2 left-[calc(50%+75px)] -translate-y-1/2 text-xs text-foreground bg-card px-1 rounded z-20">
              17 km
            </div>
            <div className="absolute top-1/2 left-[calc(50%+150px)] -translate-y-1/2 text-xs text-foreground bg-card px-1 rounded z-20">
              35 km
            </div>
            <div className="absolute top-1/2 left-[calc(50%+225px)] -translate-y-1/2 text-xs text-foreground bg-card px-1 rounded z-20">
              52 km
            </div>
            <div className="absolute top-1/2 left-[calc(50%+300px)] -translate-y-1/2 text-xs text-foreground bg-card px-1 rounded z-20">
              70 km
            </div>

            {/* Popout */}
            {selectedRegion && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-6 bg-secondary/90 text-foreground rounded-lg p-4 shadow-lg w-64 z-20">
                <p className="font-semibold text-lg">{selectedRegion.name}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Entfernung von der Wache: <strong>{selectedRegion.distance} km</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  Flugzeit: ca. <strong>{selectedRegion.duration} Minuten</strong>
                </p>
                <button
                  className="mt-2 px-3 py-1 bg-primary text-background rounded hover:bg-primary/90 transition-colors text-sm"
                  onClick={() => setSelectedRegion(null)}
                >
                  Schließen
                </button>
              </div>
            )}
          </div>

          {/* Region buttons */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {regions.map((region) => {
              const isSelected = selectedRegion?.name === region.name

              return (
                <button
                  key={region.name}
                  onClick={() => setSelectedRegion(isSelected ? null : region)}
                  className={`flex items-center gap-2 p-3 rounded-lg w-full transition-colors ${
                    isSelected
                      ? "bg-red-600 border border-red-700"
                      : "bg-card hover:bg-secondary"
                  }`}
                >
                  <MapPin
                    className={`w-4 h-4 ${
                      isSelected ? "text-black" : "text-muted-foreground"
                    }`}
                  />
                  <span
                    className={`text-sm font-semibold ${
                      isSelected ? "text-black" : "text-muted-foreground"
                    }`}
                  >
                    {region.name}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}