import { Header } from "@/components/header"
import { H145RettungswindePage } from "@/components/h145R"
import { Footer } from "@/components/footer"

export default function H145RPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <H145RettungswindePage />
      </main>
      <Footer />
    </>
  )
}
