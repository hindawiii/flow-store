import { ExternalLink, X } from "lucide-react";

import type { OsGuide, OsReqSet } from "@/lib/souq/os-guides";
import { useOverlay } from "@/hooks/use-overlay";

export function OsModal({ os, onClose }: { os: OsGuide | null; onClose: () => void }) {
  useOverlay(onClose, Boolean(os));
  if (!os) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="my-8 w-full max-w-5xl rounded-2xl border border-border bg-card p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex size-16 items-center justify-center rounded-xl border border-border bg-background text-4xl">
              {os.image}
            </div>
            <div>
              <h3 className="text-2xl font-black text-foreground">{os.name}</h3>
              <p className="text-sm text-muted-foreground">
                {os.developer} · {os.category}
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

        <p className="mb-6 text-sm text-muted-foreground">{os.description}</p>

        <a
          href={os.officialWebsite}
          target="_blank"
          rel="noreferrer"
          className="mb-8 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
        >
          الموقع الرسمي <ExternalLink className="size-4" />
        </a>

        <div className="grid gap-6 md:grid-cols-2">
          <Block title="المتطلبات الدنيا">
            <ReqTable req={os.systemRequirements.min} />
          </Block>
          <Block title="المتطلبات الموصى بها">
            <ReqTable req={os.systemRequirements.rec} />
          </Block>

          <Block title="متطلبات أساسية">
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {os.essentialRequirements.map((r) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </Block>

          <Block title="طرق تشغيل بديلة">
            <ul className="space-y-2 text-sm">
              {os.alternativeMethods.map((m) => (
                <li key={m.name} className="rounded-lg bg-background p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-foreground">{m.name}</span>
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-bold text-primary">
                      {m.difficulty}
                    </span>
                  </div>
                  <p className="mt-1 text-muted-foreground">{m.desc}</p>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="روابط التحميل الرسمية">
            <ul className="space-y-2 text-sm">
              {os.downloadLinks.map((d) => (
                <li key={d.name}>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg bg-background p-3 text-foreground hover:text-primary"
                  >
                    <span className="font-bold">{d.name}</span>
                    <span className="font-latin text-xs text-muted-foreground">{d.size}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="خطوات التثبيت">
            <ol className="space-y-1.5 text-sm text-muted-foreground">
              {os.installationGuide.map((step, i) => (
                <li key={step} className="flex gap-2">
                  <span className="font-latin font-bold text-primary">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </Block>

          <Block title="أخطاء شائعة وحلولها">
            <ul className="space-y-2 text-sm">
              {os.commonErrors.map((e) => (
                <li key={e.error} className="rounded-lg bg-background p-3">
                  <div className="font-bold text-destructive">{e.error}</div>
                  <p className="mt-1 text-muted-foreground">{e.solution}</p>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="عن المطوّر">
            <dl className="space-y-1.5 text-sm text-muted-foreground">
              <Row k="الشركة" v={os.developerInfo.company} />
              <Row k="التأسيس" v={String(os.developerInfo.founded)} />
              <Row k="المقر" v={os.developerInfo.headquarters} />
              <Row k="المدير التنفيذي" v={os.developerInfo.ceo} />
            </dl>
          </Block>

          <Block title="الإصدارات السابقة" className="md:col-span-2">
            <div className="grid gap-3 md:grid-cols-3">
              {os.versions.map((v) => (
                <div key={v.name} className="rounded-lg bg-background p-3 text-sm">
                  <div className="mb-1 font-bold text-foreground">{v.name}</div>
                  <div className="font-latin mb-2 text-xs text-muted-foreground">
                    {v.releaseDate}
                  </div>
                  <ul className="mb-2 space-y-1 text-xs text-emerald-400">
                    {v.pros.map((p) => (
                      <li key={p}>+ {p}</li>
                    ))}
                  </ul>
                  <ul className="mb-2 space-y-1 text-xs text-destructive">
                    {v.cons.map((c) => (
                      <li key={c}>− {c}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground">{v.differences}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block title="كورسات مجانية">
            <ul className="space-y-2 text-sm">
              {os.freeCourses.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg bg-background p-3 text-foreground hover:text-primary"
                  >
                    <span className="font-bold">{c.name}</span>
                    <span className="text-xs text-muted-foreground">{c.platform}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="مناسب لـ">
            <div className="flex flex-wrap gap-2">
              {os.specialties.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border px-3 py-1 text-xs font-bold text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </Block>

          <Block title="تقييمات المستخدمين" className="md:col-span-2">
            <div className="space-y-3">
              {os.userReviews.map((r) => (
                <div key={r.user + r.date} className="rounded-lg bg-background p-3">
                  <div className="mb-1 flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                      {r.avatar}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-foreground">{r.user}</div>
                      <div className="text-xs text-accent">
                        {"★".repeat(r.rating)}
                        {"☆".repeat(5 - r.rating)}
                      </div>
                    </div>
                    <span className="font-latin me-auto text-xs text-muted-foreground">
                      {r.date}
                    </span>
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
    <section className={`rounded-xl border border-border bg-card/60 p-4 ${className ?? ""}`}>
      <h4 className="mb-3 font-bold text-foreground">{title}</h4>
      {children}
    </section>
  );
}

function ReqTable({ req }: { req: OsReqSet }) {
  return (
    <dl className="space-y-1.5 text-sm text-muted-foreground">
      <Row k="المعالج" v={req.cpu} />
      <Row k="الذاكرة" v={req.ram} />
      <Row k="التخزين" v={req.storage} />
      <Row k="كرت الرسوم" v={req.gpu} />
      <Row k="الشاشة" v={req.display} />
      <Row k="TPM" v={req.tpm} />
    </dl>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt>{k}</dt>
      <dd className="font-bold text-foreground">{v}</dd>
    </div>
  );
}
