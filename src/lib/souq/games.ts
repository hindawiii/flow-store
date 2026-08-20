export type GameReq = { os: string; cpu: string; ram: string; gpu: string; storage: string };
export type Game = {
  id: number; name: string; platform: string; price: number; free: boolean; image: string; genre: string;
  officialWebsite: string;
  storeLinks: { store: string; price: string; url: string }[];
  versions: { name: string; releaseDate: string; pros: string[]; cons: string[]; differences: string }[];
  systemRequirements: { min: GameReq; rec: GameReq };
  developer: string; publisher: string; releaseDate: string;
  reviews: { source: string; score: string }[];
  userReviews: { user: string; avatar: string; rating: number; date: string; text: string }[];
  description: string;
};

export const GAMES: Game[] = [
  {
    id: 0, name: "Elden Ring", platform: "PC/PS/Xbox", price: 59.99, free: false, image: "⚔️", genre: "RPG",
    officialWebsite: "https://www.eldenring.com",
    storeLinks: [
      { store: "Steam", price: "$59.99", url: "https://store.steampowered.com/app/1245620" },
      { store: "PlayStation Store", price: "$59.99", url: "https://store.playstation.com" },
      { store: "Xbox Store", price: "$59.99", url: "https://www.xbox.com/games/store" }
    ],
    versions: [
      { name: "Elden Ring Standard", releaseDate: "2022", pros: ["اللعبة الأساسية الكاملة", "سعر مناسب"], cons: ["لا يتضمن DLC"], differences: "الإصدار الأساسي فقط" },
      { name: "Elden Ring Shadow of the Erdtree Edition", releaseDate: "2024", pros: ["يتضمن DLC ضخم", "محتوى إضافي 30+ ساعة"], cons: ["أغلى"], differences: "يتضمن Shadow of the Erdtree DLC" }
    ],
    systemRequirements: {
      min: { os: "Windows 10", cpu: "Intel i5-8400 / Ryzen 3 3300X", ram: "12GB", gpu: "GTX 1060 3GB / RX 580 4GB", storage: "60GB" },
      rec: { os: "Windows 11", cpu: "Intel i7-8700K / Ryzen 5 3600X", ram: "16GB", gpu: "RTX 2070 / RX 6700 XT", storage: "60GB SSD" }
    },
    developer: "FromSoftware", publisher: "Bandai Namco", releaseDate: "25 فبراير 2022",
    reviews: [
      { source: "Metacritic", score: "96/100" },
      { source: "IGN", score: "10/10" },
      { source: "Steam", score: "إيجابي جداً" }
    ],
    userReviews: [
      { user: "عمر", avatar: "ع", rating: 5, date: "2026-08-10", text: "تحفة فنية! العالم المفتوح والتصميم الفني لا يُضاهى." }
    ],
    description: "لعبة RPG عالم مفتوح من FromSoftware مع عالم مظلم وأسطوري وتحديات صعبة."
  },
  {
    id: 1, name: "Genshin Impact", platform: "PC/PS/Mobile", price: 0, free: true, image: "🌸", genre: "RPG",
    officialWebsite: "https://genshin.hoyoverse.com",
    storeLinks: [
      { store: "Official Launcher", price: "مجاني", url: "https://genshin.hoyoverse.com" },
      { store: "PlayStation Store", price: "مجاني", url: "https://store.playstation.com" },
      { store: "App Store", price: "مجاني", url: "https://apps.apple.com" },
      { store: "Google Play", price: "مجاني", url: "https://play.google.com" }
    ],
    versions: [
      { name: "Genshin Impact (عالمي)", releaseDate: "2020", pros: ["تحديثات متكررة", "محتوى ضخم"], cons: ["Gacha system", "يحتاج grinding"], differences: "الإصدار الوحيد المتاح عالمياً" }
    ],
    systemRequirements: {
      min: { os: "Windows 7", cpu: "Intel i5 / equivalent", ram: "8GB", gpu: "GT 1030", storage: "30GB" },
      rec: { os: "Windows 10/11", cpu: "Intel i7 / Ryzen 5", ram: "16GB", gpu: "GTX 1060", storage: "50GB SSD" }
    },
    developer: "HoYoverse", publisher: "HoYoverse", releaseDate: "28 سبتمبر 2020",
    reviews: [
      { source: "Metacritic", score: "81/100" },
      { source: "IGN", score: "9/10" }
    ],
    userReviews: [
      { user: "ليلى", avatar: "ل", rating: 4, date: "2026-08-05", text: "لعبة رائعة لكن نظام Gacha مزعج أحياناً." }
    ],
    description: "لعبة RPG عالم مفتوح مجانية مع عالم Teyvat الساحر وشخصيات متنوعة."
  },
  {
    id: 2, name: "Valorant", platform: "PC", price: 0, free: true, image: "🔫", genre: "Shooter",
    officialWebsite: "https://playvalorant.com",
    storeLinks: [
      { store: "Riot Games", price: "مجاني", url: "https://playvalorant.com" }
    ],
    versions: [
      { name: "Valorant", releaseDate: "2020", pros: ["مجاني", "منافسات eSports"], cons: [" Vanguard مثير للجدل"], differences: "إصدار واحد فقط" }
    ],
    systemRequirements: {
      min: { os: "Windows 10", cpu: "Intel i3-4150", ram: "4GB", gpu: "Intel HD 3000", storage: "20GB" },
      rec: { os: "Windows 10/11", cpu: "Intel i3-4150+", ram: "4GB", gpu: "GTX 1050 Ti", storage: "20GB SSD" }
    },
    developer: "Riot Games", publisher: "Riot Games", releaseDate: "2 يونيو 2020",
    reviews: [
      { source: "Metacritic", score: "80/100" },
      { source: "IGN", score: "9/10" }
    ],
    userReviews: [
      { user: "يوسف", avatar: "ي", rating: 5, date: "2026-08-03", text: "أفضل shooter تكتيكي مجاني!" }
    ],
    description: "لعبة shooter تكتيكي 5v5 من Riot Games مع قدرات فريدة لكل شخصية."
  },
  {
    id: 3, name: "Minecraft", platform: "All", price: 29.99, free: false, image: "⛏️", genre: "Sandbox",
    officialWebsite: "https://www.minecraft.net",
    storeLinks: [
      { store: "Minecraft.net", price: "$29.99", url: "https://www.minecraft.net" },
      { store: "Microsoft Store", price: "$29.99", url: "https://www.microsoft.com/store" }
    ],
    versions: [
      { name: "Java Edition", releaseDate: "2011", pros: ["Mods غير محدودة", "سيرفرات مخصصة", "تحديثات أولاً"], cons: ["لا يدعم cross-play مع Bedrock", "يحتاج Java"], differences: "للـ PC فقط، دعم Mods كامل" },
      { name: "Bedrock Edition", releaseDate: "2017", pros: ["Cross-play", "يعمل على كل المنصات", "أداء أفضل"], cons: ["Mods محدودة", "سيرفرات Realms مدفوعة"], differences: "يعمل على PC/Console/Mobile مع cross-play" },
      { name: "Education Edition", releaseDate: "2016", pros: ["مجاني للمدارس", "أدوات تعليمية"], cons: ["للمدارس فقط", "محدود"], differences: "للاستخدام التعليمي فقط" }
    ],
    systemRequirements: {
      min: { os: "Windows 10", cpu: "Intel Core i3-3210", ram: "4GB", gpu: "Intel HD 4000", storage: "1GB" },
      rec: { os: "Windows 10/11", cpu: "Intel Core i5-4690", ram: "8GB", gpu: "GTX 700 Series", storage: "4GB SSD" }
    },
    developer: "Mojang Studios", publisher: "Microsoft", releaseDate: "18 نوفمبر 2011",
    reviews: [
      { source: "Metacritic", score: "93/100" },
      { source: "IGN", score: "9/10" }
    ],
    userReviews: [
      { user: "نور", avatar: "ن", rating: 5, date: "2026-08-01", text: "لعبة الخالدة! Java أفضل للـ Mods." }
    ],
    description: "لعبة sandbox الأشهر في التاريخ مع عوالم لانهائية وإبداع غير محدود."
  },
  {
    id: 4, name: "Cyberpunk 2077", platform: "PC/PS/Xbox", price: 59.99, free: false, image: "🌃", genre: "RPG",
    officialWebsite: "https://www.cyberpunk.net",
    storeLinks: [
      { store: "Steam", price: "$59.99", url: "https://store.steampowered.com/app/1091500" },
      { store: "GOG", price: "$59.99", url: "https://www.gog.com/game/cyberpunk_2077" },
      { store: "PlayStation Store", price: "$59.99", url: "https://store.playstation.com" }
    ],
    versions: [
      { name: "Cyberpunk 2077", releaseDate: "2020", pros: ["عالم Night City الرائع", "قصة عميقة"], cons: ["bugs عند الإطلاق", "يحتاج جهاز قوي"], differences: "الإصدار الأصلي" },
      { name: "Phantom Liberty Edition", releaseDate: "2023", pros: ["يتضمن DLC Phantom Liberty", "تحديث 2.0 مجاني"], cons: ["أغلى"], differences: "يتضمن التوسعة الكبرى Phantom Liberty" }
    ],
    systemRequirements: {
      min: { os: "Windows 10", cpu: "Intel i5-3570K / Ryzen 3 2300X", ram: "8GB", gpu: "GTX 970 / RX 470", storage: "70GB" },
      rec: { os: "Windows 11", cpu: "Intel i7-12700 / Ryzen 7 7800X3D", ram: "16GB", gpu: "RTX 4060 / RX 7600 XT", storage: "70GB SSD" }
    },
    developer: "CD Projekt Red", publisher: "CD Projekt", releaseDate: "10 ديسمبر 2020",
    reviews: [
      { source: "Metacritic", score: "86/100" },
      { source: "IGN", score: "9/10" }
    ],
    userReviews: [
      { user: "رامي", avatar: "ر", rating: 4, date: "2026-08-07", text: "بعد التحديثات أصبحت رائعة، Phantom Liberty مذهل." }
    ],
    description: "لعبة RPG عالم مفتوح في مستقبل Cyberpunk مع قصة عميقة وتقنيات Ray Tracing."
  }
];