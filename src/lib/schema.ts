import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const user = sqliteTable('auth_user', {
  id: text('id', {
    length: 15, // change this when using custom user ids
  }).primaryKey(),
  // other user attributes
  username: text('username', {
    length: 55,
  }),
  names: text('names', {
    length: 255,
  }),
  lastNames: text('last_names', {
    length: 255,
  }),
  email: text('email', {
    length: 255,
  }),
});

export const key = sqliteTable('user_key', {
  id: text('id', {
    length: 255,
  }).primaryKey(),
  userId: text('user_id', {
    length: 15,
  }).notNull()
  .references(() => user.id),
  hashedPassword: text('hashed_password', {
    length: 255,
  }),
});

export const session = sqliteTable('user_session', {
  id: text('id', {
    length: 128,
  }).primaryKey(),
  userId: text('user_id', {
    length: 15,
  }).notNull()
  .references(() => user.id),
  activeExpires: integer('active_expires', {
    mode: 'number',
  }).notNull(),
  idleExpires: integer('idle_expires', {
    mode: 'number',
  }).notNull(),
});