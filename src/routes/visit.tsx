import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { site, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/visit")({
  component: VisitPage,
  head: () => ({
    meta: [{ title: "Visit Studio — Design Dimensions UV Printing, RR Nagar" }],
  }),
});

function VisitPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Walk-In Studio
      </p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-fg">
        Ideal Homes Circle, RR Nagar.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        {site.kannadaPlace}. A dedicated UV printing studio equipped with industrial flatbed printers. 
        Bring your own substrates, architectural measurements, or artwork on a flash drive/phone. 
        We proof designs on-screen with you before printing.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <div className="overflow-hidden rounded-xl border border-border bg-wash lg:col-span-7">
          <iframe
            title="Map of Design Dimensions near Ideal Homes Circle, RR Nagar"
            src={site.mapEmbed}
            className="h-80 w-full border-0 sm:h-[30rem]"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 sm:p-8 lg:col-span-5">
          <div>
            <h2 className="font-display text-2xl text-fg">Studio Address</h2>
            <address className="mt-3 space-y-1 text-sm not-italic leading-relaxed text-muted">
              {site.addressLines.map((line) => (
                <p key={line} className="font-medium text-fg">{line}</p>
              ))}
              <p className="text-xs text-muted pt-1">Landmark: {site.landmark}</p>
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
            <div className="mt-3 space-y-1.5 text-sm">
              <p>
                <span className="text-muted text-xs block">Office & WhatsApp:</span>
                <a className="font-semibold text-accent hover:underline text-base" href={`tel:+${site.phoneE164}`}>
                  {site.phoneDisplay}
                </a>
              </p>
              <p className="pt-1">
                <span className="text-muted text-xs block">Official Email:</span>
                <a className="text-accent hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </div>
            <div className="mt-5 rounded-lg border border-border/80 bg-wash/50 p-3 text-xs text-muted">
              <p className="font-semibold text-fg">No Online Payments on Website</p>
              <p className="mt-0.5">{site.termsNote}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="flex-1">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
              >
                Open Google Maps
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <a href={whatsappHref()} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      <section className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
        <figure className="overflow-hidden rounded-xl border border-border bg-wash">
          <img
            src="/prints/official-board.jpg"
            alt="Design Dimensions Workshop Board"
            className="aspect-16/10 w-full object-cover"
          />
          <figcaption className="border-t border-border px-4 py-2 text-xs text-muted">
            Design Dimensions workshop sample board at Ideal Homes Circle showcasing direct prints on 30+ flat surfaces.
          </figcaption>
        </figure>
        <div>
          <h2 className="font-display text-3xl tracking-tight text-fg">Route & Transit Directions</h2>
          <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
            <li>
              <strong className="text-fg block text-base font-semibold">Namma Metro (Purple Line)</strong>
              Alight at <span className="text-fg font-medium">RR Nagar Metro Station</span> (or Jnanabharathi Station) on Mysore Road. Take a 5-minute quick auto ride straight up to Ideal Homes Circle.
            </li>
            <li>
              <strong className="text-fg block text-base font-semibold">By Road & Vehicle</strong>
              Located just 2 km inside from the main RR Nagar Mysore Road Arch. Smooth access from NICE Ring Road (Mysore Road / Kengeri exits). Free 2-wheeler and street 4-wheeler parking available around Ideal Homes Circle.
            </li>
            <li>
              <strong className="text-fg block text-base font-semibold">Service Catchment</strong>
              Ideal Homes, RR Nagar, Kengeri Satellite Town, BHEL Layout, Ullal, Nagarbhavi, Banashankari, Mysore Road & Global Village Tech Park.
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
    </main>
  );
}
