import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const validateSchema = z.object({
  requestId: z.string().uuid(),
  action: z.enum(["valide", "rejete"]),
  motif: z.string().trim().max(1000).optional(),
});

export const validatePrestationStep = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input) => validateSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { supabase } = context as { supabase: any };
    const { data: result, error } = await supabase.rpc("validate_prestation_step", {
      _request_id: data.requestId,
      _action: data.action,
      _motif: data.motif || null,
    });
    if (error) throw new Error(error.message);
    return result;
  });