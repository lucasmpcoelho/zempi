import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist submission endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      const submission = await storage.createWaitlistSubmission(validatedData);
      res.status(201).json(submission);
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          error: "Dados inválidos", 
          details: validationError.message 
        });
      }
      console.error("Error creating waitlist submission:", error);
      res.status(500).json({ error: "Erro ao processar inscrição" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
