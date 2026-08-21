export type FreelancePlatform = {
  name: string;
  type: string;
  description: string;
  image: string;
  url: string;
  fees: string;
};

export const FREELANCE_PLATFORMS: FreelancePlatform[] = [
  { name: "Mostaql", type: "عربي", description: "أكبر منصة عمل حر عربية مع آلاف المشاريع اليومية.", image: "🇸🇦", url: "mostaql.com", fees: "20% على المستقل" },
  { name: "Upwork", type: "عالمي", description: "منصة عالمية ضخمة للعمل الحر في كل المجالات.", image: "🌍", url: "upwork.com", fees: "5-20% على المستقل" },
  { name: "Fiverr", type: "عالمي", description: "خدمات مصغرة تبدأ من 5$ في التصميم والبرمجة والتسويق.", image: "💰", url: "fiverr.com", fees: "20% على البائع" },
  { name: "Khamsat", type: "عربي", description: "خدمات عربية مصغرة تبدأ من 5$ — الأشهر في الوطن العربي.", image: "🇵🇸", url: "khamsat.com", fees: "20% على البائع" },
  { name: "Freelancer", type: "عالمي", description: "منافسات ومشاريع مع دعم 50+ مليون مستخدم.", image: "🏆", url: "freelancer.com", fees: "10% على المستقل" },
  { name: "Nafezly", type: "عربي", description: "منصة عربية للمستقلين مع تركيز على التقنية والتصميم.", image: "🇪🇬", url: "nafezly.com", fees: "15% على المستقل" },
];
