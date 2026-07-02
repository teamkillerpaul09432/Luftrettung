"use server"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { user as userTable } from "@/lib/db/schema"
import { requireAdmin } from "@/lib/auth-helpers"
import { desc, eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export type AccountRow = {
  id: string
  name: string
  email: string
  role: string
  createdAt: Date
}

const VALID_ROLES = ["admin", "redakteur"] as const

/**
 * Admin: list all accounts.
 */
export async function getAccounts(): Promise<AccountRow[]> {
  await requireAdmin()
  const rows = await db
    .select({
      id: userTable.id,
      name: userTable.name,
      email: userTable.email,
      role: userTable.role,
      createdAt: userTable.createdAt,
    })
    .from(userTable)
    .orderBy(desc(userTable.createdAt))
  return rows
}

/**
 * Admin: create a new account with a role.
 */
export async function createAccount(formData: FormData) {
  await requireAdmin()

  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  const password = String(formData.get("password") ?? "")
  const role = String(formData.get("role") ?? "redakteur")

  if (!name || !email || !password) {
    return { error: "Name, E-Mail und Passwort sind erforderlich." }
  }
  if (password.length < 8) {
    return { error: "Das Passwort muss mindestens 8 Zeichen lang sein." }
  }
  if (!VALID_ROLES.includes(role as (typeof VALID_ROLES)[number])) {
    return { error: "Ungültige Rolle." }
  }

  // Check for existing email
  const existing = await db.select({ id: userTable.id }).from(userTable).where(eq(userTable.email, email)).limit(1)
  if (existing.length > 0) {
    return { error: "Diese E-Mail-Adresse wird bereits verwendet." }
  }

  try {
    // Create the user + password account via Better Auth
    const result = await auth.api.signUpEmail({
      body: { name, email, password },
    })

    // Set the requested role (signUp always defaults to "redakteur")
    if (result?.user?.id) {
      await db
        .update(userTable)
        .set({ role, updatedAt: new Date() })
        .where(eq(userTable.id, result.user.id))
    }
  } catch (err) {
    console.log("[v0] createAccount error:", err)
    return { error: "Account konnte nicht erstellt werden." }
  }

  revalidatePath("/admin")
  return { success: true }
}

/**
 * Admin: change the role of an account.
 */
export async function updateAccountRole(userId: string, role: string) {
  const admin = await requireAdmin()

  if (!VALID_ROLES.includes(role as (typeof VALID_ROLES)[number])) {
    return { error: "Ungültige Rolle." }
  }

  // Prevent an admin from removing their own admin rights (avoids lockout)
  if (admin.id === userId && role !== "admin") {
    return { error: "Du kannst dir nicht selbst die Adminrechte entziehen." }
  }

  await db.update(userTable).set({ role, updatedAt: new Date() }).where(eq(userTable.id, userId))
  revalidatePath("/admin")
  return { success: true }
}

/**
 * Admin: delete an account.
 */
export async function deleteAccount(userId: string) {
  const admin = await requireAdmin()

  if (admin.id === userId) {
    return { error: "Du kannst deinen eigenen Account nicht löschen." }
  }

  await db.delete(userTable).where(eq(userTable.id, userId))
  revalidatePath("/admin")
  return { success: true }
}
