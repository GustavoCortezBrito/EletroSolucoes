'use client'

interface LogoCorrectProps {
  className?: string
  size?: number
}

const LogoCorrect = ({ className = "", size = 40 }: LogoCorrectProps) => {
  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fundo quadrado arredondado com gradiente */}
        <rect
          x="2"
          y="2"
          width="96"
          height="96"
          rx="22"
          fill="url(#bgGradient)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        
        {/* Círculo da lâmpada - contorno branco mais fino */}
        <circle
          cx="50"
          cy="42"
          r="20"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          opacity="0.95"
        />
        
        {/* Raio laranja - mais próximo da imagem original */}
        <path
          d="M37 26 L47 42 L42 42 L53 58 L42 42 L47 42 L37 26 Z"
          fill="url(#orangeGradient)"
        />
        
        {/* Base da lâmpada - linhas horizontais mais finas */}
        <rect x="43" y="62" width="14" height="2" rx="1" fill="url(#orangeGradient)"/>
        <rect x="44" y="65" width="12" height="1.5" rx="0.75" fill="url(#orangeGradient)"/>
        <rect x="45" y="67.5" width="10" height="1.5" rx="0.75" fill="url(#orangeGradient)"/>
        <rect x="46" y="70" width="8" height="1" rx="0.5" fill="url(#orangeGradient)"/>
        
        <defs>
          {/* Gradiente de fundo - azul profundo para laranja */}
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e2a8a" />
            <stop offset="60%" stopColor="#2d3a9f" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          
          {/* Gradiente laranja */}
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default LogoCorrect