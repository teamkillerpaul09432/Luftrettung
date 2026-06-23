import { Header } from "@/components/header"
import { H135Page } from "@/components/h135"
import { Footer } from "@/components/footer"

export default function H135yPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <H135Page />
      </main>
      <Footer />
    </>
  )
}
