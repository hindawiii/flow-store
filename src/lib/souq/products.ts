export type PriceQuote = { country: string; price: string; store: string };
export type TrustedSource = { name: string; url: string };
export type SocialLinks = { facebook?: string; instagram?: string; twitter?: string; youtube?: string };
export type Product = {
  id: number; name: string; price: number; oldPrice: number | null; image: string;
  category: string; badge: string | null; rating: number; reviews: number;
  manufacturer: string; country: string; productType: string; classification: string;
  availableArab: boolean; availableInUserCountry: boolean;
  officialWebsite: string; socialLinks: SocialLinks;
  priceComparison: PriceQuote[]; trustedSources: TrustedSource[]; description: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 1, name: "مجسم ليفاي (Attack on Titan)", price: 45, oldPrice: 55, image: "🗡️", category: "مجسمات", badge: "خصم", rating: 4.8, reviews: 124,
    manufacturer: "Good Smile Company", country: "اليابان 🇯🇵", productType: "مجسم PVC", classification: "أنمي / أكشن",
    availableArab: true, availableInUserCountry: true,
    officialWebsite: "https://www.goodsmile.info",
    socialLinks: { facebook: "https://facebook.com/goodsmile", instagram: "https://instagram.com/goodsmile", twitter: "https://twitter.com/goodsmile" },
    priceComparison: [
      { country: "🇸🇦 السعودية", price: "175 ر.س", store: "Amazon.sa" },
      { country: "🇦🇪 الإمارات", price: "171 د.إ", store: "Noon" },
      { country: "🇪🇬 مصر", price: "2,100 ج.م", store: "Jumia" },
      { country: "🇺🇸 أمريكا", price: "$45", store: "Amazon.com" },
      { country: "🇯🇵 اليابان", price: "¥6,800", store: "AmiAmi" }
    ],
    trustedSources: [
      { name: "MyFigureCollection", url: "https://myfigurecollection.net" },
      { name: "Crunchyroll Store", url: "https://store.crunchyroll.com" },
      { name: "Anime-Planet", url: "https://www.anime-planet.com" }
    ],
    description: "مجسم فاخر لشخصية ليفاي أكرمان من أنمي Attack on Titan بتفاصيل دقيقة وطلاء عالي الجودة. الارتفاع 17 سم."
  },
  {
    id: 2, name: "تيشيرت One Piece", price: 25, oldPrice: null, image: "👕", category: "ملابس", badge: "جديد", rating: 4.5, reviews: 89,
    manufacturer: "Crunchyroll Store", country: "أمريكا 🇺🇸", productType: "ملابس قطنية", classification: "أنمي / كاجوال",
    availableArab: true, availableInUserCountry: true,
    officialWebsite: "https://store.crunchyroll.com",
    socialLinks: { facebook: "https://facebook.com/crunchyroll", instagram: "https://instagram.com/crunchyroll", twitter: "https://twitter.com/crunchyroll" },
    priceComparison: [
      { country: "🇸🇦 السعودية", price: "94 ر.س", store: "Amazon.sa" },
      { country: "🇦🇪 الإمارات", price: "92 د.إ", store: "Noon" },
      { country: "🇪🇬 مصر", price: "775 ج.م", store: "Jumia" },
      { country: "🇺🇸 أمريكا", price: "$25", store: "Crunchyroll Store" }
    ],
    trustedSources: [
      { name: "Crunchyroll Store", url: "https://store.crunchyroll.com" },
      { name: "Hot Topic", url: "https://www.hottopic.com" }
    ],
    description: "تيشيرت قطني 100% بطباعة عالية الجودة لشخصيات One Piece. متوفر بمقاسات S إلى XXL."
  },
  {
    id: 3, name: "بوستر Naruto Shippuden", price: 15, oldPrice: null, image: "🖼️", category: "بوسترات", badge: null, rating: 4.7, reviews: 56,
    manufacturer: "PosterMyWall", country: "أمريكا 🇺🇸", productType: "بوستر ورقي", classification: "ديكور / أنمي",
    availableArab: true, availableInUserCountry: true,
    officialWebsite: "https://www.postermywall.com",
    socialLinks: { facebook: "https://facebook.com/postermywall", instagram: "https://instagram.com/postermywall" },
    priceComparison: [
      { country: "🇸🇦 السعودية", price: "56 ر.س", store: "Amazon.sa" },
      { country: "🇦🇪 الإمارات", price: "55 د.إ", store: "Noon" },
      { country: "🇪🇬 مصر", price: "465 ج.م", store: "Jumia" },
      { country: "🇺🇸 أمريكا", price: "$15", store: "Amazon.com" }
    ],
    trustedSources: [
      { name: "Amazon Reviews", url: "https://amazon.com" },
      { name: "Reddit r/Naruto", url: "https://reddit.com/r/Naruto" }
    ],
    description: "بوستر Naruto Shippuden مقاس 24×36 بوصة بطباعة عالية الدقة على ورق لامع مقاوم للماء."
  },
  {
    id: 4, name: "سماعات رأس لاسلكية", price: 35, oldPrice: 50, image: "🎧", category: "تقنية", badge: "خصم", rating: 4.6, reviews: 203,
    manufacturer: "SoundCore (Anker)", country: "الصين 🇨🇳", productType: "إكسسوارات صوت", classification: "تقنية / صوت",
    availableArab: true, availableInUserCountry: true,
    officialWebsite: "https://www.soundcore.com",
    socialLinks: { facebook: "https://facebook.com/soundcore", instagram: "https://instagram.com/soundcoreaudio", twitter: "https://twitter.com/soundcoreaudio" },
    priceComparison: [
      { country: "🇸🇦 السعودية", price: "131 ر.س", store: "Amazon.sa" },
      { country: "🇦🇪 الإمارات", price: "128 د.إ", store: "Noon" },
      { country: "🇪🇬 مصر", price: "1,085 ج.م", store: "Jumia" },
      { country: "🇺🇸 أمريكا", price: "$35", store: "Amazon.com" }
    ],
    trustedSources: [
      { name: "RTings", url: "https://www.rtings.com" },
      { name: "What Hi-Fi?", url: "https://www.whathifi.com" }
    ],
    description: "سماعات رأس لاسلكية بتقنية Bluetooth 5.3، عمر بطارية 40 ساعة، وصوت محيطي."
  },
  {
    id: 5, name: "مجسم Goku (Dragon Ball)", price: 50, oldPrice: null, image: "🔥", category: "مجسمات", badge: "جديد", rating: 4.9, reviews: 312,
    manufacturer: "Bandai Namco", country: "اليابان 🇯🇵", productType: "مجسم PVC", classification: "أنمي / أكشن",
    availableArab: true, availableInUserCountry: true,
    officialWebsite: "https://www.bandainamco.co.jp",
    socialLinks: { facebook: "https://facebook.com/bandainamco", instagram: "https://instagram.com/bandainamco", twitter: "https://twitter.com/bandainamco" },
    priceComparison: [
      { country: "🇸🇦 السعودية", price: "188 ر.س", store: "Amazon.sa" },
      { country: "🇦🇪 الإمارات", price: "184 د.إ", store: "Noon" },
      { country: "🇪🇬 مصر", price: "2,330 ج.م", store: "Jumia" },
      { country: "🇺🇸 أمريكا", price: "$50", store: "Amazon.com" },
      { country: "🇯🇵 اليابان", price: "¥7,500", store: "AmiAmi" }
    ],
    trustedSources: [
      { name: "MyFigureCollection", url: "https://myfigurecollection.net" },
      { name: "Crunchyroll Store", url: "https://store.crunchyroll.com" }
    ],
    description: "مجسم Goku Ultra Instinct من Dragon Ball Super. ارتفاع 20 سم مع قاعدة مضيئة."
  },
  {
    id: 6, name: "ساعة ذكية", price: 80, oldPrice: null, image: "⌚", category: "تقنية", badge: null, rating: 4.4, reviews: 178,
    manufacturer: "Xiaomi", country: "الصين 🇨🇳", productType: "ساعة ذكية", classification: "تقنية / صحة",
    availableArab: true, availableInUserCountry: true,
    officialWebsite: "https://www.mi.com",
    socialLinks: { facebook: "https://facebook.com/Xiaomi", instagram: "https://instagram.com/xiaomi", twitter: "https://twitter.com/xiaomi" },
    priceComparison: [
      { country: "🇸🇦 السعودية", price: "300 ر.س", store: "Amazon.sa" },
      { country: "🇦🇪 الإمارات", price: "294 د.إ", store: "Noon" },
      { country: "🇪🇬 مصر", price: "2,480 ج.م", store: "Jumia" },
      { country: "🇺🇸 أمريكا", price: "$80", store: "Amazon.com" }
    ],
    trustedSources: [
      { name: "GSMArena", url: "https://www.gsmarena.com" },
      { name: "TechRadar", url: "https://www.techradar.com" }
    ],
    description: "ساعة ذكية بشاشة AMOLED، مقاومة للماء IP68، تتبع اللياقة البدنية، وعمر بطارية 14 يوم."
  },
  {
    id: 7, name: "حافظة هاتف أنمي", price: 12, oldPrice: null, image: "📱", category: "إكسسوارات", badge: null, rating: 4.3, reviews: 67,
    manufacturer: "CaseTify", country: "هونغ كونغ 🇭🇰", productType: "إكسسوارات هاتف", classification: "أنمي / تقنية",
    availableArab: false, availableInUserCountry: false,
    officialWebsite: "https://www.casetify.com",
    socialLinks: { facebook: "https://facebook.com/casetify", instagram: "https://instagram.com/casetify", twitter: "https://twitter.com/casetify" },
    priceComparison: [
      { country: "🇸🇦 السعودية", price: "غير متوفر", store: "—" },
      { country: "🇦🇪 الإمارات", price: "44 د.إ", store: "Amazon.ae" },
      { country: "🇪🇬 مصر", price: "372 ج.م", store: "Jumia" },
      { country: "🇺🇸 أمريكا", price: "$12", store: "CaseTify.com" }
    ],
    trustedSources: [
      { name: "CaseTify Official", url: "https://www.casetify.com" }
    ],
    description: "حافظة هاتف بتصاميم أنمي حصريّة. حماية عسكرية ضد السقوط."
  },
  {
    id: 8, name: "كيبورد ميكانيكي ألعاب", price: 65, oldPrice: 80, image: "⌨️", category: "ألعاب", badge: "خصم", rating: 4.8, reviews: 145,
    manufacturer: "Redragon", country: "الصين 🇨🇳", productType: "كيبورد ألعاب", classification: "ألعاب / تقنية",
    availableArab: true, availableInUserCountry: true,
    officialWebsite: "https://www.redragon.com",
    socialLinks: { facebook: "https://facebook.com/redragon", instagram: "https://instagram.com/redragon", twitter: "https://twitter.com/redragon" },
    priceComparison: [
      { country: "🇸🇦 السعودية", price: "244 ر.س", store: "Amazon.sa" },
      { country: "🇦🇪 الإمارات", price: "239 د.إ", store: "Noon" },
      { country: "🇪🇬 مصر", price: "2,015 ج.م", store: "Jumia" },
      { country: "🇺🇸 أمريكا", price: "$65", store: "Amazon.com" }
    ],
    trustedSources: [
      { name: "RTings", url: "https://www.rtings.com" },
      { name: "TechPowerUp", url: "https://www.techpowerup.com" }
    ],
    description: "كيبورد ميكانيكي RGB بمفاتيح Red Switch، إضاءة قابلة للتخصيص، وبرنامج Macro."
  }
];
