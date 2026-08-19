export type Service = {
  id: number; name: string; price: number; priceType: string; duration: string;
  category: string; image: string; rating: number; bookings: number; description: string;
};

export const SERVICES: Service[] = [
  { id: 1, name: "صيانة ويندوز عن بُعد", price: 30, priceType: "ثابت", duration: "1-2 ساعة", category: "دعم فني", image: "🖥️", rating: 4.9, bookings: 234, description: "إصلاح مشاكل ويندوز، إزالة الفيروسات، تسريع النظام، وتحديث التعريفات — كل ذلك عن بُعد عبر AnyDesk." },
  { id: 2, name: "تثبيت لينكس", price: 25, priceType: "ثابت", duration: "1 ساعة", category: "أنظمة تشغيل", image: "🐧", rating: 4.8, bookings: 156, description: "تثبيت Ubuntu أو Mint أو أي توزيعة Linux مع ضبط الإعدادات والبرامج الأساسية." },
  { id: 3, name: "تسريع جهاز أندرويد", price: 20, priceType: "ثابت", duration: "30 دقيقة", category: "صيانة", image: "📱", rating: 4.7, bookings: 89, description: "إزالة bloatware، تثبيت ROM مخصص، وتحسين الأداء للأجهزة البطيئة." },
  { id: 4, name: "بناء موقع ويب بالذكاء الاصطناعي", price: 500, priceType: "ثابت", duration: "3-5 أيام", category: "برمجة", image: "🤖", rating: 4.9, bookings: 45, description: "تصميم وتطوير موقع ويب كامل باستخدام أدوات AI مع دعم فني لمدة شهر." }
];
