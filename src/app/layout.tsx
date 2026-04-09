import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://puyricardsur1plateau.fr"),
  title: {
    default: "Puyricard sur un Plateau — Association",
    template: "%s | Puyricard sur un Plateau",
  },
  icons: {
    icon: [{ url: "/images/logo_p1p.png" }],
    apple: [{ url: "/images/logo_p1p.png" }],
  },
  description:
    "Association Puyricard sur un Plateau : événements conviviaux, promotion des produits locaux et lien social au cœur du village de Puyricard, près d'Aix-en-Provence.",
  keywords: [
    "Puyricard",
    "association",
    "Aix-en-Provence",
    "événements",
    "village",
    "Provence",
    "fête",
    "produits locaux",
  ],
  openGraph: {
    title: "Puyricard sur un Plateau",
    description:
      "Donner vie au village, ensemble. Événements conviviaux au cœur de Puyricard.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/images/logo_p1p.png", width: 548, height: 427, alt: "Logo Puyricard sur un Plateau" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Matomo */}
        <Script
          id="matomo-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = window._paq = window._paq || [];
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="https://natflow.matomo.cloud/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '7']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src='https://cdn.matomo.cloud/natflow.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `,
          }}
        />
        {/* End Matomo Code */}
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} font-body antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
