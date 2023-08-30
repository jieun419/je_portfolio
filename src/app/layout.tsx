import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'je_portfolio',
  description: '최지은 포트폴리오 입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
