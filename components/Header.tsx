'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import LogoIcon from './LogoIcon'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const menuItems = [
    { name: 'Início', href: '/#inicio' },
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Contato', href: '/#contato' },
  ]

  // Detectar scroll para mudar estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fechar menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Função para scroll suave mais robusta
  const handleSmoothScroll = (e: any, href: string, isMobile: boolean = false) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (href.startsWith('/#')) {
      const elementId = href.substring(2) // Remove '/#'
      
      // Para mobile, fechar menu primeiro e aguardar mais tempo
      if (isMobile) {
        setIsMenuOpen(false)
        
        // Aguardar mais tempo para o menu mobile fechar completamente
        setTimeout(() => {
          scrollToElement(elementId)
        }, 300)
      } else {
        // Para desktop, scroll imediato
        scrollToElement(elementId)
      }
    } else {
      window.location.href = href
    }
  }

  // Função separada para o scroll
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    
    if (element) {
      // Calcular posição considerando o header fixo
      const headerHeight = 80
      const elementRect = element.getBoundingClientRect()
      const elementTop = elementRect.top + window.pageYOffset
      const targetPosition = elementTop - headerHeight
      
      // Usar requestAnimationFrame para garantir que o DOM está pronto
      requestAnimationFrame(() => {
        try {
          // Método principal: scrollTo com smooth behavior
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
          
          // Verificar se o scroll funcionou após um tempo
          setTimeout(() => {
            const currentScroll = window.pageYOffset
            const scrollDifference = Math.abs(currentScroll - targetPosition)
            
            // Se não scrollou corretamente, tentar método alternativo
            if (scrollDifference > 50) {
              element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
              })
            }
          }, 1000)
          
        } catch (error) {
          // Fallback: scroll instantâneo
          window.scrollTo(0, targetPosition)
        }
      })
    } else {
      // Tentar novamente após um delay (para casos onde o DOM ainda não está pronto)
      setTimeout(() => {
        const retryElement = document.getElementById(elementId)
        if (retryElement) {
          scrollToElement(elementId)
        }
      }, 500)
    }
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white shadow-md border-b-2 border-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
          >
            <LogoIcon size={44} className="!w-9 !h-9 sm:!w-11 sm:!h-11" />
            <span className="text-lg sm:text-xl font-bold gradient-text truncate">
              Eletro Soluções
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-gray-50/80 backdrop-blur-sm p-2 rounded-xl border border-gray-200/50">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href, false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 px-3 lg:px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 cursor-pointer"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className="md:hidden relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-gray-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            >
              <div className="py-4 space-y-1">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={(e) => {
                      e.preventDefault()
                      handleSmoothScroll(e as any, item.href, true)
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left block py-3 px-4 text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 hover:bg-gray-50 rounded-lg mx-2 border border-transparent hover:border-gray-200 cursor-pointer"
                  >
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mr-3 opacity-60"></span>
                      {item.name}
                    </span>
                  </motion.button>
                ))}
                
                {/* CTA no menu mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 px-4"
                >
                  <motion.a
                    href="https://wa.me/5518996065711?text=Olá! Gostaria de falar sobre projetos de energia solar fotovoltaica."
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-3 px-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    📱 Falar no WhatsApp
                  </motion.a>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header