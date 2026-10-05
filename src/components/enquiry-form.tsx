import { Check } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { saveEnquiry, serviceOptions, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "flex h-12 w-full rounded-md border border-border bg-surface px-3 text-base text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [wa, setWa] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !phone || !service) {
      toast.error("Name, phone and the job type are needed.");
      return;
    }
    const entry = saveEnquiry({
      name,
      phone,
      email: String(data.get("email") ?? "").trim(),
      service,
      size: String(data.get("size") ?? "").trim(),
      material: String(data.get("material") ?? "").trim(),
      message,
    });
    const text = [
      `Hello Design Dimensions, enquiry from ${entry.name}.`,
      `Phone: ${entry.phone}`,
      `Job: ${entry.service}`,
      entry.size ? `Size: ${entry.size}` : "",
      entry.material ? `Material: ${entry.material}` : "",
      entry.message ? `Notes: ${entry.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    setWa(whatsappHref(text));
    setSent(true);
    toast.success("Enquiry saved on this phone. Send it on WhatsApp next.");
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex size-11 items-center justify-center rounded-md bg-accent text-accent-fg">
          <Check className="size-5" />
        </div>
        <h2 className="mt-5 font-display text-3xl tracking-tight">
          We have the details.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          Nothing is charged here. Open WhatsApp to send the same note to the
          studio, or walk in at Ideal Homes Circle with the artwork.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href={wa} target="_blank" rel="noreferrer">
              Send on WhatsApp
            </a>
          </Button>
          <Button variant="outline" type="button" onClick={() => setSent(false)}>
            Write another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-border bg-surface p-5 sm:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
        No payment on this form
      </p>
      <h2 className="mt-2 font-display text-3xl tracking-tight">
        Tell us the job.
      </h2>
      <p className="mt-2 text-sm text-muted">
        Size and material can be approximate. We confirm everything at the
        studio before print.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <Input id="name" name="name" autoComplete="name" required />
        </Field>
        <Field label="Phone / WhatsApp" htmlFor="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="10-digit mobile"
          />
        </Field>
        <Field label="Email (optional)" htmlFor="email" className="sm:col-span-2">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="If you want the proof mailed"
          />
        </Field>
        <Field label="What do you need?" htmlFor="service" className="sm:col-span-2">
          <select id="service" name="service" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              Choose a job
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Size (optional)" htmlFor="size">
          <Input id="size" name="size" placeholder="e.g. 2 × 4 ft, or visiting cards × 500" />
        </Field>
        <Field label="Material (optional)" htmlFor="material">
          <Input id="material" name="material" placeholder="e.g. 5mm acrylic, ACP, wood" />
        </Field>
        <Field label="Notes" htmlFor="message" className="sm:col-span-2">
          <Textarea
            id="message"
            name="message"
            placeholder="Wording, Kannada + English, colours, deadline, pickup or drop"
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg">
          Save enquiry
        </Button>
        <p className="text-xs leading-relaxed text-muted">
          Saved on this device only. Use WhatsApp on the next screen to reach
          the studio.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
