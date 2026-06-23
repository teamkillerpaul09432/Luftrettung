import { Clock, Heart, Shield, Zap } from "lucide-react"

const missions = [
  {
    icon: Zap,
    title: "Primäreinsätze",
    description: "Notfalleinsätze bei akuten medizinischen Notfällen wie Herzinfarkt, Schlaganfall oder schweren Unfällen."
  },
  {
    icon: Heart,
    title: "Intensivtransporte",
    description: "Schonende Verlegung von Intensivpatienten zwischen Kliniken unter ärztlicher Begleitung."
  },
  {
    icon: Clock,
    title: "24/7 Bereitschaft",
    description: "Von Sonnenaufgang bis Sonnenuntergang einsatzbereit, bei guten Sichtbedingungen auch in der Dämmerung."
  },
  {
    icon: Shield,
    title: "Notarztversorgung",
    description: "Hochqualifizierte Notärzte und Rettungsassistenten für die bestmögliche Versorgung vor Ort."
  }
]

export function MissionSection() {
  return (
    <section id="mission" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-primary font-mono uppercase tracking-widest text-sm mb-4">
            Unsere Mission
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Leben retten aus der Luft
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Der Rettungshubschrauber Christoph 2 ist ein unverzichtbarer Bestandteil 
            der Notfallrettung im Rhein-Main-Gebiet. Mit modernster 
            Medizintechnik und einem hochqualifizierten Team sind wir in Minutenschnelle 
            zur Stelle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {missions.map((mission, index) => (
            <div 
              key={index}
              className="group p-6 bg-secondary/50 hover:bg-secondary transition-colors rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <mission.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {mission.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
