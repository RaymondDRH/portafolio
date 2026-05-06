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
    'AI-First Full-Stack Developer building production SaaS from scratch — real auth, real billing, real users. 7 products shipped with Next.js, Supabase and Claude API.',
  keywords: [
    'AI developer',
    'AI-first developer',
    'full-stack developer',
    'Next.js developer',
    'React developer',
    'TypeScript developer',
    'SaaS developer',
    'Supabase',
    'Claude API',
    'automation',
    'n8n',
    'freelance developer',
    'Raymond Reyes',
    'raymondreyes.dev',
  ],
  authors: [{ name: 'Raymond Reyes', url: 'https://raymondreyes.dev' }],
  metadataBase: new URL('https://raymondreyes.dev'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Raymond Reyes — AI-First Full-Stack Developer',
    description:
      'AI-First Full-Stack Developer building production SaaS from scratch — real auth, real billing, real users. 7 products shipped with Next.js, Supabase and Claude API.',
    url: 'https://raymondreyes.dev',
    siteName: 'Raymond Reyes',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raymond Reyes — AI-First Full-Stack Developer',
    description:
      'AI-First Full-Stack Developer building production SaaS from scratch — real auth, real billing, real users. 7 products shipped with Next.js, Supabase and Claude API.',
    creator: '@RaymondDRH',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
