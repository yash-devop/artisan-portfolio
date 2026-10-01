import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import { PageWrapper } from "../components/layouts/page-wrapper";
import "./globals.css";
import { LayoutGroup } from "motion/react";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const InstrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yash Kamble - Developer",
  description:
    "Yash Kamble - full-stack developer portfolio showcasing projects, skills, and experience.",
  authors: [
    { name: "Yash Kamble", url: "https://www.linkedin.com/in/yash-dev/" },
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Yash Kamble",
    title: "Yash Kamble - Developer",
    description:
      "Yash Kamble - full-stack developer portfolio showcasing projects, skills, and experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash Kamble - Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Kamble - Developer",
    description:
      "Yash Kamble - full-stack developer portfolio showcasing projects, skills, and experience.",
    images: ["/og-image.png"],
    creator: "https://x.com/yash_devop",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "scroll-smooth",
        geistSans.variable,
        geistMono.variable,
        InstrumentSerif.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="font-sans flex flex-col relative h-dvh">
        <TooltipProvider>
          <LayoutGroup>
            <PageWrapper>{children}</PageWrapper>
          </LayoutGroup>
        </TooltipProvider>
      </body>
    </html>
  );
}
