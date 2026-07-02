"use server"

import { db } from "@/lib/db"
import { pressReport } from "@/lib/db/schema"
import { requireUser } from "@/lib/auth-helpers"
import { desc, eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export type PressReport = typeof pressReport.$inferSelect

/**
 * Public: list all press reports, newest first.
 */
export async function getPublicPressReports(): Promise<PressReport[]> {
  return db.select().from(pressReport).orderBy(desc(pressReport.publishedAt))
}

/**
 * Public: get a single press report by id.
 */
export async function getPressReport(id: number): Promise<PressReport | null> {
  const rows = await db.select().from(pressReport).where(eq(pressReport.id, id)).limit(1)
  return rows[0] ?? null
}

/**
 * Admin/Redakteur: create a press report.
 */
export async function createPressReport(formData: FormData) {
  const user = await requireUser()

  const title = String(formData.get("title") ?? "").trim()
  const content = String(formData.get("content") ?? "").trim()
  const imageUrl = String(formData.get("imageUrl") ?? "").trim()
  const publishedAtRaw = String(formData.get("publishedAt") ?? "").trim()

  if (!title || !content) {
    return { error: "Titel und Text sind erforderlich." }
  }

  await db.insert(pressReport).values({
    title,
    content,
    imageUrl: imageUrl || null,
    publishedAt: publishedAtRaw ? new Date(publishedAtRaw) : new Date(),
    authorId: user.id,
    authorName: user.name,
  })

  revalidatePath("/presse")
  revalidatePath("/admin")
  return { success: true }
}

/**
 * Admin/Redakteur: update a press report.
 */
export async function updatePressReport(id: number, formData: FormData) {
  await requireUser()

  const title = String(formData.get("title") ?? "").trim()
  const content = String(formData.get("content") ?? "").trim()
  const imageUrl = String(formData.get("imageUrl") ?? "").trim()
  const publishedAtRaw = String(formData.get("publishedAt") ?? "").trim()

  if (!title || !content) {
    return { error: "Titel und Text sind erforderlich." }
  }

  await db
    .update(pressReport)
    .set({
      title,
      content,
      imageUrl: imageUrl || null,
      publishedAt: publishedAtRaw ? new Date(publishedAtRaw) : new Date(),
      updatedAt: new Date(),
    })
    .where(eq(pressReport.id, id))

  revalidatePath("/presse")
  revalidatePath("/admin")
  return { success: true }
}

/**
 * Admin/Redakteur: delete a press report.
 */
export async function deletePressReport(id: number) {
  await requireUser()
  await db.delete(pressReport).where(eq(pressReport.id, id))
  revalidatePath("/presse")
  revalidatePath("/admin")
  return { success: true }
}
