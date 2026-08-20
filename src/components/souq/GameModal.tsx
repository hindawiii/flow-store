import { ExternalLink, X } from "lucide-react";

import type { Game, GameReq } from "@/lib/souq/games";

export function GameModal({ game, onClose }: { game: Game | null; onClose: () => void }) {
  if (!game) return null;

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
              {game.image}
            </div>
            <div>
              <h3 className="text-2xl font-black text-foreground">{game.name}</h3>
              <p className="text-sm text-muted-foreground">
                {game.genre} · {game.platform} · {game.free ? "مجانية" : `$${game.price}`}
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

        <p className="mb-6 text-sm text-muted-foreground">{game.description}</p>

        <a
          href={game.officialWebsite}
          target="_blank"
          rel="noreferrer"
          className="mb-8 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
        >
          الموقع الرسمي <ExternalLink className="size-4" />
        </a>

        <div className="grid gap-6 md:grid-cols-2">
          <Block title="معلومات اللعبة">
            <Row label="المطور" value={game.developer} />
            <Row label="الناشر" value={game.publisher} />
            <Row label="تاريخ الإصدار" value={game.releaseDate} />
          </Block>

          <Block title="التقييمات">
            {game.reviews.map((r) => (
              <Row key={r.source} label={r.source} value={r.score} />
            ))}
          </Block>

          <Block title="المتطلبات الدنيا">
            <ReqTable req={game.systemRequirements.min} />
          </Block>
          <Block title="المتطلبات الموصى بها">
            <ReqTable req={game.systemRequirements.rec} />
          </Block>

          <Block title="أماكن الشراء" className="md:col-span-2">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {game.storeLinks.map((s) => (
                <a
                  key={s.store}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-lg border border-border p-3 text-sm hover:border-primary"
                >
                  <span className="font-bold text-foreground">{s.store}</span>
                  <span className="text-primary">{s.price}</span>
                </a>
              ))}
            </div>
          </Block>

          <Block title="الإصدارات" className="md:col-span-2">
            <div className="space-y-3">
              {game.versions.map((v) => (
                <div key={v.name} className="rounded-lg border border-border p-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h5 className="font-bold text-foreground">{v.name}</h5>
                    <span className="text-xs text-muted-foreground">{v.releaseDate}</span>
                  </div>
                  <p className="mb-2 text-xs text-muted-foreground">{v.differences}</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {v.pros.map((p) => (
                        <li key={p}>+ {p}</li>
                      ))}
                    </ul>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {v.cons.map((c) => (
                        <li key={c}>− {c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Block>

          <Block title="تقييمات المستخدمين" className="md:col-span-2">
            <div className="space-y-3">
              {game.userReviews.map((r) => (
                <div key={r.user + r.date} className="rounded-lg border border-border p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {r.avatar}
                    </span>
                    <span className="text-sm font-bold text-foreground">{r.user}</span>
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                    <span className="ms-auto text-sm text-primary">{"★".repeat(r.rating)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          </Block>
        </div>
      </div>
    </div>
  );
}

function Block({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h4 className="mb-3 font-bold text-foreground">{title}</h4>
      <div className="rounded-xl border border-border bg-background p-4">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border py-2 text-sm last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold text-foreground">{value}</span>
    </div>
  );
}

function ReqTable({ req }: { req: GameReq }) {
  const rows: [string, string][] = [
    ["النظام", req.os],
    ["المعالج", req.cpu],
    ["الذاكرة", req.ram],
    ["كرت الرسوم", req.gpu],
    ["التخزين", req.storage],
  ];
  return (
    <div>
      {rows.map(([k, v]) => (
        <Row key={k} label={k} value={v} />
      ))}
    </div>
  );
}
