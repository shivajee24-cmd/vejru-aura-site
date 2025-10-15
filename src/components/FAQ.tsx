import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Vejru different from other development companies?",
    answer: "We combine cutting-edge AI technology with proven development methodologies. Our team delivers 40% faster than industry average while maintaining enterprise-grade quality. Plus, we offer 24/7 dedicated support and guarantee 98% client satisfaction.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, mobile apps 6-12 weeks, and enterprise solutions 3-6 months. We provide detailed timelines during consultation and often deliver ahead of schedule.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer: "Absolutely! We offer comprehensive post-delivery support including 24/7 technical assistance, regular updates, bug fixes, and feature enhancements. Our maintenance packages ensure your solution stays cutting-edge.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern tech stacks including React, Next.js, Node.js, Python, AI/ML frameworks, cloud infrastructure (AWS, Azure, GCP), blockchain, and mobile development (React Native, Flutter). We stay updated with latest technologies.",
  },
  {
    question: "Can you handle both design and development?",
    answer: "Yes! We're a full-service agency offering UI/UX design, web design, application development, software engineering, AI solutions, and innovative research - all under one roof for seamless execution.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing including fixed-price projects, hourly rates, and monthly retainers. Each project gets a custom quote based on requirements. We ensure transparent pricing with no hidden costs.",
  },
  {
    question: "Do you sign NDAs and ensure data security?",
    answer: "Security is our top priority. We sign NDAs, implement bank-level encryption, follow industry compliance standards (GDPR, HIPAA), and use secure development practices to protect your intellectual property and data.",
  },
  {
    question: "Can you scale my existing application?",
    answer: "Definitely! We specialize in scaling applications for growth. Our team audits your current system, identifies bottlenecks, and implements solutions that handle increased traffic and data while maintaining performance.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with Vejru
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
