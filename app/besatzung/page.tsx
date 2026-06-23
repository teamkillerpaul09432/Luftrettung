import { Header } from "@/components/header"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <TeamSection />
      </main>
      <Footer />
    </>
  )
}
