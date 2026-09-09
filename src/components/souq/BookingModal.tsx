import { useState } from "react";
import { CheckCircle2, X } from "lucide-react";

import { useOverlay } from "@/hooks/use-overlay";
import type { Service } from "@/lib/souq/services";

const CONTACT = [
  { value: "whatsapp", label: "واتساب" },
  { value: "telegram", label: "تيليجرام" },
  { value: "email", label: "البريد الإلكتروني" },
];

export function BookingModal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  const [ref, setRef] = useState<string | null>(null);
  useOverlay(onClose);

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary";

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-black/70 p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative z-10 my-8 w-full max-w-lg rounded-2xl border border-border bg-card p-6">
        <button
          type="button"
          aria-label="إغلاق"
          onClick={onClose}
          className="absolute top-4 left-4 text-muted-foreground hover:text-accent"
        >
          <X className="size-5" />
        </button>

        {ref ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto mb-4 size-14 text-emerald-400" />
            <h2 className="mb-2 text-xl font-bold text-foreground">تم استلام طلب الحجز</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              رقم الحجز: <span className="font-latin font-bold text-primary">{ref}</span>
            </p>
            <p className="mb-6 text-sm text-muted-foreground">
              سنتواصل معك لتأكيد الموعد. (نسخة تجريبية — الحجز محفوظ على جهازك فقط)
            </p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground"
            >
              تم
            </button>
          </div>
        ) : (
          <>
            <h2 className="mb-1 text-xl font-bold text-foreground">حجز: {service.name}</h2>
            <p className="mb-5 text-sm text-muted-foreground">
              <span className="font-latin font-bold text-primary">${service.price}</span> /{" "}
              {service.priceType} · {service.duration}
            </p>
            <form
              className="space-y-3"
              onSubmit={(event) => {
                event.preventDefault();
                setRef(`BK-${Math.floor(100000 + Math.random() * 900000)}`);
              }}
            >
              <input required type="text" placeholder="الاسم الكامل" className={inputClass} />
              <input
                required
                type="tel"
                placeholder="رقم الهاتف / واتساب"
                className={inputClass}
              />
              <input required type="date" className={inputClass} />
              <select required defaultValue="" className={inputClass}>
                <option value="">طريقة التواصل المفضلة</option>
                {CONTACT.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
              <textarea
                rows={3}
                placeholder="وصف المشكلة أو تفاصيل إضافية (اختياري)"
                className={inputClass}
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                تأكيد الحجز
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
