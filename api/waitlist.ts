import { insertWaitlistSchema } from "../shared/schema";

export const config = {
  runtime: "nodejs",
  regions: ["gru1"],
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const parsed = insertWaitlistSchema.parse(
      typeof req.body === "string" ? JSON.parse(req.body) : req.body,
    );

    // Try to append to Google Sheets if configured
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (spreadsheetId) {
      try {
        const { appendToSheet } = await import("../server/google-sheets");
        await appendToSheet(spreadsheetId, "Sheet1!A:D", [[
          parsed.name,
          parsed.email,
          parsed.phone ?? "",
          new Date().toISOString(),
        ]]);
      } catch (err) {
        console.error("Error appending to Google Sheet:", (err as any)?.message || err);
        // Continue even if appending to Sheets fails
      }
    }

    return res.status(201).json({ success: true });
  } catch (err: any) {
    if (err?.name === "ZodError") {
      return res.status(400).json({ error: "Dados inválidos", details: err?.errors });
    }
    console.error("Waitlist handler error:", err?.message || err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


