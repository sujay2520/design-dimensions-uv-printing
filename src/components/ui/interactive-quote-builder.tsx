import { useState } from "react";
import { MessageSquare, Calculator, Layers, FileText, CheckCircle2, Copy, Check } from "lucide-react";
import { site, allFlatSurfaces } from "@/lib/site";
import { useOwnerConfig } from "@/lib/owner-store";
import { Button } from "@/components/ui/button";

export function InteractiveQuoteBuilder() {
  const ownerConfig = useOwnerConfig();
  const whatsappE164 = ownerConfig.whatsappE164 || site.whatsappE164;
  const hidden = ownerConfig.hiddenSubstrates || [];
  const availableSubstrates = allFlatSurfaces.filter((s) => !hidden.includes(s));

  // Form states
  const [substrate, setSubstrate] = useState<string>(availableSubstrates[0] || "Glass");
  const [unit, setUnit] = useState<"feet" | "inches">("feet");
  const [length, setLength] = useState<string>("4");
  const [width, setWidth] = useState<string>("2");
  const [qty, setQty] = useState<string>("1");
  const [materialSource, setMaterialSource] = useState<"client" | "studio">("client");
  const [artworkState, setArtworkState] = useState<string>("Vector ready (PDF/CDR/AI)");
  const [clientName, setClientName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  // Dimension calculations
  const numLength = parseFloat(length) || 0;
  const numWidth = parseFloat(width) || 0;
  const numQty = parseInt(qty, 10) || 1;

  let areaSqFt = 0;
  if (unit === "feet") {
    areaSqFt = numLength * numWidth * numQty;
  } else {
    areaSqFt = (numLength * numWidth * numQty) / 144;
  }
  const formattedSqFt = areaSqFt > 0 ? areaSqFt.toFixed(2) : "0.00";

  // Build formatted inquiry message
  const lines = [
    "*Design Dimensions — UV Flatbed Job Quotation Request*",
    "--------------------------------------------------",
    clientName.trim() ? `*Client Name:* ${clientName.trim()}` : null,
    location.trim() ? `*Project Area:* ${location.trim()}` : null,
    `*Selected Substrate:* ${substrate}`,
    `*Dimensions:* ${numLength} x ${numWidth} ${unit} (Qty: ${numQty})`,
    `*Total Print Surface:* ~${formattedSqFt} sq. ft.`,
    `*Substrate Sourcing:* ${materialSource === "client" ? "Customer supplying material" : "Requesting studio to source material"}`,
    `*Artwork Readiness:* ${artworkState}`,
    notes.trim() ? `*Special Notes / Specs:* ${notes.trim()}` : null,
    "--------------------------------------------------",
    `*Studio Landmark:* #8/2 A, 18th Main Road, Dwarakanagar Stage 1, Channasandra, Bangalore - 560098`,
    `*Office Call:* +91 94825 58936`,
  ].filter(Boolean);

  const rawMessage = lines.join("\n");
  const encodedUri = `https://wa.me/${whatsappE164}?text=${encodeURIComponent(rawMessage)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xs">
      <div className="flex items-center gap-3 border-b border-border/70 pb-5">
        <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-fg">
          <Calculator className="size-5" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-fg">
            Interactive WhatsApp Job Quoter
          </h2>
          <p className="text-xs text-muted">
            Configure your substrate and dimensions for an instant, structured WhatsApp specification.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {/* Substrate Selector */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            1. Select Flat Substrate
          </label>
          <select
            value={substrate}
            onChange={(e) => setSubstrate(e.target.value)}
            className="w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm font-medium text-fg focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {availableSubstrates.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Material Supply Option */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            2. Material Sourcing
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setMaterialSource("client")}
              className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all ${
                materialSource === "client"
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border bg-bg text-muted hover:text-fg"
              }`}
            >
              Bringing My Own Material
            </button>
            <button
              type="button"
              onClick={() => setMaterialSource("studio")}
              className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all ${
                materialSource === "studio"
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border bg-bg text-muted hover:text-fg"
              }`}
            >
              Need Studio to Supply
            </button>
          </div>
        </div>

        {/* Dimensions & Unit */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted">
              3. Size (Length x Width)
            </label>
            <div className="flex rounded-lg border border-border bg-bg p-0.5 text-[11px] font-medium">
              <button
                type="button"
                onClick={() => setUnit("feet")}
                className={`rounded px-2 py-0.5 transition-colors ${
                  unit === "feet" ? "bg-accent text-accent-fg" : "text-muted"
                }`}
              >
                Feet
              </button>
              <button
                type="button"
                onClick={() => setUnit("inches")}
                className={`rounded px-2 py-0.5 transition-colors ${
                  unit === "inches" ? "bg-accent text-accent-fg" : "text-muted"
                }`}
              >
                Inches
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="Length"
              className="rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="Width"
              className="rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        {/* Quantity & Area Summary */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            4. Quantity & Total Surface
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              placeholder="Qty (Units)"
              className="rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <div className="flex items-center justify-center rounded-xl border border-border/80 bg-wash/80 px-3 text-xs font-mono font-medium text-fg">
              ~{formattedSqFt} sq. ft.
            </div>
          </div>
        </div>

        {/* Artwork Readiness */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            5. Artwork Status
          </label>
          <select
            value={artworkState}
            onChange={(e) => setArtworkState(e.target.value)}
            className="w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm font-medium text-fg focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="Vector ready (PDF/CDR/AI/EPS)">Vector ready (PDF / CDR / AI / EPS)</option>
            <option value="High-Res Image (JPEG/PNG/TIFF)">High-Res Image (JPEG / PNG / TIFF)</option>
            <option value="Need Design Assistance / Bilingual Font Layout">Need Design Assistance / Layout Help</option>
            <option value="Bringing physical artwork/photo to studio">Bringing physical file / photo to studio</option>
          </select>
        </div>

        {/* Client Name / Area */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            6. Your Name & Location (Optional)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Your Name / Studio"
              className="rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. RR Nagar, Kengeri"
              className="rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        {/* Notes */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            7. Specific Requirements / Inks / Inlay Details
          </label>
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. Need white ink under-print on clear acrylic, double-sided, or gold finish for pooja door"
            className="w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-border">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-wash/60 px-4 py-3 text-xs font-semibold text-fg hover:bg-wash transition-colors min-h-[44px]"
        >
          {copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4 text-muted" />}
          <span>{copied ? "Copied Spec to Clipboard" : "Copy Spec Details"}</span>
        </button>

        <a
          href={encodedUri}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-md active:scale-98 transition-all min-h-[48px]"
        >
          <MessageSquare className="size-5" />
          <span>Send Job Quote to WhatsApp (+91 93432 22266)</span>
        </a>
      </div>
    </div>
  );
}
