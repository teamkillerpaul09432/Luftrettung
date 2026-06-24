import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth-helpers"
import { getAccounts } from "@/app/actions/accounts"
import { getPublicPressReports } from "@/app/actions/press"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

export const metadata = {
  title: "Admin | Luftrettung",
}

export default async function AdminPage() {
  const user = await getCurrentUser()
  if (!user) redirect("/admin/login")

  const isAdmin = user.role === "admin"

  // Accounts are admin-only; reports are visible to all signed-in users
  const [accounts, reports] = await Promise.all([
    isAdmin ? getAccounts() : Promise.resolve([]),
    getPublicPressReports(),
  ])

  return <AdminDashboard user={user} accounts={accounts} reports={reports} />
}
