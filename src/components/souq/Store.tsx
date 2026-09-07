import { useMemo, useState } from "react";

import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { PRODUCTS, type Product } from "@/lib/souq/products";
import { cn } from "@/lib/utils";

const FILTERS = ["الكل", "مجسمات", "ملابس", "بوسترات", "تقنية", "ألعاب", "إكسسوارات"] as const;

export function Store() {
  const [filter, setFilter] = useState<string>("الكل");
  const [active, setActive] = useState<Product | null>(null);

  const products = useMemo(
    () => (filter === "الكل" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="store" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-3xl font-black text-foreground">المتجر</h2>
            <p className="text-muted-foreground">
              منتجات أوتاكو وإكسسوارات تقنية مختارة مع تفاصيل شاملة
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-lg border px-4 py-2 text-sm font-bold transition-colors",
                  filter === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={() => setActive(p)} />
          ))}
        </div>

        {products.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">لا توجد منتجات في هذه الفئة</p>
        )}
      </div>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </section>
  );
}
