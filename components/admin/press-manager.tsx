"use client"

import { useState, useTransition } from "react"
import { useFormStatus } from "react-dom"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  createPressReport,
  updatePressReport,
  deletePressReport,
  type PressReport,
} from "@/app/actions/press"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import { Loader2, Plus, Pencil, Trash2, Newspaper } from "lucide-react"

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

function toDateInputValue(date: Date | string) {
  const d = new Date(date)
  return d.toISOString().slice(0, 10)
}

export function PressManager({ reports }: { reports: PressReport[] }) {
  const router = useRouter()
  const [createOpen, setCreateOpen] = useState(false)
  const [editing, setEditing] = useState<PressReport | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  async function handleCreate(formData: FormData) {
    setError(null)
    const result = await createPressReport(formData)
    if (result?.error) {
      setError(result.error)
      return
    }
    setCreateOpen(false)
    router.refresh()
  }

  async function handleUpdate(formData: FormData) {
    if (!editing) return
    setError(null)
    const result = await updatePressReport(editing.id, formData)
    if (result?.error) {
      setError(result.error)
      return
    }
    setEditing(null)
    router.refresh()
  }

  function handleDelete(id: number) {
    startTransition(async () => {
      await deletePressReport(id)
      router.refresh()
    })
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <div>
          <CardTitle>Presseberichte</CardTitle>
          <CardDescription>Erstelle und verwalte die Berichte auf der Presseseite.</CardDescription>
        </div>

        <Dialog
          open={createOpen}
          onOpenChange={(o) => {
            setCreateOpen(o)
            setError(null)
          }}
        >
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Bericht erstellen
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] overflow-y-auto">
            <form action={handleCreate}>
              <DialogHeader>
                <DialogTitle>Neuen Pressebericht erstellen</DialogTitle>
                <DialogDescription>Bild ist optional.</DialogDescription>
              </DialogHeader>
              <ReportFields error={error} />
              <DialogFooter>
                <SubmitButton label="Erstellen" />
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>

      <CardContent>
        {reports.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Newspaper className="h-10 w-10 text-muted-foreground mb-3" />
            <p className="text-muted-foreground">Noch keine Presseberichte vorhanden.</p>
          </div>
        ) : (
          <ul className="divide-y divide-border rounded-md border border-border">
            {reports.map((report) => (
              <li key={report.id} className="flex items-center gap-4 p-4">
                <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md bg-muted">
                  {report.imageUrl ? (
                    <Image src={report.imageUrl || "/placeholder.svg"} alt={report.title} fill className="object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Newspaper className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-medium text-foreground">{report.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(report.publishedAt)}
                    {report.authorName ? ` · ${report.authorName}` : ""}
                  </p>
                  <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">{report.content}</p>
                </div>

                <div className="flex shrink-0 items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setError(null)
                      setEditing(report)
                    }}
                  >
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Bearbeiten</span>
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive"
                        disabled={isPending}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Löschen</span>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Bericht löschen?</AlertDialogTitle>
                        <AlertDialogDescription>
                          {`Möchtest du "${report.title}" wirklich löschen?`}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(report.id)}
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                          Löschen
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      {/* Edit dialog */}
      <Dialog
        open={editing !== null}
        onOpenChange={(o) => {
          if (!o) setEditing(null)
          setError(null)
        }}
      >
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <form action={handleUpdate}>
            <DialogHeader>
              <DialogTitle>Pressebericht bearbeiten</DialogTitle>
              <DialogDescription>Bild ist optional.</DialogDescription>
            </DialogHeader>
            {editing && <ReportFields error={error} report={editing} />}
            <DialogFooter>
              <SubmitButton label="Speichern" />
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

function ReportFields({ error, report }: { error: string | null; report?: PressReport }) {
  return (
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="title">Titel</Label>
        <Input id="title" name="title" required defaultValue={report?.title ?? ""} placeholder="Titel des Berichts" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="publishedAt">Datum</Label>
        <Input
          id="publishedAt"
          name="publishedAt"
          type="date"
          defaultValue={report ? toDateInputValue(report.publishedAt) : toDateInputValue(new Date())}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="imageUrl">Bild-URL (optional)</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          type="url"
          defaultValue={report?.imageUrl ?? ""}
          placeholder="https://… oder /images/…"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="content">Text</Label>
        <Textarea
          id="content"
          name="content"
          required
          rows={8}
          defaultValue={report?.content ?? ""}
          placeholder="Inhalt des Presseberichts…"
        />
      </div>
      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {label}
    </Button>
  )
}
