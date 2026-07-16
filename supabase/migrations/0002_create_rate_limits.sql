create table if not exists rate_limits (
  id uuid primary key default gen_random_uuid(),
  ip_address text not null,
  endpoint text not null,
  created_at timestamptz not null default now()
);

alter table rate_limits enable row level security;

create index idx_rate_limits_lookup on rate_limits (ip_address, endpoint, created_at desc);
