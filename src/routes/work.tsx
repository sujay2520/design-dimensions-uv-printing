import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { prestigiousClients, whatsappHref, canonicalUrl } from "@/lib/site";
import { useEffectiveWorks } from "@/lib/owner-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles, CheckCircle2, Maximize2 } from "lucide-react";
import { Lightbox, LightboxItem } from "@/components/ui/lightbox";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: "Portfolio & Showcase — Design Dimensions UV Printing, RR Nagar" },
      {
        name: "description",
        content: "View authentic UV printing projects: WPC entrance doors, sliding wardrobe glass, 3D acrylic signs, and CSIR-NAL inauguration plaques crafted in Bengaluru.",
      },
    ],
    links: [
      { rel: "canonical", href: canonicalUrl("/work") },
    ],
  }),
});

const categories = [
  "All",
  "Doors & Panels",
  "Glass & Glazing",
  "Acrylic & Signage",
  "Wood & Laminates",
  "ACP & Metal",
  "Devotional & Sanctum",
  "Workshop & Machine",
] as const;

function WorkPage() {
  const [selectedCat, setSelectedCat] = useState<(typeof categories)[number]>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [effectiveWorks] = useEffectiveWorks();

  const filteredWorks = useMemo(() => {
    const visible = effectiveWorks.filter((w) => !w.hidden);
    if (selectedCat === "All") return visible;
    return visible.filter((w) => w.category === selectedCat);
  }, [effectiveWorks, selectedCat]);

  const lightboxItems: LightboxItem[] = useMemo(() => {
    return filteredWorks.map((w) => ({
      src: w.image,
      title: w.title,
      category: w.category,
      substrate: w.material,
      description: `${w.area} · Direct high-resolution Active UV Curing.`,
    }));
  }, [filteredWorks]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Real Workshop Portfolio
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-fg">
            Crafted on Our UV Flatbed
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Direct high-resolution printing on rigid substrates — Toughened Glass, Cast Acrylic, WPC Doors, 
            Brass, Teak Wood, Canvas and Tiles. Walk in at our Dwarakanagar, RR Nagar studio to inspect these physical samples.
          </p>
        </div>
        <Button asChild>
          <a href={whatsappHref("Hello Design Dimensions, I saw your work gallery and want a custom UV quote.")} target="_blank" rel="noreferrer">
            Request Quote on WhatsApp
          </a>
        </Button>
      </div>

      {/* Featured Highlight: The Recovered Special UV Glass Craft */}
      <section className="mt-12 overflow-hidden rounded-2xl border-2 border-accent/30 bg-surface p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
            <Sparkles className="size-3.5" /> Featured Studio Craft
          </span>
          <span className="text-xs text-muted">Exquisite Translucent Glass UV Technique</span>
        </div>
        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <img
              src="/prints/special-dandelion-glass-shelf.jpg"
              alt="Dandelion & Heritage Arches Translucent Glass Print"
              className="aspect-16/10 w-full rounded-xl border border-border object-cover shadow-inner"
            />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-fg">
              Subtle Frosted Glass & Dandelion Seeds Motif
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              A masterclass in delicate UV printing: Translucent micro-dots and multi-layer white ink create 
              a frosted, windblown dandelion effect on float glass without chemical etching. 
              The architectural arches and Tirupati sacred icons catch ambient light with striking subtlety.
            </p>
            <div className="space-y-2 pt-2 text-xs text-muted">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-accent shrink-0" />
                <span>Multi-pass UV curing on clear float & tempered glass</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-accent shrink-0" />
                <span>Scratch-resistant, washable, and fade-proof</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-accent shrink-0" />
                <span>Custom sizes for partition panels, doors & pooja rooms</span>
              </p>
            </div>
            <div className="pt-2">
              <Button asChild size="sm" variant="outline">
                <a href={whatsappHref("Hello, I am interested in custom Frosted / Dandelion Glass UV printing.")} target="_blank" rel="noreferrer">
                  Enquire About Glass Printing
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Clients Banner */}
      <section className="mt-12 rounded-xl border border-border bg-wash/60 p-6 sm:p-8">
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Trusted by Premier Institutions & Brands
        </h3>
        <p className="mt-1 text-sm text-fg">
          From VVIP state foundation stones to university and corporate campus signs:
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {prestigiousClients.map((c) => (
            <div key={c.name} className="rounded-lg border border-border/80 bg-surface p-3 text-center">
              <p className="font-bold text-sm text-fg">{c.name}</p>
              <p className="text-[11px] text-muted truncate mt-0.5">{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="mt-12 flex gap-2 overflow-x-auto pb-2 scrollbar-none [mask-image:linear-gradient(to_right,black_90%,transparent_100%)]">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCat(cat)}
            className={cn(
              "h-11 shrink-0 rounded-full border px-5 text-sm font-medium transition-colors min-h-[44px]",
              selectedCat === cat
                ? "border-accent bg-accent text-accent-fg"
                : "border-border bg-surface text-fg hover:border-accent/50",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Work Gallery Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredWorks.map((w, idx) => (
          <figure
            key={w.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-accent/40 hover:shadow-md"
          >
            <div
              className="relative aspect-4/3 overflow-hidden bg-wash cursor-pointer"
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openLightbox(idx);
              }}
              aria-label={`Enlarge ${w.title}`}
            >
              <img
                src={w.image}
                alt={w.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 rounded-md bg-fg/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-bg backdrop-blur-xs">
                {w.tag}
              </span>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/25 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm">
                  <Maximize2 className="size-3.5" />
                  <span>Inspect Print</span>
                </span>
              </div>
            </div>
            <figcaption className="flex flex-1 flex-col justify-between p-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                  {w.category}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-fg">
                  {w.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted leading-relaxed">
                  {w.material}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-[11px] text-muted">
                <span>{w.area}</span>
                <a
                  href={whatsappHref(`Hello Design Dimensions, I am interested in work similar to '${w.title}'.`)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ask quote for ${w.title} on WhatsApp`}
                  className="font-medium text-accent hover:underline py-1.5 px-2 -my-1.5 -mr-2 rounded inline-flex items-center min-h-[36px]"
                >
                  Ask Quote →
                </a>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Interactive Fullscreen Lightbox */}
      <Lightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onSelectIndex={setLightboxIndex}
      />
    </main>
  );
}
