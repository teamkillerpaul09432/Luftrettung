import Image from "next/image"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Logo + Text */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Image
                src="/images/luftrettung-logo.png"
                alt="Luftrettung Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-bold text-foreground">Christoph 2</p>
              <p className="text-xs text-muted-foreground">
                Luftrettung Christoph 2 · Frankfurt am Main
              </p>
            </div>
          </div>

          {/* statt Links jetzt Disclaimer */}
          <div className="text-center text-xs text-muted-foreground">
            <p>Dies ist eine Roleplay-Website. Nicht offiziell mit der ADAC/DRF Luftrettung verbunden.</p>
            <p className="mt-1">© 2026 Christoph 2</p>
          </div>

          {/* Heart Text */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>for RP</span>
          </div>
        </div>
      </div>
    </footer>
  )
}