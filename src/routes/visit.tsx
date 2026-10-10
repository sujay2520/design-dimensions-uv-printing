import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, whatsappHref, canonicalUrl } from "@/lib/site";
import { useOwnerConfig, openOwnerModal } from "@/lib/owner-store";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQAccordionSection } from "@/components/ui/faq-accordion";

export const Route = createFileRoute("/visit")({
  component: VisitPage,
  head: () => ({
    meta: [
      { title: "Visit Studio & About Us — Design Dimensions UV Printing, RR Nagar, Bangalore" },
      {
        name: "description",
        content: "Visit our UV flatbed printing studio at #8/2 A, 18th Main Road, 1st Stage, Dwarakanagar, Channasandra, Bangalore - 560098. Walk in with your materials or artwork.",
      },
    ],
    links: [
      { rel: "canonical", href: canonicalUrl("/visit") },
    ],
  }),
});

function VisitPage() {
  const ownerConfig = useOwnerConfig();

  const officePhone = ownerConfig.officePhoneDisplay || site.officePhoneDisplay;
  const whatsappPhone = ownerConfig.whatsappDisplay || site.whatsappDisplay;
  const officePhoneE164 = ownerConfig.officePhoneE164 || site.officePhoneE164;
  const whatsappE164 = ownerConfig.whatsappE164 || site.whatsappE164;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Walk-In Studio & About Us
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-fg">
            Dwarakanagar, Channasandra, RR Nagar.
          </h1>
        </div>

        {/* Top-Right Owner Access Trigger */}
        <button
          type="button"
          onClick={openOwnerModal}
          className="inline-flex items-center self-start sm:self-auto gap-2 rounded-xl border border-border/80 bg-surface px-4 py-2 text-xs font-bold text-fg hover:border-accent hover:bg-wash transition-all shadow-sm"
        >
          <Lock className="size-3.5 text-accent" />
          <span>Owner Access (Passcode)</span>
        </button>
      </div>

      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        {site.kannadaPlace}. A dedicated UV printing studio equipped with industrial flatbed printers. 
        Bring your own substrates, architectural measurements, or artwork on a flash drive/phone. 
        We proof designs on-screen with you before printing.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <div className="overflow-hidden rounded-xl border border-border bg-wash lg:col-span-7">
          <iframe
            title="Map of Design Dimensions UV Printing in Dwarakanagar, Channasandra, RR Nagar"
            src={site.mapEmbed}
            className="h-80 w-full border-0 sm:h-[30rem]"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 sm:p-8 lg:col-span-5">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl text-fg">Studio Address</h2>
              {site.isWomenOwned && (
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                  Women-Owned
                </span>
              )}
            </div>
            <address className="mt-3 space-y-1 text-sm not-italic leading-relaxed text-muted">
              {site.addressLines.map((line) => (
                <p key={line} className="font-medium text-fg">{line}</p>
              ))}
              <p className="text-xs text-muted pt-1">Landmark: {site.landmark}</p>
              <p className="text-xs font-mono text-accent pt-0.5">Google Plus Code: {site.plusCode}</p>
            </address>

            <h2 className="mt-7 font-display text-2xl text-fg">Working Hours</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-3 border-b border-border/50 pb-1.5 last:border-0">
                  <span className="font-medium">{h.day}</span>
                  <span className="text-muted">{h.time}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-7 font-display text-2xl text-fg">Call & WhatsApp</h2>
            <div className="mt-3 space-y-2.5 text-sm">
              <div>
                <span className="text-muted text-xs block">Studio / Office Line:</span>
                <a className="font-semibold text-accent hover:underline text-base" href={`tel:+${officePhoneE164}`}>
                  {officePhone}
                </a>
              </div>
              <div>
                <span className="text-muted text-xs block">WhatsApp (Quotations & Digital Proofs):</span>
                <a
                  className="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline text-base flex items-center gap-1.5"
                  href={`https://wa.me/${whatsappE164}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{whatsappPhone}</span>
                  <span className="text-[11px] font-normal bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full">Direct Chat</span>
                </a>
              </div>
              <div className="pt-1">
                <span className="text-muted text-xs block">Official Email:</span>
                <a className="text-accent hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
            </div>

            <div className="mt-5 rounded-lg border border-border/80 bg-wash/50 p-3 text-xs text-muted">
              <p className="font-semibold text-fg">Order & Digital Proof Confirmation</p>
              <p className="mt-0.5">{site.termsNote}</p>
            </div>

            {/* Clickable Owner Portal Trigger Inside Contact Card */}
            <div className="mt-4 pt-3.5 border-t border-border/60 flex items-center justify-between">
              <span className="text-xs text-muted">Authorized Personnel:</span>
              <button
                type="button"
                onClick={openOwnerModal}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-wash/60 px-3 py-1.5 text-xs font-semibold text-accent hover:border-accent hover:bg-wash transition-colors shadow-sm"
              >
                <Lock className="size-3.5" />
                <span>Studio Login (Passcode)</span>
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="flex-1">
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Google Maps
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <a href={`https://wa.me/${whatsappE164}`} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      <section className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
        <figure className="overflow-hidden rounded-xl border border-border bg-wash shadow-sm">
          <img
            src="/prints/workshop-sample-wall.jpg"
            alt="Design Dimensions Workshop Sample Wall"
            className="aspect-16/10 w-full object-cover"
          />
          <figcaption className="border-t border-border px-4 py-2 text-xs text-muted">
            Design Dimensions workshop master showroom wall at Dwarakanagar 1st Stage, Channasandra showcasing direct UV flatbed prints on 30+ flat surfaces.
          </figcaption>
        </figure>
        <div>
          <h2 className="font-display text-3xl tracking-tight text-fg">Route & Transit Directions</h2>
          <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
            <li>
              <strong className="text-fg block text-base font-semibold">By Road & Vehicle</strong>
              Easily accessible via Mysore Road, RR Nagar Main Road, Kengeri, and NICE Ring Road. Located at #8/2 A, 18th Main Road, Dwarakanagar 1st Stage, Channasandra. Convenient vehicle and two-wheeler parking available right outside the studio.
            </li>
            <li>
              <strong className="text-fg block text-base font-semibold">Local Landmarks & Access</strong>
              Located on 18th Main Road in Dwarakanagar 1st Stage, near Channasandra Main Road. Use our Google Maps link or Plus Code (<span className="font-mono text-accent">VGXC+G2</span>) for exact pinpoint navigation.
            </li>
            <li>
              <strong className="text-fg block text-base font-semibold">Service Catchment</strong>
              Channasandra, Dwarakanagar, RR Nagar, Ideal Homes, Kengeri, BHEL Layout, Ullal, Nagarbhavi, Banashankari, Mysore Road & Global Village Tech Park.
            </li>
            <li>
              <strong className="text-fg block text-base font-semibold">What to Bring for Walk-in Orders</strong>
              Bring your vector artwork (PDF, AI, CDR), high-res images on phone/USB, exact Kannada spelling if printing bilingual boards, and wall or door measurements.
            </li>
          </ul>
          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link to="/enquire">Send Job Details Ahead</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/work">View Real Work Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Endorsements */}
      <TestimonialsSection />

      {/* Frequently Asked Questions */}
      <FAQAccordionSection />

      {/* Prominent Studio Owner Control Card at the Bottom of About Page */}
      <section className="mt-16 rounded-2xl border-2 border-dashed border-accent/30 bg-surface p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 rounded-md bg-accent/10 px-2.5 py-1 text-xs font-bold text-accent">
            <ShieldCheck className="size-3.5" />
            <span>Owner Dashboard Access</span>
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-fg">
            Manage Design Dimensions Website
          </h2>
          <p className="text-sm text-muted max-w-xl">
            Click here to unlock the private owner portal. Enter your passcode to update phone numbers, toggle the holiday notice banner, manage all 28 flat substrates, or generate quick WhatsApp quotes.
          </p>
        </div>

        <Button
          size="lg"
          onClick={openOwnerModal}
          className="shrink-0 bg-accent text-accent-fg hover:bg-accent/90"
        >
          <Lock className="size-4 mr-2" />
          Click to Enter Passcode
        </Button>
      </section>
    </main>
  );
}
