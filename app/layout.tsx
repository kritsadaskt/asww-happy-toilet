import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ["thai", "latin"],
  variable: "--font-ibm-plex-sans-thai",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thehappytoiletproject.com"),
  title: "The Happy Toilet Project",
  description: "The AssetWise Happy Toilet Project",
  openGraph: {
    title: "The Happy Toilet Project",
    description: "ชวนคุณออกแบบความสุข…ให้เกิดขึ้นจริง กับโครงการประกวดออกแบบห้องน้ำเพื่อสาธารณะ “สุขา สุขี : THE HAPPY TOILET” พร้อมโอกาสแปลงไอเดียเป็นงานสร้างจริง เงินรางวัลรวมมูลค่า 260,000 บาท",
    url: "https://thehappytoiletproject.com/",
    siteName: "The Happy Toilet Project",
    images: [
      {
        url: "/happy_toilet_desktop_banner.png",
        width: 1866,
        height: 933,
        alt: "The Happy Toilet Project",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The AssetWise Happy Toilet Project",
    description: "ชวนคุณออกแบบความสุข…ให้เกิดขึ้นจริง กับโครงการประกวดออกแบบห้องน้ำเพื่อสาธารณะ “สุขา สุขี : THE HAPPY TOILET” พร้อมโอกาสแปลงไอเดียเป็นงานสร้างจริง เงินรางวัลรวมมูลค่า 260,000 บาท",
    images: ["/happy_toilet_desktop_banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${ibmPlexSansThai.variable} font-sans antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
