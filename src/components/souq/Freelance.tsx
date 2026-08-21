import { ExternalLink } from "lucide-react";

import { FREELANCE_PLATFORMS } from "@/lib/souq/freelance";

export function Freelance() {
  return (
    <section id="freelance" className="scroll-mt-24 bg-card/30 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-center text-3xl font-black text-foreground">دليل العمل الحر</h2>
        <p className="mb-10 text-center text-muted-foreground">منصات موثوقة ونصائح للبدء</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FREELANCE_PLATFORMS.map((f) => (
            <div key={f.name} className="surface-card card-hover flex flex-col p-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-background text-2xl">
                  {f.image}
                </span>
                <div>
                  <h3 className="font-bold text-foreground">{f.name}</h3>
                  <p className="text-xs text-muted-foreground">{f.type}</p>
                </div>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">{f.description}</p>

              <div className="mt-auto flex items-center justify-between gap-3">
                <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                  عمولة: {f.fees}
                </span>
                <a
                  href={`https://${f.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
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
