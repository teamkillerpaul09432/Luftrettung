import { Header } from "@/components/header"
import { FlotteSection } from "@/components/flotte-section"
import { Footer } from "@/components/footer"

export default function FlottePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <FlotteSection />
      </main>
      <Footer />
    </>
  )
}
