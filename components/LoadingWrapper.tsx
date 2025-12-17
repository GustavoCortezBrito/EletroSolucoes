'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './LoadingScreen'

interface LoadingWrapperProps {
  children: React.ReactNode
}

const LoadingWrapper = ({ children }: LoadingWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Aguarda um pouco para garantir que tudo carregou
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Pequeno delay adicional para suavizar a transição
      setTimeout(() => {
        setShowContent(true)
      }, 300)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      
      <div 
        style={{ 
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        {children}
      </div>
    </>
  )
}

export default LoadingWrapper