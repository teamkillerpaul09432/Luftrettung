import { Header } from "@/components/header"
import { KonzeptSection } from "@/components/konzept-section"
import { Footer } from "@/components/footer"

export default function KonzeptPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <KonzeptSection />
      </main>
      <Footer />
    </>
  )
}