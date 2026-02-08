import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    default:
      "SecureFundsFinance | Loan Information & Referral Assistance",
    template: "%s | SecureFundsFinance",
  },

  description:
    "We provide general loan-related information and referral assistance for personal, home, business, and property loans. We are not a bank or lender.",

  keywords: [
    "loan information",
    "loan referral",
    "personal loan india",
    "home loan guidance",
    "business loan enquiry",
    "loan against property",
    "loan eligibility india",
    "financial consultant india",
  ],

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://securefundsfinance.com",
    title: "SecureFundsFinance | Loan Information & Referral",
    description:
      "Independent consultant providing loan-related information and referral assistance. No guarantees. No approvals.",
    siteName: "SecureFundsFinance",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://securefundsfinance.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0A1D37" />

        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>

      <body className="bg-white text-navy font-sans">

        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
