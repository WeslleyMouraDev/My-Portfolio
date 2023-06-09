"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Weslley Moura - Fullstack Developer',
//   description: 'Fullstack Developer',
// }

const currentTheme = "light";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Navbar />
          {children}
          <Footer currentTheme={currentTheme} />
        </ThemeProvider>
      </body>
    </html>
  )
}
