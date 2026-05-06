import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Raymond Reyes — AI-First Full-Stack Developer',
  description:
    'I turn complex ideas into working products, using AI as a force multiplier. Full-stack developer specializing in Next.js, Supabase, and AI integrations.',
  keywords: [
    'AI developer',
    'full-stack developer',
    'Next.js',
    'Supabase',
    'Claude API',
    'automation',
    'n8n',
    'AICrafterLab',
  ],
  authors: [{ name: 'Raymond Reyes' }],
  openGraph: {
    title: 'Raymond Reyes — AI-First Full-Stack Developer',
    description:
      'I turn complex ideas into working products, using AI as a force multiplier.',
    url: 'https://raymondreyes.dev',
    siteName: 'Raymond Reyes',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raymond Reyes — AI-First Full-Stack Developer',
    description:
      'I turn complex ideas into working products, using AI as a force multiplier.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  )
}
