-- Schéma complémentaire MUGEC-CI
-- Ce fichier est un snapshot complet des objets de base utilisés par l'application.

create extension if not exists pgcrypto;

create type if not exists public.app_role as enum (
  'super_admin',
  'admin_national',
  'admin_regional',
  'admin_local',
  'agent_saisie',
  'membre',
  'president',
  'secretaire_general',
  'tresorier_national',
  'commissaire_comptes',
  'directeur_executif',
  'comite_controle',
  'conseil_sages',
  'secretaire_regional',
  'tresorier_regional',
  'delegue_section'
);

create table if not exists public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  region text,
  collectivite text,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.user_roles where user_id = _user_id and role = _role
  );
$$;

create or replace function public.is_admin(_user_id uuid)
returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role::text in (
    'super_admin','admin_national','admin_regional','admin_local','agent_saisie',
    'president','secretaire_general','tresorier_national','commissaire_comptes',
    'directeur_executif','comite_controle','conseil_sages','secretaire_regional',
    'tresorier_regional','delegue_section'
  ));
$$;

create or replace function public.is_super_admin(_user_id uuid)
returns boolean
language sql stable security definer set search_path = public as $$
  select public.has_role(_user_id, 'super_admin');
$$;

create table if not exists public.members (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique references auth.users(id) on delete cascade,
  matricule text unique,
  nom text not null,
  prenoms text not null,
  date_naissance date,
  lieu_naissance text,
  sexe text check (sexe in ('M','F')),
  email text,
  telephone text,
  cni text,
  adresse text,
  photo_url text,
  collectivite text,
  region text,
  fonction text,
  matricule_pro text,
  date_embauche date,
  ayants_droit text,
  statut text not null default 'en_attente' check (statut in ('en_attente','actif','suspendu','radie')),
  paiement_methode text,
  frais_paye boolean not null default false,
  type_membre text not null default 'office' check (type_membre in ('office','affilie','honoraire')),
  droits_ouverts_le timestamptz,
  step_completed integer not null default 1 check (step_completed between 1 and 4),
  suspended_reason text,
  last_cotisation_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.members enable row level security;

create policy if not exists "members select self or admin" on public.members
  for select using (auth.uid() = user_id or public.is_admin(auth.uid()));
create policy if not exists "members insert self" on public.members
  for insert with check (auth.uid() = user_id);
create policy if not exists "members update self or admin" on public.members
  for update using (auth.uid() = user_id or public.is_admin(auth.uid())) with check (auth.uid() = user_id or public.is_admin(auth.uid()));
create policy if not exists "members delete super admin" on public.members
  for delete to authenticated using (public.is_super_admin(auth.uid()));

create table if not exists public.registration_drafts (
  id uuid primary key default gen_random_uuid(),
  nom text,
  prenoms text,
  email text,
  telephone text,
  step integer not null default 1,
  data_json jsonb not null default '{}'::jsonb,
  device_fingerprint text,
  last_seen timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '30 days'),
  uploaded_documents jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.registration_drafts enable row level security;
create policy if not exists "drafts public insert" on public.registration_drafts
  for insert with check (true);
create policy if not exists "drafts public update" on public.registration_drafts
  for update with check (true);
create policy if not exists "drafts admin read" on public.registration_drafts
  for select to authenticated using (public.is_admin(auth.uid()));

create table if not exists public.member_documents (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references public.members(id) on delete cascade,
  draft_id uuid references public.registration_drafts(id) on delete cascade,
  type text not null check (type in ('fiche_signee','autorisation_signee','cni','extrait_naissance','extrait_enfant','photo','autre')),
  url text not null,
  file_name text,
  mime_type text,
  size_bytes integer,
  validated boolean not null default false,
  validated_by uuid,
  validated_at timestamptz,
  rejection_reason text,
  offline_available boolean not null default true,
  uploaded_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  constraint member_documents_owner_check check (member_id is not null or draft_id is not null)
);
alter table public.member_documents enable row level security;
create index if not exists idx_member_documents_member_id on public.member_documents(member_id);
create index if not exists idx_member_documents_draft_id on public.member_documents(draft_id);
create index if not exists idx_member_documents_type on public.member_documents(type);
create policy if not exists "member documents owner or admin read" on public.member_documents
  for select to authenticated using (
    public.is_admin(auth.uid())
    or exists (select 1 from public.members m where m.id = public.member_documents.member_id and m.user_id = auth.uid())
  );
create policy if not exists "member documents owner create" on public.member_documents
  for insert to authenticated with check (
    public.is_admin(auth.uid())
    or exists (select 1 from public.members m where m.id = public.member_documents.member_id and m.user_id = auth.uid())
  );
create policy if not exists "member documents admin update" on public.member_documents
  for update to authenticated using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));

