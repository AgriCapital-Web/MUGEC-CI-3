-- Fix auth, admin accounts, role mapping, and login helper functions
-- This script is intended to be executed manually in Supabase.

create extension if not exists pgcrypto;

-- 1. Recreate / repair admin accounts and identities
DO $$
DECLARE
  v_mugec_id uuid;
  v_inoce_id uuid;
BEGIN
  -- ADMIN MUGEC-CI (login: __MUGEC_ADMIN_LOGIN__)
  SELECT id INTO v_mugec_id FROM auth.users WHERE email = '__LEGACY_MUGEC_ADMIN_EMAIL__';
  IF v_mugec_id IS NULL THEN
    v_mugec_id := gen_random_uuid();
    INSERT INTO auth.users (
      id, instance_id, aud, role, email,
      encrypted_password, email_confirmed_at,
      raw_app_meta_data, raw_user_meta_data,
      created_at, updated_at, confirmation_token, recovery_token, email_change_token_new, email_change
    ) VALUES (
      v_mugec_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
      '__LEGACY_MUGEC_ADMIN_EMAIL__',
      crypt('__ROTATE_ME__', gen_salt('bf')),
      now(),
      '{"provider":"email","providers":["email"]}'::jsonb,
      '{"login":"__MUGEC_ADMIN_LOGIN__","display_name":"Admin MUGEC-CI"}'::jsonb,
      now(), now(), '', '', '', ''
    );
    INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
    VALUES (gen_random_uuid(), v_mugec_id,
            jsonb_build_object('sub', v_mugec_id::text, 'email', '__LEGACY_MUGEC_ADMIN_EMAIL__', 'email_verified', true),
            'email', '__LEGACY_MUGEC_ADMIN_EMAIL__', now(), now(), now());
  ELSE
    UPDATE auth.users
       SET encrypted_password = crypt('__ROTATE_ME__', gen_salt('bf')),
           email_confirmed_at = COALESCE(email_confirmed_at, now()),
           updated_at = now(),
           raw_user_meta_data = COALESCE(raw_user_meta_data, '{}'::jsonb) || '{"login":"__MUGEC_ADMIN_LOGIN__","display_name":"Admin MUGEC-CI"}'::jsonb
     WHERE id = v_mugec_id;
    INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
    VALUES (gen_random_uuid(), v_mugec_id,
            jsonb_build_object('sub', v_mugec_id::text, 'email', '__LEGACY_MUGEC_ADMIN_EMAIL__', 'email_verified', true),
            'email', '__LEGACY_MUGEC_ADMIN_EMAIL__', now(), now(), now())
    ON CONFLICT DO NOTHING;
  END IF;

  -- ADMIN MIPROJET (login: __MIPROJET_ADMIN_LOGIN__)
  SELECT id INTO v_inoce_id FROM auth.users WHERE email = '__MIPROJET_ADMIN_LOGIN__@miprojet.local';
  IF v_inoce_id IS NULL THEN
    v_inoce_id := gen_random_uuid();
    INSERT INTO auth.users (
      id, instance_id, aud, role, email,
      encrypted_password, email_confirmed_at,
      raw_app_meta_data, raw_user_meta_data,
      created_at, updated_at, confirmation_token, recovery_token, email_change_token_new, email_change
    ) VALUES (
      v_inoce_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
      '__MIPROJET_ADMIN_LOGIN__@miprojet.local',
      crypt('__ROTATE_ME__', gen_salt('bf')),
      now(),
      '{"provider":"email","providers":["email"]}'::jsonb,
      '{"login":"__MIPROJET_ADMIN_LOGIN__","display_name":"Admin MIPROJET"}'::jsonb,
      now(), now(), '', '', '', ''
    );
    INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
    VALUES (gen_random_uuid(), v_inoce_id,
            jsonb_build_object('sub', v_inoce_id::text, 'email', '__MIPROJET_ADMIN_LOGIN__@miprojet.local', 'email_verified', true),
            'email', '__MIPROJET_ADMIN_LOGIN__@miprojet.local', now(), now(), now());
  ELSE
    UPDATE auth.users
       SET encrypted_password = crypt('__ROTATE_ME__', gen_salt('bf')),
           email_confirmed_at = COALESCE(email_confirmed_at, now()),
           updated_at = now(),
           raw_user_meta_data = COALESCE(raw_user_meta_data, '{}'::jsonb) || '{"login":"__MIPROJET_ADMIN_LOGIN__","display_name":"Admin MIPROJET"}'::jsonb
     WHERE id = v_inoce_id;
    INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
    VALUES (gen_random_uuid(), v_inoce_id,
            jsonb_build_object('sub', v_inoce_id::text, 'email', '__MIPROJET_ADMIN_LOGIN__@miprojet.local', 'email_verified', true),
            'email', '__MIPROJET_ADMIN_LOGIN__@miprojet.local', now(), now(), now())
    ON CONFLICT DO NOTHING;
  END IF;

  -- 2. Assign exact roles to admin accounts
  DELETE FROM public.user_roles WHERE user_id = v_mugec_id AND role = 'membre';
  INSERT INTO public.user_roles (user_id, role)
    VALUES (v_mugec_id, 'admin_national')
    ON CONFLICT (user_id, role) DO NOTHING;

  DELETE FROM public.user_roles WHERE user_id = v_inoce_id AND role = 'membre';
  INSERT INTO public.user_roles (user_id, role)
    VALUES (v_inoce_id, 'super_admin')
    ON CONFLICT (user_id, role) DO NOTHING;
