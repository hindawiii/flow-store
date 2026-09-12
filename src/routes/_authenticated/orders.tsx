import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ArrowRight, Loader2, PackageSearch } from "lucide-react";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/orders")({
  head: () => ({
    meta: [
      { title: "طلباتي وحسابي | سوق بايت" },
      { name: "description", content: "تابع طلباتك السابقة وحدّث بيانات حسابك في سوق بايت." },
      { property: "og:title", content: "طلباتي وحسابي | سوق بايت" },
      {
        property: "og:description",
        content: "تابع طلباتك السابقة وحدّث بيانات حسابك في سوق بايت.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: OrdersPage,
  errorComponent: () => (
    <p className="p-8 text-center text-muted-foreground">تعذر تحميل الصفحة، حاول التحديث.</p>
  ),
  notFoundComponent: () => <p className="p-8 text-center text-muted-foreground">غير موجود</p>,
});

type OrderRow = {
  id: string;
  reference: string;
  status: string;
  total: number;
  created_at: string;
  full_name: string;
  city: string;
  payment_method: string;
  order_items: {
    id: string;
    product_name: string;
    product_image: string | null;
    qty: number;
    unit_price: number;
  }[];
};

function OrdersPage() {
  const queryClient = useQueryClient();

  const ordersQuery = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select(
          "id, reference, status, total, created_at, full_name, city, payment_method, order_items(id, product_name, product_image, qty, unit_price)",
        )
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as unknown as OrderRow[];
    },
  });

  const profileQuery = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, full_name, phone, city, address")
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const [form, setForm] = useState({ full_name: "", phone: "", city: "", address: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!profileQuery.data) return;
    setForm({
      full_name: profileQuery.data.full_name ?? "",
      phone: profileQuery.data.phone ?? "",
      city: profileQuery.data.city ?? "",
      address: profileQuery.data.address ?? "",
    });
  }, [profileQuery.data]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-primary hover:underline">
        <ArrowRight className="size-4" />
        العودة للمتجر
      </Link>
      <h1 className="mb-8 text-3xl font-bold text-foreground">حسابي وطلباتي</h1>

      <section className="mb-10 rounded-2xl border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-bold text-foreground">بيانات التوصيل المحفوظة</h2>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const { data: userData } = await supabase.auth.getUser();
            if (!userData.user) return;
            setSaving(true);
            const { error } = await supabase
              .from("profiles")
              .upsert({ id: userData.user.id, ...form });
            setSaving(false);
            if (error) {
              toast.error(error.message);
              return;
            }
            toast.success("تم حفظ بياناتك");
            void queryClient.invalidateQueries({ queryKey: ["profile"] });
          }}
          className="grid gap-4 sm:grid-cols-2"
        >
          <ProfileField
            label="الاسم الكامل"
            value={form.full_name}
            onChange={(v) => setForm((f) => ({ ...f, full_name: v }))}
          />
          <ProfileField
            label="رقم الهاتف"
            value={form.phone}
            onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
          />
          <ProfileField
            label="المدينة"
            value={form.city}
            onChange={(v) => setForm((f) => ({ ...f, city: v }))}
          />
          <ProfileField
            label="العنوان"
            value={form.address}
            onChange={(v) => setForm((f) => ({ ...f, address: v }))}
          />
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground disabled:opacity-60"
            >
              حفظ البيانات
            </button>
          </div>
        </form>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold text-foreground">طلباتي</h2>
        {ordersQuery.isLoading ? (
          <Loader2 className="mx-auto size-6 animate-spin text-primary" />
        ) : (ordersQuery.data?.length ?? 0) === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-10 text-center">
            <PackageSearch className="mx-auto mb-3 size-12 text-border" />
            <p className="text-muted-foreground">لا توجد طلبات بعد</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {ordersQuery.data?.map((order) => (
              <li key={order.id} className="rounded-2xl border border-border bg-card p-5">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-latin font-bold text-primary">{order.reference}</span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {statusLabel(order.status)}
                  </span>
                </div>
                <ul className="mb-3 space-y-1 text-sm text-muted-foreground">
                  {order.order_items.map((item) => (
                    <li key={item.id} className="flex justify-between gap-2">
                      <span className="truncate">
                        {item.product_image} {item.product_name} × {item.qty}
                      </span>
                      <span className="font-latin shrink-0">${item.unit_price * item.qty}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between border-t border-border pt-3 text-sm">
                  <span className="text-muted-foreground">
                    {new Date(order.created_at).toLocaleDateString("ar-EG")} — {order.city}
                  </span>
                  <span className="font-latin font-bold text-primary">${order.total}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

function statusLabel(status: string) {
  if (status === "pending") return "قيد المعالجة";
  if (status === "shipped") return "تم الشحن";
  if (status === "delivered") return "تم التسليم";
  if (status === "cancelled") return "ملغي";
  return status;
}

function ProfileField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-muted-foreground">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
      />
    </label>
  );
}
