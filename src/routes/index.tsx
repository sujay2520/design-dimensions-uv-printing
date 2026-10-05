import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Sparkles, CheckCircle, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { faqs, materials, processSteps, services, site, works, prestigiousClients, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <Hero />
      <EnterpriseTrustBar />
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
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent w-fit">
          <span>{site.kannadaPlace}</span>
          <span className="text-border">·</span>
          <span>Ideal Homes Circle</span>
        </div>
        
        <h1 className="mt-4 font-display text-[2.5rem] leading-[1.08] tracking-tight text-fg sm:text-6xl font-bold">
          High-Definition UV Flatbed Printing in RR Nagar.
        </h1>
        
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          {site.tagline}
        </p>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Direct digital UV printing on <strong>30+ flat surfaces</strong> — Toughened Glass, Cast Acrylic, WPC Doors, 
          Natural Wood & MDF, Metal & ACP, Brass Plaques, Fine Art Canvas, and Ceramic Tiles. 
          Eco-friendly UV instant curing for vibrant colors and scratch-proof durability.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="shadow-sm">
            <a href={whatsappHref()} target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <MessageSquare className="size-4" />
              <span>Get WhatsApp Quote</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/work">Browse Real Work</Link>
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-muted">
          <span className="flex items-center gap-1.5 font-medium text-fg">
            <MapPin className="size-4 text-accent" />
            Shop 14, Ideal Homes Circle
          </span>
          <span className="text-border">|</span>
          <a href={`tel:+${site.phoneE164}`} className="flex items-center gap-1.5 font-medium text-accent hover:underline">
            <Phone className="size-3.5" />
            {site.phoneDisplay}
          </a>
          <span className="text-border">|</span>
          <span>No Online Payment · Walk-in Studio</span>
        </div>
      </div>

      <div className="lg:col-span-5">
        <figure className="overflow-hidden rounded-2xl border border-border bg-surface shadow-md">
          <img
            src="/prints/hero-printer.jpg"
            alt="Design Dimensions Industrial UV Flatbed Printer with Active UV Curing"
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
  return (
    <section className="bg-ink text-accent-fg">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-fg/60">
          Versatile Media
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl sm:text-4xl tracking-tight">
          Over 30 Substrates. If it is flat, we print it.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-accent-fg/80">
          From heavy waterproof WPC entrance doors to float glass backsplashes and mirror-finish brass plates.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((m) => (
            <article key={m.id} className="overflow-hidden rounded-xl border border-accent-fg/15 bg-accent-fg/5">
              <div className="aspect-16/10 overflow-hidden bg-accent-fg/10">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-fg/60">
                  {m.highlight}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-accent-fg">{m.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-accent-fg/75">{m.uses}</p>
                <p className="mt-4 text-xs font-semibold text-accent-fg/90 border-t border-accent-fg/10 pt-3">
                  {m.from}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkPreview() {
  const preview = works.slice(0, 4);
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Real Samples
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-fg">
            Recent Production from Our Studio
          </h2>
        </div>
        <Button asChild variant="outline">
          <Link to="/work">
            Full Gallery (19+ Samples)
            <ArrowRight className="size-4 ml-1" />
          </Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {preview.map((w) => (
          <figure
            key={w.id}
            className="overflow-hidden rounded-xl border border-border bg-surface shadow-xs transition-hover hover:border-accent/40"
          >
            <div className="aspect-4/3 overflow-hidden bg-wash">
              <img src={w.image} alt={w.title} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <figcaption className="p-4 sm:p-5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                {w.category} · {w.area}
              </span>
              <h3 className="mt-1 font-display text-xl font-bold text-fg">{w.title}</h3>
              <p className="mt-1 text-xs text-muted">{w.material}</p>
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
        src="/prints/official-board.jpg"
        alt="Design Dimensions workshop board in RR Nagar"
        className="aspect-16/10 w-full rounded-2xl object-cover border border-border"
      />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Walk In
        </p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-fg">
          Ideal Homes Circle, RR Nagar.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Located right at Ideal Homes Circle, Rajarajeshwari Nagar. 
          Conveniently accessible via Namma Metro <strong>Purple Line</strong> (RR Nagar Metro Station) and Mysore Road. 
          Serving RR Nagar, Kengeri, BHEL Layout, Ullal, Nagarbhavi, Banashankari, and Global Village Tech Park.
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
            <a href={`tel:+${site.phoneE164}`}>Call {site.phoneDisplay}</a>
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
            Enquiries and proofs via WhatsApp or studio visit only. 
            No online payments. 100% advance upon proof approval.
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
