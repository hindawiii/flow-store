import { Scale, ShoppingCart, Star } from "lucide-react";

import type { Product } from "@/lib/souq/products";
import { useStore } from "@/lib/souq/store-context";
import { cn } from "@/lib/utils";

export function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  const { addToCart, compare, toggleCompare } = useStore();
  const inCompare = compare.includes(product.id);

  return (
    <article className="surface-card card-hover overflow-hidden">
      <button
        type="button"
        onClick={onOpen}
        className="relative flex h-40 w-full items-center justify-center bg-muted/40 text-6xl"
        aria-label={`تفاصيل ${product.name}`}
      >
        <span aria-hidden>{product.image}</span>
        {product.badge && (
          <span className="absolute top-3 right-3 rounded-lg bg-accent px-2 py-1 text-xs font-bold text-accent-foreground">
            {product.badge}
          </span>
        )}
      </button>

      <div className="p-4">
        <p className="mb-1 text-xs text-muted-foreground">{product.category}</p>
        <h3 className="mb-2 line-clamp-2 min-h-11 font-bold text-foreground">{product.name}</h3>

        <div className="mb-3 flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="size-3.5 fill-warning text-warning" />
          <span className="font-latin">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>

        <div className="mb-4 flex items-baseline gap-2">
          <span className="font-latin text-xl font-bold text-primary">${product.price}</span>
          {product.oldPrice && (
            <span className="font-latin text-sm text-muted-foreground line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => addToCart(product.id)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ShoppingCart className="size-4" />
            أضف للسلة
          </button>
          <button
            type="button"
            onClick={() => toggleCompare(product.id)}
            aria-label="أضف للمقارنة"
            aria-pressed={inCompare}
            className={cn(
              "inline-flex size-9 items-center justify-center rounded-lg border border-border transition-colors",
              inCompare
                ? "border-primary bg-primary/10 text-primary"
                : "text-muted-foreground hover:border-primary hover:text-primary",
            )}
          >
            <Scale className="size-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
