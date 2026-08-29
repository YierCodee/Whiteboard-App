import {integer, pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id:serial("id").primaryKey(),
    name:text("name").notNull(),
    credits:integer("credits").default(3),
    email:text("email").notNull(),
    createdAt:timestamp("created_at").defaultNow().notNull(),
})