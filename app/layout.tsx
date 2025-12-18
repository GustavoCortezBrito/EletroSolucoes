import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://eletrosolucoes.com.br'),
  title: {
    default: 'Eletro Soluções - Projetos de Energia Solar Fotovoltaica',
    template: '%s | Eletro Soluções'
  },
  description: 'Especialistas em projetos de energia solar fotovoltaica, homologações e regularização junto às concessionárias. Suporte técnico completo para integradores e instaladores em Presidente Prudente/SP.',
  keywords: ['energia solar', 'projetos fotovoltaicos', 'homologação energia solar', 'ANEEL', 'PRODIST', 'microgeração', 'minigeração distribuída', 'projetos elétricos', 'Presidente Prudente', 'São Paulo', 'energia renovável', 'sustentabilidade'],
  authors: [{ name: 'Eletro Soluções' }],
  creator: 'Eletro Soluções',
  publisher: 'Eletro Soluções',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://eletrosolucoes.com.br',
    siteName: 'Eletro Soluções',
    title: 'Eletro Soluções - Projetos de Energia Solar Fotovoltaica',
    description: 'Especialistas em projetos de energia solar fotovoltaica, homologações e regularização junto às concessionárias. Suporte técnico completo para integradores e instaladores.',
    images: [
      {
        url: '/opengraph-simple.svg',
        width: 1200,
        height: 630,
        alt: 'Eletro Soluções - Energia Solar Fotovoltaica',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eletro Soluções - Projetos de Energia Solar Fotovoltaica',
    description: 'Especialistas em projetos de energia solar fotovoltaica, homologações e regularização junto às concessionárias.',
    images: ['/opengraph-simple.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.svg', type: 'image/svg+xml', sizes: '100x100' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
      { url: '/logo.svg', sizes: '180x180', type: 'image/svg+xml' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.svg',
        color: '#1e2a8a'
      }
    ]
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="Presidente Prudente" />
        <meta name="geo.position" content="-22.1256;-51.3881" />
        <meta name="ICBM" content="-22.1256, -51.3881" />
        <link rel="canonical" href="https://eletrosolucoes.com.br" />
        
        {/* Ícones adicionais */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="mask-icon" href="/logo.svg" color="#1e2a8a" />
        
        {/* Meta tags para PWA */}
        <meta name="theme-color" content="#1e2a8a" />
        <meta name="msapplication-TileColor" content="#1e2a8a" />
        <meta name="msapplication-TileImage" content="/logo.svg" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}