import "@/styles/tailwind.css"
import { Inter, Lexend } from "@next/font/google"
import { AppProvider } from "@shopify/polaris"

import ToastList from "@/components/toast-list"
import { ToastProvider, ToastViewport } from "@/components/ui/toast"

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const lexend = Lexend({ variable: "--font-lexend", subsets: ["latin"] })

// https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${inter.variable} h-full scroll-smooth antialiased [font-feature-settings:'ss01'] bg-gray-100`}
    >
      <body className="h-full max-h-screen flex overflow-auto">
        <ToastProvider>
          {children}

          <ToastList />
          <ToastViewport position="bottom-right" />
        </ToastProvider>
      </body>
    </html>
  )
}
