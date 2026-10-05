import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { materials, services, allFlatSurfaces, whatsappHref } from "@/lib/site";
import { Layers, ShieldCheck, Clock, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [{ title: "UV Printing Services & Substrates — Design Dimensions, RR Nagar" }],
  }),
});

function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Industrial & Custom Flatbed Printing
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl tracking-tight text-fg">
        Direct UV Printing on Any Rigid & Flat Surface
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Equipped with industrial large-format UV flatbed printers up to 8×4 ft bed size. 
        Instant UV photopolymerization cures durable, scratch-resistant inks directly onto the substrate 
        with vibrant CMYK, multi-pass opaque White ink, and spot varnish.
      </p>

      {/* 30+ Flat Surfaces Master Showcase */}
      <section className="mt-12 rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex items-center gap-2">
          <Layers className="size-5 text-accent" />
          <h2 className="font-display text-2xl text-fg">
            30+ Compatible Flat Surfaces & Substrates
          </h2>
        </div>
        <p className="mt-2 text-xs sm:text-sm text-muted">
          As showcased on our workshop master board at Ideal Homes Circle:
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {allFlatSurfaces.map((surface) => (
            <span
              key={surface}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-wash/60 px-3 py-1.5 text-xs font-medium text-fg transition-colors hover:border-accent hover:bg-surface"
            >
              <CheckCircle className="size-3 text-accent" />
              {surface}
            </span>
          ))}
        </div>
      </section>

      {/* Materials Deep Dive Grid */}
      <section className="mt-16">
        <h2 className="font-display text-3xl tracking-tight text-fg">
          Core Substrate Capabilities
        </h2>
        <p className="mt-2 text-sm text-muted">
          Bring your own sheets or choose from our in-studio inventory:
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((m) => (
            <article
              key={m.id}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-xs transition-hover hover:border-accent/40"
            >
              <div className="aspect-16/10 overflow-hidden bg-wash">
                <img src={m.image} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                    {m.highlight}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-fg">{m.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{m.uses}</p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs">
                  <span className="font-medium text-fg">{m.from}</span>
                  <a
                    href={whatsappHref(`Hello, I would like to enquire about UV printing on ${m.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-accent hover:underline"
                  >
                    Inquire on WhatsApp →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services List */}
      <section className="mt-20 space-y-16">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-fg">
            Specialized Services & Turnaround
          </h2>
          <p className="mt-2 text-sm text-muted">
            All prices are indicative starting guidelines. Final estimate provided upon artwork inspection & dimension proof.
          </p>
        </div>

        {services.map((svc) => (
          <article
            key={svc.slug}
            id={svc.slug}
            className="grid scroll-mt-24 gap-8 border-t border-border pt-12 lg:grid-cols-12 lg:items-center"
          >
            <div className="overflow-hidden rounded-xl border border-border bg-wash lg:col-span-5">
              <img
                src={svc.image}
                alt={svc.title}
                className="aspect-4/3 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-7">
              <span className="inline-block rounded-md bg-accent/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                {svc.group}
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl tracking-tight text-fg">
                {svc.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                {svc.body}
              </p>
              <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-wash/50 p-3.5">
                  <Clock className="size-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                      Production Turnaround
                    </dt>
                    <dd className="mt-0.5 font-medium text-fg">{svc.typical}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-wash/50 p-3.5">
                  <ShieldCheck className="size-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                      Guideline Pricing
                    </dt>
                    <dd className="mt-0.5 font-medium text-fg">{svc.from}</dd>
                  </div>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a
                    href={whatsappHref(`Hello Design Dimensions, I want a quote for '${svc.title}'.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Quick WhatsApp Quote
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/enquire">Fill Walk-in Spec Form</Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
