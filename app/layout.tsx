import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://securefundsfinance.com"),
  title: {
    default: "SecureFundsFinance | Institutional Grade Lending & Financial Services",
    template: "%s | SecureFundsFinance",
  },
  description:
    "Experience institutional-grade financial partnership with SecureFundsFinance. RBI-partnered lending solutions for enterprise liquidity, asset financing, and bespoke personal credit with competitive rates and priority service.",
  keywords: [
    "institutional lending",
    "enterprise loans",
    "asset financing",
    "corporate banking",
    "RBI regulated",
    "business loans India",
    "working capital",
    "NBFC India",
    "wealth management",
    "high net worth",
  ],
  authors: [{ name: "SecureFundsFinance" }],
  creator: "SecureFundsFinance",
  publisher: "SecureFundsFinance India Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://securefundsfinance.com",
    title: "SecureFundsFinance | Institutional Grade Lending",
    description:
      "RBI-partnered financial institution providing sophisticated lending solutions for enterprises and high-net-worth individuals. ₹450Cr+ capital disbursed to 12,000+ clients.",
    siteName: "SecureFundsFinance",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SecureFundsFinance - Institutional Grade Financial Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SecureFundsFinance | Institutional Grade Lending",
    description:
      "RBI-partnered financial institution providing sophisticated lending solutions for enterprises and high-net-worth individuals.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
  alternates: {
    canonical: "https://securefundsfinance.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0A1D37" />
        
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* Material Icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
