import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Preloader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Quantum field background */}
      <div className="absolute inset-0">
        {/* Quantum wave layers */}
        <motion.div 
          className="absolute top-1/4 left-1/4 h-[500px] w-[500px] bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Quantum particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 3 === 0 ? "hsl(262 83% 58%)" : i % 3 === 1 ? "hsl(190 95% 50%)" : "hsl(280 100% 70%)",
              boxShadow: `0 0 10px ${i % 3 === 0 ? "hsl(262 83% 58%)" : i % 3 === 1 ? "hsl(190 95% 50%)" : "hsl(280 100% 70%)"}`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200],
              y: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200],
              opacity: [0, 1, 0],
              scale: [0, 2, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Company name with quantum letter animation */}
        <div className="flex justify-center gap-3 mb-12">
          {['V', 'e', 'j', 'r', 'u'].map((letter, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, scale: 0, rotateY: -180, z: -100 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateY: 0,
                z: 0,
                y: [0, -25, 0],
              }}
              transition={{
                opacity: { delay: i * 0.12, duration: 0.5 },
                scale: { delay: i * 0.12, duration: 0.6, type: "spring", stiffness: 200 },
                rotateY: { delay: i * 0.12, duration: 1 },
                y: { 
                  delay: 1.2 + i * 0.08,
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              {/* Main letter */}
              <span className="text-9xl font-bold text-gradient drop-shadow-2xl">
                {letter}
              </span>
              
              {/* Quantum superposition glow */}
              <motion.div
                className="absolute inset-0 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15
                }}
              >
                <span className="text-9xl font-bold text-gradient">
                  {letter}
                </span>
              </motion.div>
              
              {/* Quantum state particles around letter */}
              {[...Array(3)].map((_, pIndex) => (
                <motion.div
                  key={pIndex}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: pIndex % 2 === 0 ? "hsl(262 83% 58%)" : "hsl(190 95% 50%)",
                    boxShadow: `0 0 10px ${pIndex % 2 === 0 ? "hsl(262 83% 58%)" : "hsl(190 95% 50%)"}`,
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    x: [0, Math.cos((pIndex * 120) * Math.PI / 180) * 50],
                    y: [0, Math.sin((pIndex * 120) * Math.PI / 180) * 50],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2 + pIndex * 0.3
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>
        
        {/* Quantum circuit visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-10"
        >
          <div className="relative h-40 w-40">
            {/* Outer quantum ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#quantum-loader-gradient)"
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <defs>
                  <linearGradient id="quantum-loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(262 83% 58%)" />
                    <stop offset="50%" stopColor="hsl(190 95% 50%)" />
                    <stop offset="100%" stopColor="hsl(280 100% 70%)" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            
            {/* Middle rotating square (quantum gate) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8"
            >
              <div className="w-full h-full border-4 border-accent/50 rotate-45 rounded-lg" />
            </motion.div>
            
            {/* Inner pulsing hexagon */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.15, 1]
              }}
              transition={{ 
                rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="absolute inset-12"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
                  fill="none"
                  stroke="hsl(190 95% 50%)"
                  strokeWidth="3"
                />
              </svg>
            </motion.div>

            {/* Central qubit */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-primary"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  "0 0 10px hsl(262 83% 58%)",
                  "0 0 30px hsl(190 95% 50%)",
                  "0 0 10px hsl(262 83% 58%)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Orbiting qubits */}
            {[0, 120, 240].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
                style={{
                  background: i % 2 === 0 ? "hsl(262 83% 58%)" : "hsl(190 95% 50%)",
                  boxShadow: `0 0 15px ${i % 2 === 0 ? "hsl(262 83% 58%)" : "hsl(190 95% 50%)"}`
                }}
                animate={{
                  x: [0, Math.cos((angle + 0) * Math.PI / 180) * 60],
                  y: [0, Math.sin((angle + 0) * Math.PI / 180) * 60],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Quantum progress indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="space-y-4 text-center"
        >
          <p className="text-sm text-muted-foreground font-medium tracking-wider">
            Initializing Quantum Systems...
          </p>
          <div className="flex items-center justify-center gap-4">
            <motion.div 
              className="relative h-3 w-72 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm border border-primary/20"
            >
              <motion.div
                className="h-full bg-gradient-primary relative overflow-hidden"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              >
                {/* Quantum glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "200%"]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
              {/* Progress particles */}
              {progress > 0 && [...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white"
                  style={{ left: `${(progress - 20 + i * 5) % 100}%` }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 2, 0]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
            <motion.span 
              className="text-xl font-bold text-gradient w-16 tabular-nums"
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity
              }}
            >
              {progress}%
            </motion.span>
          </div>
          
          {/* Quantum state indicator */}
          <motion.div
            className="flex items-center justify-center gap-2 text-xs text-muted-foreground"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>|ψ⟩ = </span>
            <motion.span
              animate={{ opacity: progress < 50 ? 1 : 0.3 }}
            >
              α|0⟩
            </motion.span>
            <span>+</span>
            <motion.span
              animate={{ opacity: progress >= 50 ? 1 : 0.3 }}
            >
              β|1⟩
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
