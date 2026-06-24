"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { signOut } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { LogOut, Newspaper, Users, ExternalLink } from "lucide-react"
import { AccountsManager } from "@/components/admin/accounts-manager"
import { PressManager } from "@/components/admin/press-manager"
import type { SessionUser } from "@/lib/auth-helpers"
import type { AccountRow } from "@/app/actions/accounts"
import type { PressReport } from "@/app/actions/press"

export function AdminDashboard({
  user,
  accounts,
  reports,
}: {
  user: SessionUser
  accounts: AccountRow[]
  reports: PressReport[]
}) {
  const router = useRouter()
  const isAdmin = user.role === "admin"

  async function handleSignOut() {
    await signOut()
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Image
                src="/images/luftrettung-logo.png"
                alt="Luftrettung Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-foreground">Admin-Bereich</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end leading-tight">
              <span className="text-sm font-medium text-foreground">{user.name}</span>
              <Badge variant={isAdmin ? "default" : "secondary"} className="text-[10px]">
                {isAdmin ? "Admin" : "Redakteur"}
              </Badge>
            </div>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Abmelden
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Verwaltung</h1>
            <p className="text-muted-foreground text-sm">
              Willkommen zurück, {user.name}.
            </p>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href="/presse" target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" />
              Presseseite ansehen
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="press" className="w-full">
          <TabsList>
            <TabsTrigger value="press">
              <Newspaper className="mr-2 h-4 w-4" />
              Presseberichte
            </TabsTrigger>
            {isAdmin && (
              <TabsTrigger value="accounts">
                <Users className="mr-2 h-4 w-4" />
                Accounts
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="press" className="mt-6">
            <PressManager reports={reports} />
          </TabsContent>

          {isAdmin && (
            <TabsContent value="accounts" className="mt-6">
              <AccountsManager accounts={accounts} currentUserId={user.id} />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </main>
  )
}
