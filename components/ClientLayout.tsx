'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './LoadingScreen'
import SmoothScroll from './SmoothScroll'

interface ClientLayoutProps {
  children: React.ReactNode
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Timer para o loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Durante SSR, renderiza apenas o conteúdo
  if (!isMounted) {
    return <div className="min-h-screen">{children}</div>
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen isLoading={true} />}
      </AnimatePresence>
      
      <div className="min-h-screen">
        <SmoothScroll />
        {children}
      </div>
    </>
  )
}

export default ClientLayout