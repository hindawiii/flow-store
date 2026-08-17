import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import { PRODUCTS, type Product } from "./products";

export type CartLine = { productId: number; qty: number };

type StoreState = {
  cart: CartLine[];
  cartCount: number;
  cartTotal: number;
  cartOpen: boolean;
  compare: number[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  setQty: (id: number, qty: number) => void;
  clearCart: () => void;
  setCartOpen: (open: boolean) => void;
  toggleCompare: (id: number) => void;
  clearCompare: () => void;
  productById: (id: number) => Product | undefined;
};

const StoreContext = createContext<StoreState | null>(null);

const CART_KEY = "souqbyte:cart";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [compare, setCompare] = useState<number[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(CART_KEY);
      if (raw) setCart(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {
      /* ignore */
    }
  }, [cart]);

  const productById = useCallback((id: number) => PRODUCTS.find((p) => p.id === id), []);

  const addToCart = useCallback(
    (id: number) => {
      setCart((prev) => {
        const found = prev.find((l) => l.productId === id);
        if (found) return prev.map((l) => (l.productId === id ? { ...l, qty: l.qty + 1 } : l));
        return [...prev, { productId: id, qty: 1 }];
      });
      toast.success(`تمت إضافة ${productById(id)?.name ?? "المنتج"} إلى السلة`);
    },
    [productById],
  );

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((l) => l.productId !== id));
  }, []);

  const setQty = useCallback((id: number, qty: number) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((l) => l.productId !== id)
        : prev.map((l) => (l.productId === id ? { ...l, qty } : l)),
    );
  }, []);

  const toggleCompare = useCallback((id: number) => {
    setCompare((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) {
        toast.error("يمكنك مقارنة 3 منتجات كحد أقصى");
        return prev;
      }
      return [...prev, id];
    });
  }, []);

  const value = useMemo<StoreState>(() => {
    const cartCount = cart.reduce((s, l) => s + l.qty, 0);
    const cartTotal = cart.reduce(
      (s, l) => s + l.qty * (PRODUCTS.find((p) => p.id === l.productId)?.price ?? 0),
      0,
    );
    return {
      cart,
      cartCount,
      cartTotal,
      cartOpen,
      compare,
      addToCart,
      removeFromCart,
      setQty,
      clearCart: () => setCart([]),
      setCartOpen,
      toggleCompare,
      clearCompare: () => setCompare([]),
      productById,
    };
  }, [cart, cartOpen, compare, addToCart, removeFromCart, setQty, toggleCompare, productById]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
