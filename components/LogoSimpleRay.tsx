'use client'

interface LogoSimpleRayProps {
  className?: string
  size?: number
}

const LogoSimpleRay = ({ className = "", size = 40 }: LogoSimpleRayProps) => {
  const uniqueId = `logo-${Math.random().toString(36).substr(2, 9)}`
  
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
        {/* Fundo quadrado com cantos arredondados */}
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx="20"
          fill={`url(#bgGradient-${uniqueId})`}
        />
        
        {/* Raio - elemento principal mais limpo */}
        <path
          d="M40 15 L52 45 L45 45 L60 85 L45 45 L52 45 L40 15 Z"
          fill="white"
          stroke="none"
        />
        
        <defs>
          {/* Gradiente de fundo azul para laranja */}
          <linearGradient id={`bgGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e2a8a" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          
          {/* Gradiente do raio */}
          <linearGradient id={`rayGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default LogoSimpleRay