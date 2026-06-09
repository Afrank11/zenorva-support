import { Outlet, Link, createRootRoute, HeadContent, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookCallProvider } from "@/components/BookCallModal";
import { ScrollBanner } from "@/components/ScrollBanner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-teal-foreground transition-colors hover:bg-teal/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zenorva Support — Dedicated Support Engineers from Cameroon" },
      { name: "description", content: "World-class, bilingual EN/FR Tier-1 support engineers from Cameroon for SaaS companies and MSPs. Reduce support costs by 40–60%. Founder-led quality control." },
      { name: "author", content: "Zenorva Support" },
      { name: "theme-color", content: "#12052A" },

      /* Open Graph */
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Zenorva Support" },
      { property: "og:title", content: "Zenorva Support — World-Class Support Teams at African Cost Efficiency" },
      { property: "og:description", content: "Dedicated, bilingual (EN/FR) support engineers from Cameroon. 40–60% lower cost than US/EU hires. No setup fees. Start with a 30-day pilot." },
      { property: "og:image", content: "https://zenorvasupport.com/og-image.svg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Zenorva Support — World-Class Support Teams at African Cost Efficiency" },
      { property: "og:locale", content: "en_US" },

      /* Twitter / X */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Zenorva Support — World-Class Support Teams at African Cost Efficiency" },
      { name: "twitter:description", content: "Dedicated, bilingual EN/FR support engineers from Cameroon. 40–60% lower cost. No setup fees. Start with a 30-day pilot." },
      { name: "twitter:image", content: "https://zenorvasupport.com/og-image.svg" },
    ],
    links: [
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "shortcut icon", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function RootComponent() {
  return (
    <BookCallProvider>
      <HeadContent />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ScrollBanner />
    </BookCallProvider>
  );
}
