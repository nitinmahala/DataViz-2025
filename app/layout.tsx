import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Data Viz 2025',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Correct path to favicon */}
        <link rel="icon" href="/TRINITY LOGO_SVG 1.png" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
