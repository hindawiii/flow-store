import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

import { OsCompareModal } from "./OsCompareModal";
import { OsModal } from "./OsModal";
import { OS_GUIDES, type OsGuide } from "@/lib/souq/os-guides";

export function OsGuides() {
  const [active, setActive] = useState<OsGuide | null>(null);
  const [compareOpen, setCompareOpen] = useState(false);

  return (
    <section id="os" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-3xl font-black text-foreground">دليل أنظمة التشغيل</h2>
            <p className="text-muted-foreground">
              اكتشف أفضل نظام لجهازك مع روابط التحميل الرسمية والمتطلبات
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCompareOpen(true)}
            className="hidden items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-bold text-muted-foreground transition-colors hover:border-primary hover:text-primary md:flex"
          >
            <ArrowLeftRight className="size-4" /> مقارنة
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OS_GUIDES.map((os) => (
            <button
              key={os.id}
              type="button"
              onClick={() => setActive(os)}
              className="rounded-2xl border border-border bg-card p-5 text-right transition-all hover:-translate-y-1 hover:border-primary"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-14 items-center justify-center rounded-full border border-border bg-background text-3xl">
                  {os.image}
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{os.name}</h3>
                  <p className="text-xs text-muted-foreground">{os.developer}</p>
                </div>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span
                  className={
                    os.free
                      ? "rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-400"
                      : "rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-primary"
                  }
                >
                  {os.free ? "مجاني" : "رسمي"}
                </span>
                <span className="font-latin rounded-full border border-border px-3 py-1 text-xs font-bold text-muted-foreground">
                  RAM: {os.ram}
                </span>
              </div>
              <div className="font-latin mb-4 text-sm text-muted-foreground">
                Storage: {os.storage}
              </div>
              <span className="block w-full rounded-lg border border-border py-2 text-center text-sm font-bold text-foreground">
                التفاصيل الكاملة
              </span>
            </button>
          ))}
        </div>
      </div>

      <OsModal os={active} onClose={() => setActive(null)} />
      {compareOpen && <OsCompareModal onClose={() => setCompareOpen(false)} />}
    </section>
  );
}
