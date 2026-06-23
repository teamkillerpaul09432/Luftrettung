import { Header } from "@/components/header"
import { BewerbungsprozessSection } from "@/components/bewerbung-section"
import { Footer } from "@/components/footer"

export default function BewerbungsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <BewerbungsprozessSection />
      </main>
      <Footer />
    </>
  )
}
