import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";
dotenv.config()

export default {
  driver: 'pg',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: { 
    host: process.env.DATABASE_HOST || '',
    port: parseInt(process.env.DATABASE_PORT || '3306'),
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME || '',
  },
} satisfies Config
