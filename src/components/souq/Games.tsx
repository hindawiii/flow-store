import { useState } from "react";

import { GameModal } from "./GameModal";
import { GAMES, type Game } from "@/lib/souq/games";

export function Games() {
  const [active, setActive] = useState<Game | null>(null);

  return (
    <section id="games" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-3xl font-black text-foreground">الألعاب</h2>
        <p className="mb-8 text-muted-foreground">
          متطلبات التشغيل، الإصدارات، أماكن الشراء والتقييمات
        </p>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {GAMES.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(g)}
              className="surface-card card-hover p-5 text-center"
            >
              <div className="mx-auto mb-3 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-3xl">
                {g.image}
              </div>
              <h3 className="mb-1 text-sm font-bold text-foreground">{g.name}</h3>
              <p className="mb-2 text-xs text-muted-foreground">{g.platform}</p>
              <span className="text-sm font-black text-primary">
                {g.free ? "مجانية" : `$${g.price}`}
              </span>
            </button>
          ))}
        </div>
      </div>

      <GameModal game={active} onClose={() => setActive(null)} />
    </section>
  );
}
