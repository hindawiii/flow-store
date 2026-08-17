import { Bot, Gamepad2, Laptop, Sparkles, Zap } from "lucide-react";

const STATS = [
  { value: "500+", label: "منتج" },
  { value: "50+", label: "خدمة تقنية" },
  { value: "20+", label: "نظام تشغيل" },
  { value: "100+", label: "أداة ذكاء اصطناعي" },
];

export function Hero() {
  return (
    <>
      <section id="top" className="hero-glow relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                <Sparkles className="size-4" />
                منصتك العربية للتقنية والأنمي
              </div>
              <h1 className="mb-6 text-4xl leading-tight font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                سوق بايت
                <br />
                <span className="text-gradient">عالمك التقني</span>
                <br />
                في مكان واحد
              </h1>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                منتجات أوتاكو، خدمات صيانة عن بُعد، دليل أنظمة التشغيل، أدوات ذكاء اصطناعي، وألعاب
                بروابط رسمية — كل هذا وأكثر في منصة عربية واحدة.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#store"
                  className="rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  تصفح المتجر
                </a>
                <a
                  href="#services"
                  className="rounded-xl border border-primary/50 px-8 py-4 text-base font-bold text-primary transition-colors hover:bg-primary/10"
                >
                  اكتشف الخدمات
                </a>
              </div>
            </div>

            <div className="animate-fade-up relative hidden justify-center lg:flex">
              <div className="relative size-96">
                <div className="absolute inset-0 animate-pulse rounded-full border-2 border-primary/20" />
                <div className="absolute inset-6 rounded-full border border-primary/10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-primary">
                  <Gamepad2 className="size-24" />
                  <Zap className="size-14 text-warning" />
                </div>
                <FloatingIcon className="-top-4 right-10 text-primary">
                  <Bot className="size-6" />
                </FloatingIcon>
                <FloatingIcon className="-bottom-4 left-10 text-accent">
                  <Laptop className="size-6" />
                </FloatingIcon>
                <FloatingIcon className="top-1/2 -left-8 text-warning">
                  <Sparkles className="size-6" />
                </FloatingIcon>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-latin mb-2 text-4xl font-black text-primary lg:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function FloatingIcon({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`absolute rounded-xl border border-border bg-card p-3 shadow-lg ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
