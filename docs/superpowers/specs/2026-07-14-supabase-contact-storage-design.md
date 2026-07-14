# Supabase Contact Form Storage — Design

## Context

The Contact page (`src/pages/ContactPage.tsx`) posts form submissions to `POST /api/contact`, a Vercel serverless function (`api/contact.js`) that currently writes into MongoDB via `lib/mongo.js` and a `MONGODB_URI` env var. This MongoDB integration was scaffolded but never deployed live — no production database is connected and no real submissions exist to migrate.

The user has provisioned a new, dedicated Supabase project (`mysoclab`) separate from their existing Supabase project (used for an unrelated employee-administration app), specifically to isolate public-facing customer/lead data from internal admin data.

Goal: replace the MongoDB storage backend with Supabase, keeping the existing API route architecture and frontend untouched.

## Scope

- In scope: `api/contact.js`, `lib/mongo.js` → `lib/supabase.js`, `.env.example`, `package.json` dependencies, one new Supabase table + migration SQL.
- Out of scope (deferred): the Careers job-application form (`CareersPage.tsx`), which is currently a simulated (`setTimeout`) submit with no backend at all. Wiring it to Supabase is a follow-up, not part of this change.
- Frontend `ContactPage.tsx` requires no changes — it already posts the correct field shape to `/api/contact` and only cares about the HTTP response status.

## Architecture

Keep the existing client → own API route → database shape (Option A from discussion), rather than having the browser call Supabase directly:

```
Browser (ContactPage.tsx)
   │  POST /api/contact  { fullName, email, phoneCountryCode, phoneNumber, company, subject, message, gdprConsent }
   ▼
Vercel Function (api/contact.js)
   │  validates: email required, gdprConsent === true
   │  lib/supabase.js: server-only Supabase client (service role key)
   ▼
Supabase Postgres — contact_messages table
```

Rationale: this matches the current architecture almost exactly (small, low-risk diff), keeps the Supabase service-role key server-only (never shipped to the browser), and preserves a natural place to add server-side validation/spam-guarding later. No Row Level Security policy needs to be reasoned about for public access, because the public/anon key is never used — RLS is enabled on the table with zero public policies, so even if a key were ever leaked, nothing is readable or writable through it.

## Data Model

New table `contact_messages` in the `mysoclab` Supabase project:

| column | type | notes |
|---|---|---|
| `id` | `uuid` | primary key, default `gen_random_uuid()` |
| `full_name` | `text` | nullable (frontend allows empty) |
| `email` | `text` | not null |
| `phone_country_code` | `text` | nullable |
| `phone_number` | `text` | nullable |
| `company` | `text` | nullable |
| `subject` | `text` | nullable |
| `message` | `text` | nullable |
| `gdpr_consent` | `boolean` | not null |
| `created_at` | `timestamptz` | not null, default `now()` |

RLS: enabled, no policies defined (service-role key bypasses RLS by design — this is intentional and is how Supabase's service role is meant to be used).

## Backend Changes

- `lib/supabase.js` (new, replaces `lib/mongo.js`): creates and caches a Supabase client from `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (server-only env vars, never prefixed `VITE_`).
- `api/contact.js`: same validation logic (email required, `gdprConsent === true`), swaps `db.collection("contact_messages").insertOne({...})` for a Supabase `.from("contact_messages").insert({...})` call, mapping camelCase request fields to snake_case columns.
- `lib/mongo.js` deleted.

## Environment Variables

- Remove: `MONGODB_URI`, `MONGODB_DB`.
- Add: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (both set in Vercel project settings for the `mysoclab` site project, and in local `.env` for `vercel dev`/local testing — never committed).
- `.env.example` updated to reflect the new variables (placeholder values only).

## Dependencies

- Remove `mongodb` from `package.json`.
- Add `@supabase/supabase-js`.
- `express` dependency is unrelated to this change (used by `dev:api`, if at all) — leave as-is unless it's dead code, which is outside this change's scope to investigate.

## Error Handling

Unchanged from current behavior: any failure (missing email, missing consent, Supabase insert error) returns the same HTTP status codes (`400`, `405`, `500`) the frontend already handles.

## Testing

- Manual: run `vercel dev` (or equivalent local flow) with local `.env` pointing at the real `mysoclab` Supabase project, submit the Contact form, confirm a row appears in `contact_messages` in the Supabase table editor, confirm the frontend still redirects to `/success`.
- Manual: submit with missing email / unchecked consent, confirm the existing 400 responses still fire and the frontend still surfaces them.
