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
      {/* Gradient background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Company name with letter animation - MAIN FOCUS */}
        <div className="flex justify-center gap-2 mb-8">
          {['V', 'e', 'j', 'r', 'u'].map((letter, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, scale: 0, rotateY: -180 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateY: 0,
                y: [0, -20, 0],
              }}
              transition={{
                opacity: { delay: i * 0.15, duration: 0.5 },
                scale: { delay: i * 0.15, duration: 0.5, type: "spring" },
                rotateY: { delay: i * 0.15, duration: 0.8 },
                y: { 
                  delay: 1 + i * 0.1,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              <span className="text-8xl font-bold text-gradient drop-shadow-2xl">
                {letter}
              </span>
              
              {/* Letter glow effect */}
              <motion.div
                className="absolute inset-0 blur-xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                <span className="text-8xl font-bold text-gradient">
                  {letter}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Abstract geometric symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative h-32 w-32">
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
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(262 83% 58%)" />
                    <stop offset="100%" stopColor="hsl(190 95% 50%)" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.1, 1] }}
              transition={{ 
                rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="absolute inset-4 border-4 border-accent/50 rounded-full"
            />
          </div>
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="space-y-3 text-center"
        >
          <p className="text-sm text-muted-foreground font-medium">Initializing Excellence...</p>
          <div className="flex items-center justify-center gap-3">
            <motion.div 
              className="h-2 w-64 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm"
            >
              <motion.div
                className="h-full bg-gradient-primary glow"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <span className="text-lg font-bold text-gradient w-14">{progress}%</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
