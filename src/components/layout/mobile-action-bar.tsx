import { Phone, MessageSquare } from "lucide-react";
import { site } from "@/lib/site";
import { useOwnerConfig } from "@/lib/owner-store";

export function MobileActionBar() {
  const ownerConfig = useOwnerConfig();
  const officeE164 = ownerConfig.officePhoneE164 || site.officePhoneE164;
  const whatsappE164 = ownerConfig.whatsappE164 || site.whatsappE164;

  return (
    <nav
      aria-label="Quick contact"
      className="fixed bottom-0 inset-x-0 z-30 flex sm:hidden items-center gap-2 p-2.5 bg-surface/95 backdrop-blur-md border-t border-border shadow-lg pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <a
        href={`tel:+${officeE164}`}
        aria-label="Call Design Dimensions Studio at +91 94825 58936"
        className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-border bg-wash py-2.5 px-3 text-xs font-semibold text-fg active:scale-98 transition-transform min-h-[44px]"
      >
        <Phone className="size-3.5 text-accent" aria-hidden="true" />
        <span>Call Studio</span>
      </a>
      <a
        href={`https://wa.me/${whatsappE164}?text=${encodeURIComponent(
          "Hello Design Dimensions, I would like to get a quote for UV printing."
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Request quote from Design Dimensions on WhatsApp at +91 93432 22266"
        className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 py-2.5 px-3 text-xs font-semibold text-white shadow-xs active:scale-98 transition-transform min-h-[44px]"
      >
        <MessageSquare className="size-3.5" aria-hidden="true" />
        <span>WhatsApp Quote</span>
      </a>
    </nav>
  );
}