END $$;

-- 3. Create or repair member phone lookup helper
CREATE OR REPLACE FUNCTION public.lookup_member_email_by_phone(p_phone text)
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT email
  FROM public.members
  WHERE regexp_replace(coalesce(telephone, ''), '[^0-9]', '', 'g') = regexp_replace(coalesce(p_phone, ''), '[^0-9]', '', 'g')
  LIMIT 1;
$$;

-- 4. Create or repair login identifier resolver
CREATE OR REPLACE FUNCTION public.resolve_login_email(p_identifier text)
RETURNS text
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
  v text;
  digits text;
  v_email text;
BEGIN
  v := lower(trim(coalesce(p_identifier, '')));
  IF length(v) = 0 THEN RETURN NULL; END IF;

  IF v = '__MUGEC_ADMIN_LOGIN__' THEN
    RETURN '__LEGACY_MUGEC_ADMIN_EMAIL__';
  ELSIF v = '__MIPROJET_ADMIN_LOGIN__' THEN
    RETURN '__MIPROJET_ADMIN_LOGIN__@miprojet.local';
  END IF;

  IF position('@' in v) > 0 THEN
    RETURN v;
  END IF;

  digits := regexp_replace(v, '[^0-9]', '', 'g');
  IF digits ~ '^[0-9]+$' AND length(digits) >= 6 THEN
    BEGIN
      SELECT public.lookup_member_email_by_phone(digits) INTO v_email;
      IF v_email IS NOT NULL AND length(v_email) > 0 THEN
        RETURN v_email;
      END IF;
    EXCEPTION WHEN OTHERS THEN
      v_email := NULL;
    END;
  END IF;

  SELECT lower(u.email) INTO v_email
  FROM auth.users u
  WHERE lower(u.email) LIKE v || '@%'
  ORDER BY u.created_at ASC
  LIMIT 1;

  RETURN v_email;
END;
$$;

-- 5. Create or repair dashboard path resolvers
CREATE OR REPLACE FUNCTION public.dashboard_path_for(_user_id uuid)
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT CASE
    WHEN EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_id = _user_id AND role = 'super_admin'::public.app_role
    ) THEN '/admin/miprojet'
    WHEN EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_id = _user_id
        AND role::text IN (
          'admin_national','admin_regional','admin_local','agent_saisie',
          'president','secretaire_general','tresorier_national','commissaire_comptes',
          'directeur_executif','comite_controle','conseil_sages','secretaire_regional',
          'tresorier_regional','delegue_section'
        )
    ) THEN '/admin'
    ELSE '/membre'
  END;
$$;

CREATE OR REPLACE FUNCTION public.current_user_dashboard_path()
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT CASE
    WHEN EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_id = auth.uid()
        AND role = 'super_admin'::public.app_role
    ) THEN '/admin/miprojet'
    WHEN EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_id = auth.uid()
        AND role::text IN (
          'admin_national','admin_regional','admin_local','agent_saisie',
          'president','secretaire_general','tresorier_national','commissaire_comptes',
          'directeur_executif','comite_controle','conseil_sages','secretaire_regional',
          'tresorier_regional','delegue_section'
        )
    ) THEN '/admin'
    ELSE '/membre'
  END;
$$;

-- 6. Grant execute permissions for all relevant helper functions
REVOKE ALL ON FUNCTION public.lookup_member_email_by_phone(text) FROM public, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.lookup_member_email_by_phone(text) TO service_role;

REVOKE ALL ON FUNCTION public.resolve_login_email(text) FROM public, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.resolve_login_email(text) TO service_role;

REVOKE ALL ON FUNCTION public.dashboard_path_for(uuid) FROM public, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.dashboard_path_for(uuid) TO service_role;

REVOKE ALL ON FUNCTION public.current_user_dashboard_path() FROM public, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.current_user_dashboard_path() TO authenticated;

-- 7. Ensure admin role policy visibility remains correct
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM public, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_super_admin(uuid) TO authenticated;
