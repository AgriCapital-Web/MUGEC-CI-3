DO $$
DECLARE
  v_emails text[] := ARRAY['__LEGACY_MUGEC_ADMIN_EMAIL__','__LEGACY_MIPROJET_ADMIN_LOGIN__@miprojet.local','__LEGACY_MUGEC_ADMIN_EMAIL__','__MIPROJET_ADMIN_LOGIN__@miprojet.local'];
  v_email text;
BEGIN
  FOREACH v_email IN ARRAY v_emails LOOP
    UPDATE auth.users
       SET encrypted_password = crypt(encode(gen_random_bytes(24), 'base64'), gen_salt('bf')),
           updated_at = now()
     WHERE email = v_email
       AND (
         encrypted_password = crypt('__ROTATE_ME__', encrypted_password)
         OR encrypted_password = crypt('__ADMIN_PASSWORD_FROM_SECRET__', encrypted_password)
         OR encrypted_password = crypt('__ADMIN_PASSWORD_FROM_SECRET__', encrypted_password)
       );
  END LOOP;
END $$;
