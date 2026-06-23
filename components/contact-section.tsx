import { Phone, MapPin, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="kontakt" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Linke Spalte: Kontaktinfos */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-mono uppercase tracking-widest text-sm mb-4">
                Kontakt
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Fragen? Wir helfen gerne.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bei medizinischen Notfällen rufen Sie immer die 112 an.
                Die Leitstelle koordiniert den Einsatz des Rettungshubschraubers.
              </p>
            </div>

            <div className="space-y-4">
              {/* Notruf */}
              <div className="flex items-start gap-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Notruf</p>
                  <p className="text-2xl font-bold text-primary">112</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Kostenlos, europaweit, rund um die Uhr
                  </p>
                </div>
              </div>

              {/* Stationsadresse */}
              <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Stationsadresse</p>
                  <p className="text-muted-foreground">
                    BG Unfallklinik Frankfurt<br />
                    Friedberger Landstraße 430<br />
                    60389 Frankfurt am Main
                  </p>
                </div>
              </div>

              {/* Discord-Button */}
              <div className="flex items-start gap-4 p-4 bg-secondary/50 border border-primary/20 rounded-lg">
                <MessageCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Discord</p>
                  <a
                    href="https://discord.gg/soon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 px-4 py-2 bg-primary text-background font-semibold rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
                  >
                    Zum Server
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Treten Sie unserem RP-Server bei
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Wichtige Hinweise */}
          <div className="bg-secondary/50 rounded-lg p-8 space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Wichtige Hinweise</h3>

            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Bei einem Notfall:</strong> Rufen Sie
                immer zuerst die 112 an. Die Leitstelle entscheidet, ob ein
                Rettungshubschrauber alarmiert wird.
              </p>
              <p>
                <strong className="text-foreground">Besichtigungen:</strong> Aufgrund der
                ständigen Einsatzbereitschaft sind reguläre Besichtigungen der Station
                leider nicht möglich.
              </p>
              <p>
                <strong className="text-foreground">Presse & Medien:</strong> Anfragen
                bitte über die Pressestelle der Luftrettung.
              </p>
            </div>

            <div className="pt-4 p-4 bg-primary/5 border border-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-foreground">RP-Website</strong><br />
                Dies ist eine Roleplay-Website und steht in keiner Verbindung zur echten Luftrettung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
