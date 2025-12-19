import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional pressure washing service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm border border-primary/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Owner-Operated Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-card leading-tight mb-6"
          >
            Professional Exterior{" "}
            <span className="text-accent">Cleaning Services</span> in Your Area
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-card/80 mb-8 leading-relaxed"
          >
            Reliable, professional deep cleaning for homes and small commercial
            spaces. Owner-operated service focused on quality, safety, and
            visible results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl">
              Request a Free Quote
              <ArrowRight className="ml-1" />
            </Button>
            <Button variant="hero-outline" size="xl">
              <Phone className="mr-1" />
              Call Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex items-center gap-8"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-card">500+</span>
              <span className="text-sm text-card/70">Jobs Completed</span>
            </div>
            <div className="w-px h-12 bg-card/20" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-card">100%</span>
              <span className="text-sm text-card/70">Satisfaction</span>
            </div>
            <div className="w-px h-12 bg-card/20" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-card">5★</span>
              <span className="text-sm text-card/70">Rated Service</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
