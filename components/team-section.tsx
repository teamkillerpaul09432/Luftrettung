"use client"

import Image from "next/image"
import { useState } from "react"
import { Users, GraduationCap, Award, Plane } from "lucide-react"

const teamData = [
  {
    title: "NEH (Notarzteinsatzhubschrauber)",
    role: "Besatzung",
    members: [
      {
        role: "Pilot",
        description:
          "Hochqualifizierte Berufspiloten mit spezieller Ausbildung für Rettungseinsätze und schwierige Wetterbedingungen."
      },
      {
        role: "Notarzt",
        description:
          "Erfahrene Notfallmediziner mit Zusatzqualifikation für die Luftrettung und Intensivmedizin."
      },
      {
        role: "HEMS TC",
        description:
          "HEMS Technical Crew Member – speziell ausgebildete Crew für den Hubschraubereinsatz."
      }
    ]
  },
  {
    title: "RTH (Rettungshubschrauber)",
    role: "Besatzung",
    members: [
      {
        role: "Pilot",
        description:
          "Erfahrene Berufspiloten mit Fokus auf Luftrettung und präzise Flugoperationen."
      },
      {
        role: "HEMS TC",
        description:
          "HEMS Technical Crew Member – Unterstützung der Crew, Einsatzassistenz und Patientenversorgung."
      },
      {
        role: "Notfallsanitäter / Rettungsassistent",
        description:
          "Medizinisches Fachpersonal für die präklinische Notfallversorgung aus der Luft."
      }
    ]
  },
  {
    title: "ITH (Intensivtransporthubschrauber)",
    role: "Besatzung",
    members: [
      {
        role: "Pilot",
        description:
          "Spezialisierte Berufspiloten für Sekundärverlegungen und Intensivtransporte über lange Distanzen."
      },
      {
        role: "Notarzt",
        description:
          "Intensivmedizinisch erfahrene Notärzte für kritische Patientenverlegungen."
      },
      {
        role: "HEMS TC",
        description:
          "Technische Crew für Monitoring, Assistenz und Unterstützung bei Intensivtransporten."
      }
    ]
  },
  {
    title: "SAR (Search and Rescue)",
    role: "Besatzung",
    members: [
      {
        role: "Pilot",
        description:
          "Besonders geschulte Einsatzpiloten für Such- und Rettungsmissionen unter schwierigen Bedingungen."
      },
      {
        role: "HEMS TC",
        description:
          "Crew Member für Koordination, Sucheinsätze und technische Unterstützung im SAR-Betrieb."
      },
      {
        role: "Rettungsspezialist",
        description:
          "Spezialkräfte für Bergung, Rettung aus schwierigem Gelände und maritime Einsätze."
      }
    ]
  }
]

export function TeamSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="team" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ACCORDION */}
          <div className="order-2 lg:order-1 space-y-8">

            <div>
              <p className="text-primary font-mono uppercase tracking-widest text-sm mb-4">
                Das Team
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Luftrettung & Spezialmissionen
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Verschiedene Einsatztypen in der Luftrettung mit spezialisierten Besatzungen.
              </p>
            </div>

            <div className="space-y-4">
              {teamData.map((group, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden">

                  {/* HEADER */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center p-4 bg-secondary/50 hover:bg-secondary transition"
                  >
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{group.title}</p>
                      <p className="text-sm text-muted-foreground">{group.role}</p>
                    </div>

                    <span className="text-muted-foreground text-lg">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {/* CONTENT */}
                  {openIndex === index && (
                    <div className="p-4 space-y-4 bg-background">
                      {group.members.map((member, i) => (
                        <div key={i} className="flex gap-4">

                          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            {member.role === "Pilot" && (
                              <Award className="w-4 h-4 text-primary" />
                            )}
                            {member.role.includes("Notarzt") && (
                              <GraduationCap className="w-4 h-4 text-primary" />
                            )}
                            {member.role.includes("HEMS") && (
                              <Users className="w-4 h-4 text-primary" />
                            )}
                            {member.role.includes("Notfallsanitäter") && (
                              <Users className="w-4 h-4 text-primary" />
                            )}
                            {member.role.includes("Rettungsspezialist") && (
                              <Plane className="w-4 h-4 text-primary" />
                            )}
                          </div>

                          <div>
                            <p className="font-medium text-foreground">
                              {member.role}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {member.description}
                            </p>
                          </div>

                        </div>
                      ))}
                    </div>
                  )}

                </div>
              ))}
            </div>

          </div>

          {/* IMAGE */}
          <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/crew.jpg"
              alt="Luftrettung & Spezialteams"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}