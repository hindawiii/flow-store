import { Clock, Star, Users } from "lucide-react";
import { toast } from "sonner";

import { SERVICES } from "@/lib/souq/services";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-card/30 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-3xl font-black text-foreground">خدماتنا التقنية</h2>
            <p className="text-muted-foreground">
              دعم فني عن بُعد، صيانة، وبرمجة بالذكاء الاصطناعي
            </p>
          </div>
          <button
            type="button"
            onClick={() => toast.info("سيتم فتح صفحة الخدمات الكاملة قريباً")}
            className="hidden rounded-lg border border-border px-4 py-2 text-sm font-bold text-muted-foreground transition-colors hover:border-primary hover:text-primary md:block"
          >
            عرض الكل
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/60"
            >
              <div className="flex aspect-video items-center justify-center bg-background text-5xl">
                {s.image}
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-primary">
                    {s.category}
                  </span>
                  <span className="font-latin flex items-center gap-1 text-xs text-accent">
                    <Star className="size-3 fill-current" /> {s.rating}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{s.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{s.description}</p>
                <div className="mb-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="size-3.5" /> {s.duration}
                  </span>
                  <span className="font-latin flex items-center gap-1">
                    <Users className="size-3.5" /> {s.bookings} حجز
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-latin text-xl font-bold text-primary">${s.price}</span>
                    <span className="text-xs text-muted-foreground"> / {s.priceType}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => toast.info("سيتم فتح صفحة الحجز قريباً")}
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    احجز الآن
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
