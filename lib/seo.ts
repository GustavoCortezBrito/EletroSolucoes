// import { NextSeoProps } from 'next-seo'

export const defaultSEO = {
  title: 'Eletro Soluções - Projetos de Energia Solar Fotovoltaica',
  description: 'Especialistas em projetos de energia solar fotovoltaica, homologações e regularização junto às concessionárias. Suporte técnico completo para integradores e instaladores em Presidente Prudente/SP.',
  canonical: 'https://eletrosolucoes.com.br',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://eletrosolucoes.com.br',
    siteName: 'Eletro Soluções',
    title: 'Eletro Soluções - Projetos de Energia Solar Fotovoltaica',
    description: 'Especialistas em projetos de energia solar fotovoltaica, homologações e regularização junto às concessionárias. Suporte técnico completo para integradores e instaladores.',
    images: [
      {
        url: 'https://eletrosolucoes.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eletro Soluções - Energia Solar Fotovoltaica',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    handle: '@eletrosolucoes',
    site: '@eletrosolucoes',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'energia solar, projetos fotovoltaicos, homologação energia solar, ANEEL, PRODIST, microgeração, minigeração distribuída, projetos elétricos, Presidente Prudente, São Paulo, energia renovável, sustentabilidade, economia energia elétrica'
    },
    {
      name: 'author',
      content: 'Eletro Soluções'
    },
    {
      name: 'robots',
      content: 'index,follow'
    },
    {
      name: 'googlebot',
      content: 'index,follow'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'theme-color',
      content: '#1e2a8a'
    },
    {
      name: 'msapplication-TileColor',
      content: '#1e2a8a'
    },
    {
      name: 'geo.region',
      content: 'BR-SP'
    },
    {
      name: 'geo.placename',
      content: 'Presidente Prudente'
    },
    {
      name: 'geo.position',
      content: '-22.1256;-51.3881'
    },
    {
      name: 'ICBM',
      content: '-22.1256, -51.3881'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    }
  ],
}

export default defaultSEO

// Páginas específicas
export const homePageSEO = {
  title: 'Eletro Soluções - Projetos de Energia Solar Fotovoltaica | Presidente Prudente/SP',
  description: 'Projetos especializados em energia solar fotovoltaica com homologação junto às concessionárias. Microgeração e minigeração distribuída. Suporte técnico completo em Presidente Prudente/SP.',
  canonical: 'https://eletrosolucoes.com.br',
  openGraph: {
    title: 'Eletro Soluções - Projetos de Energia Solar Fotovoltaica',
    description: 'Projetos especializados em energia solar fotovoltaica com homologação junto às concessionárias. Microgeração e minigeração distribuída.',
    url: 'https://eletrosolucoes.com.br',
  }
}

export const privacyPageSEO = {
  title: 'Política de Privacidade | Eletro Soluções',
  description: 'Política de privacidade da Eletro Soluções - Como protegemos seus dados pessoais e informações de acordo com a LGPD.',
  canonical: 'https://eletrosolucoes.com.br/politica-privacidade',
  openGraph: {
    title: 'Política de Privacidade | Eletro Soluções',
    description: 'Como protegemos seus dados pessoais e informações de acordo com a LGPD.',
    url: 'https://eletrosolucoes.com.br/politica-privacidade',
  }
}

export const termsPageSEO = {
  title: 'Termos de Serviço | Eletro Soluções',
  description: 'Termos de serviço da Eletro Soluções - Condições para utilização de nossos serviços de energia solar fotovoltaica.',
  canonical: 'https://eletrosolucoes.com.br/termos-servico',
  openGraph: {
    title: 'Termos de Serviço | Eletro Soluções',
    description: 'Condições para utilização de nossos serviços de energia solar fotovoltaica.',
    url: 'https://eletrosolucoes.com.br/termos-servico',
  }
}