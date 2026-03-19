import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { siteContent } from "@/lib/content";

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
    default: `${siteContent.brand.name} | Servicios profesionales`,
    template: `%s | ${siteContent.brand.name}`,
  },
  description: siteContent.brand.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="6Cr92jGfY8D6cZX4sdEC1v1vECb_mgjBy8Jd9qoUfI4"
        />
      </head>
      <body className="min-h-full bg-[#050505] text-zinc-100">{children}</body>
    </html>
  );
}
