const fs = require("fs")
const path = require("path")
const { Pool } = require("pg")

const envPath = path.join(__dirname, "..", ".env")

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {}
  const content = fs.readFileSync(filePath, "utf8")
  return content.split(/\r?\n/).reduce((acc, line) => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) return acc
    const [key, ...rest] = trimmed.split("=")
    acc[key] = rest.join("=")
    return acc
  }, {})
}

const env = loadEnvFile(envPath)
const databaseUrl = process.env.DATABASE_URL || env.DATABASE_URL || "postgresql://postgres:@127.0.0.1:5432/luftrettung?sslmode=disable"

const pool = new Pool({ connectionString: databaseUrl })

const tableStatements = [
  `CREATE TABLE IF NOT EXISTS "user" (
    id text PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL UNIQUE,
    "emailVerified" boolean NOT NULL DEFAULT false,
    image text,
    role text NOT NULL DEFAULT 'redakteur',
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now()
  );`,
  `CREATE TABLE IF NOT EXISTS "session" (
    id text PRIMARY KEY,
    "expiresAt" timestamp NOT NULL,
    token text NOT NULL UNIQUE,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now(),
    "ipAddress" text,
    "userAgent" text,
    "userId" text NOT NULL REFERENCES "user"(id) ON DELETE CASCADE
  );`,
  `CREATE TABLE IF NOT EXISTS "account" (
    id text PRIMARY KEY,
    "accountId" text NOT NULL,
    "providerId" text NOT NULL,
    "userId" text NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    "accessToken" text,
    "refreshToken" text,
    "idToken" text,
    "accessTokenExpiresAt" timestamp,
    "refreshTokenExpiresAt" timestamp,
    scope text,
    password text,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now()
  );`,
  `CREATE TABLE IF NOT EXISTS "verification" (
    id text PRIMARY KEY,
    identifier text NOT NULL,
    value text NOT NULL,
    "expiresAt" timestamp NOT NULL,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now()
  );`,
  `CREATE TABLE IF NOT EXISTS "press_report" (
    id serial PRIMARY KEY,
    title text NOT NULL,
    content text NOT NULL,
    "imageUrl" text,
    "publishedAt" timestamp NOT NULL DEFAULT now(),
    "authorId" text,
    "authorName" text,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now()
  );`,
]

const seedStatements = [
  `INSERT INTO "user" (id, name, email, "emailVerified", image, role, "createdAt", "updatedAt") VALUES (
    'admin-0001',
    'Administrator',
    'admin@luftrettung.de',
    TRUE,
    NULL,
    'admin',
    now(),
    now()
  ) ON CONFLICT (id) DO NOTHING;`,
  `INSERT INTO "account" (id, "accountId", "providerId", "userId", "accessToken", "refreshToken", "idToken", "accessTokenExpiresAt", "refreshTokenExpiresAt", scope, password, "createdAt", "updatedAt") VALUES (
    'account-admin-0001',
    'admin@luftrettung.de',
    'credential',
    'admin-0001',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    '125b3f7650a8454c1e03f1e637ae02de:4635c6c294ac0fd9ee2ad072bd1d4b1b3f26b0e03b9b5cab32b41fffbcb0c1932aa582601a173abacaec037fe182808169f46960960dffc826c6062e60b4f285',
    now(),
    now()
  ) ON CONFLICT (id) DO NOTHING;`,
]

async function run() {
  const client = await pool.connect()
  try {
    console.log("Datenbank initialisieren...")
    await client.query("BEGIN")
    for (const statement of tableStatements) {
      await client.query(statement)
    }
    for (const seed of seedStatements) {
      await client.query(seed)
    }
    await client.query("COMMIT")
    console.log("Datenbank wurde erfolgreich initialisiert.")
  } catch (error) {
    await client.query("ROLLBACK")
    console.error("Fehler beim Initialisieren der Datenbank:", error)
    process.exitCode = 1
  } finally {
    client.release()
    await pool.end()
  }
}

run()
