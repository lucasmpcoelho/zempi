import { z } from "zod";

export const insertWaitlistSchema = z.object({
  name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
});

export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;


