import { ReactNode } from 'react'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Match Tracker',
  description: 'Match Tracker',
  twitter: {
    title: 'Match Tracker',
    description: 'Match Tracker',
    images: 'https://og-examples.vercel.sh/api/static',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
