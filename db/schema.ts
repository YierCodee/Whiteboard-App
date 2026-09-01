import { unique } from "drizzle-orm/gel-core";
import {integer, varchar, pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id:serial("id").primaryKey(),
    name:text("name").notNull(),
    credits:integer("credits").default(3),
    email:text("email").notNull().unique(),
    createdAt:timestamp("created_at").defaultNow().notNull(),
});

export const projects = pgTable("projects", {
    id: serial("id").primaryKey(),
    projectId: varchar('projectid').notNull().unique(),
    projectName: varchar('projectname').notNull(),
    userEmail: varchar('userEmail').notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull()
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;