# Supabase Contact Form Storage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the unused MongoDB backend behind `/api/contact` with the user's new, dedicated Supabase project (`mysoclab`), storing contact form submissions server-side without ever exposing Supabase credentials to the browser.

**Architecture:** The frontend (`src/pages/ContactPage.tsx`) is untouched — it keeps POSTing to `/api/contact`. That Vercel serverless function keeps its existing validation logic, but swaps its storage call from MongoDB (`lib/mongo.js`) to Supabase (`lib/supabase.js`), using a server-only `SUPABASE_SERVICE_ROLE_KEY` that is never shipped to the browser and bypasses Row Level Security by design.

**Tech Stack:** Vite + React (frontend, unchanged), Vercel serverless functions (`api/*.js`), `@supabase/supabase-js`, Supabase Postgres.

## Global Constraints

- The Supabase service-role key must only ever live in server-side env vars (`SUPABASE_SERVICE_ROLE_KEY`) — never in a `VITE_`-prefixed var (those are inlined into the client bundle by Vite).
- No Row Level Security policy is to be added for public/anon access — the table stays fully locked down except via the service-role key.
- `contact_messages` columns are snake_case (`full_name`, `phone_country_code`, `phone_number`, `gdpr_consent`, `created_at`) per the approved spec at `docs/superpowers/specs/2026-07-14-supabase-contact-storage-design.md`.
- Careers form (`CareersPage.tsx`) is explicitly out of scope for this plan.
- Any step that touches production (Vercel env vars, production deploy) requires the user's explicit go-ahead at that moment — do not run deploy commands unprompted.

---

### Task 1: Prevent secrets from ever being committed

**Files:**
- Modify: `.gitignore`

**Interfaces:**
- Produces: a `.gitignore` that excludes `.env` and its local variants, required before Task 6 creates a local `.env` containing a real Supabase service-role key.

- [ ] **Step 1: Update `.gitignore`**

Replace the full contents of `.gitignore` with:

```
node_modules
.env
.env.local
.env.*.local
```

- [ ] **Step 2: Verify git does not see a tracked `.env`**

Run: `git check-ignore -v .env`
Expected output (once `.env` exists on disk in Task 6, this rule will match it): if `.env` doesn't exist yet, running `touch .env && git check-ignore -v .env` should print a line pointing at `.gitignore:2:.env`. Clean up afterwards with `rm .env` (it doesn't hold real secrets yet).

- [ ] **Step 3: Commit**

```bash
git add .gitignore
git commit -m "Ignore local .env files before introducing Supabase secrets"
```

---

### Task 2: Provision the `contact_messages` table in Supabase

**Files:**
- Create: `supabase/migrations/0001_create_contact_messages.sql`

**Interfaces:**
- Produces: a `contact_messages` table in the user's `mysoclab` Supabase project with columns `id, full_name, email, phone_country_code, phone_number, company, subject, message, gdpr_consent, created_at`. Task 5's `api/contact.js` inserts into this exact table/column shape.

- [ ] **Step 1: Write the migration SQL file**

```sql
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  full_name text,
  email text not null,
  phone_country_code text,
  phone_number text,
  company text,
  subject text,
  message text,
  gdpr_consent boolean not null,
  created_at timestamptz not null default now()
);

alter table contact_messages enable row level security;
```

- [ ] **Step 2: Run this SQL in the Supabase dashboard**

This step is manual and must be done by the user (or with the user watching), since it requires access to the `mysoclab` Supabase project dashboard:
1. Open `https://supabase.com/dashboard/project/crcvitlbwgebuqnjmlkj` (the `mysoclab` project seen earlier).
2. Go to the **SQL Editor** tab.
3. Paste the contents of `supabase/migrations/0001_create_contact_messages.sql` and click **Run**.

- [ ] **Step 3: Verify the table exists**

