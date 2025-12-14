'use client'

interface LogoTextProps {
  className?: string
  size?: number
}

const LogoText = ({ className = "", size = 40 }: LogoTextProps) => {
  const fontSize = size * 0.6
  
  return (
    <div 
      className={`flex items-center justify-center font-bold text-white ${className}`}
      style={{ 
        width: size, 
        height: size,
        fontSize: `${fontSize}px`,
        lineHeight: 1
      }}
    >
      <span className="relative">
        E
        <span className="absolute -top-1 -right-1 text-orange-400 text-xs">⚡</span>
      </span>
    </div>
  )
}

export default LogoText