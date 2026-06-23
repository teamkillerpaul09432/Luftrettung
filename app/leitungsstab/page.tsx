import { Header } from "@/components/header"
import { SoonSection } from "@/components/soon-section"
import { Footer } from "@/components/footer"

export default function SoonPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <SoonSection />
      </main>
      <Footer />
    </>
  )
}