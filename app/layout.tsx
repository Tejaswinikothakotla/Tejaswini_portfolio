import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com/'),
  title: "Tejaswini Kothakotla ✌️",
  description: "Computer Science undergraduate skilled in MERN Stack, AI, and full-stack development.",
  keywords: "Tejaswini Kothakotla, MERN Stack, Full-Stack Developer, AI Chatbot, ReactJS, NodeJS, Python, Portfolio",
  authors: [{ name: "Tejaswini Kothakotla" }],
  creator: "Tejaswini Kothakotla",
  publisher: "Tejaswini Kothakotla",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Tejaswini Kothakotla - Full-Stack & AI Developer",
    description: "Computer Science undergraduate skilled in MERN Stack, AI, and full-stack development.",
    siteName: "Tejaswini Kothakotla's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejaswini Kothakotla - Full-Stack & AI Developer",
    description: "Computer Science undergraduate skilled in MERN Stack, AI, and full-stack development.",
  },
  verification: {
    google: "GsRYY-ivL0F_VKkfs5KAeToliqz0gCrRAJKKmFkAxBA",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''}/>
    </html>
  );
}
