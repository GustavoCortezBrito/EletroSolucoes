// Dados estruturados para Schema.org

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Eletro Soluções",
  "description": "Especialistas em projetos de energia solar fotovoltaica, homologações e regularização junto às concessionárias",
  "url": "https://eletrosolucoes.com.br",
  "logo": "https://eletrosolucoes.com.br/logo.png",
  "image": "https://eletrosolucoes.com.br/og-image.jpg",
  "telephone": "+55-18-99739-1723",
  "email": "bsenergiasolar17@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Presidente Prudente",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -22.1256,
    "longitude": -51.3881
  },
  "areaServed": {
    "@type": "State",
    "name": "São Paulo"
  },
  "serviceType": [
    "Projetos de Energia Solar Fotovoltaica",
    "Homologação junto às Concessionárias",
    "Microgeração Distribuída",
    "Minigeração Distribuída",
    "Consultoria em Energia Solar"
  ],
  "sameAs": [
    "https://www.instagram.com/eletrosolucoes",
    "https://wa.me/5518996065711"
  ]
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Eletro Soluções",
  "description": "Projetos especializados em energia solar fotovoltaica com homologação junto às concessionárias",
  "url": "https://eletrosolucoes.com.br",
  "telephone": "+55-18-99739-1723",
  "email": "bsenergiasolar17@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Presidente Prudente",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -22.1256,
    "longitude": -51.3881
  },
  "openingHours": "Mo-Fr 08:00-18:00",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "currenciesAccepted": "BRL"
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Projetos de Energia Solar Fotovoltaica",
  "description": "Desenvolvimento de projetos completos de energia solar fotovoltaica com toda documentação técnica necessária para homologação junto às concessionárias",
  "provider": {
    "@type": "Organization",
    "name": "Eletro Soluções",
    "url": "https://eletrosolucoes.com.br"
  },
  "areaServed": {
    "@type": "State",
    "name": "São Paulo"
  },
  "serviceType": "Energia Solar Fotovoltaica",
  "category": "Energia Renovável"
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Eletro Soluções",
  "description": "Especialistas em projetos de energia solar fotovoltaica",
  "url": "https://eletrosolucoes.com.br",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://eletrosolucoes.com.br/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é energia solar fotovoltaica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A energia solar fotovoltaica é uma tecnologia que converte a luz solar diretamente em energia elétrica através de painéis solares, proporcionando economia na conta de luz e sustentabilidade ambiental."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona a homologação junto às concessionárias?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A homologação é o processo de aprovação do projeto de energia solar pela concessionária de energia elétrica, garantindo que o sistema atenda às normas técnicas e de segurança estabelecidas pela ANEEL."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre microgeração e minigeração?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Microgeração são sistemas de até 75 kW, ideais para residências e pequenos comércios. Minigeração são sistemas de 75 kW a 5 MW, adequados para indústrias e grandes estabelecimentos comerciais."
      }
    }
  ]
}