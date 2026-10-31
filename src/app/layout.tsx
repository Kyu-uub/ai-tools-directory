import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Tools Hub — Discover the Best Free AI Tools",
  description: "Browse 50+ curated AI tools for chat, image generation, coding, writing, video, productivity & more. All free to discover.",
  keywords: ["AI tools", "free AI", "artificial intelligence", "AI directory", "ChatGPT alternatives", "AI software"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-toolshub.vercel.app",
    siteName: "AI Tools Hub",
    title: "AI Tools Hub — Discover the Best Free AI Tools",
    description: "Browse 50+ curated AI tools for chat, image generation, coding, writing, video, productivity & more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Hub — Discover the Best Free AI Tools",
    description: "Browse 50+ curated AI tools for chat, image generation, coding, writing, video, productivity & more.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
