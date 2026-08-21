export type NotificationType = "offer" | "update" | "anime";

export type Notification = {
  id: number;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  date: string;
};

export const NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    title: "🎮 Elden Ring بخصم 50%",
    message: "اللعبة متوفرة الآن بـ $29.99 على Steam!",
    type: "offer",
    read: false,
    date: "2026-08-17",
  },
  {
    id: 2,
    title: "🆕 تحديث Ubuntu 24.04.2",
    message: "تحديث أمني مهم متوفر الآن.",
    type: "update",
    read: false,
    date: "2026-08-16",
  },
  {
    id: 3,
    title: "📺 Attack on Titan الموسم الأخير",
    message: "الحلقة النهائية متوفرة على Crunchyroll!",
    type: "anime",
    read: false,
    date: "2026-08-15",
  },
];

export const TICKET_CATEGORIES = [
  { value: "windows", label: "Windows" },
  { value: "linux", label: "Linux" },
  { value: "android", label: "Android" },
  { value: "programming", label: "برمجة" },
  { value: "general", label: "استفسار عام" },
];

export const TICKET_PRIORITIES = [
  { value: "medium", label: "متوسطة" },
  { value: "low", label: "منخفضة" },
  { value: "high", label: "عالية" },
  { value: "urgent", label: "عاجلة" },
];
