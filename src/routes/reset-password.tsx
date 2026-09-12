import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "استعادة كلمة المرور | سوق بايت" },
      { name: "description", content: "اختر كلمة مرور جديدة لحسابك في سوق بايت." },
      { property: "og:title", content: "استعادة كلمة المرور | سوق بايت" },
      { property: "og:description", content: "اختر كلمة مرور جديدة لحسابك في سوق بايت." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ResetPassword,
});

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-4 py-16">
      <h1 className="mb-6 text-2xl font-bold text-foreground">كلمة مرور جديدة</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          setBusy(true);
          const { error } = await supabase.auth.updateUser({ password });
          setBusy(false);
          if (error) {
            toast.error(error.message);
            return;
          }
          toast.success("تم تحديث كلمة المرور");
          void navigate({ to: "/" });
        }}
      >
        <label className="mb-4 block">
          <span className="mb-2 block text-sm text-muted-foreground">كلمة المرور الجديدة</span>
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
          />
        </label>
        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-lg bg-primary px-4 py-3 font-bold text-primary-foreground disabled:opacity-60"
        >
          حفظ كلمة المرور
        </button>
      </form>
    </main>
  );
}
