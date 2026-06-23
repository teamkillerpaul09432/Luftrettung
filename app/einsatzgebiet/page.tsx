import { Header } from "@/components/header"
import { CoverageSection } from "@/components/coverage-section"
import { Footer } from "@/components/footer"

export default function EinsatzgebietPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <CoverageSection />
      </main>
      <Footer />
    </>
  )
}
