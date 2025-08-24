import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MAG®ID - The WhatsApp of Payments',
  description: 'Experience the future of payments with our secure, fast, and user-friendly digital payment platform. Send money, make payments, and manage your finances with ease.',
  keywords: 'fintech, payments, digital payments, money transfer, payment platform, cryptocurrency',
  authors: [{ name: 'MAG®ID Team' }],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'MAG®ID - The WhatsApp of Payments',
    description: 'Experience the future of payments with our secure, fast, and user-friendly digital payment platform.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAG®ID - The WhatsApp of Payments',
    description: 'Experience the future of payments with our secure, fast, and user-friendly digital payment platform.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 