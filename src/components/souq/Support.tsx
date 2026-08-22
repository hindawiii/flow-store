import { useState } from "react";
import { Mail, MessageCircle, Ticket, X } from "lucide-react";
import { toast } from "sonner";

import { TICKET_CATEGORIES, TICKET_PRIORITIES } from "@/lib/souq/notifications";

export function Support() {
  const [ticketOpen, setTicketOpen] = useState(false);

  return (
    <section id="support" className="bg-card/30 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-center text-3xl font-black text-foreground">الدعم الفني</h2>
        <p className="mb-10 text-center text-muted-foreground">
          نحن هنا لمساعدتك — اختر طريقة التواصل المناسبة
        </p>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-border bg-card p-8 text-center transition-colors hover:border-primary">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Ticket className="size-7" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">فتح تذكرة</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              أرسل مشكلتك وسنرد عليك في أقل من 24 ساعة
            </p>
            <button
              type="button"
              onClick={() => setTicketOpen(true)}
              className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              فتح تذكرة
            </button>
          </article>

          <article className="rounded-xl border border-border bg-card p-8 text-center transition-colors hover:border-primary">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <MessageCircle className="size-7" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">واتساب</h3>
            <p className="mb-4 text-sm text-muted-foreground">تواصل مباشر للاستفسارات العاجلة</p>
            <a
              href="https://wa.me/249112135062"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-accent px-4 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
            >
              تواصل عبر واتساب
            </a>
          </article>

          <article className="rounded-xl border border-border bg-card p-8 text-center transition-colors hover:border-primary">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-muted/40 text-foreground">
              <Mail className="size-7" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">بريد إلكتروني</h3>
            <p className="mb-4 text-sm text-muted-foreground">للاستفسارات التفصيلية والتعاون</p>
            <a
              href="mailto:support@souqbyte.com"
              className="block w-full rounded-lg border border-border px-4 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              إرسال بريد
            </a>
          </article>
        </div>
      </div>

      {ticketOpen && <TicketModal onClose={() => setTicketOpen(false)} />}
    </section>
  );
}

function TicketModal({ onClose }: { onClose: () => void }) {
  const fieldClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary";

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-card p-8">
        <button
          type="button"
          aria-label="إغلاق"
          onClick={onClose}
          className="absolute top-4 left-4 text-muted-foreground hover:text-accent"
        >
          <X className="size-5" />
        </button>
        <h2 className="mb-6 text-2xl font-bold text-foreground">فتح تذكرة دعم فني</h2>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            toast.success("تم إرسال التذكرة بنجاح! سنرد عليك في أقل من 24 ساعة");
            onClose();
          }}
        >
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-muted-foreground">الموضوع</span>
            <input
              type="text"
              required
              placeholder="مثال: مشكلة في تثبيت ويندوز"
              className={fieldClass}
            />
          </label>

          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-muted-foreground">الفئة</span>
            <select required defaultValue="" className={fieldClass}>
              <option value="" disabled>
                اختر الفئة
              </option>
              {TICKET_CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>

          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-muted-foreground">الأولوية</span>
            <select required defaultValue="medium" className={fieldClass}>
              {TICKET_PRIORITIES.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </label>

          <label className="mb-6 block">
            <span className="mb-2 block text-sm text-muted-foreground">الرسالة</span>
            <textarea
              rows={4}
              required
              placeholder="اشرح مشكلتك بالتفصيل..."
              className={fieldClass}
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            إرسال التذكرة
          </button>
        </form>
      </div>
    </div>
  );
}
