import { toast } from "sonner";

import { NEWS } from "@/lib/souq/news";

export function News() {
  return (
    <section id="news" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-3xl font-black text-foreground">أخبار التقنية</h2>
            <p className="text-muted-foreground">
              آخر أخبار الذكاء الاصطناعي، الأجهزة، والألعاب
            </p>
          </div>
          <button
            type="button"
            onClick={() => toast.info("سيتم فتح صفحة الأخبار الكاملة قريباً")}
            className="hidden rounded-lg border border-border px-4 py-2 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary md:block"
          >
            عرض الكل
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((n) => (
            <article key={n.title} className="surface-card card-hover overflow-hidden">
              <div className="flex h-36 items-center justify-center bg-primary/10 text-5xl">
                {n.image}
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                    {n.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="mb-2 font-bold text-foreground">{n.title}</h3>
                <p className="text-sm text-muted-foreground">{n.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
