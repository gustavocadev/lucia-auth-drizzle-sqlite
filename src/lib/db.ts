import { drizzle } from "drizzle-orm/better-sqlite3";
import Database  from "better-sqlite3";

export const sqliteDatabase = Database(process.env.DB_URL);

export const db = drizzle(sqliteDatabase);