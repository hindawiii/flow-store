import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

import { AI_TOOLS } from "@/lib/souq/ai-tools";
import { ANIME } from "@/lib/souq/anime";
import { GAMES } from "@/lib/souq/games";
import { PRODUCTS } from "@/lib/souq/products";

type Result = { key: string; label: string; kind: string; emoji: string; href: string };

const INDEX: Result[] = [
  ...PRODUCTS.map((p) => ({
    key: `p-${p.id}`,
    label: p.name,
    kind: "منتج",
    emoji: p.image,
    href: "#store",
  })),
  ...GAMES.map((g) => ({
    key: `g-${g.id}`,
    label: g.name,
    kind: "لعبة",
    emoji: g.image,
    href: "#games",
  })),
  ...ANIME.map((a) => ({
    key: `a-${a.id}`,
    label: a.title,
    kind: "أنمي",
    emoji: a.image,
    href: "#anime",
  })),
  ...AI_TOOLS.map((t) => ({
    key: `t-${t.name}`,
    label: t.name,
    kind: "أداة AI",
    emoji: t.image,
    href: "#ai",
  })),
];

export function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return INDEX.filter((item) => item.label.toLowerCase().includes(q)).slice(0, 12);
  }, [query]);

  return (
    <div className="fixed inset-0 z-[85] flex items-start justify-center p-4 pt-24">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search className="size-5 shrink-0 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ابحث عن منتج، لعبة، أنمي أو أداة..."
            className="w-full bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button
            type="button"
            aria-label="إغلاق البحث"
            onClick={onClose}
            className="text-muted-foreground hover:text-accent"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {query.trim() === "" ? (
            <p className="p-6 text-center text-sm text-muted-foreground">
              اكتب كلمة للبحث في المتجر والألعاب والأنمي وأدوات الذكاء الاصطناعي
            </p>
          ) : results.length === 0 ? (
            <p className="p-6 text-center text-sm text-muted-foreground">لا توجد نتائج مطابقة</p>
          ) : (
            <ul>
              {results.map((r) => (
                <li key={r.key}>
                  <a
                    href={r.href}
                    onClick={onClose}
                    className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-background"
                  >
                    <span className="text-2xl">{r.emoji}</span>
                    <span className="flex-1 truncate text-sm font-bold text-foreground">
                      {r.label}
                    </span>
                    <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-bold text-primary">
                      {r.kind}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
