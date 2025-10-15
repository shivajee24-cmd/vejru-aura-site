import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Sparkles, Brain, FlaskConical } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Beautiful, responsive designs that captivate and convert your audience.",
  },
  {
    icon: Smartphone,
    title: "Applications",
    description: "Native and cross-platform apps built for performance and user experience.",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your unique business needs.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Intelligent automation and AI-powered features to scale your business.",
  },
  {
    icon: Sparkles,
    title: "Digital Innovation",
    description: "Cutting-edge technologies and modern approaches to problem-solving.",
  },
  {
    icon: FlaskConical,
    title: "Innovative Research",
    description: "Pioneering research and development in emerging technologies.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm p-8 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
