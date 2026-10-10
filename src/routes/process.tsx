import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { faqs, fileSpecs, processSteps, canonicalUrl } from "@/lib/site";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "How We Print: Precision UV Flatbed Workflow — Design Dimensions" },
      {
        name: "description",
        content: "From file submission and 300 DPI pre-flight to active UV lamp curing and finishing. Learn about our precision printing process in Dwarakanagar, Bangalore.",
      },
    ],
    links: [
      { rel: "canonical", href: canonicalUrl("/process") },
    ],
  }),
});

function ProcessPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
        Process
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-5xl tracking-tight">
        Proof first. Then the UV lamp.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        Walk in, send a WhatsApp message, or use our enquiry form for proof review and custom quotes.
      </p>

      <ol className="mt-14 space-y-8">
        {processSteps.map((step) => (
          <li
            key={step.n}
            className="grid gap-4 border-t border-border pt-8 md:grid-cols-12"
          >
            <p className="font-display text-3xl text-accent md:col-span-2">{step.n}</p>
            <div className="md:col-span-10">
              <h2 className="font-display text-3xl tracking-tight">{step.title}</h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-20 rounded-xl border border-border bg-surface p-6 sm:p-10">
        <h2 className="font-display text-3xl tracking-tight">File checklist</h2>
        <p className="mt-2 text-sm text-muted">
          Send what you have. If the file is weak, we will say so before print —
          better than a soft board on the wall.
        </p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          {fileSpecs.map((row) => (
            <div key={row.label} className="border-t border-border pt-4">
              <dt className="text-xs uppercase tracking-[0.12em] text-muted">
                {row.label}
              </dt>
              <dd className="mt-1 text-sm font-medium">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto mt-20 max-w-3xl">
        <h2 className="font-display text-3xl tracking-tight">Questions</h2>
        <div className="mt-6 divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none text-base font-medium [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-muted group-open:hidden">+</span>
                  <span className="hidden text-muted group-open:inline">–</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link to="/enquire">Start an enquiry</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
