import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Sparkles, Brain, FlaskConical, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const services = [
  {
    icon: Palette,
    title: "Web Design & Development",
    description: "Beautiful, responsive designs that captivate and convert your audience.",
    features: ["UI/UX Design", "Responsive Layout", "SEO Optimization", "Performance Tuned"],
    status: "Active",
    projectCount: "150+"
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform apps built for performance and user experience.",
    features: ["iOS & Android", "Cross-Platform", "Real-time Sync", "Push Notifications"],
    status: "Active",
    projectCount: "80+"
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions designed for your unique business requirements.",
    features: ["Scalable Architecture", "API Integration", "Cloud Solutions", "Microservices"],
    status: "Active",
    projectCount: "120+"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent automation and AI-powered features to transform your business.",
    features: ["NLP Solutions", "Predictive Analytics", "Computer Vision", "Chatbots"],
    status: "Trending",
    projectCount: "60+"
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Enterprise-grade security implementation to protect your digital assets.",
    features: ["Penetration Testing", "Security Audits", "Encryption", "Compliance"],
    status: "Essential",
    projectCount: "90+"
  },
  {
    icon: Sparkles,
    title: "Digital Innovation",
    description: "Cutting-edge technologies and modern approaches to problem-solving.",
    features: ["Blockchain", "IoT Solutions", "AR/VR", "Web3"],
    status: "Emerging",
    projectCount: "40+"
  },
  {
    icon: FlaskConical,
    title: "Research & Development",
    description: "Pioneering research and development in emerging technologies.",
    features: ["Technology Research", "Proof of Concept", "Innovation Labs", "Patent Support"],
    status: "Active",
    projectCount: "30+"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Analytics",
    description: "Data-driven strategies to grow your online presence and track success.",
    features: ["SEO/SEM", "Analytics Setup", "Conversion Optimization", "A/B Testing"],
    status: "Active",
    projectCount: "100+"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm p-6 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-primary/10 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${
                        service.status === 'Trending' ? 'bg-accent/20 text-accent border-accent/30' :
                        service.status === 'Essential' ? 'bg-destructive/20 text-destructive border-destructive/30' :
                        service.status === 'Emerging' ? 'bg-primary/20 text-primary border-primary/30' :
                        'bg-muted text-muted-foreground'
                      }`}
                    >
                      {service.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0" />
                        <span className="text-xs text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/30 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Projects Completed</span>
                    <span className="text-sm font-bold text-gradient">{service.projectCount}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
