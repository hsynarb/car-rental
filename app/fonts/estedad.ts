import localFont from "next/font/local";

export const estedad = localFont({
  src: [
    {
      path: "./estedad/Estedad-FD-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./estedad/Estedad-FD-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./estedad/Estedad-FD-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./estedad/Estedad-FD-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./estedad/Estedad-FD-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./estedad/Estedad-FD-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./estedad/Estedad-FD-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-estedad",
  display: "swap",
});
