import { Header } from "@/components/header"
import { PresseSection } from "@/components/presse-section"
import { Footer } from "@/components/footer"
import { getPublicPressReports } from "@/app/actions/press"

export const metadata = {
  title: "Presse | Luftrettung",
  description: "Aktuelle Presseberichte, Neuigkeiten und Mitteilungen der Luftrettung.",
}

export default async function PressePage() {
  const reports = await getPublicPressReports()

  return (
    <>
      <Header />
      <main className="pt-20">
        <PresseSection reports={reports} />
      </main>
      <Footer />
    </>
  )
}
