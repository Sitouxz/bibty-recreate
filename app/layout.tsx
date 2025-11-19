import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bibty Designs | Stunning Bathroom Renovations",
  description: "Bathroom-Obsessed Interior Studio in Singapore. Transforming cramped bathrooms into stunning retreats.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${oswald.variable} ${inter.variable} antialiased bg-bibty-cream text-bibty-charcoal font-sans selection:bg-bibty-orange selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
