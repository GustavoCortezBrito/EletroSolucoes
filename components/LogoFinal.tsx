'use client'

interface LogoFinalProps {
  className?: string
  size?: number
}

const LogoFinal = ({ className = "", size = 40 }: LogoFinalProps) => {
  const uniqueId = `logo-final-gradient`
  
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
        {/* Fundo quadrado com cantos arredondados e gradiente */}
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx="18"
          fill={`url(#bgGradient-${uniqueId})`}
        />
        
        {/* Círculo da lâmpada */}
        <circle
          cx="50"
          cy="40"
          r="18"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          opacity="0.9"
        />
        
        {/* Raio - símbolo principal */}
        <path
          d="M40 25 L48 40 L44 40 L52 55 L44 40 L48 40 L40 25 Z"
          fill={`url(#orangeGradient-${uniqueId})`}
        />
        
        {/* Base da lâmpada - rosca */}
        <rect x="45" y="58" width="10" height="1.5" rx="0.75" fill={`url(#orangeGradient-${uniqueId})`}/>
        <rect x="45" y="60.5" width="10" height="1.5" rx="0.75" fill={`url(#orangeGradient-${uniqueId})`}/>
        <rect x="45" y="63" width="10" height="1.5" rx="0.75" fill={`url(#orangeGradient-${uniqueId})`}/>
        <rect x="45" y="65.5" width="10" height="1.5" rx="0.75" fill={`url(#orangeGradient-${uniqueId})`}/>
        
        <defs>
          {/* Gradiente de fundo */}
          <linearGradient id={`bgGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e2a8a" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          
          {/* Gradiente laranja */}
          <linearGradient id={`orangeGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default LogoFinal