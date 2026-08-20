export type Anime = {
  id: number; title: string; studio: string; episodes: number | string; image: string; genre: string;
  rating: number; releaseYear: number;
  streamingSites: {
    legal: { name: string; url: string; price: string; quality: string; arabicSub: boolean }[];
    illegal: { name: string; url: string; warning: string; risk: string }[];
  };
  officialSites: { name: string; url: string }[];
  socialMedia: { twitter?: string; instagram?: string; youtube?: string };
  description: string;
};

export const ANIME: Anime[] = [
  {
    id: 0, title: "Attack on Titan", studio: "MAPPA", episodes: 87, image: "🗡️", genre: "Action", rating: 9.1, releaseYear: 2013,
    streamingSites: {
      legal: [
        { name: "Crunchyroll", url: "https://www.crunchyroll.com", price: "مجاني (مع إعلانات) / $7.99/شهر", quality: "1080p", arabicSub: true },
        { name: "Netflix", url: "https://www.netflix.com", price: "$9.99/شهر", quality: "4K", arabicSub: true },
        { name: "Funimation", url: "https://www.funimation.com", price: "$5.99/شهر", quality: "1080p", arabicSub: false }
      ],
      illegal: [
        { name: "9anime", url: "https://9anime.to", warning: "إعلانات مخادعة كثيرة، احتمال وجود برمجيات خبيثة", risk: "عالي" },
        { name: "Gogoanime", url: "https://gogoanime.io", warning: "نوافذ منبثقة مزعجة، جودة متفاوتة", risk: "متوسط" },
        { name: "AnimeHeaven", url: "https://animeheaven.ru", warning: "إعلانات غير مناسبة، بطء في التحميل", risk: "متوسط" }
      ]
    },
    officialSites: [
      { name: "موقع رسمي", url: "https://shingeki.tv" },
      { name: "Twitter رسمي", url: "https://twitter.com/anime_shingeki" }
    ],
    socialMedia: { twitter: "@anime_shingeki", instagram: "@shingeki.tv" },
    description: "البشرية محاصرة داخل جدران ضخمة لحمايتها من عملاقة آكلة للبشر. Eren Yeager ينضم للجيش لمحاربة العمالقة."
  },
  {
    id: 1, title: "Demon Slayer", studio: "Ufotable", episodes: 55, image: "⚔️", genre: "Action", rating: 8.7, releaseYear: 2019,
    streamingSites: {
      legal: [
        { name: "Crunchyroll", url: "https://www.crunchyroll.com", price: "مجاني (مع إعلانات) / $7.99/شهر", quality: "1080p", arabicSub: true },
        { name: "Netflix", url: "https://www.netflix.com", price: "$9.99/شهر", quality: "4K", arabicSub: true }
      ],
      illegal: [
        { name: "9anime", url: "https://9anime.to", warning: "إعلانات مخادعة", risk: "عالي" },
        { name: "Zoro.to", url: "https://zoro.to", warning: "تغيير الدومينات باستمرار", risk: "متوسط" }
      ]
    },
    officialSites: [
      { name: "موقع رسمي", url: "https://kimetsu.com" }
    ],
    socialMedia: { twitter: "@kimetsu_off" },
    description: "Tanjiro يصبح قاتل شياطين لإنقاذ أخته Nezuko التي تحولت إلى شيطان."
  },
  {
    id: 2, title: "One Piece", studio: "Toei Animation", episodes: "1000+", image: "🏴‍☠️", genre: "Adventure", rating: 8.9, releaseYear: 1999,
    streamingSites: {
      legal: [
        { name: "Crunchyroll", url: "https://www.crunchyroll.com", price: "مجاني (مع إعلانات) / $7.99/شهر", quality: "1080p", arabicSub: true },
        { name: "Netflix", url: "https://www.netflix.com", price: "$9.99/شهر", quality: "1080p", arabicSub: true },
        { name: "Funimation", url: "https://www.funimation.com", price: "$5.99/شهر", quality: "1080p", arabicSub: false }
      ],
      illegal: [
        { name: "9anime", url: "https://9anime.to", warning: "إعلانات كثيرة", risk: "عالي" },
        { name: "Gogoanime", url: "https://gogoanime.io", warning: "جودة متفاوتة", risk: "متوسط" }
      ]
    },
    officialSites: [
      { name: "موقع رسمي", url: "https://one-piece.com" },
      { name: "YouTube رسمي", url: "https://youtube.com/onepiece" }
    ],
    socialMedia: { twitter: "@Eiichiro_Staff", youtube: "OnePiece" },
    description: "Luffy وطاقمه يبحثون عن كنز One Piece ليصبحوا ملوك القراصنة."
  },
  {
    id: 3, title: "Jujutsu Kaisen", studio: "MAPPA", episodes: 47, image: "👊", genre: "Action", rating: 8.6, releaseYear: 2020,
    streamingSites: {
      legal: [
        { name: "Crunchyroll", url: "https://www.crunchyroll.com", price: "مجاني (مع إعلانات) / $7.99/شهر", quality: "1080p", arabicSub: true }
      ],
      illegal: [
        { name: "9anime", url: "https://9anime.to", warning: "إعلانات مخادعة", risk: "عالي" }
      ]
    },
    officialSites: [
      { name: "موقع رسمي", url: "https://jujutsukaisen.jp" }
    ],
    socialMedia: { twitter: "@jujutsu_PR" },
    description: "Yuji Itadori يبتلع إصبعاً ملعوناً وينضم لمدرسة Jujutsu لمحاربة الأرواح الملعونة."
  },
  {
    id: 4, title: "Spy x Family", studio: "Wit Studio & CloverWorks", episodes: 37, image: "🕵️", genre: "Comedy", rating: 8.5, releaseYear: 2022,
    streamingSites: {
      legal: [
        { name: "Crunchyroll", url: "https://www.crunchyroll.com", price: "مجاني (مع إعلانات) / $7.99/شهر", quality: "1080p", arabicSub: true },
        { name: "Netflix", url: "https://www.netflix.com", price: "$9.99/شهر", quality: "1080p", arabicSub: true }
      ],
      illegal: [
        { name: "9anime", url: "https://9anime.to", warning: "إعلانات", risk: "عالي" }
      ]
    },
    officialSites: [
      { name: "موقع رسمي", url: "https://spy-family.net" }
    ],
    socialMedia: { twitter: "@spyfamily_anime" },
    description: "جاسوس يتبنى فتاة قارئة أفكار ويتزوج قاتلة محترفة دون أن يعرفا سر بعضهما."
  }
];