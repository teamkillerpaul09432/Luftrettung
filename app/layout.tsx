import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Christoph 2 | Luftrettung Frankfurt',
  description:
    'Rettungshubschrauber Christoph 2 - Seit 1972 im Dienst für das Rhein-Main-Gebiet. Schnelle Hilfe aus der Luft bei medizinischen Notfällen.',

  icons: {
    icon: '/images/luftrettung-logo.png',
    apple: '/images/luftrettung-logo.png',
  },

  openGraph: {
    title: 'Christoph 2 | Luftrettung Frankfurt',
    description:
      'Rettungshubschrauber Christoph 2 - Schnelle Hilfe aus der Luft bei medizinischen Notfällen.',
    url: 'https://luftrettung-frankfurt.vercel.app',
    siteName: 'Luftrettung Frankfurt',
    type: 'website',

    images: [
      {
        url: '/images/luftrettung-logo.png',
        width: 512,
        height: 512,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Christoph 2 |  Luftrettung Frankfurt',
    description:
      'Schnelle Hilfe aus der Luft bei medizinischen Notfällen.',
    images: ['/images/luftrettung-logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={geist.className}>
      <body className={`${geist.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}