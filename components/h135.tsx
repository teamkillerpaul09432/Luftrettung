import Image from "next/image"

export function H135Page() {
  return (
    <main className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* HERO */}
        <section className="space-y-4">
          <p className="text-primary font-mono uppercase tracking-widest text-sm">
            H135
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Bewährter Standard in der Luftrettung
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl">
            Der H135 ist ein vielseitiger Hubschrauber für Notfalleinsätze und Intensivtransporte
            und zählt zu den meistgenutzten Mustern in der zivilen Luftrettung.
          </p>
        </section>

        {/* EINSATZMERKMALE + BILD */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Einsatzmerkmale
            </h2>

            <ul className="space-y-2 text-muted-foreground text-base">
              <li>• Notfalleinsätze</li>
              <li>• Intensivtransporte</li>
            </ul>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Besatzung
              </h3>
              <p className="text-muted-foreground">
                Pilot, Notfallsanitäter (HEMS TC), Notarzt
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-border">
            <Image
              src="https://www.drf-luftrettung.de/hs-fs/hubfs/01%20Corporate%20(Logos%2c%20Grafiken%2c%20Typenbl%C3%A4tter%2c%20etc.)/Illustrationen%20Flugger%C3%A4te/h135-hubschrauber-illustration-vorne.jpg?width=2560&height=1436&name=h135-hubschrauber-illustration-vorne.jpg"
              alt="H135 Hubschrauber Illustration"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* LEISTUNGSDATEN */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground">
            Leistungsmerkmale
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <p><span className="font-semibold">Hersteller:</span> Airbus Helicopters</p>
              <p><span className="font-semibold">Triebwerke:</span> 2 × Safran Arrius 2B2+</p>
              <p><span className="font-semibold">Leistung:</span> 757 PS je Triebwerk</p>
              <p><span className="font-semibold">Max. Geschwindigkeit:</span> 287 km/h</p>
              <p><span className="font-semibold">Dienstgipfelhöhe:</span> 20.000 ft PA</p>
            </div>

            <div className="space-y-3">
              <p><span className="font-semibold">Kraftstoff:</span> 710 Liter</p>
              <p><span className="font-semibold">Max. Abfluggewicht:</span> 2.910 kg</p>
              <p><span className="font-semibold">Abmessungen:</span> 12,26 m × 3,13 m × 3,51 m</p>
              <p><span className="font-semibold">Rotor-Ø:</span> 10,40 m</p>
            </div>
          </div>
        </section>

        {/* MEDIZINISCHE AUSRÜSTUNG */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Medizinische Ausstattung
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">

            <div>
              <p className="font-semibold text-foreground mb-2">Mobiles Equipment</p>
              <p>Notfallrucksack, Kinder- & Säuglingsversorgung, Trauma- und Verbrennungsversorgung, Intensivmedizin</p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-2">Diagnostik</p>
              <p>12-Kanal-EKG, Blutdruckmessung, Blutgasanalyse, Pulsoximetrie, Kapnographie, Sonographie</p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-2">Beatmung</p>
              <p>Beatmungsgeräte, Sauerstoffinhalator, Videolaryngoskop, Absaugpumpen</p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-2">Kreislauf</p>
              <p>Defibrillator, Herzschrittmacher, Spritzenpumpen, Reanimationshilfe</p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-2">Traumaversorgung</p>
              <p>Vakuummatratze, Spineboard, Wärmesysteme</p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-2">Optionen</p>
              <p>12V/24V/230V Stromversorgung, Inkubator, ECMO, medizinische Druckluft</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  )
}