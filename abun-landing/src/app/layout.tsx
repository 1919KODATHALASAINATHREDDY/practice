import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ABUN — AI Content Writer",
  description:
    "Abun is an AI content writer that creates valuable, on‑brand content from your keywords.",
  metadataBase: new URL("https://abun.com"),
  openGraph: {
    title: "ABUN — AI Content Writer",
    description:
      "Create valuable, on‑brand content from your keywords with Abun.",
    url: "https://abun.com",
    siteName: "ABUN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABUN — AI Content Writer",
    description:
      "Create valuable, on‑brand content from your keywords with Abun.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
