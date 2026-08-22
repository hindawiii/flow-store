import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { toast } from "sonner";

export function AuthModal({ onClose }: { onClose: () => void }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-border bg-card p-8">
        <button
          type="button"
          aria-label="إغلاق"
          onClick={onClose}
          className="absolute top-4 left-4 text-muted-foreground hover:text-accent"
        >
          <X className="size-5" />
        </button>
        <h2 className="mb-6 text-center text-2xl font-bold text-foreground">تسجيل الدخول</h2>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            toast.success("تم تسجيل الدخول (نسخة تجريبية)");
            onClose();
          }}
        >
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

          <div className="mb-6 flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
              <input type="checkbox" className="size-4 accent-[hsl(var(--primary))]" />
              تذكرني
            </label>
            <button
              type="button"
              onClick={() => toast.info("استعادة كلمة المرور قريباً")}
              className="text-sm text-primary hover:underline"
            >
              نسيت كلمة المرور؟
            </button>
          </div>

          <button
            type="submit"
            className="mb-4 w-full rounded-lg bg-primary px-4 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            تسجيل الدخول
          </button>
          <button
            type="button"
            onClick={() => toast.info("تسجيل الدخول عبر Google قريباً")}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary"
          >
            الدخول بحساب Google
          </button>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            ليس لديك حساب؟{" "}
            <button
              type="button"
              onClick={() => toast.info("صفحة التسجيل قريباً")}
              className="text-primary hover:underline"
            >
              سجل الآن
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
