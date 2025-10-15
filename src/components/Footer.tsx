import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gradient mb-4">Vejru</h3>
          <p className="text-muted-foreground mb-8">
            Transforming Ideas Into Digital Excellence
          </p>
          <div className="flex justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-gradient-primary rounded-full" />
            <div className="h-1 w-12 bg-gradient-accent rounded-full" />
            <div className="h-1 w-12 bg-gradient-primary rounded-full" />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vejru. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
