'use client'

interface LogoBoldProps {
  className?: string
  size?: number
}

const LogoBold = ({ className = "", size = 40 }: LogoBoldProps) => {
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
        {/* Fundo do círculo para contraste */}
        <circle
          cx="50"
          cy="45"
          r="30"
          fill="rgba(255,255,255,0.1)"
        />
        
        {/* Círculo da lâmpada - contorno branco bem grosso */}
        <circle
          cx="50"
          cy="45"
          r="28"
          fill="none"
          stroke="white"
          strokeWidth="5"
          opacity="1"
        />
        
        {/* Raio laranja - bem grande e visível */}
        <path
          d="M30 20 L50 45 L42 45 L62 70 L42 45 L50 45 L30 20 Z"
          fill="#f97316"
          stroke="#ffffff"
          strokeWidth="2"
        />
        
        {/* Base da lâmpada - linhas laranjas bem visíveis */}
        <rect x="38" y="73" width="24" height="4" rx="2" fill="#f97316"/>
        <rect x="39" y="78" width="22" height="3" rx="1.5" fill="#f97316"/>
        <rect x="40" y="82" width="20" height="3" rx="1.5" fill="#ea580c"/>
        <rect x="41" y="86" width="18" height="2.5" rx="1.25" fill="#ea580c"/>
      </svg>
    </div>
  )
}

export default LogoBold