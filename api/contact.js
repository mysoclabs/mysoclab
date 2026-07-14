import { getSupabase } from "../lib/supabase.js";

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

    const supabase = getSupabase();
    const { error } = await supabase.from("contact_messages").insert({
      full_name: fullName,
      email,
      phone_country_code: phoneCountryCode,
      phone_number: phoneNumber,
      company,
      subject,
      message,
      gdpr_consent: gdprConsent,
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
