import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/helicopter-hero.jpg"
          alt="Christoph 2 Rettungshubschrauber im Einsatz"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <p className="text-primary font-mono uppercase tracking-widest text-sm">
            ADAC Luftrettung · Frankfurt am Main
          </p>
          
          <h1 className="text-5xl sm:text-7xl lg:text-[10rem] font-bold tracking-tighter text-foreground leading-none">
            CHRISTOPH
            <span className="block text-primary">2</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Seit 1972 im Dienst für das Rhein-Main-Gebiet. Schnelle Hilfe aus der Luft – 
            wenn jede Minute zählt.
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-8 text-center">
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Jahre im Dienst</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-primary">~3000</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Einsätze/Jahr</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-primary">70km</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Einsatzradius</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="/mission" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="w-6 h-6" />
        </Link>
      </div>
    </section>
  )
}