create table if not exists public.payment_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  draft_id uuid references public.registration_drafts(id) on delete set null,
  member_id uuid references public.members(id) on delete set null,
  type text not null check (type in ('inscription','cotisation','prestation')),
  operateur text not null check (operateur in ('orange','mtn','wave','moov')),
  telephone text not null,
  montant_total integer not null,
  part_mutuelle integer not null default 0,
  part_miprojet integer not null default 0,
  statut text not null default 'en_attente' check (statut in ('en_attente','paye','echoue','expire','annule')),
  reference text unique,
  provider_payload jsonb not null default '{}'::jsonb,
  expires_at timestamptz not null default (now() + interval '30 minutes'),
  confirmed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.payment_sessions enable row level security;
create index if not exists idx_payment_sessions_user_id on public.payment_sessions(user_id);
create index if not exists idx_payment_sessions_member_id on public.payment_sessions(member_id);
create index if not exists idx_payment_sessions_reference on public.payment_sessions(reference);
create index if not exists idx_payment_sessions_statut on public.payment_sessions(statut);
create policy if not exists "payment sessions owner or admin read" on public.payment_sessions
  for select to authenticated using (
    user_id = auth.uid()
    or exists (select 1 from public.members m where m.id = public.payment_sessions.member_id and m.user_id = auth.uid())
    or public.is_admin(auth.uid())
  );
create policy if not exists "payment sessions owner create" on public.payment_sessions
  for insert to authenticated with check (user_id = auth.uid() or public.is_admin(auth.uid()));
create policy if not exists "payment sessions admin update" on public.payment_sessions
  for update to authenticated using (public.is_admin(auth.uid()) or user_id = auth.uid()) with check (public.is_admin(auth.uid()) or user_id = auth.uid());

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references public.members(id) on delete cascade,
  type text not null,
  montant_total integer not null,
  part_mutuelle integer not null default 0,
  part_miprojet integer not null default 0,
  statut_paiement text not null default 'en_attente',
  operateur text,
  reference_transaction text,
  paid_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.subscriptions enable row level security;
create index if not exists idx_subscriptions_member_id on public.subscriptions(member_id);
create index if not exists idx_subscriptions_status on public.subscriptions(statut_paiement);
create policy if not exists "subscriptions owner or admin read" on public.subscriptions
  for select to authenticated using (
    exists (select 1 from public.members m where m.id = public.subscriptions.member_id and m.user_id = auth.uid())
    or public.is_admin(auth.uid())
  );
create policy if not exists "subscriptions owner or admin create" on public.subscriptions
  for insert to authenticated with check (
    exists (select 1 from public.members m where m.id = public.subscriptions.member_id and m.user_id = auth.uid())
    or public.is_admin(auth.uid())
  );
create policy if not exists "subscriptions admin update" on public.subscriptions
  for update to authenticated using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));

create table if not exists public.transactions_miprojet (
  id uuid primary key default gen_random_uuid(),
  subscription_id uuid not null references public.subscriptions(id) on delete cascade,
  montant integer not null,
  statut text not null default 'en_attente' check (statut in ('en_attente','vire','echoue')),
  date_virement timestamptz,
  reference text,
  created_at timestamptz not null default now()
);
alter table public.transactions_miprojet enable row level security;
create index if not exists idx_transactions_miprojet_subscription_id on public.transactions_miprojet(subscription_id);
create policy if not exists "transactions_miprojet super admin only" on public.transactions_miprojet
  for all to authenticated using (public.is_super_admin(auth.uid())) with check (public.is_super_admin(auth.uid()));

