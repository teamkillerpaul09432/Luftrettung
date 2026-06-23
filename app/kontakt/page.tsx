import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
