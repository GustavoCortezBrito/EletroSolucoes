import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Eletro Soluções - Projetos de Energia Solar',
    short_name: 'Eletro Soluções',
    description: 'Especialistas em projetos de energia solar fotovoltaica',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e2a8a',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}