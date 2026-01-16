import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Script from "next/script";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ["thai", "latin"],
  variable: "--font-ibm-plex-sans-thai",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thehappytoiletproject.com"),
  title: "สุขา สุขี : THE HAPPY TOILET",
  description: "ชวนคุณออกแบบความสุข…ให้เกิดขึ้นจริง กับโครงการประกวดออกแบบห้องน้ำเพื่อสาธารณะ “สุขา สุขี : THE HAPPY TOILET” พร้อมโอกาสแปลงไอเดียเป็นงานสร้างจริง เงินรางวัลรวมมูลค่า 260,000 บาท",
  openGraph: {
    title: "สุขา สุขี : THE HAPPY TOILET",
    description: "ชวนคุณออกแบบความสุข…ให้เกิดขึ้นจริง กับโครงการประกวดออกแบบห้องน้ำเพื่อสาธารณะ “สุขา สุขี : THE HAPPY TOILET” พร้อมโอกาสแปลงไอเดียเป็นงานสร้างจริง เงินรางวัลรวมมูลค่า 260,000 บาท",
    url: "https://thehappytoiletproject.com/",
    siteName: "สุขา สุขี : THE HAPPY TOILET",
    images: [
      {
        url: "/happy_toilet_desktop_banner.png",
        width: 1866,
        height: 933,
        alt: "สุขา สุขี : THE HAPPY TOILET",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "สุขา สุขี : THE HAPPY TOILET",
    description: "ชวนคุณออกแบบบความสุข เพื่อสร้างสรรค์ “ต้นแบบห้องน้ำสาธารณะคุณภาพสูง” ที่สามารถนำไปก่อสร้างหรือติดตั้งได้จริงในพื้นที่สาธารณะทั่วประเทศไทย",
    images: ["/TheHappyToilet_KV_desktop.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5Q28SBNJ');
            `,
          }}
        />
      </head>
      <body
        className={`${ibmPlexSansThai.variable} font-sans antialiased`}
      >
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5Q28SBNJ"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <Header />
        {children}
      </body>
    </html>
  );
}
