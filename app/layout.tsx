import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Wrapper } from "./components/Wrapper";
import "./globals.css";
import { LayoutGroup } from "motion/react";

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
      className={`${geistSans.variable} ${geistMono.variable} ${InstrumentSerif.variable} h-full antialiased  scroll-smooth`}
    >
      <body className="font-sans flex flex-col relative h-dvh">
        <LayoutGroup>
          <Wrapper>{children}</Wrapper>
        </LayoutGroup>
      </body>
    </html>
  );
}
