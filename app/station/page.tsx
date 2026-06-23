import { Header } from "@/components/header"
import { StationSection } from "@/components/station-section"
import { Footer } from "@/components/footer"

export default function StationPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <StationSection />
      </main>
      <Footer />
    </>
  )
}
