// src/app/layout.tsx
import { Bricolage_Grotesque } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

const fontHeading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading', // Use variable for Bricolage_Grotesque
})

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
  // Remove `variable` as Space_Mono does not support it
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable, // Apply fontHeading variable
          fontBody.className // Use className for Space_Mono
        )}
      >
        {children}
      </body>
    </html>
  )
}
