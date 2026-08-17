import { createFileRoute } from "@tanstack/react-router";

import { Categories } from "@/components/souq/Categories";
import { Footer } from "@/components/souq/Footer";
import { Hero } from "@/components/souq/Hero";
import { Navbar } from "@/components/souq/Navbar";
import { Newsletter } from "@/components/souq/Newsletter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "سوق بايت — عالمك التقني والأنمي في مكان واحد" },
      {
        name: "description",
        content:
          "سوق بايت: منصة عربية تجمع متجر الأوتاكو، خدمات الصيانة عن بُعد، دليل أنظمة التشغيل، أدوات الذكاء الاصطناعي، الألعاب والأنمي.",
      },
      { property: "og:title", content: "سوق بايت — عالمك التقني والأنمي في مكان واحد" },
      {
        property: "og:description",
        content:
          "متجر أوتاكو، خدمات تقنية، أنظمة تشغيل، أدوات AI، ألعاب وأنمي — منصة عربية واحدة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
