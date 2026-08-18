import { useState } from "react";
import { X } from "lucide-react";

import { useStore } from "@/lib/souq/store-context";

export function CompareBar() {
  const { compare, clearCompare, toggleCompare, productById } = useStore();
  const [open, setOpen] = useState(false);

  if (compare.length === 0) return null;

  const items = compare.map(productById).filter(Boolean) as NonNullable<
    ReturnType<typeof productById>
  >[];

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 p-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-bold text-foreground">
              المقارنة (<span className="font-latin">{compare.length}</span>)
            </span>
            <div className="flex gap-2">
              {items.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => toggleCompare(p.id)}
                  aria-label={`إزالة ${p.name}`}
                  className="flex size-10 items-center justify-center rounded-lg border border-border bg-muted/40 text-xl"
                >
                  {p.image}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:opacity-90"
            >
              قارن الآن
            </button>
            <button
              type="button"
              onClick={clearCompare}
              className="rounded-lg border border-border px-4 py-2 text-sm font-bold text-muted-foreground hover:border-primary hover:text-primary"
            >
              إفراغ
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="مقارنة المنتجات"
          onClick={() => setOpen(false)}
        >
          <div
            className="surface-card relative max-h-[90vh] w-full max-w-5xl overflow-auto p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="إغلاق"
              onClick={() => setOpen(false)}
              className="absolute top-4 left-4 inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-accent"
            >
              <X className="size-4" />
            </button>
            <h2 className="mb-6 text-2xl font-black text-foreground">⚖️ مقارنة جانبية</h2>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="p-3 text-right text-muted-foreground">المواصفة</th>
                  {items.map((p) => (
                    <th key={p.id} className="p-3 text-right text-foreground">
                      <span className="mb-1 block text-2xl">{p.image}</span>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <CompareRow label="السعر" items={items.map((p) => `$${p.price}`)} />
                <CompareRow label="التقييم" items={items.map((p) => `${p.rating} ⭐`)} />
                <CompareRow label="الفئة" items={items.map((p) => p.category)} />
                <CompareRow label="المصنع" items={items.map((p) => p.manufacturer)} />
                <CompareRow label="بلد المنشأ" items={items.map((p) => p.country)} />
                <CompareRow label="النوع" items={items.map((p) => p.productType)} />
                <CompareRow
                  label="متوفر عربياً"
                  items={items.map((p) => (p.availableArab ? "✅" : "❌"))}
                />
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

function CompareRow({ label, items }: { label: string; items: string[] }) {
  return (
    <tr className="border-t border-border">
      <td className="p-3 font-bold text-muted-foreground">{label}</td>
      {items.map((value, i) => (
        <td key={`${label}-${i}`} className="p-3 text-foreground">
          {value}
        </td>
      ))}
    </tr>
  );
}
