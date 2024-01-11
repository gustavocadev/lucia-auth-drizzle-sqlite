import { betterSqlite3 } from "@lucia-auth/adapter-sqlite";
import {lucia} from "lucia"
import { qwik } from "lucia/middleware"
import { sqliteDatabase } from "~/lib/db";


export const auth = lucia({
  adapter: betterSqlite3(sqliteDatabase, {
    user: 'auth_user',
    key: 'user_key',
    session: 'user_session',
  }),
  env: process.env.NODE_ENV === "production" ? "PROD" : "DEV",
  middleware: qwik(),
  getUserAttributes: (user) => ({
    userId: user.id,
    username: user.username,
    names: user.names,
    last_names: user.last_names
  })
});

export type Auth = typeof auth;