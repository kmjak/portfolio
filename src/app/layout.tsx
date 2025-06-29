import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { HamburgerModal } from "@/components/navigation/hamburger";

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
    template: "%s | Portfolio",
    default: "Portfolio",
  },
  description: "奥村真翔のポートフォリオサイトです。",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white w-full`}
      >
        <Header />
        <main className="w-full relative overflow-x-hidden mt-16 md:mt-18 lg:mt-20">
          {children}
          <HamburgerModal />
        </main>
      </body>
    </html>
  );
}
