import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden", className)}>
      <img
        src="/brand/logo-transparent.png"
        alt="Design Dimensions Peacock Logo"
        className="h-10 w-auto object-contain sm:h-12"
      />
    </div>
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3 text-fg">
      <img
        src="/brand/logo-transparent.png"
        alt="Design Dimensions Emblem"
        className="size-9 object-contain sm:size-10 shrink-0"
      />
      <span className="leading-tight">
        <span className="block font-display text-lg tracking-tight font-bold text-fg sm:text-xl">
          Design Dimensions
        </span>
        {!compact ? (
          <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
            Inspired Designs · Flawless Prints
          </span>
        ) : (
          <span className="block text-[9px] font-medium uppercase tracking-[0.14em] text-muted">
            UV Printing · RR Nagar
          </span>
        )}
      </span>
    </span>
  );
}
