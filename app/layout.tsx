import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eletro Soluções - Projetos de Energia Solar Fotovoltaica',
  description: 'Especialistas em projetos de energia solar fotovoltaica, homologações e regularização junto às concessionárias. Suporte técnico completo para integradores e instaladores.',
  keywords: 'energia solar, projetos fotovoltaicos, homologação energia solar, ANEEL, PRODIST, microgeração, minigeração distribuída, projetos elétricos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}