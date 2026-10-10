import { Star, Quote, Building2, UserCheck, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  project: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Arjun R. Murthy",
    role: "Architect & Principal Designer",
    location: "Rajarajeshwari Nagar, Bengaluru",
    project: "Sliding Glass Wardrobe Profiles & Partitions",
    rating: 5,
    review:
      "Design Dimensions printed 8ft fluted and frosted glass profiles for our luxury villa project. The white ink density and edge-to-edge registration on the industrial flatbed was razor-sharp. Our clients were thrilled.",
  },
  {
    name: "Sneha Hegde",
    role: "Homeowner",
    location: "Dwarakanagar Stage 1, Channasandra",
    project: "Custom WPC Pooja Room Main Door",
    rating: 5,
    review:
      "Walked right into their 18th Main Road studio with my vector Balaji artwork. They proofed the design with me on-screen, recommended the gold UV finish, and delivered a flawless scratch-resistant door in 48 hours!",
  },
  {
    name: "Venkatesh Rao",
    role: "Commercial Contractor",
    location: "Mysore Road / Kengeri",
    project: "Institutional Aluminium & ACP Nameplates",
    rating: 5,
    review:
      "We regularly print high-spec stainless steel and aluminium plaques for institutional clients. The active UV curing bonds completely to metal without peeling or weathering under intense sun.",
  },
  {
    name: "Pooja Nandakumar",
    role: "Interior Decorator",
    location: "Ideal Homes, RR Nagar",
    project: "Ceramic Kitchen Backsplash & Acrylic Art",
    rating: 5,
    review:
      "Direct UV printing on tiles eliminated all need for vinyl wraps. It's 100% waterproof and scratch-proof. WhatsApp coordination and fast digital proof turnarounds made the whole process effortless.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="border-t border-border bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Client Endorsements
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-fg">
              Verified Feedback from Bengaluru Makers
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-muted">
            <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
            <span>5.0 / 5.0 Average Rating · Verified Projects</span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-xs hover:border-accent transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
                    {t.project}
                  </span>
                </div>

                <blockquote className="text-sm text-fg leading-relaxed">
                  "{t.review}"
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-fg">{t.name}</h4>
                  <p className="text-xs text-muted">{t.role} · {t.location}</p>
                </div>
                <Quote className="size-6 text-accent/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
