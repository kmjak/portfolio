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
        className={`${geistSans.variable} ${geistMono.variable} antialiased  min-h-screen bg-gray-900 text-white w-screen overflow-hidden`}
      >
        <Header />
        <main className="relative h-[calc(100vh-40px)] md:h-[calc(100vh-48px)] lg:h-[calc(100vh-56px)]">
          {children}
          <HamburgerModal />
        </main>
      </body>
    </html>
  );
}
