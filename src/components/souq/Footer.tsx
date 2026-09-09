import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";

import { Logo } from "./Logo";

const QUICK = [
  { label: "المتجر", href: "#store" },
  { label: "الخدمات", href: "#services" },
  { label: "أنظمة التشغيل", href: "#os" },
  { label: "أدوات AI", href: "#ai" },
];

const SERVICES = [
  { label: "دعم فني عن بُعد", href: "#services" },
  { label: "صيانة ويندوز", href: "#services" },
  { label: "برمجة بالذكاء الاصطناعي", href: "#services" },
  { label: "تثبيت أنظمة التشغيل", href: "#os" },
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
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-foreground">تواصل معنا</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="#support"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <MessageCircle className="size-4" /> افتح تذكرة دعم
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@souqbyte.com"
                  className="font-latin inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Mail className="size-4" /> support@souqbyte.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2026 سوق بايت — جميع الحقوق محفوظة</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="transition-colors hover:text-primary">
              سياسة الخصوصية
            </Link>
            <Link to="/terms" className="transition-colors hover:text-primary">
              شروط الاستخدام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
