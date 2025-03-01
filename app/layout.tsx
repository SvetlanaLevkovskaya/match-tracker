import { ReactNode, Suspense } from 'react'

import 'react-toastify/dist/ReactToastify.css'

import { Inter } from 'next/font/google'

import './globals.css'
import { Metadata } from 'next'



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
      <body className={inter.className}>
        <Suspense fallback={<>Loading Suspense...</>}>
         {children}
        </Suspense>
      </body>
    </html>
  )
}
