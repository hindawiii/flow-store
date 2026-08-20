import { AlertTriangle, ExternalLink, X } from "lucide-react";

import type { Anime } from "@/lib/souq/anime";

export function AnimeModal({ anime, onClose }: { anime: Anime | null; onClose: () => void }) {
  if (!anime) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="my-8 w-full max-w-4xl rounded-2xl border border-border bg-card p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex size-16 items-center justify-center rounded-xl border border-border bg-background text-4xl">
              {anime.image}
            </div>
            <div>
              <h3 className="text-2xl font-black text-foreground">{anime.title}</h3>
              <p className="text-sm text-muted-foreground">
                {anime.studio} · {anime.genre} · {anime.episodes} حلقة · ⭐ {anime.rating}
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="إغلاق"
            onClick={onClose}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary"
          >
            <X className="size-5" />
          </button>
        </div>

        <p className="mb-6 text-sm text-muted-foreground">{anime.description}</p>

        <h4 className="mb-3 font-bold text-foreground">منصات المشاهدة الرسمية</h4>
        <div className="mb-8 grid gap-3 sm:grid-cols-2">
          {anime.streamingSites.legal.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-border bg-background p-4 text-sm hover:border-primary"
            >
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className="font-bold text-foreground">{s.name}</span>
                <ExternalLink className="size-4 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground">{s.price}</p>
              <p className="text-xs text-muted-foreground">
                {s.quality} · {s.arabicSub ? "ترجمة عربية ✓" : "بدون ترجمة عربية"}
              </p>
            </a>
          ))}
        </div>

        <h4 className="mb-3 flex items-center gap-2 font-bold text-destructive">
          <AlertTriangle className="size-4" /> مواقع غير رسمية (غير موصى بها)
        </h4>
        <div className="mb-8 space-y-3">
          {anime.streamingSites.illegal.map((s) => (
            <div key={s.name} className="rounded-xl border border-destructive/40 bg-background p-4">
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className="text-sm font-bold text-foreground">{s.name}</span>
                <span className="text-xs font-bold text-destructive">خطورة: {s.risk}</span>
              </div>
              <p className="text-xs text-muted-foreground">{s.warning}</p>
            </div>
          ))}
        </div>

        <h4 className="mb-3 font-bold text-foreground">روابط رسمية</h4>
        <div className="flex flex-wrap gap-3">
          {anime.officialSites.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground hover:border-primary hover:text-primary"
            >
              {s.name} <ExternalLink className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
