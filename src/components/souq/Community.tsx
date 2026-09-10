import { useMemo, useState } from "react";
import { Heart, MessageCircle } from "lucide-react";
import { toast } from "sonner";

import { usePersistedState } from "@/hooks/use-persisted-state";
import {
  COMMUNITY_CATEGORIES,
  COMMUNITY_POSTS,
  type CommunityPost,
} from "@/lib/souq/community";
import { cn } from "@/lib/utils";

export function Community() {
  const [posts, setPosts] = usePersistedState<CommunityPost[]>(
    "souqbyte:posts",
    COMMUNITY_POSTS,
  );
  const [filter, setFilter] = useState<string>("الكل");
  const [liked, setLiked] = usePersistedState<number[]>("souqbyte:liked", []);
  const [openComments, setOpenComments] = useState<number[]>([]);
  const [form, setForm] = useState({ title: "", category: "", content: "" });

  const filtered = useMemo(
    () => (filter === "الكل" ? posts : posts.filter((p) => p.category === filter)),
    [posts, filter],
  );

  const trending = useMemo(
    () => [...posts].sort((a, b) => b.likes - a.likes).slice(0, 3),
    [posts],
  );

  const toggleLike = (id: number) => {
    const isLiked = liked.includes(id);
    setLiked((v) => (isLiked ? v.filter((x) => x !== id) : [...v, id]));
    setPosts((v) =>
      v.map((p) => (p.id === id ? { ...p, likes: p.likes + (isLiked ? -1 : 1) } : p)),
    );
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.category || !form.content) return;
    setPosts((v) => [
      {
        id: Date.now(),
        user: "أنت",
        avatar: "أ",
        title: form.title,
        category: form.category,
        content: form.content,
        likes: 0,
        comments: [],
        date: new Date().toISOString().slice(0, 10),
      },
      ...v,
    ]);
    setForm({ title: "", category: "", content: "" });
    toast.success("تم نشر منشورك في المجتمع");
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary";

  return (
    <section id="community" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-center text-3xl font-black text-foreground">مجتمع سوق بايت</h2>
        <p className="mb-10 text-center text-muted-foreground">
          نقاشات، مراجعات، وحلول من مجتمعنا العربي
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-wrap gap-2">
              {["الكل", ...COMMUNITY_CATEGORIES].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={cn(
                    "rounded-lg border px-4 py-2 text-sm font-bold transition-colors",
                    filter === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filtered.map((post) => (
                <article key={post.id} className="surface-card p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 font-bold text-primary">
                      {post.avatar}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-foreground">{post.user}</p>
                      <p className="font-latin text-xs text-muted-foreground">{post.date}</p>
                    </div>
                    <span className="ms-auto rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="mb-1 font-bold text-foreground">{post.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{post.content}</p>

                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => toggleLike(post.id)}
                      className={cn(
                        "inline-flex items-center gap-1.5 text-sm font-bold transition-colors",
                        liked.includes(post.id)
                          ? "text-accent"
                          : "text-muted-foreground hover:text-accent",
                      )}
                    >
                      <Heart
                        className={cn("size-4", liked.includes(post.id) && "fill-accent")}
                      />
                      {post.likes}
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenComments((v) =>
                          v.includes(post.id) ? v.filter((x) => x !== post.id) : [...v, post.id],
                        )
                      }
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
                    >
                      <MessageCircle className="size-4" />
                      {post.comments.length} تعليق
                    </button>
                  </div>

                  {openComments.includes(post.id) && (
                    <div className="mt-4 space-y-2 border-t border-border pt-4">
                      {post.comments.length === 0 && (
                        <p className="text-sm text-muted-foreground">لا توجد تعليقات بعد.</p>
                      )}
                      {post.comments.map((c, i) => (
                        <div key={i} className="rounded-lg bg-background/60 p-3">
                          <p className="text-xs font-bold text-primary">{c.user}</p>
                          <p className="text-sm text-muted-foreground">{c.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="surface-card p-6">
              <h3 className="mb-4 font-bold text-foreground">أضف منشوراً جديداً</h3>
              <form onSubmit={submit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="عنوان المنشور"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className={inputClass}
                />
                <select
                  required
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className={inputClass}
                >
                  <option value="">اختر الفئة</option>
                  {COMMUNITY_CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <textarea
                  required
                  rows={3}
                  placeholder="محتوى المنشور..."
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  className={inputClass}
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  نشر
                </button>
              </form>
            </div>

            <div className="surface-card p-6">
              <h3 className="mb-4 font-bold text-foreground">🔥 الأكثر تفاعلاً</h3>
              <div className="space-y-3">
                {trending.map((p) => (
                  <div key={p.id} className="rounded-lg border border-border p-3">
                    <p className="text-sm font-bold text-foreground">{p.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {p.user} · {p.likes} إعجاب
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
