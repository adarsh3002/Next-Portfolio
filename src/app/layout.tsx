import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import ThemeProvider from "@/components/ThemeProvider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://adarshkumar.dev"),
  title: {
    default: "Adarsh Kumar | AI & Java Backend Engineer",
    template: "%s | Adarsh Kumar",
  },
  description:
    "Portfolio of Adarsh Kumar, an AI-focused Java Backend Engineer building scalable APIs, Spring Boot services, microservices, databases, and polished frontend experiences.",
  keywords: [
    "Adarsh Kumar",
    "Backend Engineer",
    "Java Developer",
    "Spring Boot",
    "AI Engineer",
    "Next.js Portfolio",
    "Microservices",
  ],
  authors: [{ name: "Adarsh Kumar" }],
  openGraph: {
    title: "Adarsh Kumar | AI & Java Backend Engineer",
    description:
      "Backend-first portfolio for scalable Java, Spring Boot, API, microservice, database, AI integration, and frontend engineering work.",
    type: "website",
    locale: "en_US",
    url: "https://adarshkumar.dev",
    siteName: "Adarsh Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Kumar | AI & Java Backend Engineer",
    description: "Scalable backend engineering, AI integrations, and modern frontend execution.",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
