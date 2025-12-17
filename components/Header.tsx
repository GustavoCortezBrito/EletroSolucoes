'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import LogoIcon from './LogoIcon'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Início', href: '/#inicio' },
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Contato', href: '/#contato' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50 border-b-2 border-gray-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 cursor-pointer"
          >
            <LogoIcon size={44} />
            <span className="text-xl font-bold gradient-text">
              Eletro Soluções
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="flex space-x-4 bg-gray-50 p-2 rounded-lg">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-orange-600 font-semibold transition-colors px-3 py-2 rounded-md hover:bg-white border border-transparent hover:border-gray-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 bg-white border-t border-gray-200">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-blue-700 hover:text-orange-500 font-medium transition-colors hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header