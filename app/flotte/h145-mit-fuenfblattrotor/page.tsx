import { Header } from "@/components/header"
import { H145FuenfblattrotorPage } from "@/components/h145"
import { Footer } from "@/components/footer"

export default function H145Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <H145FuenfblattrotorPage />
      </main>
      <Footer />
    </>
  )
}