In the same SQL Editor, run:
```sql
select column_name, data_type, is_nullable
from information_schema.columns
where table_name = 'contact_messages'
order by ordinal_position;
```
Expected: 10 rows, one per column listed above, with `email` and `gdpr_consent` showing `is_nullable = NO`.

- [ ] **Step 4: Commit the migration file**

```bash
git add supabase/migrations/0001_create_contact_messages.sql
git commit -m "Add contact_messages table migration for Supabase"
```

---

### Task 3: Swap MongoDB dependency for Supabase

**Files:**
- Modify: `package.json`

**Interfaces:**
- Produces: `@supabase/supabase-js` available for `lib/supabase.js` (Task 4) to import as `createClient`.

- [ ] **Step 1: Remove the `mongodb` dependency and add `@supabase/supabase-js`**

Run:
```bash
npm uninstall mongodb
npm install @supabase/supabase-js
```

- [ ] **Step 2: Verify `package.json` and `package-lock.json` updated correctly**

Run: `grep -n "mongodb\|@supabase/supabase-js" package.json`
Expected: no `mongodb` line, one `"@supabase/supabase-js": "^x.y.z"` line under `dependencies`.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "Replace mongodb dependency with @supabase/supabase-js"
```

---

### Task 4: Create the Supabase client module

**Files:**
- Create: `lib/supabase.js`
- Delete: `lib/mongo.js`

**Interfaces:**
- Consumes: `@supabase/supabase-js`'s `createClient(url, key, options)` (installed in Task 3).
- Produces: `getSupabase(): SupabaseClient` — a cached singleton client, imported by `api/contact.js` in Task 5 exactly as `lib/mongo.js`'s `getDb()` was imported before.

- [ ] **Step 1: Create `lib/supabase.js`**

```js
import { createClient } from "@supabase/supabase-js";

let client;

export function getSupabase() {
  if (!client) {
    const url = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !serviceRoleKey) {
      throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    }

    client = createClient(url, serviceRoleKey, {
      auth: { persistSession: false },
    });
  }

  return client;
}
```

- [ ] **Step 2: Delete the old Mongo client module**

```bash
git rm lib/mongo.js
```

- [ ] **Step 3: Verify no remaining references to `lib/mongo.js`**

Run: `grep -rn "lib/mongo" --include=*.js --include=*.ts --include=*.tsx . --exclude-dir=node_modules`
Expected: no output (Task 5 will remove the one reference in `api/contact.js`, so if run after Task 5 this must be empty; it's fine if it still shows `api/contact.js` at this point since that file changes next).

- [ ] **Step 4: Commit**

```bash
git add lib/supabase.js
git commit -m "Add Supabase client module"
```

(The `lib/mongo.js` deletion staged by `git rm` in Step 2 is included in this same commit.)

---

### Task 5: Wire `/api/contact` to Supabase

**Files:**
- Modify: `api/contact.js`
- Modify: `.env.example`

**Interfaces:**
- Consumes: `getSupabase()` from `lib/supabase.js` (Task 4).
- Produces: `POST /api/contact` now persists into the `contact_messages` table created in Task 2, with the exact same request/response contract the frontend already expects (`400` for missing email/consent, `405` for non-POST, `500` on failure, `201 { ok: true }` on success).

- [ ] **Step 1: Rewrite `api/contact.js`**

```js
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
```

- [ ] **Step 2: Update `.env.example`**

Replace the full contents of `.env.example` with:

```
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

- [ ] **Step 3: Verify no remaining Mongo references anywhere in the repo**

Run: `grep -rln "mongo\|MONGODB" --include=*.js --include=*.ts --include=*.tsx --include=*.json --include=*.example . --exclude-dir=node_modules`
Expected: no output.

- [ ] **Step 4: Commit**

```bash
git add api/contact.js .env.example
git commit -m "Store contact form submissions in Supabase instead of MongoDB"
```

---

### Task 6: Local end-to-end verification

