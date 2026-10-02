import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://nitinkumarpatwa.com'),
  title: 'Nitin Kumar Patwa | Full-Stack Developer',
  description:
    'Full-stack web developer with production-grade experience across backend microservices, real-time systems, responsive frontend applications, and AWS cloud infrastructure.',
  keywords: [
    'Nitin Kumar Patwa',
    'Full-Stack Developer',
    'React.js',
    'Next.js',
    'Node.js',
    'TypeScript',
    'AWS ECS',
    'Docker',
    'Socket.IO',
    'Yjs',
    'IIIT Ranchi',
  ],
  authors: [{ name: 'Nitin Kumar Patwa', url: 'https://github.com/lobby11' }],
  creator: 'Nitin Kumar Patwa',
  openGraph: {
    title: 'Nitin Kumar Patwa | Full-Stack Developer',
    description:
      'Full-stack web developer building from UI to cloud. Experience in Node.js microservices, React/Next.js, Socket.IO, Yjs, Docker, and AWS ECS (Fargate).',
    type: 'website',
    url: 'https://github.com/lobby11',
    siteName: 'Nitin Kumar Patwa Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nitin Kumar Patwa | Full-Stack Developer',
    description:
      'Full-stack web developer building from UI to cloud. Node.js REST APIs, Socket.IO, Docker, AWS ECS, and React frontends.',
  },
  icons: {
    icon: '/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#CBFF44',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nitin Kumar Patwa',
    jobTitle: 'Full-stack web developer',
    url: 'https://github.com/lobby11',
    sameAs: [
      'https://github.com/lobby11',
      'https://www.linkedin.com/in/nitin-kumar-patwa-a310a9329/',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Indian Institute of Information Technology Ranchi',
    },
    knowsAbout: [
      'React.js',
      'Next.js',
      'Node.js',
      'TypeScript',
      'Socket.IO',
      'RabbitMQ',
      'AWS ECS Fargate',
      'Docker',
      'CRDT',
    ],
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@87.5,800;100,800;100,900&family=Inter:wght@400;500;600;700&family=Tinos:ital,wght@0,700;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
