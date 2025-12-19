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
        url: 'https://eletrosolucoes.com.br/opengraph-image.svg',
        width: 1200,
        height: 630,
        alt: 'Eletro Soluções - Energia Solar Fotovoltaica',
        type: 'image/svg+xml',
      },
      {
        url: 'https://eletrosolucoes.com.br/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eletro Soluções - Energia Solar Fotovoltaica',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eletro Soluções - Projetos de Energia Solar Fotovoltaica',
    description: 'Especialistas em projetos de energia solar fotovoltaica, homologações e regularização junto às concessionárias.',
    images: ['https://eletrosolucoes.com.br/opengraph-image.svg'],
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
        {/* Geo tags */}
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="Presidente Prudente" />
        <meta name="geo.position" content="-22.1256;-51.3881" />
        <meta name="ICBM" content="-22.1256, -51.3881" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://eletrosolucoes.com.br" />
        
        {/* OpenGraph específico para garantir que funcione */}
        <meta property="og:image" content="https://eletrosolucoes.com.br/opengraph-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:alt" content="Eletro Soluções - Energia Solar Fotovoltaica" />
        
        {/* Fallback para JPG caso SVG não funcione */}
        <meta property="og:image" content="https://eletrosolucoes.com.br/opengraph-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        
        {/* Twitter Card específico */}
        <meta name="twitter:image" content="https://eletrosolucoes.com.br/opengraph-image.svg" />
        <meta name="twitter:image:alt" content="Eletro Soluções - Energia Solar Fotovoltaica" />
        
        {/* Meta tags adicionais para SEO */}
        <meta name="language" content="pt-BR" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="classification" content="business" />
        <meta name="category" content="energia solar, projetos fotovoltaicos" />
        
        {/* Ícones */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="mask-icon" href="/logo.svg" color="#1e2a8a" />
        
        {/* PWA */}
        <meta name="theme-color" content="#1e2a8a" />
        <meta name="msapplication-TileColor" content="#1e2a8a" />
        <meta name="msapplication-TileImage" content="/logo.svg" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/opengraph-image.svg" as="image" />
        
        {/* Schema.org para rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Eletro Soluções",
            "description": "Especialistas em projetos de energia solar fotovoltaica, homologações e regularização junto às concessionárias",
            "url": "https://eletrosolucoes.com.br",
            "telephone": "+5518996065711",
            "email": "bsenergiasolar17@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Presidente Prudente",
              "addressRegion": "SP",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-22.1256",
              "longitude": "-51.3881"
            },
            "serviceArea": {
              "@type": "State",
              "name": "São Paulo"
            },
            "priceRange": "$$",
            "image": "https://eletrosolucoes.com.br/opengraph-image.svg",
            "logo": "https://eletrosolucoes.com.br/logo.svg",
            "sameAs": [
              "https://www.instagram.com/ele.trosolucoes/",
              "https://www.facebook.com/people/Eletro-Solu%C3%A7%C3%B5es/61564946756458/",
              "https://www.linkedin.com/in/diogo-brito-correa"
            ]
          })}
        </script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}