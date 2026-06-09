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
      { title: "Zenorva Support - Dedicated support engineers from Cameroon" },
      {
        name: "description",
        content:
          "World-class, bilingual (EN/FR) Tier-1 support engineers from Cameroon for SaaS companies and MSPs. Reduce support costs by up to 60%.",
      },
      { name: "author", content: "Zenorva Support" },
      { property: "og:title", content: "Zenorva Support - Dedicated support engineers from Cameroon" },
      {
        property: "og:description",
        content:
          "Bilingual EN/FR Tier-1 support engineers from Cameroon. 40–60% lower cost than US/EU hires. Founder-led quality control.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Zenorva Support - Dedicated support engineers from Cameroon" },
      { name: "description", content: "Zenorva Support offers outsourced technical and customer support engineers from Cameroon to global businesses." },
      { property: "og:description", content: "Zenorva Support offers outsourced technical and customer support engineers from Cameroon to global businesses." },
      { name: "twitter:description", content: "Zenorva Support offers outsourced technical and customer support engineers from Cameroon to global businesses." },
    ],
    links: [
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
