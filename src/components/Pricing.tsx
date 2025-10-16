import { motion } from "framer-motion";
import { Check, Star, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$2,999",
    period: "project",
    description: "Perfect for small businesses and startups",
    features: [
      "Responsive Web Design",
      "Up to 5 Pages",
      "Basic SEO Optimization",
      "Mobile Optimization",
      "Contact Form Integration",
      "2 Revisions",
      "30 Days Support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$7,999",
    period: "project",
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Advanced Web Application",
      "Up to 15 Pages/Screens",
      "Advanced SEO & Analytics",
      "Database Integration",
      "User Authentication",
      "API Development",
      "AI Features Integration",
      "5 Revisions",
      "90 Days Support",
      "Performance Optimization"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored",
    description: "Complete solutions for large-scale projects",
    features: [
      "Custom Software Development",
      "Unlimited Pages/Features",
      "Enterprise Security",
      "Advanced AI Solutions",
      "Dedicated Team",
      "Blockchain Integration",
      "Cloud Infrastructure",
      "Real-time Analytics",
      "Unlimited Revisions",
      "1 Year Premium Support",
      "24/7 Priority Support",
      "Training & Documentation"
    ],
    popular: false
  }
];

export const Pricing = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
    skipSnaps: false 
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 h-96 w-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Investment in Your <span className="text-gradient">Digital Future</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your project. All packages include premium quality and dedicated support.
          </p>
        </motion.div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-2 border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-2 border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Embla carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 py-4">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-primary text-white px-6 py-2 text-sm font-semibold shadow-lg">
                        <Star className="h-3 w-3 mr-1 inline" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <Card 
                    className={`relative overflow-hidden p-8 h-full transition-all duration-300 ${
                      plan.popular 
                        ? 'border-primary/50 shadow-[0_0_50px_rgba(168,85,247,0.25)] scale-105' 
                        : 'border-border/50 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                        
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                          {plan.period !== "tailored" && (
                            <span className="text-muted-foreground">/ {plan.period}</span>
                          )}
                        </div>
                      </div>

                      <div className="space-y-4 mb-8">
                        {plan.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-start gap-3"
                          >
                            <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/90">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <Button
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-gradient-primary glow text-white' 
                            : 'border-2 border-primary/50 hover:bg-primary/10'
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        {plan.popular && <Zap className="mr-2 h-4 w-4" />}
                        Get Started
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Let's discuss your unique requirements.
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-primary/50 hover:bg-primary/10"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};