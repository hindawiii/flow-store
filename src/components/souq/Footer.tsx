import { Instagram, Send, Twitter, Youtube } from "lucide-react";

import { Logo } from "./Logo";

const QUICK = [
  { label: "المتجر", href: "#store" },
  { label: "الخدمات", href: "#services" },
  { label: "أنظمة التشغيل", href: "#os" },
  { label: "أدوات AI", href: "#ai" },
];

const SERVICES = [
  "دعم فني عن بُعد",
  "صيانة ويندوز",
  "برمجة بالذكاء الاصطناعي",
  "تثبيت أنظمة التشغيل",
];

const SOCIAL = [
  { icon: Instagram, label: "إنستغرام" },
  { icon: Twitter, label: "تويتر" },
  { icon: Send, label: "تيليجرام" },
  { icon: Youtube, label: "يوتيوب" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              منصة عربية متكاملة تجمع بين التجارة الإلكترونية، الخدمات التقنية، والمحتوى المعرفي
              لمحبي التقنية والأنمي.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-foreground">روابط سريعة</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {QUICK.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-foreground">خدمات</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {SERVICES.map((item) => (
                <li key={item}>
                  <a href="#services" className="transition-colors hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-foreground">تواصل معنا</h3>
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#top"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2026 سوق بايت — جميع الحقوق محفوظة</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#top" className="transition-colors hover:text-primary">
              سياسة الخصوصية
            </a>
            <a href="#top" className="transition-colors hover:text-primary">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
