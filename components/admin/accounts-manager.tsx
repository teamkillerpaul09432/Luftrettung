"use client"

import { useState, useTransition } from "react"
import { useFormStatus } from "react-dom"
import { useRouter } from "next/navigation"
import {
  createAccount,
  updateAccountRole,
  deleteAccount,
  type AccountRow,
} from "@/app/actions/accounts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Loader2, UserPlus, Trash2 } from "lucide-react"

function roleLabel(role: string) {
  return role === "admin" ? "Admin" : "Redakteur"
}

export function AccountsManager({
  accounts,
  currentUserId,
}: {
  accounts: AccountRow[]
  currentUserId: string
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  async function handleCreate(formData: FormData) {
    setError(null)
    const result = await createAccount(formData)
    if (result?.error) {
      setError(result.error)
      return
    }
    setOpen(false)
    router.refresh()
  }

  function handleRoleChange(userId: string, role: string) {
    startTransition(async () => {
      const result = await updateAccountRole(userId, role)
      if (result?.error) {
        alert(result.error)
        return
      }
      router.refresh()
    })
  }

  function handleDelete(userId: string) {
    startTransition(async () => {
      const result = await deleteAccount(userId)
      if (result?.error) {
        alert(result.error)
        return
      }
      router.refresh()
    })
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <div>
          <CardTitle>Accounts</CardTitle>
          <CardDescription>
            Erstelle Accounts und vergib Rechte (Admin oder Redakteur).
          </CardDescription>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm">
              <UserPlus className="mr-2 h-4 w-4" />
              Account erstellen
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form action={handleCreate}>
              <DialogHeader>
                <DialogTitle>Neuen Account erstellen</DialogTitle>
                <DialogDescription>
                  Der neue Benutzer kann sich danach mit E-Mail und Passwort anmelden.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Max Mustermann" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input id="email" name="email" type="email" required placeholder="max@luftrettung.de" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Passwort</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={8}
                    placeholder="Mindestens 8 Zeichen"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Rolle / Rechte</Label>
                  <Select name="role" defaultValue="redakteur">
                    <SelectTrigger id="role">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="redakteur">Redakteur (nur Presseberichte)</SelectItem>
                      <SelectItem value="admin">Admin (Accounts & Presse)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}
              </div>

              <DialogFooter>
                <SubmitButton />
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>

      <CardContent>
        <div className="rounded-md border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>E-Mail</TableHead>
                <TableHead className="w-[180px]">Rolle</TableHead>
                <TableHead className="w-[60px] text-right">Aktion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                    Noch keine Accounts vorhanden.
                  </TableCell>
                </TableRow>
              )}
              {accounts.map((account) => {
                const isSelf = account.id === currentUserId
                return (
                  <TableRow key={account.id}>
                    <TableCell className="font-medium">
                      {account.name}
                      {isSelf && (
                        <Badge variant="outline" className="ml-2 text-[10px]">
                          Du
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{account.email}</TableCell>
                    <TableCell>
                      {isSelf ? (
                        <Badge>{roleLabel(account.role)}</Badge>
                      ) : (
                        <Select
                          defaultValue={account.role}
                          disabled={isPending}
                          onValueChange={(value) => handleRoleChange(account.id, value)}
                        >
                          <SelectTrigger className="h-8 w-[150px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="redakteur">Redakteur</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {!isSelf && (
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive hover:text-destructive"
                              disabled={isPending}
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Account löschen</span>
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Account löschen?</AlertDialogTitle>
                              <AlertDialogDescription>
                                {`Möchtest du den Account von ${account.name} (${account.email}) wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.`}
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(account.id)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Löschen
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      )}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Account erstellen
    </Button>
  )
}
