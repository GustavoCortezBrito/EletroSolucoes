'use client'

import { useMemo } from 'react'

interface LogoProps {
  className?: string
  size?: number
}

const Logo = ({ className = "", size = 40 }: LogoProps) => {
  // Gerar ID único para evitar conflitos de gradiente
  const gradientId = useMemo(() => `orangeGradient-${Math.random().toString(36).substr(2, 9)}`, [])
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Círculo da lâmpada */}
      <circle
        cx="50"
        cy="45"
        r="25"
        fill="none"
        stroke="white"
        strokeWidth="3"
        opacity="0.9"
      />
      
      {/* Base da lâmpada */}
      <rect
        x="42"
        y="65"
        width="16"
        height="3"
        rx="1.5"
        fill={`url(#${gradientId})`}
      />
      <rect
        x="43"
        y="69"
        width="14"
        height="2.5"
        rx="1.25"
        fill={`url(#${gradientId})`}
      />
      <rect
        x="44"
        y="72"
        width="12"
        height="2.5"
        rx="1.25"
        fill={`url(#${gradientId})`}
      />
      <rect
        x="45"
        y="75"
        width="10"
        height="2"
        rx="1"
        fill={`url(#${gradientId})`}
      />
      
      {/* Raio */}
      <path
        d="M35 25 L45 45 L40 45 L50 65 L40 45 L45 45 L35 25 Z"
        fill={`url(#${gradientId})`}
        transform="rotate(-10 42.5 45)"
      />
      
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Logo