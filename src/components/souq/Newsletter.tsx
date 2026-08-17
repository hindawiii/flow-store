import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="bg-gradient-to-b from-background to-card py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Mail className="size-6" />
        </div>
        <h2 className="mb-3 text-3xl font-black text-foreground">اشترك في النشرة البريدية</h2>
        <p className="mb-8 text-muted-foreground">
          أحدث المنتجات، العروض، أدوات الذكاء الاصطناعي وأخبار الأنمي — مرة واحدة أسبوعياً.
        </p>
        <form
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="بريدك الإلكتروني"
            aria-label="بريدك الإلكتروني"
            className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
          />
          <button
            type="submit"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            اشترك
          </button>
        </form>
      </div>
    </section>
  );
}
