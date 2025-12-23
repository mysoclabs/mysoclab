import "dotenv/config";

import express from "express";

import { getDb } from "./mongo.js";

const port = Number(process.env.PORT ?? 5050);

const app = express();
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phoneCountryCode,
      phoneNumber,
      company,
      subject,
      message,
      gdprConsent,
    } = req.body ?? {};

    if (typeof email !== "string" || !email.trim()) {
      return res.status(400).send("Email is required");
    }

    if (gdprConsent !== true) {
      return res.status(400).send("Consent is required");
    }

    const db = await getDb();
    const collection = db.collection("contact_messages");

    const doc = {
      email: email.trim(),
      fullName: typeof fullName === "string" ? fullName.trim() : "",
      phoneCountryCode: typeof phoneCountryCode === "string" ? phoneCountryCode : "",
      phoneNumber: typeof phoneNumber === "string" ? phoneNumber.trim() : "",
      company: typeof company === "string" ? company.trim() : "",
      subject: typeof subject === "string" ? subject : "general",
      message: typeof message === "string" ? message.trim() : "",
      gdprConsent: true,
      createdAt: new Date(),
      meta: {
        ip: req.headers["x-forwarded-for"] ?? req.socket.remoteAddress ?? null,
        userAgent: req.headers["user-agent"] ?? null,
      },
    };

    await collection.insertOne(doc);

    return res.status(201).json({ ok: true });
  } catch (err) {
    return res.status(500).send(err instanceof Error ? err.message : "Server error");
  }
});

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`);
});
