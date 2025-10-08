import type { Metadata } from "next";
import "./globals.scss";
import Header from "./ui/header";
import { estedad } from "./fonts/estedad";

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
