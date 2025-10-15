import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Users, Award, Clock } from "lucide-react";
import { Card } from "./ui/card";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "We deliver projects 40% faster than industry average without compromising quality",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level security protocols and compliance standards in every project",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Average 300% ROI for clients within first year of deployment",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "24/7 expert support team ensuring your success at every step",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Award-winning team with certifications from leading tech companies",
  },
  {
    icon: Clock,
    title: "Future-Proof Solutions",
    description: "Built with scalability in mind, ready to grow with your business",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Vejru</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We don't just build software - we build partnerships that drive success
          </p>
          <div className="inline-block bg-gradient-primary/10 border border-primary/20 rounded-full px-6 py-2">
            <p className="text-sm font-semibold text-primary">
              Ranked #1 in Client Satisfaction 2024
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 p-8 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-accent/10 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="h-6 w-6 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="bg-gradient-primary/5 border-primary/20 p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-4xl font-bold text-gradient mb-2">500+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gradient mb-2">98%</p>
                <p className="text-sm text-muted-foreground">Client Retention</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gradient mb-2">50+</p>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gradient mb-2">24/7</p>
                <p className="text-sm text-muted-foreground">Expert Support</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
