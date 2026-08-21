import type { Metadata } from 'next'
import { BIZ_UDPMincho } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import AdobeFonts from './components/AdobeFonts'

const bizMincho = BIZ_UDPMincho({
  variable: '--font-biz-udpmincho',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Riomar McCartney',
  description:
    'Riomar McCartney (マッカートニー龍馬) — designer, art director, and programmer based in Tokyo.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <AdobeFonts />
      </head>

      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}

      <body className={` ${bizMincho.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
