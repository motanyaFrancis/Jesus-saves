import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DonateOverlayProvider } from '@/components/DonateOverlayProvider';
import DonateOverlay from '@/components/DonateOverlay';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Jesus Saves',
    default: 'Jesus Saves',
  },
  description: "Preach to all Nationa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white p-0`}>
        <DonateOverlayProvider>
          {children}
          <DonateOverlay />
        </DonateOverlayProvider>
      </body>
    </html>
  );
}
