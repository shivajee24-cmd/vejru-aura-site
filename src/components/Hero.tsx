import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient animate-gradient">Vejru</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Transforming Ideas Into Digital Excellence
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We craft cutting-edge web experiences, innovative applications, and AI-powered solutions
            that drive your business forward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button size="lg" className="bg-gradient-primary glow group">
            Explore Our Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="group">
            Get In Touch
          </Button>
        </motion.div>

        {/* Abstract decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-4 max-w-xs mx-auto"
        >
          <div className="h-2 bg-gradient-primary rounded-full animate-pulse-glow" />
          <div className="h-2 bg-gradient-accent rounded-full animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
          <div className="h-2 bg-gradient-primary rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </motion.div>
      </div>
    </section>
  );
};
