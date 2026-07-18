import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import { PageWrapper } from "../components/wrappers/page-wrapper";
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

export const metadata: Metadata = {
  title: "Yash Kamble - Developer",
  description: "Yash kamble portfolio",
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
