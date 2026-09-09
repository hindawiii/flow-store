import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "شروط الاستخدام — سوق بايت" },
      {
        name: "description",
        content:
          "شروط استخدام منصة سوق بايت: الطلبات والشحن، حجز الخدمات التقنية، قواعد المجتمع، والاسترجاع.",
      },
      { property: "og:title", content: "شروط الاستخدام — سوق بايت" },
      {
        property: "og:description",
        content: "قواعد الشراء وحجز الخدمات والمشاركة في مجتمع سوق بايت.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terms,
});

const SECTIONS = [
  {
    title: "الطلبات والأسعار",
    body: "جميع الأسعار بالدولار الأمريكي وقابلة للتغير. يُعد الطلب مؤكداً بعد تواصلنا معك لتأكيد التوفر وطريقة الدفع.",
  },
  {
    title: "الشحن",
    body: "تُشحن الطلبات خلال 2-7 أيام عمل حسب المدينة، وتُضاف رسوم شحن ثابتة قدرها 5 دولار.",
  },
  {
    title: "الاسترجاع",
    body: "يمكن استرجاع المنتج غير المستخدم خلال 7 أيام من الاستلام مع الغلاف الأصلي، ما لم يكن منتجاً رقمياً.",
  },
  {
    title: "الخدمات التقنية",
    body: "تُنفَّذ خدمات الصيانة عن بُعد بموافقتك وبحضورك، ولا نتحمل مسؤولية فقدان بيانات لم يُنشأ لها نسخة احتياطية مسبقاً.",
  },
  {
    title: "المحتوى والمجتمع",
    body: "يُمنع نشر محتوى مخالف أو روابط لمصادر غير قانونية. نحتفظ بحق حذف أي منشور مخالف.",
  },
  {
    title: "الملكية الفكرية",
    body: "أسماء الألعاب والأنمي والعلامات التجارية المذكورة تخص أصحابها، ونشير فقط إلى المصادر الرسمية.",
  },
];

function Terms() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-4 py-20">
        <Link to="/" className="text-sm font-bold text-primary hover:underline">
          ← العودة للرئيسية
        </Link>
        <h1 className="mt-6 mb-3 text-3xl font-black">شروط الاستخدام</h1>
        <p className="mb-10 text-sm text-muted-foreground">آخر تحديث: سبتمبر 2026</p>
        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="mb-2 text-lg font-bold">{s.title}</h2>
              <p className="leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
