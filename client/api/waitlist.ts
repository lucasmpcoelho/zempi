import { z } from "zod";

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
    const parsed = z.object({
      name: z.string().min(2),
      email: z.string().email(),
      phone: z.string().optional(),
    }).parse(typeof req.body === "string" ? JSON.parse(req.body) : req.body);

    // No-op success; canonical function is at repo root /api/waitlist
    return res.status(201).json({ success: true, echo: parsed });
  } catch (err: any) {
    if (err?.name === "ZodError") {
      return res.status(400).json({ error: "Dados inválidos", details: err?.errors });
    }
    console.error("Waitlist handler error:", err?.message || err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
