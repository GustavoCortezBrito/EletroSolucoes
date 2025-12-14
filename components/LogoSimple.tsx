'use client'

interface LogoSimpleProps {
  className?: string
  size?: number
}

const LogoSimple = ({ className = "", size = 40 }: LogoSimpleProps) => {
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
        {/* Círculo da lâmpada - contorno branco bem visível */}
        <circle
          cx="50"
          cy="42"
          r="26"
          fill="none"
          stroke="white"
          strokeWidth="4"
          opacity="1"
        />
        
        {/* Raio laranja - maior e mais visível */}
        <path
          d="M32 22 L48 42 L40 42 L56 65 L40 42 L48 42 L32 22 Z"
          fill="#f97316"
          stroke="#ffffff"
          strokeWidth="1"
        />
        
        {/* Base da lâmpada - linhas laranjas mais visíveis */}
        <rect x="40" y="68" width="20" height="3" rx="1.5" fill="#f97316"/>
        <rect x="41" y="72" width="18" height="2.5" rx="1.25" fill="#f97316"/>
        <rect x="42" y="75.5" width="16" height="2.5" rx="1.25" fill="#ea580c"/>
        <rect x="43" y="79" width="14" height="2" rx="1" fill="#ea580c"/>
      </svg>
    </div>
  )
}

export default LogoSimple