import { NavComponent } from '@/components/nav-component'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FooterComponent } from '@/components/footer-component'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Angency',
  description: 'We provide innovative digital solutions that drive growth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  )
}
