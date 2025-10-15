import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with AI-powered recommendations and real-time analytics",
    technologies: ["React", "Node.js", "AI/ML", "PostgreSQL"],
    status: "Delivered",
    results: "300% increase in sales"
  },
  {
    title: "FinTech Mobile App",
    description: "Secure banking application with biometric authentication and real-time transactions",
    technologies: ["React Native", "Blockchain", "AWS"],
    status: "Delivered",
    results: "50K+ active users"
  },
  {
    title: "Healthcare Management System",
    description: "HIPAA-compliant platform for patient records and telemedicine",
    technologies: ["Next.js", "AI", "Cloud Infrastructure"],
    status: "Delivered",
    results: "10+ hospitals deployed"
  },
  {
    title: "AI Content Generator",
    description: "Advanced content creation tool using latest AI models",
    technologies: ["Python", "GPT-4", "React", "FastAPI"],
    status: "Delivered",
    results: "95% client satisfaction"
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-gradient">Delivered Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Success stories from clients who trusted us with their vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 p-8 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span className="font-medium text-accent">{project.status}</span>
                    </div>
                    <div className="text-sm font-semibold text-primary">
                      {project.results}
                    </div>
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
