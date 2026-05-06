import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--sg',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--jb',
})

export const metadata: Metadata = {
  title: 'Raymond Reyes — AI-First Full-Stack Developer',
  description:
    'AI-first full-stack developer and founder of AICrafterLab. Building production SaaS with Claude, Next.js, Supabase, and Stripe.',
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
      'AI-first full-stack developer and founder of AICrafterLab. Building production SaaS with Claude, Next.js, Supabase, and Stripe.',
    url: 'https://raymondreyes.dev',
    siteName: 'Raymond Reyes',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raymond Reyes — AI-First Full-Stack Developer',
    description:
      'AI-first full-stack developer and founder of AICrafterLab. Building production SaaS with Claude, Next.js, Supabase, and Stripe.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body data-density="normal">{children}</body>
    </html>
  )
}
