import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/Preloader";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen">
          {/* Theme toggle button */}
          <div className="fixed top-6 right-6 z-50">
            <ThemeToggle />
          </div>

          {/* Main content */}
          <Hero />
          <Services />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
