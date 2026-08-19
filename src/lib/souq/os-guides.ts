export type OsReqSet = { cpu: string; ram: string; storage: string; gpu: string; display: string; tpm: string };
export type OsGuide = {
  id: number; name: string; developer: string; free: boolean; ram: string; storage: string;
  image: string; category: string;
  systemRequirements: { min: OsReqSet; rec: OsReqSet };
  essentialRequirements: string[];
  alternativeMethods: { name: string; desc: string; difficulty: string }[];
  officialWebsite: string;
  downloadLinks: { name: string; url: string; size: string }[];
  installationGuide: string[];
  commonErrors: { error: string; solution: string }[];
  developerInfo: { company: string; founded: number; headquarters: string; ceo: string };
  versions: { name: string; releaseDate: string; pros: string[]; cons: string[]; differences: string }[];
  freeCourses: { name: string; platform: string; url: string }[];
  specialties: string[];
  userReviews: { user: string; avatar: string; rating: number; date: string; text: string }[];
  description: string;
};

export const OS_GUIDES: OsGuide[] = [
  {
    id: 0, name: "Windows 11", developer: "Microsoft", free: false, ram: "4GB", storage: "64GB", image: "🪟", category: "Windows",
    systemRequirements: {
      min: { cpu: "1 جيجاهرتز ثنائي النواة", ram: "4GB", storage: "64GB", gpu: "DirectX 9 متوافق", display: "720p", tpm: "TPM 2.0" },
      rec: { cpu: "Intel i5 / Ryzen 5 حديث", ram: "8GB+", storage: "128GB SSD", gpu: "DirectX 12", display: "1080p", tpm: "TPM 2.0" }
    },
    essentialRequirements: ["TPM 2.0", "UEFI Secure Boot", "4GB RAM على الأقل", "64GB تخزين"],
    alternativeMethods: [
      { name: "Live USB", desc: "تشغيل ويندوز 11 من USB بدون تثبيت", difficulty: "سهل" },
      { name: "Registry Hack", desc: "تجاوز متطلبات TPM و Secure Boot", difficulty: "متوسط" },
      { name: "Rufus Bypass", desc: "استخدام Rufus لإنشاء USB بدون TPM", difficulty: "سهل" },
      { name: "WSL2", desc: "تشغيل لينكس داخل ويندوز 10/11", difficulty: "سهل" }
    ],
    officialWebsite: "https://www.microsoft.com/windows",
    downloadLinks: [
      { name: "Media Creation Tool", url: "https://www.microsoft.com/software-download/windows11", size: "~5GB" },
      { name: "ISO مباشر", url: "https://www.microsoft.com/software-download/windows11", size: "5.4GB" }
    ],
    installationGuide: [
      "تحميل Media Creation Tool من الموقع الرسمي",
      "إنشاء USB bootable بحجم 8GB على الأقل",
      "تغيير إعدادات BIOS لتشغيل من USB",
      "اتبع معالج التثبيت واختر التقسيم المناسب",
      "إدخال مفتاح الترخيص أو تخطي (تنشيط لاحقاً)",
      "الانتظار حتى اكتمال التثبيت (20-40 دقيقة)"
    ],
    commonErrors: [
      { error: "This PC can't run Windows 11", solution: "تفعيل TPM 2.0 و Secure Boot من BIOS أو استخدام Registry Hack" },
      { error: "0x80070002", solution: "إعادة تحميل ملف ISO أو استخدام أداة إصلاح ملفات النظام (SFC /scannow)" },
      { error: "بطء بعد التحديث", solution: "تعطيل Startup programs وإلغاء تثبيت التحديثات المسببة" }
    ],
    developerInfo: { company: "Microsoft Corporation", founded: 1975, headquarters: "ريدموند، واشنطن، أمريكا", ceo: "Satya Nadella" },
    versions: [
      { name: "Windows 10", releaseDate: "2015", pros: ["أخف على الأجهزة الضعيفة", "دعم أطول حتى 2025"], cons: ["لا يدعم أحدث تطبيقات Android", "واجهة أقدم"], differences: "ويندوز 11 أحدث واجهة وأداء أفضل على SSD" },
      { name: "Windows 8.1", releaseDate: "2013", pros: ["سريع جداً", "يستهلك موارد أقل"], cons: ["انتهى الدعم الرسمي", "لا يدعم تطبيقات حديثة"], differences: "واجهة Metro غير محبوبة، لا يوجد متجر Microsoft الحديث" },
      { name: "Windows 7", releaseDate: "2009", pros: ["الأخف والأسرع", "يعمل على أي جهاز"], cons: ["انتهى الدعم تماماً 2020", "ثغرات أمان خطيرة"], differences: "لا يوجد دعم تقني أو تحديثات أمان — غير موصى به إطلاقاً" }
    ],
    freeCourses: [
      { name: "Windows 11 Complete Guide", platform: "YouTube", url: "https://youtube.com" },
      { name: "Microsoft Learn", platform: "Microsoft", url: "https://learn.microsoft.com" }
    ],
    specialties: ["ألعاب", "برمجة", "مكتبية", "تصميم", "سيرفرات"],
    userReviews: [
      { user: "أحمد", avatar: "أ", rating: 5, date: "2026-08-10", text: "ويندوز 11 ممتاز للألعاب، الأداء أفضل من 10 بكثير." },
      { user: "سارة", avatar: "س", rating: 4, date: "2026-08-05", text: "الواجهة جميلة لكن يحتاج جهاز قوي." }
    ],
    description: "أحدث نظام تشغيل من Microsoft مع واجهة حديثة، دعم تطبيقات Android، وتحسينات في الألعاب."
  },
  {
    id: 1, name: "Ubuntu 24.04 LTS", developer: "Canonical", free: true, ram: "2GB", storage: "25GB", image: "🐧", category: "Linux",
    systemRequirements: {
      min: { cpu: "2 جيجاهرتز ثنائي النواة", ram: "2GB", storage: "25GB", gpu: "VGA 1024x768", display: "1024x768", tpm: "غير مطلوب" },
      rec: { cpu: "Intel i3 / Ryzen 3", ram: "4GB+", storage: "50GB SSD", gpu: "OpenGL", display: "1080p", tpm: "غير مطلوب" }
    },
    essentialRequirements: ["2GB RAM", "25GB تخزين", "معالج ثنائي النواة"],
    alternativeMethods: [
      { name: "Live USB", desc: "تشغيل Ubuntu بدون تثبيت", difficulty: "سهل" },
      { name: "WSL2", desc: "تشغيل Ubuntu داخل ويندوز", difficulty: "سهل" },
      { name: "VirtualBox", desc: "تشغيل Ubuntu كجهاز افتراضي", difficulty: "متوسط" },
      { name: "Dual Boot", desc: "تثبيت Ubuntu بجانب ويندوز", difficulty: "متوسط" }
    ],
    officialWebsite: "https://ubuntu.com",
    downloadLinks: [
      { name: "Ubuntu Desktop ISO", url: "https://ubuntu.com/download/desktop", size: "5.8GB" },
      { name: "Ubuntu Server ISO", url: "https://ubuntu.com/download/server", size: "2.1GB" }
    ],
    installationGuide: [
      "تحميل ISO من ubuntu.com",
      "إنشاء USB bootable باستخدام Rufus أو BalenaEtcher",
      "تشغيل الجهاز من USB",
      "اختيار 'Try Ubuntu' أو 'Install Ubuntu'",
      "اتبع معالج التثبيت (اختيار اللغة والتقسيم)",
      "إعادة التشغيل وإزالة USB"
    ],
    commonErrors: [
      { error: "WiFi لا يعمل", solution: "تثبيت برامج تشغيل إضافية عبر كابل Ethernet أو USB tethering" },
      { error: "شاشة سوداء بعد التثبيت", solution: "إضافة nomodeset في إعدادات Grub" },
      { error: "لا يوجد صوت", solution: "تثبيت ALSA/PulseAudio أو إعادة تشغيل خدمة الصوت" }
    ],
    developerInfo: { company: "Canonical Ltd.", founded: 2004, headquarters: "لندن، المملكة المتحدة", ceo: "Mark Shuttleworth" },
    versions: [
      { name: "Ubuntu 22.04 LTS", releaseDate: "2022", pros: ["مستقر جداً", "دعم طويل حتى 2027"], cons: ["حزم أقدم", "نواة Linux أقدم"], differences: "24.04 أحدث حزم ونواة Linux 6.8" },
      { name: "Ubuntu 20.04 LTS", releaseDate: "2020", pros: ["مستقر للغاية", "يستهلك موارد أقل"], cons: ["برامج قديمة نسبياً", "دعم ينتهي 2025"], differences: "20.04 أخف لكن البرامج أقدم" },
      { name: "Ubuntu 18.04 LTS", releaseDate: "2018", pros: ["الأخف", "يعمل على أي جهاز"], cons: ["انتهى الدعم 2023", "برامج قديمة جداً"], differences: "غير موصى به للاستخدام اليومي" }
    ],
    freeCourses: [
      { name: "Linux Foundation Training", platform: "edX", url: "https://edx.org" },
      { name: "Ubuntu Desktop Guide", platform: "Ubuntu", url: "https://help.ubuntu.com" }
    ],
    specialties: ["برمجة", "سيرفرات", "أمن سيبراني", "ذكاء اصطناعي", "تعلم الآلة"],
    userReviews: [
      { user: "محمد", avatar: "م", rating: 5, date: "2026-08-12", text: "أفضل توزيعة للمبتدئين، كل شيء يعمل من الصندوق." }
    ],
    description: "أشهر توزيعة Linux سهلة الاستخدام مع دعم طويل الأمد (LTS) ومجتمع عربي كبير."
  },
  {
    id: 2, name: "Linux Mint 22", developer: "Community", free: true, ram: "2GB", storage: "20GB", image: "🌿", category: "Linux",
    systemRequirements: {
      min: { cpu: "x86 معالج", ram: "2GB", storage: "20GB", gpu: "VGA 800x600", display: "800x600", tpm: "غير مطلوب" },
      rec: { cpu: "Intel i3 / Ryzen 3", ram: "4GB+", storage: "50GB SSD", gpu: "OpenGL", display: "1080p", tpm: "غير مطلوب" }
    },
    essentialRequirements: ["2GB RAM", "20GB تخزين", "معالج x86"],
    alternativeMethods: [
      { name: "Live USB", desc: "تشغيل Mint بدون تثبيت", difficulty: "سهل" },
      { name: "VirtualBox", desc: "تشغيل كجهاز افتراضي", difficulty: "متوسط" },
      { name: "Dual Boot", desc: "تثبيت بجانب ويندوز", difficulty: "متوسط" }
    ],
    officialWebsite: "https://linuxmint.com",
    downloadLinks: [
      { name: "Cinnamon Edition", url: "https://linuxmint.com/download.php", size: "2.7GB" },
      { name: "Xfce Edition (للأجهزة الضعيفة)", url: "https://linuxmint.com/download.php", size: "2.3GB" }
    ],
    installationGuide: [
      "تحميل ISO من linuxmint.com",
      "حرق ISO على USB باستخدام BalenaEtcher",
      "تشغيل الجهاز من USB",
      "اختيار 'Start Linux Mint'",
      "النقر على أيقونة 'Install Linux Mint' على سطح المكتب",
      "اتبع المعالج واختيار التقسيم"
    ],
    commonErrors: [
      { error: "الشاشة تومض بعد التثبيت", solution: "تثبيت برامج تشغيل NVIDIA/AMD من مدير التعريفات" },
      { error: "لا يمكن تحديث الحزم", solution: "تغيير mirrors في مدير التحديثات إلى أقرب سيرفر" }
    ],
    developerInfo: { company: "Linux Mint Team", founded: 2006, headquarters: "أيرلندا", ceo: "Clement Lefebvre" },
    versions: [
      { name: "Mint 21.3", releaseDate: "2024", pros: ["مستقر", "Cinnamon محسّن"], cons: ["نواة أقدم من 22"], differences: "22 يأتي بـ Ubuntu 24.04 كقاعدة" },
      { name: "Mint 20.3", releaseDate: "2022", pros: ["أخف", "يعمل على الأجهزة القديمة"], cons: ["دعم ينتهي 2025"], differences: "20.3 مبني على Ubuntu 20.04" }
    ],
    freeCourses: [
      { name: "Linux Mint User Guide", platform: "Linux Mint", url: "https://linuxmint.com/documentation.php" }
    ],
    specialties: ["استخدام يومي", "أجهزة قديمة", "برمجة", "تصميم"],
    userReviews: [
      { user: "خالد", avatar: "خ", rating: 5, date: "2026-08-08", text: "Mint أفضل من Ubuntu للمبتدئين، Cinnamon رائع." }
    ],
    description: "توزيعة Linux سهلة ومريحة للمستخدمين القادمين من Windows مع واجهة Cinnamon الأنيقة."
  },
  {
    id: 3, name: "ChromeOS Flex", developer: "Google", free: true, ram: "4GB", storage: "16GB", image: "🌐", category: "ChromeOS",
    systemRequirements: {
      min: { cpu: "Intel/AMD 2010+", ram: "4GB", storage: "16GB", gpu: "متوافق", display: "1024x768", tpm: "غير مطلوب" },
      rec: { cpu: "Intel i3 / Ryzen 3", ram: "8GB", storage: "32GB SSD", gpu: "متوافق", display: "1080p", tpm: "غير مطلوب" }
    },
    essentialRequirements: ["4GB RAM", "16GB تخزين", "معالج Intel/AMD 2010 أو أحدث"],
    alternativeMethods: [
      { name: "Live USB", desc: "تجربة ChromeOS Flex بدون تثبيت", difficulty: "سهل" },
      { name: "تثبيت كامل", desc: "استبدال نظامك الحالي بـ ChromeOS", difficulty: "سهل" }
    ],
    officialWebsite: "https://chromeenterprise.google/os/chromeosflex/",
    downloadLinks: [
      { name: "ChromeOS Flex Installer", url: "https://chromeenterprise.google/os/chromeosflex/", size: "~1GB" }
    ],
    installationGuide: [
      "تحميل Chromebook Recovery Utility من Chrome Web Store",
      "إنشاء USB bootable باستخدام الإضافة",
      "تشغيل الجهاز من USB",
      "اتباع معالج الإعداد (يحتاج حساب Google)",
      "الانتظار حتى اكتمال التثبيت (15-20 دقيقة)"
    ],
    commonErrors: [
      { error: "WiFi لا يعمل", solution: "بعض كروت الشبكة غير مدعومة — استخدام كابل Ethernet" },
      { error: "اللمس لا يعمل", solution: "بعض شاشات اللمس غير مدعومة — استخدام الفأرة" }
    ],
    developerInfo: { company: "Google LLC", founded: 1998, headquarters: "ماونتن فيو، كاليفورنيا", ceo: "Sundar Pichai" },
    versions: [
      { name: "ChromeOS (أصلي)", releaseDate: "2011", pros: ["أصلي للأجهزة Chromebook", "أداء مثالي"], cons: ["يحتاج جهاز Chromebook"], differences: "Flex للأجهزة العادية، ChromeOS للأجهزة المخصصة" }
    ],
    freeCourses: [
      { name: "ChromeOS Help Center", platform: "Google", url: "https://support.google.com/chromeos" }
    ],
    specialties: ["تصفح الإنترنت", "أجهزة قديمة", "تعليم", "أعمال خفيفة"],
    userReviews: [
      { user: "فاطمة", avatar: "ف", rating: 4, date: "2026-08-01", text: "حوّلت لابتوب قديم لجهاز سريع جداً للتصفح." }
    ],
    description: "نظام Google الخفيف الذي يحول أي لابتوب قديم إلى جهاز Chromebook سريع وآمن."
  }
];
