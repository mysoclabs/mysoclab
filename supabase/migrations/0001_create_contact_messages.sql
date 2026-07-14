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