create table if not exists public.prestation_requests (
  id uuid primary key default gen_random_uuid(),
  member_id uuid not null references public.members(id) on delete cascade,
  type_evenement text not null,
  montant_applicable integer not null default 0,
  statut_global text not null default 'en_attente',
  step_validation integer not null default 1,
  pj_urls jsonb not null default '[]'::jsonb,
  motif_rejet text,
  submitted_at timestamptz not null default now(),
  closed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.prestation_requests enable row level security;
create index if not exists idx_prestation_requests_member_id on public.prestation_requests(member_id);
create index if not exists idx_prestation_requests_step on public.prestation_requests(step_validation);
create index if not exists idx_prestation_requests_status on public.prestation_requests(statut_global);
create policy if not exists "prestation select" on public.prestation_requests
  for select to authenticated using (
    auth.uid() = (select user_id from public.members where id = member_id)
    or public.has_role(auth.uid(), 'delegue_section')
    or public.has_role(auth.uid(), 'secretaire_regional')
    or public.has_role(auth.uid(), 'secretaire_general')
    or public.has_role(auth.uid(), 'tresorier_national')
    or public.has_role(auth.uid(), 'super_admin')
  );
create policy if not exists "prestation insert" on public.prestation_requests
  for insert to authenticated with check (auth.uid() = (select user_id from public.members where id = member_id));
create policy if not exists "prestation update" on public.prestation_requests
  for update to authenticated using (
    public.has_role(auth.uid(), 'super_admin')
    or public.has_role(auth.uid(), 'tresorier_national')
    or public.has_role(auth.uid(), 'secretaire_general')
    or public.has_role(auth.uid(), 'secretaire_regional')
    or public.has_role(auth.uid(), 'delegue_section')
    or auth.uid() = (select user_id from public.members where id = member_id)
  );

create table if not exists public.prestation_validations (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references public.prestation_requests(id) on delete cascade,
  niveau integer not null,
  validateur_id uuid not null references auth.users(id),
  role_requis text not null,
  action text not null,
  motif text,
  metadata jsonb not null default '{}'::jsonb,
  validated_at timestamptz not null default now()
);
alter table public.prestation_validations enable row level security;
create index if not exists idx_prestation_validations_request_id on public.prestation_validations(request_id);
create index if not exists idx_prestation_validations_validateur_id on public.prestation_validations(validateur_id);
create policy if not exists "prest_val select" on public.prestation_validations
  for select to authenticated using (
    exists (
      select 1 from public.prestation_requests pr where pr.id = request_id
        and (
          auth.uid() = (select user_id from public.members where id = pr.member_id)
          or public.has_role(auth.uid(), 'super_admin')
          or public.has_role(auth.uid(), 'admin_national')
        )
    )
  );
create policy if not exists "prest_val insert" on public.prestation_validations
  for insert to authenticated with check (
    public.has_role(auth.uid(), 'delegue_section')
    or public.has_role(auth.uid(), 'secretaire_regional')
    or public.has_role(auth.uid(), 'secretaire_general')
    or public.has_role(auth.uid(), 'tresorier_national')
    or public.has_role(auth.uid(), 'super_admin')
  );

create table if not exists public.notification_templates (
  id uuid primary key default gen_random_uuid(),
  event text not null,
  channel text not null check (channel in ('email','sms','whatsapp','in_app')),
  title text not null,
  body text not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(event, channel)
);
alter table public.notification_templates enable row level security;
create policy if not exists "notification_templates admins read" on public.notification_templates
  for select to authenticated using (public.is_admin(auth.uid()));
create policy if not exists "notification_templates super admin write" on public.notification_templates
  for all to authenticated using (public.is_super_admin(auth.uid())) with check (public.is_super_admin(auth.uid()));

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  channel text not null check (channel in ('email','sms','whatsapp','in_app')),
  title text not null,
  body text not null,
  created_at timestamptz not null default now()
);
alter table public.notifications enable row level security;
create policy if not exists "notif owner or admin read" on public.notifications
  for select to authenticated using (auth.uid() = user_id or public.is_admin(auth.uid()));
create policy if not exists "notif owner update" on public.notifications
  for update using (auth.uid() = user_id);
create policy if not exists "notif admin insert" on public.notifications
  for insert with check (public.is_admin(auth.uid()) or auth.uid() = user_id);

create table if not exists public.notifications_log (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references public.members(id) on delete set null,
  user_id uuid,
  canal text not null check (canal in ('email','sms','whatsapp','in_app')),
  event text not null,
  contenu text not null,
  statut text not null default 'en_attente' check (statut in ('en_attente','envoye','echoue','ignore')),
  provider text,
  provider_reference text,
  error_message text,
  sent_at timestamptz,
  created_at timestamptz not null default now()
);
alter table public.notifications_log enable row level security;
create index if not exists idx_notifications_log_member_id on public.notifications_log(member_id);
create index if not exists idx_notifications_log_user_id on public.notifications_log(user_id);
create policy if not exists "notifications_log owner or admin read" on public.notifications_log
  for select to authenticated using (
    user_id = auth.uid()
    or exists (select 1 from public.members m where m.id = member_id and m.user_id = auth.uid())
    or public.is_admin(auth.uid())
  );
