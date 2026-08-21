export type NewsItem = {
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
};

export const NEWS: NewsItem[] = [
  { title: "Google تطلق Gemini 2.5 مع قدرات برمجية متقدمة", category: "AI", date: "14 أغسطس", image: "🤖", description: "Gemini 2.5 يتفوق على GPT-5 في اختبارات البرمجة مع دعم 2 مليون token." },
  { title: "Windows 12 قادم بميزات ذكاء اصطناعي مدمجة", category: "أنظمة تشغيل", date: "13 أغسطس", image: "🪟", description: "مايكروسوفت تخطط لإطلاق Windows 12 في 2027 مع Copilot مدمج في النواة." },
  { title: "PlayStation 6: تسريبات جديدة عن المواصفات", category: "ألعاب", date: "12 أغسطس", image: "🎮", description: "PS6 قد يأتي بمعالج AMD Zen 5 ودعم 8K حقيقي بحسب براءات اختراع مسربة." },
  { title: "ثغرة أمنية خطيرة في Chrome تستهدف المستخدمين", category: "أمن", date: "11 أغسطس", image: "🔒", description: "Google تصدر تحديثاً طارئاً لـ Chrome لإصلاح ثغرة zero-day تُستغل فعلياً." },
  { title: "OpenAI تخفض أسعار GPT-5 للمطورين", category: "AI", date: "10 أغسطس", image: "💰", description: "تخفيضات تصل إلى 50% على API GPT-5 لجذب المزيد من المطورين." },
  { title: "Samsung تكشف عن Galaxy S27 بشاشة قابلة للطي", category: "أجهزة", date: "9 أغسطس", image: "📱", description: "تسريبات تكشف عن تصميم ثوري لـ Galaxy S27 مع شاشة تطوي مرتين." },
];
