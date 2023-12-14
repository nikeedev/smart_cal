import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'smart cal',
  description: 'smart calendar by nikeedev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
