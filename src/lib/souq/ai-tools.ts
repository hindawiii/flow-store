export type AiTool = {
  name: string; category: string; pricing: string; image: string; rating: number;
  description: string; features: string[]; officialWebsite: string;
};

export const AI_TOOLS: AiTool[] = [
  { name: "ChatGPT", category: "كتابة", pricing: "Freemium", image: "💬", rating: 4.9, description: "مساعد ذكاء اصطناعي متعدد الاستخدامات للكتابة والبرمجة والبحث.", features: ["GPT-4o", "صور", "برمجة", "تحليل ملفات"], officialWebsite: "https://chat.openai.com" },
  { name: "Midjourney", category: "صور", pricing: "Paid", image: "🎨", rating: 4.8, description: "أفضل أداة لتوليد الصور الفنية بجودة احترافية.", features: ["صور 4K", "أنمي", "واقعية", "تعديل"], officialWebsite: "https://www.midjourney.com" },
  { name: "Claude", category: "كتابة", pricing: "Freemium", image: "🧠", rating: 4.7, description: "مساعد AI من Anthropic مع قدرات تحليل ملفات PDF وصور.", features: ["Claude 3.5", "PDF", "برمجة", "منطق"], officialWebsite: "https://claude.ai" },
  { name: "GitHub Copilot", category: "برمجة", pricing: "Paid", image: "💻", rating: 4.8, description: "مساعد برمجي يكمل الكود تلقائياً في VS Code.", features: ["إكمال تلقائي", "Chat", "Terminal", "PR"], officialWebsite: "https://github.com/features/copilot" },
  { name: "Runway ML", category: "فيديو", pricing: "Freemium", image: "🎬", rating: 4.6, description: "توليد وتعديل الفيديوهات بالذكاء الاصطناعي.", features: ["Gen-3", "Inpainting", "Motion", "Lip Sync"], officialWebsite: "https://runwayml.com" },
  { name: "ElevenLabs", category: "صوت", pricing: "Freemium", image: "🎙️", rating: 4.7, description: "توليد أصوات واقعية وتحويل النص لكلام.", features: ["أصوات عربية", "Clone", "API", "Projects"], officialWebsite: "https://elevenlabs.io" },
  { name: "Perplexity", category: "بحث", pricing: "Free", image: "🔍", rating: 4.5, description: "محرك بحث ذكي يجيب بمصادر موثوقة.", features: ["مصادر", "Pro Search", "ملفات", "Threads"], officialWebsite: "https://www.perplexity.ai" },
  { name: "DALL-E 3", category: "صور", pricing: "Paid", image: "🖼️", rating: 4.7, description: "توليد صور من OpenAI متكامل مع ChatGPT.", features: ["دقة عالية", "نصوص", "تعديل", "متنوع"], officialWebsite: "https://openai.com/dall-e-3" },
  { name: "Stable Diffusion", category: "صور", pricing: "Free", image: "🌟", rating: 4.6, description: "نموذج مفتوح المصدر لتوليد الصور محلياً.", features: ["مجاني", "محلي", "ControlNet", "LoRA"], officialWebsite: "https://stability.ai" }
];