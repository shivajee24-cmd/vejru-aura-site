import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Premium animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.path
            d="M0,100 Q400,50 800,100 T1600,100"
            stroke="url(#gradient-line)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(262 83% 58%)" />
              <stop offset="50%" stopColor="hsl(190 95% 50%)" />
              <stop offset="100%" stopColor="hsl(262 83% 58%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Premium floating badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary/10 backdrop-blur-sm border border-primary/20 mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="h-2 w-2 rounded-full bg-accent"
            />
            <span className="text-sm font-medium text-primary">Pioneering Digital Innovation</span>
          </motion.div>

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
