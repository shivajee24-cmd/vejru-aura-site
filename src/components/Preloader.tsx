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
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Premium abstract geometric shapes */}
        <div className="relative h-64 w-64">
          {/* Outer rotating hexagon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.path
                d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
                transition={{ duration: 0.3 }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(262 83% 58%)" />
                  <stop offset="100%" stopColor="hsl(190 95% 50%)" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Middle rotating square */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8"
          >
            <motion.div
              className="w-full h-full border-4 border-accent/50 rounded-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                borderRadius: ["24px", "50%", "24px"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Inner pulsing core */}
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-12"
          >
            <div className="w-full h-full bg-gradient-primary glow rounded-2xl" />
            <motion.div
              className="absolute inset-2 bg-gradient-accent rounded-xl opacity-60"
              animate={{ 
                scale: [1, 0.8, 1],
                opacity: [0.6, 0.3, 0.6]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Orbiting particles */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute h-3 w-3 bg-accent rounded-full glow"
              style={{
                top: '50%',
                left: '50%',
                marginTop: '-6px',
                marginLeft: '-6px',
              }}
              animate={{
                x: [0, Math.cos(i * Math.PI / 2) * 120],
                y: [0, Math.sin(i * Math.PI / 2) * 120],
                rotate: 360
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Company name with letter animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="flex justify-center gap-1 mb-4">
            {['V', 'e', 'j', 'r', 'u'].map((letter, i) => (
              <motion.span
                key={i}
                className="text-5xl font-bold text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { delay: 0.5 + i * 0.1 },
                  y: { 
                    delay: 0.5 + i * 0.1,
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 2
                  }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-2"
          >
            <p className="text-sm text-muted-foreground">Initializing Excellence...</p>
            <div className="flex items-center justify-center gap-2">
              <motion.div 
                className="h-1.5 w-48 bg-muted rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-gradient-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <span className="text-sm font-semibold text-primary w-12">{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
