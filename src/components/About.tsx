import { motion } from "framer-motion";
import { Rocket, Target, Heart } from "lucide-react";
import { Card } from "./ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Vejru</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded in 2020, Vejru has grown from a passionate team of innovators into a globally recognized 
            digital solutions provider. We believe in transforming ambitious ideas into exceptional digital experiences 
            that drive real business results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8 text-center h-full">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-primary/10 mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative digital solutions that accelerate growth, 
                enhance efficiency, and create lasting impact in the digital landscape.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8 text-center h-full">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-accent/10 mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the world's most trusted partner for digital transformation, 
                setting new standards in innovation, quality, and client success.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8 text-center h-full">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-primary/10 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Innovation, integrity, excellence, and client success. 
                We build lasting relationships through transparency and exceptional results.
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-primary/5 border border-primary/20 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Our Expertise</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            With a team of 50+ certified experts spanning design, development, AI research, and cloud architecture, 
            we've successfully delivered over 500 projects across 50+ countries. Our portfolio includes Fortune 500 
            companies, innovative startups, and everything in between.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Web Development", "Mobile Apps", "AI/ML", "Cloud Solutions", "UI/UX Design", "Blockchain"].map((expertise) => (
              <div key={expertise} className="bg-background/50 border border-border/50 rounded-full px-6 py-2">
                <span className="text-sm font-medium">{expertise}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
