import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { appendToSheet } from "./google-sheets";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all waitlist submissions
  app.get("/api/waitlist", async (req, res) => {
    try {
      const submissions = await storage.getAllWaitlistSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching waitlist submissions:", error);
      res.status(500).json({ error: "Erro ao buscar inscrições" });
    }
  });

  // Waitlist submission endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      const submission = await storage.createWaitlistSubmission(validatedData);
      
      // Send to Google Sheets
      const spreadsheetId = process.env.GOOGLE_SHEET_ID;
      if (spreadsheetId) {
        try {
          await appendToSheet(
            spreadsheetId,
            'Sheet1!A:D',
            [[
              submission.name,
              submission.email,
              submission.phone,
              new Date().toISOString()
            ]]
          );
        } catch (sheetError) {
          console.error("Error appending to Google Sheet:", sheetError);
          // Continue even if Google Sheets fails
        }
      }
      
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
