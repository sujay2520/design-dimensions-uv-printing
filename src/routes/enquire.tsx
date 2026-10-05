import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { site, whatsappHref } from "@/lib/site";
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, Mail } from "lucide-react";

export const Route = createFileRoute("/enquire")({
  component: EnquirePage,
  head: () => ({
    meta: [{ title: "Enquire & WhatsApp Quote — Design Dimensions, RR Nagar" }],
  }),
});

function EnquirePage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:py-16">
      <div className="lg:col-span-5 space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Instant Studio Quotation
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-fg font-bold">
            Tell Us What You Want Printed.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Send your job specifications, substrate choice, and dimensions. 
            Our team will reply with a precise quotation and digital proof.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-5 space-y-4">
          <div className="flex items-start gap-3">
            <Phone className="size-4 text-accent shrink-0 mt-1" />
            <div className="text-sm">
              <span className="text-muted block text-xs">Direct Office Call</span>
              <a className="font-semibold text-fg hover:text-accent" href={`tel:+${site.officePhoneE164}`}>
                {site.officePhoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 border-t border-border/60 pt-3">
            <MessageSquare className="size-4 text-emerald-500 shrink-0 mt-1" />
            <div className="text-sm">
              <span className="text-muted block text-xs">WhatsApp Studio Desk</span>
              <a
                className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                href={whatsappHref()}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp ({site.whatsappDisplay})
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 border-t border-border/60 pt-3">
            <Mail className="size-4 text-accent shrink-0 mt-1" />
            <div className="text-sm">
              <span className="text-muted block text-xs">Official Email</span>
              <a className="font-semibold text-fg hover:text-accent" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 border-t border-border/60 pt-3">
            <MapPin className="size-4 text-accent shrink-0 mt-1" />
            <div className="text-sm">
              <span className="text-muted block text-xs">Studio Location</span>
              <span className="font-medium text-fg">
                {site.addressLines[0]}, {site.addressLines[1]}, Bengaluru 560098
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 border-t border-border/60 pt-3">
            <Clock className="size-4 text-accent shrink-0 mt-1" />
            <div className="text-sm">
              <span className="text-muted block text-xs">Working Hours</span>
              <span className="font-medium text-fg">Mon–Sat 10:00 AM – 8:00 PM</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-accent/25 bg-accent/5 p-4 text-xs text-muted space-y-1.5">
          <div className="flex items-center gap-1.5 font-semibold text-fg">
            <ShieldCheck className="size-4 text-accent" />
            <span>Digital Proof & Convenient Payment</span>
          </div>
          <p>
            Share your requirements or artwork file. We inspect your file, share a 1:1 scale digital proof on WhatsApp, and accept convenient payments via WhatsApp (UPI / Bank Transfer) or at the studio upon proof sign-off.
          </p>
        </div>
      </div>

      <div className="lg:col-span-7">
        <EnquiryForm />
      </div>
    </main>
  );
}
