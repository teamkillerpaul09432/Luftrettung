import { History, Building2, MapPin, Shirt, Radio, Cog } from "lucide-react"

const ranks = [
  {
    rank: "Azubi Pilot:innen",
    tasks: [
      "Flugtheorie lernen",
      "Simulatortraining absolvieren",
      "Unterstützung erfahrener Pilot:innen"
    ],
    salary: 1500
  },
  {
    rank: "Azubi HEMS-TC",
    tasks: [
      "Assistenz bei HEMS-Einsätzen",
      "Medizinische Grundkenntnisse sammeln"
    ],
    salary: 1500
  },
  {
    rank: "Pilot:innen",
    tasks: [
      "Flugführung übernehmen",
      "Einsatznavigation",
      "Sichere Durchführung von Rettungsflügen"
    ],
    salary: 1800
  },
  {
    rank: "HEMS-TC",
    tasks: [
      "Medizinische Koordination",
      "Patientenversorgung an Bord",
      "Logistik während Einsätzen"
    ],
    salary: 1800
  },
  {
    rank: "Senior Pilot:innen",
    tasks: [
      "Eigenständige Einsätze fliegen",
      "Flugplanung",
      "Mentoring von Azubi Pilot:innen"
    ],
    salary: 2200
  },
  {
    rank: "Senior HEMS-TC",
    tasks: [
      "Leitende medizinische Betreuung",
      "Ausbildung neuer HEMS-TC"
    ],
    salary: 2200
  },
  {
    rank: "Ausbilder:innen HEMS-TC",
    tasks: [
      "Schulung von Azubis und Mitarbeitenden",
      "Trainingsplanung"
    ],
    salary: 2400
  },
  {
    rank: "Ausbilder:innen Pilot:innen",
    tasks: [
      "Schulung von Pilot:innen und Azubis",
      "Trainingsplanung"
    ],
    salary: 2400
  },
  {
    rank: "Leitende Pilot:innen",
    tasks: [
      "Einsatzleitung",
      "Personalplanung",
      "Sicherheitsverantwortung"
    ],
    salary: 2600
  },
  {
    rank: "Leitende HEMS-TC",
    tasks: [
      "Medizinische Leitung der HEMS-Einsätze",
      "Qualitätskontrolle"
    ],
    salary: 2600
  },
  {
    rank: "Notärzt:innen",
    tasks: [
      "Patientenversorgung am Einsatzort",
      "Medizinische Entscheidungen treffen"
    ],
    salary: 2700
  },
  {
    rank: "Personaler:innen",
    tasks: [
      "Personalverwaltung",
      "Recruiting",
      "Fortbildungen organisieren"
    ],
    salary: 2500
  },
  {
    rank: "Leitende Notärzt:innen",
    tasks: [
      "Leitung von Einsätzen",
      "Medizinische Supervision"
    ],
    salary: 2800
  },
  {
    rank: "Stellv. Wachleitung",
    tasks: [
      "Unterstützung der Wachleitung",
      "Strategische Entscheidungen"
    ],
    salary: 2900
  },
  {
    rank: "Wachleitung",
    tasks: [
      "Unternehmensleitung",
      "Budgetplanung",
      "Strategische Ausrichtung"
    ],
    salary: 3000
  }
];

const airCallsigns = [
  { type: "RTH (Rettungshubschrauber)", name: "Christoph 1" },
  { type: "RTH (Rettungshubschrauber)", name: "Christoph 2" },
  { type: "RTH (Rettungshubschrauber)", name: "Christoph 3" },
  { type: "NEH (Notarzteinsatzhubschrauber)", name: "Christoph 4" },
  { type: "NEH (Notarzteinsatzhubschrauber)", name: "Christoph 5" },
  { type: "NEH (Notarzteinsatzhubschrauber)", name: "Christoph 6" },
  { type: "ITH (Intensivtransporthubschrauber)", name: "Christoph 7" },
  { type: "ITH (Intensivtransporthubschrauber)", name: "Christoph 8" },
  { type: "SAR (Such- und Rettungshubschrauber)", name: "Christoph 9" },
  { type: "SAR (Such- und Rettungshubschrauber)", name: "Christoph 10" },
]

const groundCallsigns = [
  { type: "ELW (Einsatzleitwagen)", name: "04-11-01" },
  { type: "MTW (Mannschaftsfahrzeug)", name: "04-18-01" },
  { type: "KdoW (Kommandowagen)", name: "04-10-01" },
  { type: "NEF (Notarzteinsatzfahrzeug)", name: "04-82-01" },
  { type: "NEF (Notarzteinsatzfahrzeug)", name: "04-82-02" },

]

export function KonzeptSection() {
  return (
    <section id="konzept" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* INTRO (ORIGINAL) */}
        <div className="max-w-3xl">
          <p className="text-primary font-mono uppercase tracking-widest text-sm mb-4">
            Fraktionskonzept
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Konzept der Luftrettung
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Das vollständige Konzept unserer Luftrettungs-Fraktion – von der Geschichte über
            Rangstruktur und Einsatzgebiete bis hin zu den benötigten Systemen und Funkrufnamen.
          </p>
        </div>

        {/* 1. GESCHICHTE (ORIGINAL TEXT) */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <History className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">1. Geschichte (die Geschichte kommt von der offiziellen DRF-Website)</h3>
          </div>

          <div className="bg-card rounded-lg p-6 lg:p-8 space-y-4">

            <p className="text-muted-foreground leading-relaxed">
              Aus der Not – für eine bessere Notfallversorgung
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Anfang der 70er-Jahre galt die Luftrettung in der Öffentlichkeit als unnötig, zu teuer und übertrieben.
              Und das, obwohl selbst ein bodengebundener Rettungsdienst praktisch nicht existierte. Die Notfallrettung
              hatte mit offensichtlichen Mängeln zu kämpfen: Es gab in den meisten Bundesländern keine einheitliche
              Notrufnummer, keine Notrufsäulen, kaum Rettungsleitstellen, keine speziell ausgebildeten Notärzte und
              Rettungsassistenten, nur wenige gesetzliche Regelungen – und keine Luftrettung.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Im Notfall musste man zunächst die Polizei anrufen, die dann einen Krankenwagen bestellte. Dieser war
              meistens ohne Funk und häufig nur mit einem Fahrer besetzt, der den Patient ins Krankenhaus bringen sollte.
              Mit zunehmender Massenmotorisierung stieg die Zahl der Verkehrstoten 1970 auf einen Rekord von fast 20.000.
            </p>

            <p className="text-muted-foreground leading-relaxed font-semibold text-foreground">
              Der Beginn der DRF Luftrettung
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Um dieser unhaltbaren Situation etwas entgegen zu setzen, wurde am 06. September 1972 die heutige DRF
              Luftrettung gegründet. Am 19. März 1973 begann die DRF Luftrettung mit einem Rettungshubschrauber für den
              Großraum Stuttgart den Einsatzbetrieb.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Heute setzen die DRF Luftrettung und ihre Tochterunternehmen sowie Beteiligungen an 42 Stationen in
              Deutschland, Österreich, Liechtenstein und der Schweiz über 50 Hubschrauber für Notfalleinsätze und den
              Transport von Intensivpatienten zwischen Kliniken ein. Seit ihrer Gründung leistete die DRF Luftrettung
              über 1.000.000 Einsätze. Im Jahr 2024 feierte die gemeinnützige Organisation ihr 50-jähriges Jubiläum.
            </p>

            <div className="mt-6 aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/KfbEpG1zKcc?si=saFmkX-YBHefra4m"
                title="DRF Luftrettung Geschichte Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* ORIGINAL 50 JAHRE TEXT */}
          <p className="text-muted-foreground text-sm mt-6">
            50 Jahre DRF Luftrettung in 3 Minuten: Historischer Rückblick über fünf Jahrzehnte Menschen. Leben. Retten.
          </p>

          {/* MEILENSTEINE (TEXT + NEUE BILDER) */}
          <div className="space-y-10 mt-10">

            <div className="space-y-16 mt-10">

              {/* 1972 */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  1972–1975 – Aufbau der Luftrettung
                </h4>

                <div className="flex flex-col lg:flex-row gap-6">
                  <img
                    src="https://www.drf-luftrettung.de/hs-fs/hubfs/Imported%20sitepage%20images/DRF_LU~3.jpg?width=840&height=525&name=DRF_LU~3.jpg"
                    className="rounded-lg w-full lg:w-1/2 object-cover"
                  />

                  <ul className="text-muted-foreground space-y-1 lg:w-1/2">
                    <li>• 1972: Die heutige DRF Luftrettung wird gegründet.</li>
                    <li>• 19. März 1973: In der Region Stuttgart findet der erste Einsatz mit einem Rettungshubschrauber statt.</li>
                    <li>• 1975: Die heutigen Stationen Karlsruhe und Rendsburg werden gegründet.</li>
                  </ul>
                </div>
              </div>

              {/* 1980 */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  1980–1991 – Expansion
                </h4>

                <div className="flex flex-col lg:flex-row-reverse gap-6">
                  <img
                    src="https://www.drf-luftrettung.de/hs-fs/hubfs/Imported%20sitepage%20images/DRF_LU~1.jpg?width=840&height=525&name=DRF_LU~1.jpg"
                    className="rounded-lg w-full lg:w-1/2 object-cover"
                  />

                  <ul className="text-muted-foreground space-y-1 lg:w-1/2">
                    <li>• 1980:  Zur Wartung der Hubschrauber wird die Werft in Baden-Baden/Oos gegründet.</li>
                    <li>• 1984: Das erste eigene Ambulanzflugzeug der DRF Luftrettung startet.</li>
                    <li>• 1991: Der erste Intensivtransporthubschrauber Deutschlands nimmt in München seinen Dienst auf.</li>
                  </ul>
                </div>
              </div>

              {/* 1991-1996 */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  1991–1996 – Weiterentwicklung
                </h4>

                <div className="flex flex-col lg:flex-row gap-6">
                  <img
                    src="https://www.drf-luftrettung.de/hs-fs/hubfs/Imported%20sitepage%20images/DRF_LU~2.jpg?width=840&height=525&name=DRF_LU~2.jpg"
                    className="rounded-lg w-full lg:w-1/2 object-cover"
                  />

                  <ul className="text-muted-foreground space-y-1 lg:w-1/2">
                    <li>• 1991: Nachtflug: In München wird die erste Station rund um die Uhr betrieben.</li>
                    <li>• 1991: Erste Station in den neuen Bundesländern: Zwickau. Es folgen Greifswald und Suhl.</li>
                    <li>• 1996: Inbetriebnahme der weltweit ersten EC135.</li>
                  </ul>
                </div>
              </div>

              {/* 1998-2005 */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  1998–2005 – Modernisierung
                </h4>

                <div className="flex flex-col lg:flex-row-reverse gap-6">
                  <img
                    src="https://www.drf-luftrettung.de/hs-fs/hubfs/Imported%20sitepage%20images/DRF_LU~4.jpg?width=840&height=525&name=DRF_LU~4.jpg"
                    className="rounded-lg w-full lg:w-1/2 object-cover"
                  />

                  <ul className="text-muted-foreground space-y-1 lg:w-1/2">
                    <li>• 1998: Windenrettung: Nürnberg wird als erste Station der DRF Luftrettung mit einer Winde ausgestattet.</li>
                    <li>• 2001: Die ARA Flugrettung wird gegründet und ist von Beginn an Teil der DRF Luftrettung.</li>
                    <li>• 2005: Die DRF Luftrettung ist Ideengeberin für die neu entwickelte Software rescuetrack, die die Disposition von Luftrettungsmitteln verbessert.</li>
                  </ul>
                </div>
              </div>

              {/* 2009-2015 */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  2009–2015 – Digitalisierung
                </h4>

                <div className="flex flex-col lg:flex-row gap-6">
                  <img
                    src="https://www.drf-luftrettung.de/hs-fs/hubfs/Imported%20sitepage%20images/DR404C~1.jpg?width=840&height=525&name=DR404C~1.jpg"
                    className="rounded-lg w-full lg:w-1/2 object-cover"
                  />

                  <ul className="text-muted-foreground space-y-1 lg:w-1/2">
                    <li>• 2009: An der Station München kommen bundesweit erstmalig Nachtsichtgeräte in der zivilen Luftrettung zum Einsatz.</li>
                    <li>• 2013: Die neue Werft mit elf Docks am Operation-Center am Flughafen Karlsruhe/Baden-Baden wird eröffnet.</li>
                    <li>• 2015: Die DRF Luftrettung nimmt die weltweit erste H145 in Dienst.</li>
                  </ul>
                </div>
              </div>


              {/* 2018-2019 */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  2018–2019 – Ausbau & strategische Entwicklung
                </h4>

                <div className="flex flex-col lg:flex-row-reverse gap-6">
                  <img
                    src="https://www.drf-luftrettung.de/hs-fs/hubfs/Imported%20sitepage%20images/DR9570~1.jpg?width=840&height=525&name=DR9570~1.jpg"
                    className="rounded-lg w-full lg:w-1/2 object-cover"
                  />

                  <ul className="text-muted-foreground space-y-1 lg:w-1/2">
                    <li>• 2018: Gründung der Akademie für Aus- und Weiterbildung in den Bereichen Medizin, Flugbetrieb und Technik.</li>
                    <li>• 2019: Die Northern Helicopter GmbH wird zu einer Tochter der DRF Luftrettung, um die Offshore-Expertise zu stärken.</li>
                    <li>• 2019: Greifswald führt als erste Station der DRF Luftrettung Blut- und Plasmakonserven mit.  Mittlerweile verfügen auch die Stationen Mannheim, Regensburg, Stuttgart, Berlin und Rendsburg.</li>
                  </ul>
                </div>
              </div>

              {/* 2019-2020 */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  2019–2020 – Innovation & Pandemiebewältigung
                </h4>

                <div className="flex flex-col lg:flex-row gap-6">
                  <img
                    src="https://www.drf-luftrettung.de/hs-fs/hubfs/Imported%20sitepage%20images/DR4412~1.jpg?width=840&height=525&name=DR4412~1.jpg"
                    className="rounded-lg w-full lg:w-1/2 object-cover"
                  />

                  <ul className="text-muted-foreground space-y-1 lg:w-1/2">
                    <li>• 2019: Beteiligung an der AAA (Alpine Air Ambulance), um die Luftrettung in der D-A-CH-Region zu optimieren.</li>
                    <li>• 2020: Zum Schutz von Patienten und Crews: Die innovativen „EpiShuttles“ werden an Stationen im Einsatz gegen COVID-19 eingeführt.</li>
                    <li>• 2020: Lufthansa Aviation Training und DRF Luftrettung eröffnen den neuen Full Flight Simulator Level D des Typs Airbus H145/135.</li>
                  </ul>
                </div>
              </div>

              {/* 2018-2019 */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  2021–2021 – Technische Neuerungen & Auszeichnungen
                </h4>

                <div className="flex flex-col lg:flex-row-reverse gap-6">
                  <img
                    src="https://www.drf-luftrettung.de/hs-fs/hubfs/Imported%20sitepage%20images/DR8E31~1.jpg?width=840&height=525&name=DR8E31~1.jpg"
                    className="rounded-lg w-full lg:w-1/2 object-cover"
                  />

                  <ul className="text-muted-foreground space-y-1 lg:w-1/2">
                    <li>• 2021: Als erste Luftrettungsorganisation im deutschsprachigen Raum nimmt die DRF Luftrettung die H145 mit Fünfblattrotor in Dienst.</li>
                    <li>• 2021: DRF Luftrettung und Luxembourg Air Rescue erhalten den Adenauer-de Gaulle-Preis für ihren Einsatz während der Pandemie.</li>
                    <li>• 2021: Die DRF Luftrettung lädt zum ersten Mal Fachleute aus aller Welt zum Windensymposium ein. Im Jahr 2023 findet es zum dritten Mal statt.</li>
                  </ul>
                </div>
              </div>

              {/* 2018-2019 */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  2021–19. März 2023 – Wachstum & Meilensteine
                </h4>

                <div className="flex flex-col lg:flex-row gap-6">
                  <img
                    src="https://www.drf-luftrettung.de/hs-fs/hubfs/Imported%20sitepage%20images/DRA9A9~1.jpg?width=840&height=525&name=DRA9A9~1.jpg"
                    className="rounded-lg w-full lg:w-1/2 object-cover"
                  />

                  <ul className="text-muted-foreground space-y-1 lg:w-1/2">
                    <li>• 2021: Eine historische Zahl: Die DRF Luftrettung fliegt, zusammen mit ihren Tochterunternehmen, ihren 1.000.000. Einsatz!</li>
                    <li>• 2022: Erste Flugschüler starten Ausbildung zum Berufshubschrauberpiloten</li>
                    <li>• 19. März 2023: Wir feiern unser Einsatzjubiläum!</li>
                  </ul>
                </div>
              </div>

              {/* 2018-2019 */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  2023–2024 – Ausbildung & Modernisierung der Flotte
                </h4>

                <div className="flex flex-col lg:flex-row-reverse gap-6">
                  <img
                    src="https://www.drf-luftrettung.de/hs-fs/hubfs/06%20Organisation/Meilensteine/260105_DRFLuftrettung_Meilensteine_f%C3%BCr_Website_S11.jpg?width=850&height=458&name=260105_DRFLuftrettung_Meilensteine_f%C3%BCr_Website_S11.jpg"
                    className="rounded-lg w-full lg:w-1/2 object-cover"
                  />

                  <ul className="text-muted-foreground space-y-1 lg:w-1/2">
                    <li>• 2023: Vorstellung des mobilen HHO-Simulators hoistAR® mit Reiser Simulation and Training</li>
                    <li>• 2024: Der erste Jahrgang schließt die Ausbildung zum Berufshubschrauberpiloten ab</li>
                    <li>• 2024: Flottenerneuerung: Nur noch H145 und H135 im Dienst</li>
                  </ul>
                </div>
              </div>


              {/* 2018-2019 */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  2024–2025 – Zukunftsorientierte Flottenentwicklung
                </h4>

                <div className="flex flex-col lg:flex-row gap-6">
                  <img
                    src="https://www.drf-luftrettung.de/hs-fs/hubfs/06%20Organisation/Meilensteine/260105_DRFLuftrettung_Meilensteine_f%C3%BCr_Website_S12.jpg?width=850&height=458&name=260105_DRFLuftrettung_Meilensteine_f%C3%BCr_Website_S12.jpg"
                    className="rounded-lg w-full lg:w-1/2 object-cover"
                  />

                  <ul className="text-muted-foreground space-y-1 lg:w-1/2">
                    <li>• 2024: DRF Luftrettung erhält HRO-Award für Patientensicherheit
                    </li>
                    <li>• 2025: Flottenentwicklung: Vertrag mit Airbus Helicopters über zehn H140 unterzeichnet</li>
                    <li>• 2025: Flottenerneuerung: Nur noch H145 mit Fünfblattrotor und H135 im Dienst</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">
              2. Einbindung ins Stadtleben / Einfluss
            </h3>
          </div>

          <div className="bg-card rounded-lg p-6 lg:p-8">
            <ul className="space-y-3 text-muted-foreground">
              <li>Enge Kooperation mit Frankfurter Krankenhäusern für schnelle Patientenversorgung</li>
              <li>Einsatz bei Großveranstaltungen, Unfällen auf Straßen und Autobahnen</li>
              <li>Unterstützung der Stadt in Katastrophenfällen und Großschadenslagen</li>
              <li>Beitrag zur medizinischen Sicherheit der Bevölkerung und zur Entlastung bodengebundener Rettungsdienste</li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">3. Standort</h3>
          </div>

          <div className="bg-card rounded-lg p-6 lg:p-8">
            <ul className="space-y-3 text-muted-foreground">
              <li><strong>Basis:</strong> Frankfurt (relativ zentrale Lage für schnelle Einsätze in der Stadt)</li>
              <li>
                <strong>Referenz zur Standortgestaltung:</strong>{" "}
                <a href="https://steelflex.tebex.io/package/luftrettungv3vinewoodhills" className="text-primary underline">
                  Luftrettung V3 Vinewood Hills mit Animierten Toren und Helipad Skript!
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Shirt className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">4. Kleidung</h3>
          </div>

          <div className="bg-card rounded-lg p-6 lg:p-8">
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>Pilot usw.:</strong>{" "}
                <a href="https://horizon-mods-store.tebex.io/package/7340191" className="text-primary underline">
                  HM Helmet Three
                </a>
              </li>
              <li>
                <strong>HEMS-TC:</strong>{" "}
                <a href="https://horizon-mods-store.tebex.io/package/7191508" className="text-primary underline">
                  HM Helmet One
                </a>
              </li>
              <li>
                <strong>Info</strong>{" "}
                <a>
                  Dies sind nur die Helme. Wir würden die ganz normale Rettungsdienstkleidung nehmen, nur umgeskinnt, z. B. alle Logos replacen, und wo Rettungsdienst draufsteht, Luftrettung hinschreiben, und wenn Ränge draufstehen, dann halt alle Ränge draufmachen.
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 5. Benötigte Systeme */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Cog className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">5. Benötigte Systeme</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card rounded-lg p-6 lg:p-8">

              <a
                href="https://horizon-mods-store.tebex.io/package/7170258"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-red-500 underline hover:text-red-600 transition-colors mb-2 block"
              >
                H145 Heli Pack
              </a>

              <p className="text-muted-foreground leading-relaxed">
                Für geiles RP. Dies kann man auch für die Polizei usw. benutzen
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-6 lg:p-8">

                <a
                  href="https://steelflex.tebex.io/package/heliadcontrolscript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-red-500 underline hover:text-red-600 transition-colors mb-2 block"
                >
                  Helipad Controls (wird nur benötigt, wenn wir nicht das komplette Luftrettung V3 Vinewood Hills-Skript/MLO nehmen, da dieses schon ein Helipad-Skript inklusive hat)
                </a>

                <p className="text-muted-foreground leading-relaxed">
                  Damit wir in die Wache fahren können und nicht so, wie es in echt ist.
                </p>
              </div>
            </div>


            <div className="bg-card rounded-lg p-6 lg:p-8">

              <a
                href="https://shop.bradleyking.xyz/package/5753615?currency=EUR"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-red-500 underline hover:text-red-600 transition-colors mb-2 block"
              >
                Heli-Winch-Script
              </a>

              <p className="text-muted-foreground leading-relaxed">
                Damit wir uns abseilen und Leute aus der Luft bergen können, da wir nicht überall landen
                können. Mit dem Rescue-Basket schicken wir jemanden herunter, laden den Patienten auf
                und fliegen zum nächsten Landeplatz oder direkt zum Krankenhaus.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Ränge, Aufgaben & Gehälter */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Cog className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">6. Ränge, Aufgaben & Gehälter</h3>
          </div>
          <div className="mt-8 bg-card rounded-lg overflow-hidden">
            <div className="p-6 lg:p-8 pb-4"></div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-y border-border bg-secondary/50">
                    <th className="px-6 py-3 text-sm font-semibold text-foreground whitespace-nowrap">Rang</th>
                    <th className="px-6 py-3 text-sm font-semibold text-foreground">Aufgaben</th>
                    <th className="px-6 py-3 text-sm font-semibold text-foreground text-right whitespace-nowrap">Gehalt</th>
                  </tr>
                </thead>
                <tbody>
                  {ranks.map((r, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-foreground whitespace-nowrap">{r.rank}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{r.tasks}</td>
                      <td className="px-6 py-4 text-sm font-mono text-primary text-right whitespace-nowrap">{r.salary} €</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 6. Funkrufnamen */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Radio className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">7. Funkrufnamen</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Luftcrew */}
            <div className="bg-card rounded-lg overflow-hidden">
              <div className="p-6 pb-4">
                <h4 className="text-lg font-semibold text-foreground">Luftcrew</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-y border-border bg-secondary/50">
                      <th className="px-6 py-3 text-sm font-semibold text-foreground">Einsatzart</th>
                      <th className="px-6 py-3 text-sm font-semibold text-foreground text-right whitespace-nowrap">Funkrufname</th>
                    </tr>
                  </thead>
                  <tbody>
                    {airCallsigns.map((c, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors">
                        <td className="px-6 py-3 text-sm text-muted-foreground">{c.type}</td>
                        <td className="px-6 py-3 text-sm font-mono text-primary text-right whitespace-nowrap">{c.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Boden Crew */}
            <div className="bg-card rounded-lg overflow-hidden h-fit">
              <div className="p-6 pb-4">
                <h4 className="text-lg font-semibold text-foreground">Boden Crew</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-y border-border bg-secondary/50">
                      <th className="px-6 py-3 text-sm font-semibold text-foreground">Einsatzart</th>
                      <th className="px-6 py-3 text-sm font-semibold text-foreground text-right whitespace-nowrap">Funkrufname</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groundCallsigns.map((c, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors">
                        <td className="px-6 py-3 text-sm text-muted-foreground">{c.type}</td>
                        <td className="px-6 py-3 text-sm font-mono text-primary text-right whitespace-nowrap">{c.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}