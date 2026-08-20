export type PostComment = { user: string; text: string };

export type CommunityPost = {
  id: number;
  user: string;
  avatar: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  comments: PostComment[];
  date: string;
};

export const COMMUNITY_CATEGORIES = ["أنمي", "ألعاب", "أنظمة", "تقنية"] as const;

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 1,
    user: "أحمد",
    avatar: "أ",
    title: "أفضل توزيعة Linux للمبتدئين؟",
    content:
      "أريد الانتقال من Windows إلى Linux. ما هي أفضل توزيعة للمبتدئين وهل Mint أفضل من Ubuntu؟",
    category: "أنظمة",
    likes: 24,
    comments: [
      { user: "سارة", text: "Mint أفضل لأنها أخف وأشبه بـ Windows." },
      { user: "خالد", text: "Ubuntu دعمها أطول والمجتمع أكبر." },
    ],
    date: "2026-08-15",
  },
  {
    id: 2,
    user: "ليلى",
    avatar: "ل",
    title: "Elden Ring تستحق الشراء؟",
    content: "شفت إعلانات كثيرة عن Elden Ring. هل هي صعبة جداً للاعب عادي؟",
    category: "ألعاب",
    likes: 18,
    comments: [{ user: "عمر", text: "نعم تستحق! الصعوبة ممتعة وليست unfair." }],
    date: "2026-08-14",
  },
  {
    id: 3,
    user: "محمد",
    avatar: "م",
    title: "مواقع أنمي قانونية مع ترجمة عربية",
    content: "جمعت لكم قائمة بأفضل المواقع القانونية لمشاهدة الأنمي مع ترجمة عربية.",
    category: "أنمي",
    likes: 45,
    comments: [{ user: "نور", text: "Crunchyroll أفضلهم بس يحتاج VPN أحياناً." }],
    date: "2026-08-13",
  },
  {
    id: 4,
    user: "فاطمة",
    avatar: "ف",
    title: "أفضل أداة AI للكتابة بالعربية؟",
    content: "جربت ChatGPT وClaude. أي أداة تعطي نتائج أفضل باللغة العربية؟",
    category: "تقنية",
    likes: 12,
    comments: [{ user: "يوسف", text: "Claude 3.5 أفضل بالعربي حالياً." }],
    date: "2026-08-12",
  },
];
