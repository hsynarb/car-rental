import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Header from "./ui/header";
import { estedad } from "./fonts/estedad";
import PageScreen from "./ui/pageScreen/pageScreen";
import Button from "./ui/button/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Rental App",
  description: "A PWA Car Rental Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${estedad.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
