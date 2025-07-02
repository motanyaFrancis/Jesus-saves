import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DonateOverlayProvider } from '@/components/DonateOverlayProvider';
import DonateOverlay from '@/components/DonateOverlay';
import VerticalDonateButton from '@/components/VerticalDonateButton';
import TopProgressBar from '@/components/TopProgressBar';

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Dynamically resolve metadataBase
const siteUrl =
  process.env.NODE_ENV === "production"
    ? "https://jesus-saves.sdackc.org" 
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | The Living Word',
    default: 'The Living Word',
  },
  description: "Discover our latest program on The Living Word.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white p-0`}>
        <TopProgressBar />
        <DonateOverlayProvider>
          <VerticalDonateButton />
          {children}
          <DonateOverlay />
        </DonateOverlayProvider>
      </body>
    </html>
  );
}
