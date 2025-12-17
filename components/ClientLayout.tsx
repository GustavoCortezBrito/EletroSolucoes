'use client'

import dynamic from 'next/dynamic'

const LoadingWrapper = dynamic(() => import('./LoadingWrapper'), { ssr: false })

interface ClientLayoutProps {
  children: React.ReactNode
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <LoadingWrapper>
      <div className="min-h-screen">
        {children}
      </div>
    </LoadingWrapper>
  )
}

export default ClientLayout