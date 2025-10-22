import { motion } from "framer-motion";
import { Cloud, CloudSun } from "lucide-react";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="relative border-t border-border/50 py-12 px-4 overflow-hidden">
      {/* Theme-aware animated background */}
      <div className="absolute inset-0 -z-10">
        {isDark ? (
          <>
            {/* Dark mode: Universe with stars */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
            
            {/* Moving stars */}
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 3 + 1 + "px",
                  height: Math.random() * 3 + 1 + "px",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, 0.8)`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Shooting stars */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`shooting-${i}`}
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
                style={{
                  width: "100px",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: "rotate(-45deg)",
                }}
                animate={{
                  x: [-200, 1000],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 4,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Nebula clouds */}
            <motion.div
              className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
            />
          </>
        ) : (
          <>
            {/* Light mode: Sky with clouds */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-blue-50" />
            
            {/* Animated clouds */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`cloud-${i}`}
                className="absolute"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${-20 + Math.random() * 120}%`,
                }}
                animate={{
                  x: [0, 100],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 20 + Math.random() * 10,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "linear",
                }}
              >
                <Cloud 
                  className="text-white/60" 
                  style={{
                    width: `${60 + Math.random() * 80}px`,
                    height: `${40 + Math.random() * 60}px`,
                    filter: 'blur(2px)',
                  }}
                />
              </motion.div>
            ))}

            {/* Sun rays effect */}
            <motion.div
              className="absolute top-10 right-10 w-32 h-32"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <CloudSun className="w-full h-full text-amber-400/40" />
            </motion.div>

            {/* Soft gradient orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-300/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-cyan-200/20 blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
            />
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h3 
            className="text-2xl font-bold text-gradient mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Vejru
          </motion.h3>
          <p className="text-muted-foreground mb-8">
            Transforming Ideas Into Digital Excellence
          </p>
          <div className="flex justify-center gap-2 mb-6">
            <motion.div 
              className="h-1 w-12 bg-gradient-primary rounded-full"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="h-1 w-12 bg-gradient-accent rounded-full"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="h-1 w-12 bg-gradient-primary rounded-full"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vejru. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
