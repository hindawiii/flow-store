import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "سياسة الخصوصية — سوق بايت" },
      {
        name: "description",
        content:
          "كيف يجمع سوق بايت بياناتك ويستخدمها ويحميها: بيانات الطلبات، الحجوزات، الكوكيز، وحقوقك في حذف بياناتك.",
      },
      { property: "og:title", content: "سياسة الخصوصية — سوق بايت" },
      {
        property: "og:description",
        content: "تفاصيل جمع البيانات واستخدامها وحمايتها في منصة سوق بايت.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

const SECTIONS = [
  {
    title: "البيانات التي نجمعها",
    body: "نجمع الاسم، رقم الهاتف، البريد الإلكتروني، وعنوان الشحن عند إتمام طلب أو حجز خدمة. لا نجمع بيانات بطاقات الدفع داخل الموقع.",
  },
  {
    title: "كيف نستخدم البيانات",
    body: "نستخدم بياناتك لتنفيذ الطلبات، تأكيد الحجوزات، الرد على تذاكر الدعم، وإرسال إشعارات الطلب إن طلبت ذلك.",
  },
  {
    title: "التخزين المحلي",
    body: "تُحفظ سلة الشراء وقائمة المقارنة وحالة الإشعارات في متصفحك فقط، ويمكنك حذفها بمسح بيانات الموقع.",
  },
  {
    title: "المشاركة مع أطراف ثالثة",
    body: "لا نبيع بياناتك. تُشارك فقط مع شركات الشحن ومزوّدي الدفع بالقدر اللازم لإتمام طلبك.",
  },
  {
    title: "حقوقك",
    body: "يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها في أي وقت عبر قسم الدعم في الموقع.",
  },
];

function Privacy() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-4 py-20">
        <Link to="/" className="text-sm font-bold text-primary hover:underline">
          ← العودة للرئيسية
        </Link>
        <h1 className="mt-6 mb-3 text-3xl font-black">سياسة الخصوصية</h1>
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
