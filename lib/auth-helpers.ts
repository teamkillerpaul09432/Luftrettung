import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export type SessionUser = {
  id: string
  name: string
  email: string
  role: string
}

/**
 * Returns the current session user (with role) or null if not signed in.
 */
export async function getCurrentUser(): Promise<SessionUser | null> {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) return null
  return {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
    // role is an additional field on the user
    role: (session.user as { role?: string }).role ?? "redakteur",
  }
}

/**
 * Throws if the user is not signed in. Returns the session user otherwise.
 */
export async function requireUser(): Promise<SessionUser> {
  const user = await getCurrentUser()
  if (!user) throw new Error("Unauthorized")
  return user
}

/**
 * Throws if the user is not an admin. Returns the session user otherwise.
 */
export async function requireAdmin(): Promise<SessionUser> {
  const user = await requireUser()
  if (user.role !== "admin") throw new Error("Forbidden: Adminrechte erforderlich")
  return user
}
