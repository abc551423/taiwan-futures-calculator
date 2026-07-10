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
  title: "台灣期貨當沖損益計算機｜大台、小台、微台",
  description:
    "免費台灣期貨當沖損益計算工具，支援大台、小台、微台，快速計算期交稅、淨收益、保證金與收益率。",
  keywords: [
    "期貨損益計算機",
    "台指期計算機",
    "小台損益計算",
    "微台損益計算",
    "期貨當沖",
    "期交稅",
    "保證金收益率",
  ],
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
