import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { toast } from "sonner";

type Mode = "login" | "signup";

export function AuthModal({ onClose }: { onClose: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState<Mode>("login");
  const isSignup = mode === "signup";

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

        <form
          onSubmit={(event) => {
            event.preventDefault();
            toast.success(
              isSignup ? "تم إنشاء حسابك (نسخة تجريبية)" : "تم تسجيل الدخول (نسخة تجريبية)",
            );
            onClose();
          }}
        >
          {isSignup && (
            <label className="mb-4 block">
              <span className="mb-2 block text-sm text-muted-foreground">الاسم الكامل</span>
              <input
                type="text"
                required
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
            <div className="mb-6 flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="size-4 accent-[hsl(var(--primary))]" />
                تذكرني
              </label>
              <button
                type="button"
                onClick={() => toast.info("سنرسل رابط استعادة كلمة المرور إلى بريدك")}
                className="text-sm text-primary hover:underline"
              >
                نسيت كلمة المرور؟
              </button>
            </div>
          )}

          <button
            type="submit"
            className="mb-4 w-full rounded-lg bg-primary px-4 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {isSignup ? "إنشاء الحساب" : "تسجيل الدخول"}
          </button>
          <button
            type="button"
            onClick={() => toast.info("تسجيل الدخول عبر Google قريباً")}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary"
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
