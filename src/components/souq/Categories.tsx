import {
  Brain,
  Dna,
  Gamepad2,
  Monitor,
  ShoppingBag,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const CATEGORIES: { icon: LucideIcon; title: string; count: string; href: string }[] = [
  { icon: ShoppingBag, title: "المتجر", count: "20+ منتج", href: "#store" },
  { icon: Wrench, title: "الخدمات", count: "10+ خدمة", href: "#services" },
  { icon: Monitor, title: "أنظمة التشغيل", count: "8 أنظمة", href: "#os" },
  { icon: Brain, title: "أدوات AI", count: "15+ أداة", href: "#ai" },
  { icon: Gamepad2, title: "الألعاب", count: "10+ لعبة", href: "#games" },
  { icon: Dna, title: "الأنمي", count: "12+ أنمي", href: "#anime" },
];

export function Categories() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-center text-3xl font-black text-foreground">تصفح حسب الفئة</h2>
        <p className="mb-10 text-center text-muted-foreground">اختر ما يهمك واكتشف المزيد</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map(({ icon: Icon, title, count, href }) => (
            <a key={href + title} href={href} className="surface-card card-hover p-6 text-center">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-6" />
              </div>
              <h3 className="mb-1 font-bold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{count}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
