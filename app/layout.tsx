import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Data Viz 2025',
  description: 'Join the Data Viz Challenge 2025 by Trinity Club and showcase your data visualization skills. A competition for UG Engineering and MBA students to create interactive dashboards and gain recognition. Register now and participate in this exciting journey of data analysis and visualization.',
  
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
