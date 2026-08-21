import { BellOff, Check, X } from "lucide-react";

import type { Notification } from "@/lib/souq/notifications";

const TYPE_STYLES: Record<Notification["type"], string> = {
  offer: "bg-primary/10 text-primary",
  update: "bg-accent/10 text-accent",
  anime: "bg-muted/40 text-muted-foreground",
};

const TYPE_LABELS: Record<Notification["type"], string> = {
  offer: "عرض",
  update: "تحديث",
  anime: "أنمي",
};

export function NotificationsPanel({
  items,
  onClose,
  onRead,
  onReadAll,
}: {
  items: Notification[];
  onClose: () => void;
  onRead: (id: number) => void;
  onReadAll: () => void;
}) {
  return (
    <>
      <div className="fixed inset-0 z-[70] bg-black/60" onClick={onClose} />
      <aside
        className="fixed inset-y-0 right-0 z-[71] flex w-full max-w-sm flex-col border-l border-border bg-card"
        aria-label="الإشعارات"
      >
        <div className="flex items-center justify-between border-b border-border p-5">
          <h2 className="text-lg font-bold text-foreground">الإشعارات</h2>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onReadAll}
              className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
            >
              <Check className="size-3.5" />
              تعليم الكل كمقروء
            </button>
            <button
              type="button"
              aria-label="إغلاق الإشعارات"
              onClick={onClose}
              className="text-muted-foreground hover:text-accent"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="py-12 text-center">
              <BellOff className="mx-auto mb-4 size-14 text-border" />
              <p className="text-muted-foreground">لا توجد إشعارات</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((n) => (
                <li key={n.id}>
                  <button
                    type="button"
                    onClick={() => onRead(n.id)}
                    className={`w-full rounded-xl border p-4 text-right transition-colors ${
                      n.read
                        ? "border-border bg-background"
                        : "border-primary/40 bg-primary/5 hover:border-primary"
                    }`}
                  >
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-foreground">{n.title}</span>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[0.65rem] font-bold ${TYPE_STYLES[n.type]}`}
                      >
                        {TYPE_LABELS[n.type]}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{n.message}</p>
                    <p className="font-latin mt-2 text-xs text-muted-foreground">{n.date}</p>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  );
}
