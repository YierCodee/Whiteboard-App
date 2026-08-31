import { unique } from "drizzle-orm/gel-core";
import {integer, pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id:serial("id").primaryKey(),
    name:text("name").notNull(),
    credits:integer("credits").default(3),
    email:text("email").notNull().unique(),
    createdAt:timestamp("created_at").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;