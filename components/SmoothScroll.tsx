'use client'

import { useEffect } from 'react'

const SmoothScroll = () => {
  useEffect(() => {
    // Função para scroll suave com offset para o header fixo
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      const href = target.getAttribute('href')
      
      if (href && href.startsWith('/#')) {
        e.preventDefault()
        const elementId = href.substring(2) // Remove '/#'
        const element = document.getElementById(elementId)
        
        if (element) {
          const headerHeight = 80 // Altura do header fixo
          const elementPosition = element.offsetTop - headerHeight
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    // Adicionar event listener para todos os links
    const links = document.querySelectorAll('a[href^="/#"]')
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll)
    })

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  return null // Este componente não renderiza nada
}

export default SmoothScroll