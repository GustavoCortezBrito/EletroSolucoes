'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

const LoadingScreen = () => {

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e2a8a 0%, #f97316 100%)'
      }}
    >
      {/* Partículas de fundo */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          // Valores fixos baseados no índice para evitar problemas de hidratação
          const left = (i * 17 + 23) % 100
          const top = (i * 13 + 37) % 100
          const duration = 2 + (i % 3)
          const delay = (i % 5) * 0.4
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
              }}
            />
          )
        })}
      </div>
      <div className="text-center">
        {/* Logo animado */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* Círculo pulsante */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 rounded-full border border-white/20"
              style={{ 
                width: 120, 
                height: 120,
                background: 'linear-gradient(135deg, rgba(30, 42, 138, 0.2) 0%, rgba(249, 115, 22, 0.2) 100%)'
              }}
            />
            
            {/* Logo principal */}
            <div 
              className="relative flex items-center justify-center rounded-full border-2 border-white/30"
              style={{ 
                width: 120, 
                height: 120,
                background: 'linear-gradient(135deg, rgba(30, 42, 138, 0.3) 0%, rgba(249, 115, 22, 0.3) 100%)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="flex items-center justify-center"
              >
                <Zap 
                  size={72} 
                  className="text-white" 
                  fill="white"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-white"
        >
          <h2 className="text-2xl font-bold mb-2">Eletro Soluções</h2>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/80"
          >
            Carregando...
          </motion.p>
        </motion.div>

        {/* Pontos de loading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex space-x-2 justify-center"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-3 h-3 bg-white rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen