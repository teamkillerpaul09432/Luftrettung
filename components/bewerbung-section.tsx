export function BewerbungsprozessSection() {
  return (
    <section id="bewerbungsprozess" className="py-24 lg:py-32 bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <p className="text-primary font-mono uppercase tracking-widest text-sm mb-4">Bewerbungsprozess</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-10 text-balance">
          Bewerbungsprozess
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-balance">
          Ihr Weg zu den Luftrettern – Schritt für Schritt
        </h2>

        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed text-pretty">
          <p>
            Sie haben eine passende Stelle bei uns gefunden, auf die Sie sich bewerben möchten? Oder Sie möchten sich
            initiativ bewerben? Das freut uns!
          </p>
          <p>
            Wir wissen, dass eine Bewerbung mit viel Zeitaufwand, großer Sorgfalt und hohen Erwartungen verbunden ist.
            Schließlich haben Sie Ihre Unterlagen umfassend und optisch ansprechend zusammengestellt und möchten mit
            Ihrer Qualifikation und Motivation richtig punkten. Jetzt warten Sie auf eine Reaktion, die im besten Fall
            positiv ist, Sie zum Vorstellungsgespräch mit anschließender Zusage und im Anschluss zu Ihrem ersten
            Arbeitstag führt. Das verstehen wir.
          </p>
        </div>

        {/* Bild 1 */}
        <figure className="my-12">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://www.drf-luftrettung.de/hs-fs/hubfs/07%20Karriere/karriere-bewerbung-hr-anne-kraft-foto-benedikt-spether-quelle-drf-luftrettung-2000x1333.jpg"
              alt="Arbeiten bei der DRF Luftrettung in der Verwaltung in Filderstadt oder Rheinmünster."
              className="w-full h-auto object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            Arbeiten bei der DRF Luftrettung in der Verwaltung in Filderstadt oder Rheinmünster. (Quelle: DRF
            Luftrettung)
          </figcaption>
        </figure>

        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-balance">
          Was also passiert eigentlich im Bewerbungsprozess hinter unseren Türen?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
          Der Bewerbungsprozess beginnt mit der Prüfung Ihrer Unterlagen. Um eine schnelle Bearbeitung gewährleisten zu
          können, reichen Sie bitte Ihre vollständigen Unterlagen (Anschreiben, Lebenslauf, Zeugnisse, Arbeitsproben,
          Referenzen und Zertifikate), die für die jeweiligen Fachbereiche in unserer Organisation relevant sind, in
          digitaler Form bei uns ein.
        </p>

        {/* Bild 2 */}
        <figure className="my-12">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://www.drf-luftrettung.de/hs-fs/hubfs/DRF_LUFTRETTUNG_Organigramm_HR_Final_1440x776_Website.jpg?width=840&height=525&name=DRF_LUFTRETTUNG_Organigramm_HR_Final_1440x776_Website.jpg"
              alt="So einfach geht's: Der Bewerbungsprozess bei der DRF Luftrettung"
              className="w-full h-auto object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            So einfach geht&apos;s: Der Bewerbungsprozess bei der DRF Luftrettung (Quelle: DRF Luftrettung)
          </figcaption>
        </figure>

        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed text-pretty">
          <p>
            Wenn Sie eine Ihrem Profil entsprechende Stelle bei uns gefunden haben, bewerben Sie sich direkt online auf
            diese Position. Nach Eingang Ihrer digitalen Bewerbungsunterlagen über unser Stellenanzeigenportal erhalten
            Sie innerhalb von 24 Stunden eine automatisierte Mail, die den Eingang Ihrer Unterlagen bestätigt.
          </p>
          <p>
            Passen Ihr Profil und Ihre Erwartungen mit den unsrigen zusammen, steht einer Einladung zu einem
            persönlichen Gespräch nichts mehr im Weg. Uns kommt es, neben den erforderlichen fachlichen Qualifikationen,
            auch auf die richtige Chemie an. Denn wir legen viel Wert darauf, dass wir perfekt zusammenpassen.
          </p>
          <p>
            Nach dem persönlichen Austausch, in dem wir uns einander vorstellen und kennenlernen, erfolgt von unserer
            Seite zeitnah eine finale Rückmeldung. Gerne können Sie auch in dieser Zeit Kontakt zu uns halten und sich
            über den Status Ihrer Bewerbung informieren.
          </p>
          <p>
            Sollten Sie von uns einmal nicht zu einem persönlichen Gespräch oder Assessment Center eingeladen werden,
            dann hoffen wir sehr, dass Sie trotzdem immer mal wieder vorbeischauen, ob wir für Sie passende
            Stellenangebote haben. Denn wir wissen, wie wichtig hochqualifizierte und engagierte Mitarbeiterinnen und
            Mitarbeiter für unser Ziel, Menschenleben zu retten, sind.
          </p>
        </div>
      </div>
    </section>
  )
}