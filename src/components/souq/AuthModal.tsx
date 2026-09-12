import { useState } from "react";
import { Eye, EyeOff, Loader2, X } from "lucide-react";
import { toast } from "sonner";

import { useOverlay } from "@/hooks/use-overlay";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

type Mode = "login" | "signup";

export function AuthModal({ onClose }: { onClose: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState<Mode>("login");
  const [busy, setBusy] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isSignup = mode === "signup";
  useOverlay(onClose);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    try {
      if (isSignup) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { full_name: name },
          },
        });
        if (error) throw error;
        toast.success("تم إنشاء حسابك وتسجيل دخولك");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("تم تسجيل الدخول");
      }
      onClose();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "تعذر إكمال العملية");
    } finally {
      setBusy(false);
    }
  }

  async function google() {
    setBusy(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: window.location.origin,
      });
      if (result.error) throw new Error(result.error.message ?? "تعذر الدخول عبر Google");
      if (result.redirected) return;
      toast.success("تم تسجيل الدخول");
      onClose();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "تعذر الدخول عبر Google");
    } finally {
      setBusy(false);
    }
  }

  async function resetPassword() {
    if (!email) {
      toast.error("اكتب بريدك الإلكتروني أولاً");
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) toast.error(error.message);
    else toast.success("أرسلنا رابط استعادة كلمة المرور إلى بريدك");
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-black/60 p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative z-10 my-8 w-full max-w-md rounded-2xl border border-border bg-card p-8">
        <button
          type="button"
          aria-label="إغلاق"
          onClick={onClose}
          className="absolute top-4 left-4 text-muted-foreground hover:text-accent"
        >
          <X className="size-5" />
        </button>
        <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
          {isSignup ? "إنشاء حساب جديد" : "تسجيل الدخول"}
        </h2>

        <form onSubmit={submit}>
          {isSignup && (
            <label className="mb-4 block">
              <span className="mb-2 block text-sm text-muted-foreground">الاسم الكامل</span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="محمد أحمد"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
              />
            </label>
          )}

          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-muted-foreground">البريد الإلكتروني</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
            />
          </label>

          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-muted-foreground">كلمة المرور</span>
            <span className="relative block">
              <input
                type={showPassword ? "text" : "password"}
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
              />
              <button
                type="button"
                aria-label="إظهار كلمة المرور"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </span>
          </label>

          {isSignup ? (
            <label className="mb-6 flex cursor-pointer items-start gap-2 text-sm text-muted-foreground">
              <input type="checkbox" required className="mt-1 size-4 accent-[hsl(var(--primary))]" />
              أوافق على شروط الاستخدام وسياسة الخصوصية
            </label>
          ) : (
            <div className="mb-6 flex items-center justify-end">
              <button
                type="button"
                onClick={resetPassword}
                className="text-sm text-primary hover:underline"
              >
                نسيت كلمة المرور؟
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={busy}
            className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {busy && <Loader2 className="size-4 animate-spin" />}
            {isSignup ? "إنشاء الحساب" : "تسجيل الدخول"}
          </button>
          <button
            type="button"
            onClick={google}
            disabled={busy}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary disabled:opacity-60"
          >
            المتابعة بحساب Google
          </button>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {isSignup ? "لديك حساب بالفعل؟ " : "ليس لديك حساب؟ "}
            <button
              type="button"
              onClick={() => setMode(isSignup ? "login" : "signup")}
              className="text-primary hover:underline"
            >
              {isSignup ? "تسجيل الدخول" : "سجل الآن"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
