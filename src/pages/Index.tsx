import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/Preloader";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen">
          <Navigation />
          
          <main className="pt-16">
            <div id="home">
              <Hero />
            </div>
            <div id="services">
              <Services />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <Testimonials />
            <div id="why-us">
              <WhyChooseUs />
            </div>
            <Pricing />
            <div id="about">
              <About />
            </div>
            <div id="faq">
              <FAQ />
            </div>
            <div id="contact">
              <Contact />
            </div>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
