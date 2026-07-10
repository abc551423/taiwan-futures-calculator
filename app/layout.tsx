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
  title: "台灣期貨當沖損益計算機｜免費大台、小台、微台損益試算",

  description:
    "免費台灣期貨當沖損益計算工具，支援大台、小台、微台，快速計算淨收益、收益率、期交稅與保證金。",

  keywords: [
    "台灣期貨",
    "期貨計算機",
    "台指期",
    "小台",
    "微台",
    "期貨當沖",
    "損益計算",
    "收益率",
    "期交稅",
    "保證金",
  ],

  authors: [
    {
      name: "DickChen",
    },
  ],

  creator: "DickChen",

  metadataBase: new URL(
    "https://taiwan-futures-calculator.vercel.app"
  ),

  openGraph: {
    title: "台灣期貨當沖損益計算機",
    description:
      "免費計算大台、小台、微台期貨淨收益、收益率與期交稅。",
    url: "https://taiwan-futures-calculator.vercel.app",
    siteName: "台灣期貨當沖損益計算機",
    locale: "zh_TW",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
