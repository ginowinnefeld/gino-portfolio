import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gino Winnefeld - Web3 Growth Leader",
  description: "Growth strategist for Web3 & AI startups. Scaling crypto projects using automation systems and community strategies.",
  keywords: ["Web3", "Growth Marketing", "Crypto", "AI", "Community Building", "Marketing Automation"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}