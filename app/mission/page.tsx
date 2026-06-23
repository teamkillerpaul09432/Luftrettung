import { Header } from "@/components/header"
import { MissionSection } from "@/components/mission-section"
import { Footer } from "@/components/footer"

export default function MissionPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <MissionSection />
      </main>
      <Footer />
    </>
  )
}
