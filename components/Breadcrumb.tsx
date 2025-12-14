'use client'

import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbProps {
  items: Array<{
    label: string
    href?: string
  }>
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-primary-600 mb-8">
      <a href="/" className="flex items-center hover:text-secondary-500 transition-colors">
        <Home className="h-4 w-4 mr-1" />
        Início
      </a>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4 text-primary-400" />
          {item.href ? (
            <a href={item.href} className="hover:text-secondary-500 transition-colors">
              {item.label}
            </a>
          ) : (
            <span className="text-primary-800 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Breadcrumb