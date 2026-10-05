import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Wordmark } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { nav, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
          <Wordmark compact />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-fg",
                pathname === item.to && "text-fg",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <a href={whatsappHref()} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
          <Button asChild size="sm">
            <Link to="/enquire">Enquire</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-surface lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-11 items-center border-b border-border/70 text-base text-fg last:border-0",
                  pathname === item.to && "text-accent",
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-center text-base text-accent"
              onClick={() => setOpen(false)}
            >
              WhatsApp the studio
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
