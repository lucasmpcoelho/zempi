import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const waitlistSubmissions = pgTable("waitlist_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertWaitlistSchema = createInsertSchema(waitlistSubmissions)
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    email: z.string().email("Email inválido"),
    name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
    phone: z.string().optional(),
  });

export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
export type WaitlistSubmission = typeof waitlistSubmissions.$inferSelect;
