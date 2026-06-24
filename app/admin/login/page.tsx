import { redirect } from "next/navigation"
import Image from "next/image"
import { getCurrentUser } from "@/lib/auth-helpers"
import { LoginForm } from "@/components/admin/login-form"

export const metadata = {
  title: "Admin Login | Luftrettung",
}

export default async function AdminLoginPage() {
  const user = await getCurrentUser()
  if (user) redirect("/admin")

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden mb-4">
            <Image
              src="/images/luftrettung-logo.png"
              alt="Luftrettung Logo"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Admin-Bereich</h1>
          <p className="text-sm text-muted-foreground mt-1">Bitte melde dich an, um fortzufahren.</p>
        </div>

        <div className="border border-border rounded-lg bg-card p-6">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
