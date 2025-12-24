import { getDb } from "../lib/mongo.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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
    } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email required" });
    }

    if (gdprConsent !== true) {
      return res.status(400).json({ error: "Consent required" });
    }

    const db = await getDb();
    await db.collection("contact_messages").insertOne({
      fullName,
      email,
      phoneCountryCode,
      phoneNumber,
      company,
      subject,
      message,
      createdAt: new Date(),
    });

    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
