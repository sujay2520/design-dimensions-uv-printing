import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Sparkles, CheckCircle, Phone, MessageSquare, ShieldCheck, Leaf, Palette, Award, Clock, Building2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useOwnerConfig } from "@/lib/owner-store";
import { faqs, materials, processSteps, services, site, works, prestigiousClients, whatsappHref, whyChooseUs, allFlatSurfaces, substrateCategories, canonicalUrl, getLocalBusinessSchema } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Design Dimensions — UV Flatbed Printing Studio | Dwarakanagar, RR Nagar, Bangalore" },
      {
        name: "description",
        content: "Premier UV printing studio in Dwarakanagar Stage 1, Channasandra, RR Nagar, Bangalore - 560098. Direct high-definition prints on Glass, Acrylic, WPC Doors, Wood & Metal.",
      },
    ],
    links: [
      { rel: "canonical", href: canonicalUrl("/") },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(getLocalBusinessSchema()),
      },
    ],
  }),
});

function Home() {
  return (
    <main>
      <Hero />
      <EnterpriseTrustBar />
      <WhyChooseUsSection />
      <SpecialCraftBanner />
      <ServicesPreview />
      <MaterialsSection />
      <WorkPreview />
      <ProcessPreview />
      <VisitTeaser />
      <FaqPreview />
      <Closing />
    </main>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-16 items-center">
      <div className="flex flex-col justify-center lg:col-span-7">
        <div className="flex flex-wrap sm:inline-flex items-center gap-2 rounded-full border border-accent/25 bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-normal sm:tracking-[0.2em] text-accent w-fit">
          <span>{site.kannadaPlace}</span>
          <span className="text-border">·</span>
          <span>Dwarakanagar · Channasandra</span>
        </div>
        
        <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fg leading-[1.08]">
          DESIGN DIMENSIONS
        </h1>
        
        <div className="mt-2 space-y-1">
          <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.14em] text-accent">
            UV PRINTING – INTERIORS & EXTERIORS
          </p>
          <p className="text-xs sm:text-sm font-medium text-muted">
            Most Modern & Eco-Friendly Printing Solutions
          </p>
        </div>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          At DESIGN DIMENSIONS, we deliver premium-quality UV printing solutions for both interior and exterior applications. Our advanced UV printing technology produces vibrant, durable, scratch-resistant, and long-lasting prints on a wide range of materials, making it easy to create customized products that perfectly suit your requirements.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white min-h-[44px]">
            <a href={whatsappHref()} target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <MessageSquare className="size-4" />
              <span>WhatsApp: {site.whatsappDisplay}</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-h-[44px]">
            <a href={`tel:+${site.officePhoneE164}`} className="flex items-center gap-2">
              <Phone className="size-4 text-accent" />
              <span>Office: {site.officePhoneDisplay}</span>
            </a>
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-muted">
          <span className="flex items-center gap-1.5 font-medium text-fg">
            <MapPin className="size-4 text-accent" />
            #8/2 A, 18th Main Rd, Dwarakanagar Stage 1, Channasandra
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span className="text-accent font-medium">Eco-Friendly Active UV Curing</span>
        </div>
      </div>

      <div className="lg:col-span-5">
        <figure className="overflow-hidden rounded-2xl border border-border bg-surface shadow-md">
          <img
            src="/prints/uv-printer-active-curing-head.jpg"
            alt="Design Dimensions Industrial UV Flatbed Printer with Active UV Curing Head"
            className="aspect-4/3 w-full object-cover"
          />
          <figcaption className="border-t border-border bg-wash/50 px-4 py-3 text-xs text-muted flex items-center justify-between">
            <span className="font-medium text-fg">Industrial Flatbed UV Printer</span>
            <span className="text-accent font-semibold">Active UV Curing</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const iconMap: Record<string, React.ReactNode> = {
    "Active UV Curing": <Sparkles className="size-5 text-accent" />,
    "Zero Toxic Fumes": <Leaf className="size-5 text-emerald-500" />,
    "1440 DPI Precision": <Palette className="size-5 text-accent" />,
    "100% Waterproof": <ShieldCheck className="size-5 text-accent" />,
    "Fade Proof": <Award className="size-5 text-accent" />,
    "Fast Local Delivery": <Clock className="size-5 text-accent" />,
    "Homes & Enterprise": <Building2 className="size-5 text-accent" />,
  };

  return (
    <section className="border-b border-border bg-wash/30 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Value Proposition
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-fg font-bold">
            Why Choose Us?
          </h2>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            Delivering the most modern & eco-friendly UV printing solutions for homes, commercial interiors, and corporate environments.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-xl border border-border/80 bg-surface p-5 shadow-xs transition-colors hover:border-accent/40"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-lg bg-wash border border-border/60">
                  {iconMap[item.highlight] ?? <CheckCircle className="size-5 text-accent" />}
                </span>
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                  {item.highlight}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-fg tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnterpriseTrustBar() {
  return (
    <div className="border-y border-border bg-surface py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Trusted For Government, Corporate & Campus Branding
            </p>
            <p className="text-xs text-muted mt-0.5">
              Precision foundation stones, university directories & corporate displays
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {prestigiousClients.slice(0, 6).map((c) => (
              <span
                key={c.name}
                className="rounded-md border border-border/80 bg-wash/60 px-3 py-1 text-xs font-semibold text-fg"
              >
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecialCraftBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <div className="overflow-hidden rounded-2xl border-2 border-accent/30 bg-surface p-6 sm:p-8 shadow-xs">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
              <Sparkles className="size-3.5" /> High-Light UV Specialty
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl tracking-tight text-fg">
              Subtle Frosted Glass & Dandelion Seeds Motif
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We engineered a specialized multi-pass white ink printing process for float glass and acrylic. 
              Instead of aggressive chemical acid-etching, our micro-cured translucent inks yield 
              sublime architectural arches, windblown dandelion seeds, and sacred emblems that subtly illuminate with ambient room lighting.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-fg">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="size-4 text-accent" /> Washable & Non-peeling
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="size-4 text-accent" /> Custom Partition Sizes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="size-4 text-accent" /> Opaque White Underprint
              </span>
            </div>
            <div className="mt-6 flex gap-3">
              <Button asChild size="sm">
                <a href={whatsappHref("Hello, I am interested in custom Frosted / Dandelion Glass UV printing.")} target="_blank" rel="noreferrer">
                  Enquire on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link to="/work">View in Gallery</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src="/prints/special-dandelion-glass-shelf.jpg"
              alt="Dandelion and architectural glass UV print display shelf"
              className="aspect-16/10 w-full rounded-xl border border-border object-cover shadow-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const preview = services.slice(0, 6);
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Workshop Offerings
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-fg">
            Boards, Doors, Plates & Interior Murals
          </h2>
        </div>
        <Button asChild variant="outline">
          <Link to="/services">
            View All Services
            <ArrowRight className="size-4 ml-1" />
          </Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((svc) => (
          <Link
            key={svc.slug}
            to="/services"
            hash={svc.slug}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-accent/40 hover:shadow-md"
          >
            <div className="aspect-16/10 overflow-hidden bg-wash">
              <img
                src={svc.image}
                alt={svc.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                  {svc.group}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-fg">
                  {svc.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {svc.summary}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs">
                <span className="font-semibold text-fg">{svc.from}</span>
                <span className="text-muted">{svc.typical}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function MaterialsSection() {
  const ownerConfig = useOwnerConfig();
  const visibleSurfaces = allFlatSurfaces.filter(
    (s) => !ownerConfig.hiddenSubstrates?.includes(s)
  );

  return (
    <section className="bg-ink text-accent-fg py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-fg/60">
              Direct UV Flatbed Printing
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              UV Printing on All Flat Surfaces
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-accent-fg/80">
              We print directly on <strong>28+ versatile flat materials</strong> with instant active UV photopolymerization. 
              Vibrant, scratch-resistant, water-resistant, and engineered for both interior aesthetics and exterior durability.
            </p>
          </div>
          <Button asChild className="bg-accent text-accent-fg hover:opacity-90 shrink-0 min-h-[44px]">
            <a href={whatsappHref("Hello Design Dimensions, I want to check UV printing feasibility for my material.")} target="_blank" rel="noreferrer">
              Ask About Your Material
            </a>
          </Button>
        </div>

        {/* 28 Substrates Interactive Cloud */}
        <div className="mt-10 rounded-2xl border border-accent-fg/15 bg-accent-fg/5 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="size-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-fg/80">
              We Print On (All Flat Surfaces):
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {visibleSurfaces.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 rounded-lg border border-accent-fg/15 bg-accent-fg/5 px-3 py-1.5 text-xs font-medium text-accent-fg hover:border-emerald-400 hover:bg-accent-fg/10 transition-colors"
              >
                <CheckCircle className="size-3 text-emerald-400" />
                {s}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/20 px-3 py-1.5 text-xs font-semibold text-emerald-300">
              …and many more flat surfaces
            </span>
          </div>
        </div>

        {/* 6 Substrate Category Taxonomy Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((m) => (
            <article key={m.id} className="overflow-hidden rounded-xl border border-accent-fg/15 bg-accent-fg/5 flex flex-col">
              <div className="aspect-16/10 overflow-hidden bg-accent-fg/10">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-fg/60">
                    {m.highlight}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-accent-fg">{m.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-accent-fg/75">{m.uses}</p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-accent-fg/10 pt-3 text-xs">
                  <span className="font-semibold text-accent-fg/90">{m.from}</span>
                  <a
                    href={whatsappHref(`Hello, I would like to enquire about UV printing on ${m.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Inquire about ${m.name} UV printing on WhatsApp`}
                    className="font-medium text-emerald-400 hover:text-emerald-300 hover:underline min-h-11 inline-flex items-center"
                  >
                    Quote on WhatsApp →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkPreview() {
  const preview = works.slice(0, 6);
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Authentic Studio Proof
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-fg font-bold">
            Recent Production From Our Workshop
          </h2>
          <p className="mt-2 text-sm text-muted">
            Direct printing on WPC Doors, Toughened Glass, Cast Acrylic, Teak Wood, MDF, and ACP Sheets.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link to="/work">
            Full Gallery (27+ Real Samples)
            <ArrowRight className="size-4 ml-1" />
          </Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((w) => (
          <figure
            key={w.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-xs transition-all hover:border-accent/40 hover:shadow-md"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-wash">
              <img src={w.image} alt={w.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              <span className="absolute top-2.5 left-2.5 rounded-md bg-fg/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-bg backdrop-blur-xs">
                {w.tag}
              </span>
            </div>
            <figcaption className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                  {w.category}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold text-fg tracking-tight">{w.title}</h3>
                <p className="mt-1 text-xs text-muted leading-relaxed">{w.material}</p>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-2.5 text-[11px] text-muted">
                <span>{w.area}</span>
                <a
                  href={whatsappHref(`Hello, I like this work: ${w.title}. Can you share a quote?`)}
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
    </section>
  );
}

function ProcessPreview() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Simple Workflow
        </p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-fg">
          From Artwork to Cured Print in 5 Steps
        </h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.n} className="rounded-xl border border-border/70 bg-wash/40 p-4">
              <p className="font-display text-3xl font-bold text-accent">{step.n}</p>
              <h3 className="mt-2 text-sm font-bold text-fg">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex gap-3">
          <Button asChild variant="outline">
            <Link to="/process">
              File Specs & Resolution Guide
              <ArrowRight className="size-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function VisitTeaser() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
      <img
        src="/prints/workshop-sample-wall.jpg"
        alt="Design Dimensions workshop showroom sample wall in RR Nagar"
        className="aspect-16/10 w-full rounded-2xl object-cover border border-border shadow-sm"
      />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Walk In Studio
        </p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-fg">
          Dwarakanagar, Channasandra, RR Nagar.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Located at #8/2 A, 18th Main Road, Dwarakanagar Stage 1, Channasandra, Bangalore - 560098. 
          Conveniently accessible via Namma Metro <strong>Purple Line</strong> (RR Nagar & Kengeri Metro Stations) and Mysore Road. 
          Serving Channasandra, Dwarakanagar, RR Nagar, Kengeri, Ideal Homes, BHEL Layout, Ullal, Nagarbhavi, Banashankari, and Global Village Tech Park.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-fg">
          {site.hours.map((h) => (
            <li key={h.day} className="flex justify-between gap-4 border-b border-border/60 py-2">
              <span className="font-medium">{h.day}</span>
              <span className="text-muted">{h.time}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-3">
          <Button asChild>
            <Link to="/visit">Directions & Map</Link>
          </Button>
          <Button asChild variant="outline">
            <a href={`tel:+${site.officePhoneE164}`}>Call Office: {site.officePhoneDisplay}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FaqPreview() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
      <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-fg text-center">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 divide-y divide-border border-y border-border">
        {faqs.slice(0, 5).map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="cursor-pointer list-none text-base font-semibold marker:content-none [&::-webkit-details-marker]:hidden text-fg">
              <span className="flex items-center justify-between gap-4">
                {f.q}
                <span className="text-accent group-open:hidden">+</span>
                <span className="hidden text-accent group-open:inline">–</span>
              </span>
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="bg-accent text-accent-fg">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
            Bring Your Substrate or Ideas. We Handle the Print.
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-accent-fg/80">
            Enquiries, digital proofs and payment handled smoothly via WhatsApp or studio walk-in.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild variant="ink" size="lg">
            <a href={whatsappHref()} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent border-accent-fg/30 text-accent-fg hover:bg-accent-fg/10">
            <Link to="/enquire">Fill Spec Sheet</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
