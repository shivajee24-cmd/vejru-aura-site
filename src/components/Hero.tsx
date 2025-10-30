import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Cpu, Lightbulb, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import logo from "@/assets/vejru-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Circuit board animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
        
        {/* Circuit board grid */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <pattern id="circuit-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsl(262 83% 58%)" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="0" cy="0" r="2" fill="hsl(262 83% 58%)" opacity="0.5"/>
              <circle cx="100" cy="0" r="2" fill="hsl(190 95% 50%)" opacity="0.5"/>
              <circle cx="0" cy="100" r="2" fill="hsl(190 95% 50%)" opacity="0.5"/>
            </pattern>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(262 83% 58%)" />
              <stop offset="50%" stopColor="hsl(190 95% 50%)" />
              <stop offset="100%" stopColor="hsl(230 85% 65%)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-grid)" />
        </svg>

        {/* Animated circuit paths with traveling particles */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(8)].map((_, i) => {
            const pathId = `circuit-path-${i}`;
            const pathD = `M ${i * 200},0 L ${i * 200},${100 + i * 50} L ${200 + i * 150},${100 + i * 50} L ${200 + i * 150},${300 + i * 100}`;
            
            return (
              <g key={i}>
                {/* Static path */}
                <path
                  id={pathId}
                  d={pathD}
                  stroke="url(#circuit-gradient)"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                />
                
                {/* Animated glow on path */}
                <motion.path
                  d={pathD}
                  stroke="url(#circuit-gradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="10 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "linear"
                  }}
                />
                
                {/* Multiple particles traveling along path */}
                {[...Array(3)].map((_, particleIndex) => (
                  <motion.circle
                    key={`particle-${i}-${particleIndex}`}
                    r="3"
                    fill={particleIndex % 2 === 0 ? "hsl(262 83% 58%)" : "hsl(190 95% 50%)"}
                    filter="url(#glow)"
                    initial={{ offsetDistance: "0%", opacity: 0 }}
                    animate={{ 
                      offsetDistance: ["0%", "100%"],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5 + particleIndex * 1,
                      ease: "linear"
                    }}
                    style={{
                      offsetPath: `path('${pathD}')`,
                    }}
                  />
                ))}
              </g>
            );
          })}
          
          {/* Glow filter for particles */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Random floating particles for ambient effect */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? "hsl(262 83% 58%)" : "hsl(190 95% 50%)",
              boxShadow: `0 0 8px ${i % 2 === 0 ? "hsl(262 83% 58%)" : "hsl(190 95% 50%)"}`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              opacity: [0, 0.8, 0],
              scale: [0, 2, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Glowing nodes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: "hsl(262 83% 58%)",
              boxShadow: "0 0 20px hsl(262 83% 58%)",
              left: `${5 + (i * 7)}%`,
              top: `${10 + (i * 5)}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Logo with animated tech categories */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <div className="relative">
              <img 
                src={logo} 
                alt="Vejru Logo" 
                className="h-24 w-24 drop-shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 blur-2xl opacity-60"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="h-24 w-24 bg-gradient-primary rounded-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Technology categories in circular layout */}
          <div className="relative h-64 w-full max-w-2xl mb-8">
            {[
              { icon: Code, label: "Web Design", angle: 0, color: "hsl(262 83% 58%)" },
              { icon: Smartphone, label: "Applications", angle: 90, color: "hsl(190 95% 50%)" },
              { icon: Cpu, label: "Software", angle: 180, color: "hsl(280 100% 70%)" },
              { icon: Lightbulb, label: "AI Solutions", angle: 270, color: "hsl(170 100% 50%)" }
            ].map((tech, i) => {
              const Icon = tech.icon;
              const radius = 120;
              const x = Math.cos((tech.angle * Math.PI) / 180) * radius;
              const y = Math.sin((tech.angle * Math.PI) / 180) * radius;
              
              return (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x,
                    y
                  }}
                  transition={{
                    delay: 0.8 + i * 0.15,
                    duration: 0.6,
                    type: "spring"
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    className="flex flex-col items-center gap-2 bg-card/80 backdrop-blur-md border-2 border-border/50 rounded-2xl p-4 shadow-xl hover:border-primary/50 transition-all hover:shadow-2xl group"
                  >
                    <div className="relative">
                      <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                      <motion.div
                        className="absolute inset-0 blur-lg opacity-50"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      >
                        <Icon className="h-8 w-8" style={{ color: tech.color }} />
                      </motion.div>
                    </div>
                    <span className="text-xs font-semibold whitespace-nowrap text-foreground">
                      {tech.label}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
            
            {/* Center connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {[0, 90, 180, 270].map((angle, i) => {
                const x1 = "50%";
                const y1 = "50%";
                const radius = 120;
                const x2 = `calc(50% + ${Math.cos((angle * Math.PI) / 180) * radius}px)`;
                const y2 = `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}px)`;
                
                return (
                  <motion.line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#techGradient)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ delay: 1.2 + i * 0.1, duration: 0.8 }}
                  />
                );
              })}
              <defs>
                <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(262 83% 58%)" />
                  <stop offset="100%" stopColor="hsl(190 95% 50%)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 mr-2" />
            Pioneering Digital Innovation
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 relative">
            <motion.span 
              className="text-gradient animate-gradient inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Vejru
            </motion.span>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-8 -right-8 h-24 w-24 border-4 border-primary/30 rounded-full"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 h-16 w-16 bg-accent/20 rounded-lg rotate-45"
              animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-4 max-w-4xl mx-auto"
          >
            Transforming Ideas Into Digital Excellence
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We craft cutting-edge <span className="text-primary font-semibold">web experiences</span>, innovative <span className="text-accent font-semibold">applications</span>, and <span className="text-primary font-semibold">AI-powered solutions</span> that drive your business forward with security and excellence.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-6 justify-center mb-16"
        >
          <Button
            size="lg"
            className="bg-gradient-primary glow group text-lg px-8 py-6 h-auto"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Our Services
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group text-lg px-8 py-6 h-auto border-2 border-primary/50 hover:bg-primary/10"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Premium stats showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "500+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
            { number: "50+", label: "Team Experts" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
              <div className="relative p-6 border border-border/50 rounded-xl backdrop-blur-sm bg-card/30 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
