import type { PropsWithChildren } from 'react'
import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import StoreProvider from '@/components/store/store-provider'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | OpenWater',
    default: 'Swimming competitions and training | OpenWater'
  },
  description: 'Open water swimming competitions and training.',
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
    description: 'Open water swimming competitions and training.',
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
    description: 'Open water swimming competitions and training.'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#171717'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="font-body relative bg-neutral-900 font-medium text-neutral-50">
          <GoogleAnalytics gaId="G-Y85MXD40BG" />
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}
