import type { PropsWithChildren } from 'react'
import type { Metadata, Viewport } from 'next'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import '@/app/globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: {
    template: '$s | OpenWater',
    default: 'OpenWater - Swimming competitions and trainings'
  },
  description: 'Open water swimming competitions and trainings.',
  alternates: {
    canonical: '/'
  },
  applicationName: 'OpenWater',
  authors: [
    {
      name: 'Stefano Monolo <stefano@smnl.dev>',
      url: 'https://smnl.dev'
    }
  ],
  creator: 'Stefano Monolo <stefano@smnl.dev>',
  metadataBase: new URL('https://www.openwaterapp.com'),
  openGraph: {
    title: 'OpenWater',
    description: 'Open water swimming competitions and trainings.',
    url: 'https://www.openwaterapp.com',
    type: 'website',
    siteName: 'OpenWater'
  },
  publisher: 'Stefano Monolo <stefano@smnl.dev>',
  robots: {
    index: true,
    follow: true
  },
  twitter: {
    card: 'summary',
    creator: '@stmonolo',
    title: 'OpenWater',
    description: 'Open water swimming competitions and trainings.'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#171717'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="font-body relative bg-neutral-900 font-medium text-neutral-50">
        <GoogleAnalytics gaId="G-Y85MXD40BG" />
        <Navbar />
        <div className="flex min-h-screen flex-col justify-between pt-14">
          <main className="content:px-0 mx-auto w-full max-w-[1200px] px-5">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
