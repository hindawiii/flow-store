import { X } from "lucide-react";

import { useOverlay } from "@/hooks/use-overlay";
import { OS_GUIDES } from "@/lib/souq/os-guides";

const ROWS: { label: string; get: (i: number) => string }[] = [
  { label: "المطوّر", get: (i) => OS_GUIDES[i]!.developer },
  { label: "الترخيص", get: (i) => (OS_GUIDES[i]!.free ? "مجاني" : "مدفوع/رسمي") },
  { label: "المعالج (الأدنى)", get: (i) => OS_GUIDES[i]!.systemRequirements.min.cpu },
  { label: "الذاكرة (الأدنى)", get: (i) => OS_GUIDES[i]!.systemRequirements.min.ram },
  { label: "الذاكرة (المستحسن)", get: (i) => OS_GUIDES[i]!.systemRequirements.rec.ram },
  { label: "التخزين (الأدنى)", get: (i) => OS_GUIDES[i]!.systemRequirements.min.storage },
  { label: "كرت الرسوم", get: (i) => OS_GUIDES[i]!.systemRequirements.min.gpu },
  { label: "TPM", get: (i) => OS_GUIDES[i]!.systemRequirements.min.tpm },
];

export function OsCompareModal({ onClose }: { onClose: () => void }) {
  useOverlay(onClose);

  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-black/70 p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative z-10 my-8 w-full max-w-4xl rounded-2xl border border-border bg-card p-6">
        <button
          type="button"
          aria-label="إغلاق"
          onClick={onClose}
          className="absolute top-4 left-4 text-muted-foreground hover:text-accent"
        >
          <X className="size-5" />
        </button>
        <h2 className="mb-1 text-xl font-bold text-foreground">مقارنة أنظمة التشغيل</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          المتطلبات الرسمية لكل نظام جنباً إلى جنب
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b border-border p-3 text-right text-muted-foreground">
                  الخاصية
                </th>
                {OS_GUIDES.map((os) => (
                  <th key={os.id} className="border-b border-border p-3 text-right text-foreground">
                    <span className="me-1">{os.image}</span>
                    {os.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="odd:bg-background/40">
                  <td className="border-b border-border p-3 font-bold text-muted-foreground">
                    {row.label}
                  </td>
                  {OS_GUIDES.map((os, i) => (
                    <td key={os.id} className="border-b border-border p-3 text-foreground">
                      {row.get(i)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
