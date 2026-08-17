import { useEffect, useState } from "react";
import { Bell, Menu, Search, ShoppingCart, User, X } from "lucide-react";

import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/souq/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-18 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4">
        <a href="#top" aria-label="سوق بايت">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-bold text-muted-foreground transition-colors hover:bg-card hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <IconButton label="بحث">
            <Search className="size-5" />
          </IconButton>
          <IconButton label="الإشعارات" badge="3">
            <Bell className="size-5" />
          </IconButton>
          <IconButton label="السلة" badge="0">
            <ShoppingCart className="size-5" />
          </IconButton>
          <button
            type="button"
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <User className="size-4" />
            دخول
          </button>
          <button
            type="button"
            aria-label="القائمة"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-border bg-card/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-bold text-muted-foreground transition-colors hover:bg-background hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function IconButton({
  children,
  label,
  badge,
}: {
  children: React.ReactNode;
  label: string;
  badge?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="relative inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {children}
      {badge && (
        <span className="font-latin absolute -top-1.5 -left-1.5 inline-flex min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[0.6rem] font-bold text-accent-foreground">
          {badge}
        </span>
      )}
    </button>
  );
}
