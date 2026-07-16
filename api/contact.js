import { getSupabase } from "../lib/supabase.js";

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

const VALID_NAME = /^[a-zA-Z\s\-'.]{2,100}$/;
const VALID_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_PHONE = /^\d{4,15}$/;
const VALID_COMPANY = /^[a-zA-Z0-9\s\-'.&,()]{0,100}$/;
const VALID_SUBJECT = ["quote", "consultation", "support", "general"];

const MAX_MESSAGE_LENGTH = 2000;

function sanitize(str) {
  if (typeof str !== "string") return "";
  return str.replace(/[<>]/g, "").trim();
}

function validateInput(body) {
  const errors = [];

  const { fullName, email, phoneCountryCode, phoneNumber, company, subject, message, gdprConsent } = body;

  if (!fullName || !VALID_NAME.test(fullName.trim())) {
    errors.push("Full name must be 2-100 characters (letters, spaces, hyphens, apostrophes only).");
  }

  if (!email || !VALID_EMAIL.test(email.trim())) {
    errors.push("A valid email address is required.");
  }

  if (phoneNumber && !VALID_PHONE.test(phoneNumber.replace(/[\s\-()]/g, ""))) {
    errors.push("Phone number must be 4-15 digits.");
  }

  if (company && !VALID_COMPANY.test(company.trim())) {
    errors.push("Company name contains invalid characters.");
  }

  if (!subject || !VALID_SUBJECT.includes(subject)) {
    errors.push("Invalid subject selected.");
  }

  if (message && message.length > MAX_MESSAGE_LENGTH) {
    errors.push(`Message must be under ${MAX_MESSAGE_LENGTH} characters.`);
  }

  if (gdprConsent !== true) {
    errors.push("GDPR consent is required.");
  }

  return errors;
}

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers["x-real-ip"] || "unknown";
}

async function checkRateLimit(supabase, ip) {
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();

  const { count, error: countError } = await supabase
    .from("rate_limits")
    .select("id", { count: "exact", head: true })
    .eq("ip_address", ip)
    .eq("endpoint", "contact")
    .gte("created_at", windowStart);

  if (countError) {
    console.error("Rate limit check failed:", countError);
    return false;
  }

  return count >= RATE_LIMIT_MAX;
}

async function recordRequest(supabase, ip) {
  await supabase.from("rate_limits").insert({
    ip_address: ip,
    endpoint: "contact",
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const supabase = getSupabase();
    const ip = getClientIp(req);

    const isRateLimited = await checkRateLimit(supabase, ip);
    if (isRateLimited) {
      return res.status(429).json({
        error: "Too many requests. Please try again later.",
      });
    }

    const errors = validateInput(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ error: "Validation failed", details: errors });
    }

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

    const { error } = await supabase.from("contact_messages").insert({
      full_name: sanitize(fullName),
      email: sanitize(email).toLowerCase(),
      phone_country_code: sanitize(phoneCountryCode),
      phone_number: phoneNumber ? sanitize(phoneNumber) : null,
      company: company ? sanitize(company) : null,
      subject,
      message: message ? sanitize(message) : null,
      gdpr_consent: gdprConsent,
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    await recordRequest(supabase, ip);

    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
