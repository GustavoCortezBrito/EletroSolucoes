'use client'

import { Zap } from 'lucide-react'

interface LogoIconProps {
  className?: string
  size?: number
}

const LogoIcon = ({ className = "", size = 40 }: LogoIconProps) => {
  return (
    <div 
      className={`flex items-center justify-center rounded-2xl ${className}`}
      style={{ 
        width: size, 
        height: size,
        background: 'linear-gradient(135deg, #1e2a8a 0%, #f97316 100%)',
        boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
      }}
    >
      <Zap 
        size={size * 0.6} 
        className="text-white" 
        fill="white"
      />
    </div>
  )
}

export default LogoIcon