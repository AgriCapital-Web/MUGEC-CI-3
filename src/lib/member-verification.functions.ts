import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const schema = z.object({ matricule: z.string().trim().min(3).max(80) });

export const getMemberPublicInfo = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input) => schema.parse(input))
  .handler(async ({ data, context }) => {
    const { supabase } = context as { supabase: any };
    const { data: result, error } = await supabase.rpc("member_public_info", {
      p_matricule: data.matricule,
    });
    if (error) throw new Error(error.message);
    return result;
  });