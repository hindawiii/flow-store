import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, X } from "lucide-react";
import { toast } from "sonner";

import { AuthModal } from "./AuthModal";
import { useStore } from "@/lib/souq/store-context";
import { useOverlay } from "@/hooks/use-overlay";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";

const PAYMENTS = [
  { value: "cod", label: "الدفع عند الاستلام" },
  { value: "card", label: "بطاقة بنكية" },
  { value: "wallet", label: "محفظة إلكترونية" },
];

const SHIPPING = 5;

export function CheckoutModal({ onClose }: { onClose: () => void }) {
  const { cart, cartTotal, productById, clearCart, setCartOpen } = useStore();
  const { user, loading } = useAuth();
  const [done, setDone] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
    address: "",
    payment: "cod",
  });
  useOverlay(onClose);

  const total = cartTotal + (cart.length > 0 ? SHIPPING : 0);

  useEffect(() => {
    if (!user) return;
    setForm((prev) => ({ ...prev, email: prev.email || (user.email ?? "") }));
    void supabase
      .from("profiles")
      .select("full_name, phone, city, address")
      .maybeSingle()
      .then(({ data }) => {
        if (!data) return;
        setForm((prev) => ({
          ...prev,
          name: prev.name || (data.full_name ?? ""),
          phone: prev.phone || (data.phone ?? ""),
          city: prev.city || (data.city ?? ""),
          address: prev.address || (data.address ?? ""),
        }));
      });
  }, [user]);

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

  if (!loading && !user) {
    return (
      <>
        <Shell onClose={onClose}>
          <div className="py-6 text-center">
            <h2 className="mb-3 text-xl font-bold text-foreground">سجّل الدخول لإتمام الطلب</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              نحتاج حساباً لحفظ طلبك ومتابعته لاحقاً في صفحة «طلباتي».
            </p>
            <button
              type="button"
              onClick={() => setAuthOpen(true)}
              className="w-full rounded-lg bg-primary px-4 py-3 font-bold text-primary-foreground"
            >
              تسجيل الدخول أو إنشاء حساب
            </button>
          </div>
        </Shell>
        {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
      </>
    );
  }

  return (
    <Shell onClose={onClose}>
      <h2 className="mb-6 text-center text-2xl font-bold text-foreground">إتمام الشراء</h2>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (cart.length === 0) {
            toast.error("السلة فارغة");
            return;
          }
          if (!user) return;
          setBusy(true);
          try {
            const { data: order, error } = await supabase
              .from("orders")
              .insert({
                user_id: user.id,
                full_name: form.name,
                phone: form.phone,
                city: form.city,
                address: form.address,
                email: form.email,
                payment_method: form.payment,
                items_total: cartTotal,
                shipping_total: SHIPPING,
                total,
              })
              .select("id, reference")
              .single();
            if (error) throw error;

            const items = cart
              .map((line) => {
                const product = productById(line.productId);
                if (!product) return null;
                return {
                  order_id: order.id,
                  product_id: product.id,
                  product_name: product.name,
                  product_image: product.image,
                  unit_price: product.price,
                  qty: line.qty,
                };
              })
              .filter((item): item is NonNullable<typeof item> => item !== null);

            const { error: itemsError } = await supabase.from("order_items").insert(items);
            if (itemsError) throw itemsError;

            clearCart();
            setDone(order.reference);
            toast.success("تم حفظ طلبك بنجاح");
          } catch (error) {
            toast.error(error instanceof Error ? error.message : "تعذر إرسال الطلب");
          } finally {
            setBusy(false);
          }
        }}
      >
        <div className="mb-4 grid gap-4 sm:grid-cols-2">
          <Field
            label="الاسم الكامل"
            placeholder="محمد أحمد"
            value={form.name}
            onChange={(v) => setForm((f) => ({ ...f, name: v }))}
          />
          <Field
            label="رقم الهاتف"
            placeholder="+249 9x xxx xxxx"
            type="tel"
            value={form.phone}
            onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
          />
          <Field
            label="المدينة"
            placeholder="الخرطوم"
            value={form.city}
            onChange={(v) => setForm((f) => ({ ...f, city: v }))}
          />
          <Field
            label="البريد الإلكتروني"
            placeholder="you@email.com"
            type="email"
            value={form.email}
            onChange={(v) => setForm((f) => ({ ...f, email: v }))}
          />
        </div>

        <Field
          label="العنوان بالتفصيل"
          placeholder="الحي، الشارع، رقم المنزل"
          value={form.address}
          onChange={(v) => setForm((f) => ({ ...f, address: v }))}
        />

        <fieldset className="my-5">
          <legend className="mb-2 text-sm text-muted-foreground">طريقة الدفع</legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {PAYMENTS.map((p) => (
              <label
                key={p.value}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-background px-3 py-3 text-sm text-foreground hover:border-primary"
              >
                <input
                  type="radio"
                  name="payment"
                  value={p.value}
                  checked={form.payment === p.value}
                  onChange={() => setForm((f) => ({ ...f, payment: p.value }))}
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
          disabled={busy}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {busy && <Loader2 className="size-4 animate-spin" />}
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
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-muted-foreground">{label}</span>
      <input
        type={type}
        required
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
      />
    </label>
  );
}
