import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FinWallet - Next Generation Banking Wallet',
  description: 'Experience the future of banking with our secure, fast, and user-friendly digital wallet. Send money, invest, and manage your finances with ease.',
  keywords: 'fintech, banking, wallet, digital payments, investment, cryptocurrency',
  authors: [{ name: 'FinWallet Team' }],
  openGraph: {
    title: 'FinWallet - Next Generation Banking Wallet',
    description: 'Experience the future of banking with our secure, fast, and user-friendly digital wallet.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FinWallet - Next Generation Banking Wallet',
    description: 'Experience the future of banking with our secure, fast, and user-friendly digital wallet.',
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