import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Source_Serif_4 } from 'next/font/google'

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import StructuredData from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  metadataBase: new URL("https://shrijalpaudel.com.np"),
  title: {
    default: "Shrijal Paudel - Business Operations Manager Nepal | Kathmandu Portfolio",
    template: "%s | Shrijal Paudel - Business Operations Manager Nepal"
  },
  description: "Experienced Business Operations Manager in Kathmandu, Nepal. Expert in business strategy, operations management & entrepreneurship. Deputy Manager at Nepal Can Group. Contact for business opportunities.",
  keywords: [
    "Business Operations Manager Nepal",
    "Business Development Kathmandu",
    "Operations Management Nepal",
    "Entrepreneurship Professional Nepal",
    "Business Consultant Kathmandu",
    "Leadership Development Nepal",
    "Project Management Specialist",
    "Business Strategy Nepal",
    "Operations Management Kathmandu",
    "Business Operations Manager Lalitpur Nepal",
    "Shrijal Paudel",
    "Nepal Can Group",
    "Kathmandu business professional",
    "Lalitpur entrepreneur",
    "Business Development Professional Kathmandu"
  ],
  authors: [{ name: "Shrijal Paudel", url: "https://shrijalpaudel.com.np" }],
  creator: "Shrijal Paudel",
  publisher: "Shrijal Paudel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "business",
  classification: "Business Operations and Development Professional",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    title: "Shrijal Paudel - Business Operations Manager Nepal",
    description: "Experienced Business Operations Manager in Kathmandu, Nepal. Expert in business strategy, operations management & entrepreneurship. Deputy Manager at Nepal Can Group.",
    url: "https://shrijalpaudel.com.np",
    siteName: "Shrijal Paudel Portfolio",
    locale: "en_US",
    alternateLocale: "en_NP",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shrijal Paudel - Business Operations Manager and Strategy Consultant based in Kathmandu, Nepal",
        type: "image/jpeg",
      },
      {
        url: "/og-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Shrijal Paudel - Professional headshot, Business Operations Manager Nepal",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shrijalpaudel",
    creator: "@shrijalpaudel",
    title: "Shrijal Paudel - Business Operations Manager Nepal",
    description: "Experienced Business Operations Manager in Kathmandu, Nepal. Expert in business strategy, operations management & entrepreneurship.",
    images: ["/twitter-card.jpg"],
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "geo.region": "NP-3",
    "geo.placename": "Lalitpur, Kathmandu, Nepal",
    "geo.position": "27.6588;85.3240",
    "ICBM": "27.6588, 85.3240",
    "language": "English",
    "revisit-after": "7 days",
    "distribution": "Global",
    "rating": "General",
    "target": "business professionals",
    "audience": "business decision makers, entrepreneurs, startups",
    "coverage": "Worldwide",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
    shortcut: "/icon.svg",
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sourceSerif.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
          <StructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
