import { ExternalLink, Star } from "lucide-react";
import { useMemo, useState } from "react";

import { AI_TOOLS } from "@/lib/souq/ai-tools";
import { cn } from "@/lib/utils";

const FILTERS = ["الكل", "كتابة", "صور", "برمجة", "فيديو", "صوت", "بحث"] as const;

export function AiTools() {
  const [filter, setFilter] = useState<string>("الكل");
  const tools = useMemo(
    () => (filter === "الكل" ? AI_TOOLS : AI_TOOLS.filter((t) => t.category === filter)),
    [filter],
  );

  return (
    <section id="ai" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-3xl font-black text-foreground">أدوات الذكاء الاصطناعي</h2>
            <p className="text-muted-foreground">أفضل الأدوات مع الأسعار والمميزات والروابط الرسمية</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-lg border px-4 py-2 text-sm font-bold transition-colors",
                  filter === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <div key={t.name} className="surface-card card-hover flex flex-col p-6">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-background text-2xl">
                    {t.image}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{t.name}</h3>
                    <p className="text-xs text-muted-foreground">{t.category}</p>
                  </div>
                </div>
                <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                  {t.pricing}
                </span>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">{t.description}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {t.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-3">
                <span className="flex items-center gap-1 text-sm font-bold text-foreground">
                  <Star className="size-4 fill-primary text-primary" /> {t.rating}
                </span>
                <a
                  href={t.officialWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-bold text-primary-foreground"
                >
                  زيارة <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
