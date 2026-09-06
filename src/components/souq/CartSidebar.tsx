import { useState } from "react";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";

import { CheckoutModal } from "./CheckoutModal";
import { useStore } from "@/lib/souq/store-context";

export function CartSidebar() {
  const { cart, cartOpen, setCartOpen, cartTotal, setQty, removeFromCart, productById } =
    useStore();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  if (!cartOpen) return null;


  return (
    <>
      <div className="fixed inset-0 z-[70] bg-black/60" onClick={() => setCartOpen(false)} />
      <aside
        className="fixed inset-y-0 right-0 z-[71] flex w-full max-w-md flex-col border-l border-border bg-card"
        aria-label="سلة التسوق"
      >
        <div className="flex items-center justify-between border-b border-border p-6">
          <h2 className="text-xl font-bold text-foreground">
            سلة التسوق <span className="font-latin text-sm text-muted-foreground">({cart.length})</span>
          </h2>
          <button
            type="button"
            aria-label="إغلاق السلة"
            onClick={() => setCartOpen(false)}
            className="text-muted-foreground hover:text-accent"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="py-12 text-center">
              <ShoppingCart className="mx-auto mb-4 size-16 text-border" />
              <p className="text-muted-foreground">سلة التسوق فارغة</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {cart.map((line) => {
                const p = productById(line.productId);
                if (!p) return null;
                return (
                  <li
                    key={line.productId}
                    className="flex items-center gap-3 rounded-xl border border-border p-3"
                  >
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-muted/40 text-2xl">
                      {p.image}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-foreground">{p.name}</p>
                      <p className="font-latin text-sm text-primary">${p.price}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <QtyBtn label="ناقص" onClick={() => setQty(p.id, line.qty - 1)}>
                        <Minus className="size-3.5" />
                      </QtyBtn>
                      <span className="font-latin w-6 text-center text-sm">{line.qty}</span>
                      <QtyBtn label="زائد" onClick={() => setQty(p.id, line.qty + 1)}>
                        <Plus className="size-3.5" />
                      </QtyBtn>
                    </div>
                    <button
                      type="button"
                      aria-label="حذف"
                      onClick={() => removeFromCart(p.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-border p-6">
            <div className="mb-4 flex justify-between">
              <span className="text-muted-foreground">الإجمالي</span>
              <span className="font-latin text-xl font-bold text-primary">${cartTotal}</span>
            </div>
            <button
              type="button"
              onClick={() => setCheckoutOpen(true)}
              className="w-full rounded-lg bg-primary px-4 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              إتمام الشراء
            </button>
          </div>
        )}
      </aside>

      {checkoutOpen && <CheckoutModal onClose={() => setCheckoutOpen(false)} />}
    </>
  );
}


function QtyBtn({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground hover:border-primary hover:text-primary"
    >
      {children}
    </button>
  );
}
