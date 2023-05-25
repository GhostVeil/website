import './globals.css'
import { Inter } from 'next/font/google'
import GoogleAnalytics from './_components/ga'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GhostVeil',
  description: 'Coming Soon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics trackingId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        {children}
      </body>
    </html>
  )
}
