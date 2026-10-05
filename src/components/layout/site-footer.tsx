import { Link } from "@tanstack/react-router";
import { nav, site, whatsappHref } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-accent-fg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img
              src="/brand/logo-transparent.png"
              alt="Design Dimensions Logo"
              className="size-10 object-contain brightness-110"
            />
            <div>
              <p className="font-display text-2xl font-bold tracking-tight text-accent-fg">
                Design Dimensions
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-fg/70">
                {site.tagline}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-accent-fg/75">
            Premier UV flatbed printing studio at Ideal Homes Circle, Rajarajeshwari Nagar. 
            Direct printing on 30+ flat surfaces including Glass, Acrylic, WPC Doors, Wood, Metal & Canvas. 
            All quotes and proofs handled via WhatsApp and studio walk-in.
          </p>
          <div className="mt-4 text-xs text-accent-fg/60">
            <p>Institutional client partner for CSIR-NAL, HAL, PES University, Sobha & Gold's Gym.</p>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-fg/50">
            Navigation
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:underline text-accent-fg/80 hover:text-accent-fg">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/enquire" className="hover:underline text-accent-fg/80 hover:text-accent-fg">
                WhatsApp Inquiry Form
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-fg/50">
            Studio & Contact
          </p>
          <address className="mt-4 space-y-1.5 text-sm not-italic leading-relaxed text-accent-fg/80">
            {site.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="text-xs text-accent-fg/60 pt-1">Landmark: {site.landmark}</p>
            
            <div className="pt-3">
              <span className="text-xs text-accent-fg/50 block">Primary & WhatsApp:</span>
              <a className="font-semibold text-accent-fg hover:underline" href={`tel:+${site.phoneE164}`}>
                {site.phoneDisplay}
              </a>
            </div>
            <div>
              <span className="text-xs text-accent-fg/50 block">Studio Landline:</span>
              <a className="font-semibold text-accent-fg hover:underline" href={`tel:+${site.phoneSecondaryE164}`}>
                {site.phoneSecondary}
              </a>
            </div>
            <div className="pt-1">
              <span className="text-xs text-accent-fg/50 block">Official Email:</span>
              <a className="hover:underline text-accent-fg/90" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
            <div className="pt-2">
              <a
                className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-accent-fg hover:opacity-90"
                href={whatsappHref()}
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
            </div>
          </address>
        </div>
      </div>
      <div className="border-t border-accent-fg/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-accent-fg/50 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Design Dimensions. RR Nagar, Bengaluru 560098.</p>
          <p>No online checkout · Walk-in consultations & WhatsApp proofs only.</p>
        </div>
      </div>
    </footer>
  );
}
