import {
  Palette,
  ShieldCheck,
  Zap,
  Leaf,
  Layers,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";
import { site } from "@/lib/site";

const pillars = [
  {
    icon: Palette,
    title: "Vibrant Colors & High Resolution",
    description:
      "Micro-droplet industrial print heads deliver true-to-life CMYK, opaque White ink, and crystal-clear Gloss Varnish textures.",
  },
  {
    icon: ShieldCheck,
    title: "Durable & Scratch-Resistant",
    description:
      "Formulated for heavy commercial and residential wear. UV prints resist moisture, sunlight exposure, chemical cleaners, and surface abrasion.",
  },
  {
    icon: Zap,
    title: "Active UV Instant Curing",
    description:
      "Instant ink photopolymerization cures prints immediately on contact. Zero drying wait time, zero smudging, and immediate handling.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Printing Process",
    description:
      "Low VOC formulation with zero ozone emissions. Clean, safe for interior living rooms, kids' bedrooms, clinics, and hospitality spaces.",
  },
  {
    icon: Layers,
    title: "Direct Print on 30+ Flat Surfaces",
    description:
      "Glass, Acrylic, WPC Doors, Plywood, Metal, ACP, Ceramic Tiles, Leather, Canvas, MDF, Sunboard, and architectural panels up to 8ft x 4ft.",
  },
  {
    icon: Award,
    title: "Rigid Flatbed Precision",
    description:
      "Vacuum-bed stabilization keeps sheets flat and motionless, ensuring micro-millimeter registration for double-strike and textured prints.",
  },
  {
    icon: Clock,
    title: "Fast Studio Turnaround",
    description:
      "Same-day digital proof approvals via WhatsApp. Walk-in client consultations and fast turnaround for architects, builders, and designers.",
  },
  {
    icon: CheckCircle,
    title: "Design & Bilingual Support",
    description:
      "Artwork pre-flight checking, vector conversions, high-resolution upscaling, and native Kannada & English bilingual typography support.",
  },
];

const stats = [
  { value: "10+", label: "Years Industry Expertise", desc: "Serving Bengaluru creators" },
  { value: "30+", label: "Flat Substrates Supported", desc: "Glass, Wood, WPC & Metal" },
  { value: "1,000+", label: "Projects Delivered", desc: "Interiors & Architecture" },
  { value: "100%", label: "Active UV Cured", desc: "Instant scratch-proof finish" },
];

export function WhyChooseUsSection() {
  return (
    <section className="border-t border-border bg-wash/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Industrial Advantage
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-fg">
            Why Architects & Makers Choose Design Dimensions
          </h2>
          <p className="mt-3 text-base text-muted leading-relaxed">
            From luxury residences in RR Nagar to institutional headquarters across Bengaluru, our Dwarakanagar studio combines high-resolution flatbed engineering with eco-friendly Active UV Curing.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-surface p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-md"
              >
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-fg">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Counter Bar */}
        <div className="mt-14 rounded-2xl border border-border bg-ink p-8 text-accent-fg sm:p-10 shadow-lg">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-accent pl-5">
                <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-emerald-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-accent-fg">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-accent-fg/60">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
