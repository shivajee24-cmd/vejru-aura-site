import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "Vejru transformed our vision into reality. Their AI solutions increased our efficiency by 400%. The team's expertise and dedication are unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, FinanceFlow",
    content: "Best decision we made was partnering with Vejru. They delivered our mobile app ahead of schedule with exceptional quality. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Director, HealthCare Plus",
    content: "Outstanding work! Vejru built our healthcare platform with precision and care. Their attention to security and compliance was impressive.",
    rating: 5,
  },
  {
    name: "David Kumar",
    role: "CTO, RetailHub",
    content: "Vejru's innovative approach and cutting-edge solutions helped us scale rapidly. Their AI-powered features gave us a competitive edge.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    skipSnaps: false 
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by industry leaders worldwide
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
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_45%] min-w-0"
                >
                  <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 p-8 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                    <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10" />
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>

                    <p className="text-foreground/90 mb-6 leading-relaxed italic">
                      &quot;{testimonial.content}&quot;
                    </p>

                    <div className="pt-4 border-t border-border/50">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
