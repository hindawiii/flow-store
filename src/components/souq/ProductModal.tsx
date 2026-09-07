import { Check, ExternalLink, ShoppingCart, Star, X } from "lucide-react";

import type { Product } from "@/lib/souq/products";
import { useStore } from "@/lib/souq/store-context";
import { useOverlay } from "@/hooks/use-overlay";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { addToCart } = useStore();
  useOverlay(onClose, Boolean(product));
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
      onClick={onClose}
    >
      <div
        className="surface-card relative max-h-[90vh] w-full max-w-4xl overflow-y-auto p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="إغلاق"
          className="absolute top-4 left-4 inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-accent"
        >
          <X className="size-4" />
        </button>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex h-56 items-center justify-center rounded-xl bg-muted/40 text-8xl">
            <span aria-hidden>{product.image}</span>
          </div>

          <div>
            <p className="mb-1 text-xs text-muted-foreground">{product.classification}</p>
            <h2 className="mb-2 text-2xl font-black text-foreground">{product.name}</h2>
            <div className="mb-4 flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="size-4 fill-warning text-warning" />
              <span className="font-latin">{product.rating}</span>
              <span>({product.reviews} تقييم)</span>
            </div>
            <p className="mb-4 leading-relaxed text-muted-foreground">{product.description}</p>
            <div className="mb-4 flex items-baseline gap-2">
              <span className="font-latin text-3xl font-bold text-primary">${product.price}</span>
              {product.oldPrice && (
                <span className="font-latin text-muted-foreground line-through">
                  ${product.oldPrice}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={() => addToCart(product.id)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ShoppingCart className="size-4" />
              أضف للسلة
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <InfoRow label="الشركة المصنعة" value={product.manufacturer} />
          <InfoRow label="بلد المنشأ" value={product.country} />
          <InfoRow label="نوع المنتج" value={product.productType} />
          <InfoRow
            label="التوفر في الدول العربية"
            value={product.availableArab ? "متوفر ✅" : "غير متوفر ❌"}
          />
        </div>

        <section className="mt-8">
          <h3 className="mb-3 font-bold text-foreground">💱 مقارنة الأسعار</h3>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-muted-foreground">
                <tr>
                  <th className="p-3 text-right font-bold">الدولة</th>
                  <th className="p-3 text-right font-bold">السعر</th>
                  <th className="p-3 text-right font-bold">المتجر</th>
                </tr>
              </thead>
              <tbody>
                {product.priceComparison.map((q) => (
                  <tr key={q.country} className="border-t border-border">
                    <td className="p-3 text-foreground">{q.country}</td>
                    <td className="p-3 font-latin font-bold text-primary">{q.price}</td>
                    <td className="p-3 text-muted-foreground">{q.store}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <h3 className="mb-3 font-bold text-foreground">🔗 مصادر ورسمية موثوقة</h3>
          <div className="flex flex-wrap gap-2">
            <a
              href={product.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-3 py-2 text-sm font-bold text-primary"
            >
              <ExternalLink className="size-4" />
              الموقع الرسمي
            </a>
            {product.trustedSources.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground hover:border-primary hover:text-primary"
              >
                <Check className="size-4" />
                {s.name}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-muted/20 p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-bold text-foreground">{value}</p>
    </div>
  );
}
