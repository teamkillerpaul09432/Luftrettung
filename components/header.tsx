"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/mission", label: "Mission" },
  { href: "/station", label: "Station" },
  {
    label: "Team",
    children: [
      { href: "/besatzung", label: "Helikopter Besatzung" },
      { href: "/leitungsstab", label: "Leitungsstab" },
    ],
  },
  { href: "/einsatzgebiet", label: "Einsatzgebiet" },
  { href: "/flotte", label: "Unsere Flotte" },
  {
    label: "Bewerbungsinfos",
    children: [
      { href: "/bewerben", label: "Bewerben" },
      { href: "/leitungsstab", label: "Bewerbungsprozess" },
    ],
  },
  { href: "/konzept", label: "Fraktionskonzept" },
  { href: "/kontakt", label: "Kontakt" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const pathname = usePathname()

  // ✅ AUTO-CLOSE bei Route Change
  useEffect(() => {
    setOpenMenu(null)
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Image
                src="/images/luftrettung-logo.png"
                alt="Luftrettung Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-foreground">Luftrettung</p>
              <p className="text-xs text-muted-foreground">Christoph 2</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.children) {
                const isOpenMenu = openMenu === link.label

                return (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() =>
                        setOpenMenu(isOpenMenu ? null : link.label)
                      }
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>

                    {isOpenMenu && (
                      <div className="absolute left-0 top-full mt-2 bg-background border border-border rounded-md shadow-md min-w-[180px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                            onClick={() => setOpenMenu(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-primary font-semibold">
              <Phone className="w-4 h-4" />
              <span>Notruf 112</span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => {
              if (link.children) {
                const isOpenMenu = openMenu === link.label

                return (
                  <div key={link.label} className="flex flex-col gap-2">
                    <button
                      onClick={() =>
                        setOpenMenu(isOpenMenu ? null : link.label)
                      }
                      className="text-left text-muted-foreground font-medium py-2"
                    >
                      {link.label}
                    </button>

                    {isOpenMenu && (
                      <div className="pl-4 flex flex-col gap-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-muted-foreground hover:text-foreground py-1"
                            onClick={() => {
                              setIsOpen(false)
                              setOpenMenu(null)
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}