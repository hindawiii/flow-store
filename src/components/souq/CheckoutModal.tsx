import { useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { toast } from "sonner";

import { useStore } from "@/lib/souq/store-context";
import { useOverlay } from "@/hooks/use-overlay";

const PAYMENTS = [
  { value: "cod", label: "الدفع عند الاستلام" },
  { value: "card", label: "بطاقة بنكية" },
  { value: "wallet", label: "محفظة إلكترونية" },
];

const SHIPPING = 5;

export function CheckoutModal({ onClose }: { onClose: () => void }) {
  const { cart, cartTotal, productById, clearCart, setCartOpen } = useStore();
  const [done, setDone] = useState<string | null>(null);
  useOverlay(onClose);

  const total = cartTotal + (cart.length > 0 ? SHIPPING : 0);

  if (done) {
    return (
      <Shell onClose={onClose}>
        <div className="py-6 text-center">
          <CheckCircle2 className="mx-auto mb-4 size-14 text-primary" />
          <h2 className="mb-2 text-xl font-bold text-foreground">تم تأكيد طلبك</h2>
          <p className="mb-1 text-sm text-muted-foreground">رقم الطلب</p>
          <p className="font-latin mb-6 text-lg font-bold text-primary">{done}</p>
          <button
            type="button"
            onClick={() => {
              onClose();
              setCartOpen(false);
            }}
            className="w-full rounded-lg bg-primary px-4 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            متابعة التسوق
          </button>
        </div>
      </Shell>
    );
  }

  return (
    <Shell onClose={onClose}>
      <h2 className="mb-6 text-center text-2xl font-bold text-foreground">إتمام الشراء</h2>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (cart.length === 0) {
            toast.error("السلة فارغة");
            return;
          }
          const id = `SB-${Math.floor(100000 + Math.random() * 899999)}`;
          clearCart();
          setDone(id);
          toast.success("تم إرسال طلبك بنجاح");
        }}
      >
        <div className="mb-4 grid gap-4 sm:grid-cols-2">
          <Field label="الاسم الكامل" name="name" placeholder="محمد أحمد" />
          <Field label="رقم الهاتف" name="phone" placeholder="+249 9x xxx xxxx" type="tel" />
          <Field label="المدينة" name="city" placeholder="الخرطوم" />
          <Field label="البريد الإلكتروني" name="email" placeholder="you@email.com" type="email" />
        </div>

        <Field label="العنوان بالتفصيل" name="address" placeholder="الحي، الشارع، رقم المنزل" />

        <fieldset className="my-5">
          <legend className="mb-2 text-sm text-muted-foreground">طريقة الدفع</legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {PAYMENTS.map((p, i) => (
              <label
                key={p.value}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-background px-3 py-3 text-sm text-foreground hover:border-primary"
              >
                <input
                  type="radio"
                  name="payment"
                  value={p.value}
                  defaultChecked={i === 0}
                  className="size-4 accent-[hsl(var(--primary))]"
                />
                {p.label}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mb-5 rounded-xl border border-border bg-background p-4">
          <ul className="mb-3 space-y-2">
            {cart.map((line) => {
              const p = productById(line.productId);
              if (!p) return null;
              return (
                <li key={line.productId} className="flex justify-between gap-2 text-sm">
                  <span className="truncate text-muted-foreground">
                    {p.image} {p.name} × {line.qty}
                  </span>
                  <span className="font-latin shrink-0 text-foreground">${p.price * line.qty}</span>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-between border-t border-border pt-3 text-sm text-muted-foreground">
            <span>الشحن</span>
            <span className="font-latin">${cart.length > 0 ? SHIPPING : 0}</span>
          </div>
          <div className="mt-2 flex justify-between text-base font-bold">
            <span className="text-foreground">الإجمالي</span>
            <span className="font-latin text-primary">${total}</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-4 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
        >
          تأكيد الطلب
        </button>
      </form>
    </Shell>
  );
}

function Shell({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-black/70 p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative z-10 my-8 w-full max-w-lg rounded-2xl border border-border bg-card p-6 sm:p-8">
        <button
          type="button"
          aria-label="إغلاق"
          onClick={onClose}
          className="absolute top-4 left-4 text-muted-foreground hover:text-accent"
        >
          <X className="size-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
      />
    </label>
  );
}
