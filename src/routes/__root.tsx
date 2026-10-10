import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { site } from "@/lib/site";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_NAME = site.name;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} — UV Printing, RR Nagar` },
      {
        name: "description",
        content: site.metaDescription,
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#1A5C5A" },
      { name: "geo.region", content: "IN-KA" },
      { name: "geo.placename", content: "Bengaluru" },
      { name: "geo.position", content: `${site.geo.latitude};${site.geo.longitude}` },
      { name: "ICBM", content: `${site.geo.latitude}, ${site.geo.longitude}` },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "canonical", href: site.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Instrument+Serif:ital@0;1&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-bg font-sans text-fg pb-16 sm:pb-0">
        <PreviewHostBridge />
        <AuthProvider>
          <SiteHeader />
          <Outlet />
          <SiteFooter />
          <MobileActionBar />
          <Toaster
            position="top-center"
            toastOptions={{
              className: "font-sans",
            }}
          />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