create policy if not exists "notifications_log admin write" on public.notifications_log
  for insert to authenticated with check (public.is_admin(auth.uid()) or user_id = auth.uid());

create table if not exists public.opportunites (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  type text,
  date_limite date,
  lieu text,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.opportunites enable row level security;
create policy if not exists "opp public read" on public.opportunites
  for select using (published or public.is_admin(auth.uid()));
create policy if not exists "opp admin write" on public.opportunites
  for all to authenticated using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));

create table if not exists public.forum_topics (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  author_id uuid not null references auth.users(id) on delete cascade,
  closed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.forum_topics enable row level security;
create policy if not exists "topics auth read" on public.forum_topics
  for select using (auth.uid() is not null);
create policy if not exists "topics auth create" on public.forum_topics
  for insert with check (auth.uid() = author_id);
create policy if not exists "topics owner or admin update" on public.forum_topics
  for update to authenticated using (auth.uid() = author_id or public.is_admin(auth.uid()));
create policy if not exists "topics admin delete" on public.forum_topics
  for delete to authenticated using (public.is_admin(auth.uid()));

create table if not exists public.forum_messages (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.forum_topics(id) on delete cascade,
  author_id uuid not null references auth.users(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);
alter table public.forum_messages enable row level security;
create policy if not exists "msg auth read" on public.forum_messages
  for select using (auth.uid() is not null);
create policy if not exists "msg auth create" on public.forum_messages
  for insert with check (auth.uid() = author_id);
create policy if not exists "msg owner update" on public.forum_messages
  for update to authenticated using (auth.uid() = author_id);
create policy if not exists "msg owner or admin delete" on public.forum_messages
  for delete to authenticated using (auth.uid() = author_id or public.is_admin(auth.uid()));

create table if not exists public.news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.news enable row level security;
create policy if not exists "news public" on public.news
  for select using (published);

create table if not exists public.cotisations (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references public.members(id) on delete cascade,
  periode text not null,
  montant integer not null,
  statut text not null default 'en_attente' check (statut in ('en_attente','paye','en_retard')),
  methode text,
  paye_le timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.cotisations enable row level security;
create policy if not exists "cotisations owner read" on public.cotisations
  for select using (exists (select 1 from public.members m where m.id = member_id and m.user_id = auth.uid()));

create table if not exists public.audit_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  action text not null,
  entity text,
  entity_id uuid,
  metadata jsonb,
  created_at timestamptz not null default now()
);
alter table public.audit_log enable row level security;
create policy if not exists "audit super admin read" on public.audit_log
  for select using (public.has_role(auth.uid(),'super_admin'));

create or replace function public.tg_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end; $$ language plpgsql;

create or replace function public.handle_new_user() returns trigger as $$
begin
  insert into public.user_roles (user_id, role)
  values (new.id, 'membre')
  on conflict do nothing;
  return new;
end; $$ language plpgsql security definer set search_path = public;

create or replace function public.generate_matricule() returns trigger as $$
begin
  if new.matricule is null then
    new.matricule := 'MUGEC-' || to_char(now(),'YYYY') || '-' || lpad(nextval('public.matricule_seq')::text, 5, '0');
  end if;
  return new;
end; $$ language plpgsql;

create sequence if not exists public.matricule_seq start 1;

drop trigger if exists members_matricule on public.members;
create trigger members_matricule before insert on public.members
  for each row execute function public.generate_matricule();
drop trigger if exists members_updated on public.members;
create trigger members_updated before update on public.members
  for each row execute function public.tg_updated_at();
drop trigger if exists cotisations_updated on public.cotisations;
create trigger cotisations_updated before update on public.cotisations
  for each row execute function public.tg_updated_at();
drop trigger if exists news_updated on public.news;
create trigger news_updated before update on public.news
  for each row execute function public.tg_updated_at();
drop trigger if exists opp_updated on public.opportunites;
create trigger opp_updated before update on public.opportunites
  for each row execute function public.tg_updated_at();
drop trigger if exists topic_updated on public.forum_topics;
create trigger topic_updated before update on public.forum_topics
  for each row execute function public.tg_updated_at();
drop trigger if exists payment_sessions_updated on public.payment_sessions;
create trigger payment_sessions_updated before update on public.payment_sessions
  for each row execute function public.tg_updated_at();
drop trigger if exists notification_templates_updated on public.notification_templates;
create trigger notification_templates_updated before update on public.notification_templates
  for each row execute function public.tg_updated_at();
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();
