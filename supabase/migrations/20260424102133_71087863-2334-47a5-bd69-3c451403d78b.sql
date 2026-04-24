create table if not exists public.compliance_scan_runs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  target_domain text not null,
  status text not null check (status in ('ok','warning','error')),
  routes_scanned integer not null default 0,
  routes_with_issues integer not null default 0,
  unknown_hosts text[] not null default '{}',
  summary jsonb not null
);

alter table public.compliance_scan_runs enable row level security;

create policy "Service role can insert scan runs"
on public.compliance_scan_runs
for insert
to public
with check (auth.role() = 'service_role');

create policy "Service role can read scan runs"
on public.compliance_scan_runs
for select
to public
using (auth.role() = 'service_role');

create index if not exists idx_compliance_scan_runs_created_at
  on public.compliance_scan_runs (created_at desc);