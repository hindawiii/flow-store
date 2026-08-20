import { useState } from "react";

import { AnimeModal } from "./AnimeModal";
import { ANIME, type Anime as AnimeType } from "@/lib/souq/anime";

export function Anime() {
  const [active, setActive] = useState<AnimeType | null>(null);

  return (
    <section id="anime" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-3xl font-black text-foreground">الأنمي</h2>
        <p className="mb-8 text-muted-foreground">
          أفضل الأعمال مع منصات المشاهدة الرسمية وتحذيرات المواقع غير الآمنة
        </p>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {ANIME.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => setActive(a)}
              className="surface-card card-hover p-5 text-center"
            >
              <div className="mx-auto mb-3 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-3xl">
                {a.image}
              </div>
              <h3 className="mb-1 text-sm font-bold text-foreground">{a.title}</h3>
              <p className="mb-2 text-xs text-muted-foreground">
                {a.studio} · {a.releaseYear}
              </p>
              <span className="text-sm font-black text-primary">⭐ {a.rating}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimeModal anime={active} onClose={() => setActive(null)} />
    </section>
  );
}
