import type { Metadata, Viewport } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@repo/ui"
import { InstallPWAPrompt } from "@/components/install-pwa-prompt"
import { PWARegister } from "@/components/pwa-register"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cetesdirecto - Inversiones Inteligentes",
  description: "Plataforma de inversión en instrumentos gubernamentales mexicanos",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CetesDirecto",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "CetesDirecto",
    title: "Cetesdirecto - Inversiones Inteligentes",
    description: "Plataforma de inversión en instrumentos gubernamentales mexicanos. Invierte en CETES, BONDDIA y UDIBONOS de forma segura.",
    images: [
      {
        url: "/og-cetes.png",
        width: 1200,
        height: 630,
        alt: "CetesDirecto - Inversiones Inteligentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cetesdirecto - Inversiones Inteligentes",
    description: "Plataforma de inversión en instrumentos gubernamentales mexicanos",
    images: ["/og-cetes.png"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#611232" },
    { media: "(prefers-color-scheme: dark)", color: "#3A0B1E" }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${sourceSans.variable} ${playfair.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
          themes={[
            "light",
            "dark",
            "slate-light",
            "slate-dark",
            "stone-light",
            "stone-dark",
            "gray-light",
            "gray-dark",
            "neutral-light",
            "neutral-dark",
            "red-light",
            "red-dark",
            "rose-light",
            "rose-dark",
            "orange-light",
            "orange-dark",
            "green-light",
            "green-dark",
            "blue-light",
            "blue-dark",
            "yellow-light",
            "yellow-dark",
            "violet-light",
            "violet-dark",
            "system"
          ]}
        >
          <PWARegister />
          {children}
          <InstallPWAPrompt />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
