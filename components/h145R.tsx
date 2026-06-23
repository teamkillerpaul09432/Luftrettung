import Image from "next/image"

export function H145RettungswindePage() {
  return (
    <main className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* HERO */}
        <section className="space-y-4">
          <p className="text-primary font-mono uppercase tracking-widest text-sm">
            H145 mit Fünfblattrotor & Rettungswinde
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Luftrettung mit Windenfähigkeit
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl">
            Der H145 mit Fünfblattrotor und Rettungswinde ermöglicht anspruchsvolle
            Notfalleinsätze, Intensivtransporte und präzise Windenbergungen auch in schwierigem Gelände.
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
              <li>• Windenbergungen</li>
            </ul>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Besatzung
              </h3>
              <p className="text-muted-foreground">
                1–2 Piloten, Notfallsanitäter (HEMS TC mit Zusatzausbildung zum Windenführer), Notarzt
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative w-full aspect-[1/1] rounded-lg overflow-hidden border border-border">
            <Image
              src="https://www.drf-luftrettung.de/hs-fs/hubfs/01%20Corporate%20(Logos%2c%20Grafiken%2c%20Typenbl%C3%A4tter%2c%20etc.)/Illustrationen%20Flugger%C3%A4te/h145-fuenfblattrotor-rettungswinde-hubschrauber-illustration-vorne.jpg?width=836&height=886&name=h145-fuenfblattrotor-rettungswinde-hubschrauber-illustration-vorne.jpg"
              alt="H145 mit Fünfblattrotor & Rettungswinde"
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
              <p><span className="font-semibold">Triebwerke:</span> 2 × Safran Arriel 2E</p>
              <p><span className="font-semibold">Leistung:</span> 906 Wellen-PS je Triebwerk</p>
              <p><span className="font-semibold">Geschwindigkeit:</span> 278 km/h</p>
              <p><span className="font-semibold">Dienstgipfelhöhe:</span> 20.000 ft PA</p>
            </div>

            <div className="space-y-3">
              <p><span className="font-semibold">Kraftstoff:</span> 903,8 Liter</p>
              <p><span className="font-semibold">Max. Abfluggewicht:</span> 3.800 kg</p>
              <p><span className="font-semibold">Abmessungen:</span> 13,53 m × 2,71 m × 4,00 m</p>
              <p><span className="font-semibold">Rotor-Ø:</span> 10,80 m</p>
              <p><span className="font-semibold">Winde:</span> 90 m / 249 kg Nutzlast</p>
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
              <p>Notfallrucksack, Kinder- & Säuglingsversorgung, Trauma- und Verbrennungsversorgung, Intensivmedizin, Windenrettungsequipment</p>
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
              <p className="font-semibold text-foreground mb-2">Gas & Optionen</p>
              <p>ECMO, IABP, Transportinkubator, medizinische Druckluft, 230V/24V Stromversorgung</p>
            </div>

          </div>
        </section>

        {/* TECHNIK */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Technische Ausstattung
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            4-Achsen Autopilot, ACAS, Wetterradar, NVIS, HISL, HTAWS, VFR/IFR Flugfähigkeit, integrierte Rettungswinde
          </p>
        </section>

      </div>
    </main>
  )
}