**Files:**
- Create (local only, not committed — excluded by Task 1's `.gitignore`): `.env`

**Interfaces:**
- Consumes: `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` for the `mysoclab` project, from the Supabase dashboard's **Project Settings → API** page.

- [ ] **Step 1: Get real credentials from the Supabase dashboard**

In `https://supabase.com/dashboard/project/crcvitlbwgebuqnjmlkj`, go to **Project Settings → API**. Copy the **Project URL** and the **service_role** secret key (not the anon/public key).

- [ ] **Step 2: Create a local `.env`**

Create `.env` in the project root:
```
SUPABASE_URL=<paste Project URL>
SUPABASE_SERVICE_ROLE_KEY=<paste service_role key>
```

- [ ] **Step 3: Confirm it's ignored by git**

Run: `git status --porcelain .env`
Expected: no output (an ignored file produces no status line).

- [ ] **Step 4: Install and link the Vercel CLI for local serverless-function emulation**

`vite dev`'s built-in server can't run `api/*.js` Vercel functions — they need `vercel dev`. Run:
```bash
npm i -g vercel
vercel link
```
Follow the prompts to link to the existing `mysoclab` Vercel project. Expected: a `.vercel/` directory is created locally (already implicitly safe — add it to `.gitignore` if `vercel link` doesn't do so itself; check with `cat .gitignore` afterward).

- [ ] **Step 5: Start the local dev server via Vercel CLI**

Run: `vercel dev`
Expected: output showing a local URL, e.g. `Ready! Available at http://localhost:3000`, with both the Vite frontend and `/api/*` functions served together, reading `SUPABASE_URL`/`SUPABASE_SERVICE_ROLE_KEY` from the local `.env`.

- [ ] **Step 6: Submit the contact form and verify storage**

1. Open the `vercel dev` URL from Step 5, navigate to `/contact`.
2. Fill in the form (at minimum a valid email, and check the GDPR consent box) and submit.
3. Expected: the browser navigates to `/success`.
4. In the Supabase dashboard SQL Editor, run:
   ```sql
   select * from contact_messages order by created_at desc limit 1;
   ```
   Expected: one row matching what was just submitted, with `created_at` timestamped within the last minute.

- [ ] **Step 7: Verify validation error paths still work**

1. Submit the form again with the email field empty (browser `required` validation may block this — if so, use `curl` directly instead): 
   ```bash
   curl -i -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d '{"gdprConsent": true}'
   ```
   Expected: `HTTP/1.1 400` with body `{"error":"Email required"}`.
2. Then test missing consent:
   ```bash
   curl -i -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d '{"email":"test@example.com","gdprConsent": false}'
   ```
   Expected: `HTTP/1.1 400` with body `{"error":"Consent required"}`.

No commit for this task — `.env` is gitignored and nothing else changes.

---

### Task 7: Configure production and deploy (requires explicit user go-ahead)

**Files:** none (Vercel dashboard configuration + deploy only)

**Interfaces:** none — this is the final rollout step, consuming everything from Tasks 1–6.

- [ ] **Step 1: Confirm with the user before doing anything in this task**

This task changes production configuration and ships a production deploy. Do not proceed past this point without the user explicitly confirming they want to go live now.

- [ ] **Step 2: Set production env vars in Vercel**

In the Vercel dashboard, for the site's project (not the `mysoclab` Supabase project): **Settings → Environment Variables**. Add, scoped to Production (and Preview if desired):
- `SUPABASE_URL` = the same Project URL used locally
- `SUPABASE_SERVICE_ROLE_KEY` = the same service_role key used locally

Remove the old `MONGODB_URI` / `MONGODB_DB` production env vars if present.

- [ ] **Step 3: Deploy**

Only after the user confirms: `vercel --prod`
Expected: a production deployment URL is printed; visiting `/contact` on that URL and submitting the form produces a new row in `contact_messages`, verified the same way as Task 6 Step 6.
