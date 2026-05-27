
-- Revoke EXECUTE from anon on SECURITY DEFINER functions that should not be public
REVOKE EXECUTE ON FUNCTION public.dashboard_sync_health() FROM anon;
REVOKE EXECUTE ON FUNCTION public.sync_paid_payment_session() FROM anon;
REVOKE EXECUTE ON FUNCTION public.sync_subscription_financials() FROM anon;

-- Revoke EXECUTE from authenticated on internal server-only SECURITY DEFINER functions
REVOKE EXECUTE ON FUNCTION public.dashboard_sync_health() FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.sync_paid_payment_session() FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.sync_subscription_financials() FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.resolve_login_email(text) FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.lookup_member_email_by_phone(text) FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.dashboard_path_for(uuid) FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.can_manage_payments(uuid) FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.is_admin(uuid) FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.is_super_admin(uuid) FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.open_member_rights_after_90_days() FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.rls_auto_enable() FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM authenticated;
