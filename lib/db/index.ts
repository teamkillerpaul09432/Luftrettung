import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import * as schema from "./schema"

export const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ??
    "postgresql://postgres:@127.0.0.1:5432/luftrettung?sslmode=disable",
})
export const db = drizzle(pool, { schema, mode: "default" })
