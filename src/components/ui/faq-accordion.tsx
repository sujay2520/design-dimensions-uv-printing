import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export interface FAQItem {
  id: string;
  category: "materials" | "process" | "walkin" | "tech";
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "materials",
    question: "Can I bring my own materials for UV printing?",
    answer:
      "Yes, absolutely. We welcome walk-in clients, carpenters, interior designers, and architects who bring their own substrates (Glass, Acrylic, WPC Doors, Plywood, Metal, ACP, Ceramic Tiles, Fabric, or Canvas). We inspect and surface-clean your materials at our Dwarakanagar studio before loading them onto the flatbed printer.",
  },
  {
    id: "faq-2",
    category: "materials",
    question: "What is the maximum sheet size the flatbed can handle?",
    answer:
      "Our industrial UV flatbed handles large-format rigid sheets up to 8 feet x 4 feet (approx. 2440mm x 1220mm) and substrate thickness up to 100mm with vacuum bed stabilization.",
  },
  {
    id: "faq-3",
    category: "tech",
    question: "What is Active UV Curing and why is it superior?",
    answer:
      "Active UV Curing uses high-intensity ultraviolet radiation to instantly polymerize and harden photo-initiator inks directly on contact with the flat substrate. Unlike conventional solvent or latex inks that require evaporative heat drying, Active UV curing bonds immediately, produces zero VOC emissions, and results in water-proof, scratch-resistant prints that are safe for indoor healthcare and residential spaces.",
  },
  {
    id: "faq-4",
    category: "process",
    question: "What file formats should I bring for printing?",
    answer:
      "For the sharpest output, provide vector formats: PDF, AI (Adobe Illustrator), CDR (CorelDraw), EPS, or DXF. High-resolution raster images (TIFF, PNG, JPEG at 300+ DPI at actual print scale) are also fully supported. Bring your files on a USB flash drive or share them directly on WhatsApp (+91 93432 22266).",
  },
  {
    id: "faq-5",
    category: "process",
    question: "Do you support bilingual printing with Kannada typography?",
    answer:
      "Yes! We specialize in bilingual Kannada and English signage, devotional pooja room panels, official institution boards, and door nameplates. Our in-house pre-flight team ensures correct Kannada font rendering and spelling verification before final print execution.",
  },
  {
    id: "faq-6",
    category: "tech",
    question: "Can you print White ink and textured Gloss Varnish?",
    answer:
      "Yes. Our flatbed is equipped with dedicated White ink and Gloss Varnish channels. This enables under-printing on dark woods, double-strike printing on clear glass/acrylic for backlit displays, and selective embossed 3D varnish textures for braille, tactile patterns, and luxury highlights.",
  },
  {
    id: "faq-7",
    category: "walkin",
    question: "How do I review and approve a digital proof?",
    answer:
      "Before initiating any print job, we generate a high-definition digital proof with exact dimensions and color registration. You can review and approve it live with our operator at our Dwarakanagar studio, or via direct WhatsApp chat (+91 93432 22266). Work begins only upon your explicit confirmation.",
  },
  {
    id: "faq-8",
    category: "walkin",
    question: "Where is the studio located and what are your operating hours?",
    answer:
      "We are located at #8/2 A, 18th Main Road, Dwarakanagar Stage 1, Channasandra, Bangalore - 560098 (near RR Nagar & Kengeri). We are open Monday to Saturday from 10:00 AM to 8:00 PM, and Sunday from 10:30 AM to 3:00 PM (or by WhatsApp appointment). Two-wheeler and street vehicle parking is readily available.",
  },
];

const categories = [
  { id: "all", label: "All Questions" },
  { id: "materials", label: "Substrates & Sizing" },
  { id: "tech", label: "Active UV Curing" },
  { id: "process", label: "Artwork & Proofs" },
  { id: "walkin", label: "Walk-in & Location" },
] as const;

export function FAQAccordionSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const filtered =
    activeCategory === "all"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="border-t border-border bg-wash/30 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Got Questions?
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-fg">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-muted max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our flatbed UV printing technology, bringing your own substrates, and digital proofs.
          </p>
        </div>

        {/* Category Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
                activeCategory === cat.id
                  ? "bg-accent text-accent-fg shadow-xs"
                  : "bg-surface text-muted hover:text-fg border border-border"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="mt-10 divide-y divide-border/70 rounded-2xl border border-border bg-surface shadow-xs">
          {filtered.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`answer-${faq.id}`}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-wash/50 transition-colors"
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-fg">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "flex size-7 shrink-0 items-center justify-center rounded-full bg-wash text-muted transition-transform duration-200",
                      isOpen && "rotate-180 text-accent bg-accent/10"
                    )}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`answer-${faq.id}`}
                    className="px-5 pb-6 sm:px-6 pt-0 text-sm leading-relaxed text-muted border-t border-border/40 animate-in fade-in duration-150"
                  >
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-10 rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center sm:p-8">
          <HelpCircle className="mx-auto size-8 text-accent mb-2" />
          <h3 className="font-display text-xl font-bold text-fg">Have a Custom Substrate or Specialized Spec?</h3>
          <p className="mt-1.5 text-xs text-muted max-w-md mx-auto">
            Bring your sample material to our studio in Dwarakanagar or send photos and dimensions directly over WhatsApp.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${site.whatsappE164}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition-colors shadow-sm min-h-[44px]"
            >
              <MessageSquare className="size-4" />
              <span>Ask on WhatsApp (+91 93432 22266)</span>
            </a>
            <a
              href={`tel:+${site.officePhoneE164}`}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-2.5 text-xs font-bold text-fg hover:bg-wash transition-colors min-h-[44px]"
            >
              <span>Call Studio (+91 94825 58936)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
