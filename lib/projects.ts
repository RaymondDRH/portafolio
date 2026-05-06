export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  image: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'foundry',
    title: 'Foundry',
    description:
      'AI-powered SaaS platform that generates complete web presences — website, domain, email, and brand — in minutes. Built with Claude AI and Stripe.',
    tags: ['Next.js', 'Supabase', 'Claude AI', 'Stripe', 'Cloudflare'],
    liveUrl: 'https://foundry.vercel.app',
    githubUrl: 'https://github.com/RaymondDRH',
    image: '/projects/foundry.png',
    featured: true,
  },
  {
    id: 'ccever',
    title: 'CCEver Hub',
    description:
      'Full-stack church management platform with member registration, biometric authentication, and an integrated WhatsApp automation bot.',
    tags: ['Next.js', 'Supabase', 'WebAuthn', 'WhatsApp Bot', 'Playwright'],
    githubUrl: 'https://github.com/RaymondDRH',
    image: '/projects/ccever.png',
    featured: true,
  },
  {
    id: 'ai-invoice',
    title: 'AI Invoice Generator',
    description:
      'Generate professional PDF invoices instantly using Claude AI. Input client details and get a ready-to-send invoice in seconds.',
    tags: ['Next.js', 'Claude API', 'PDF Generation'],
    image: '/projects/ai-invoice.png',
  },
  {
    id: 'business-name',
    title: 'AI Business Name Generator',
    description:
      'Generate creative business names based on your industry and values, with instant domain availability checking via Cloudflare API.',
    tags: ['Next.js', 'Claude API', 'Cloudflare API'],
    image: '/projects/business-name.png',
  },
  {
    id: 'n8n-showcase',
    title: 'n8n Automation Showcase',
    description:
      'A curated gallery of production-ready automation workflows built with n8n — from WhatsApp bots to CRM integrations and AI pipelines.',
    tags: ['n8n', 'Automation', 'AI Pipelines', 'WhatsApp'],
    image: '/projects/n8n-showcase.png',
  },
  {
    id: 'chatbot-widget',
    title: 'Embeddable AI Chatbot Widget',
    description:
      'A configurable AI chatbot that any business can embed on their website. Customize the persona, instructions, and tone — get a ready snippet.',
    tags: ['Next.js', 'Claude API', 'Web Component'],
    image: '/projects/chatbot-widget.png',
  },
  {
    id: 'client-portal',
    title: 'Client Portal',
    description:
      'A lightweight client-facing portal where clients can track project status, approve deliverables, and leave feedback — secured with magic link auth.',
    tags: ['Next.js', 'Supabase', 'Magic Link Auth'],
    image: '/projects/client-portal.png',
  },
]
