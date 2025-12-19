import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Droplets,
  Car,
  Home,
  Umbrella,
  TreeDeciduous,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Pressure Washing",
    description:
      "High-pressure cleaning for exterior surfaces, removing dirt, mold, and stains.",
  },
  {
    icon: Car,
    title: "Driveway & Pathway Cleaning",
    description:
      "Deep cleaning of concrete and paved areas to restore a clean look.",
  },
  {
    icon: Home,
    title: "House Exterior Washing",
    description: "Safe washing of walls, siding, and exterior surfaces.",
  },
  {
    icon: Umbrella,
    title: "Roof Cleaning",
    description:
      "Low-pressure cleaning to remove algae and buildup without damage.",
  },
  {
    icon: TreeDeciduous,
    title: "Patio & Deck Cleaning",
    description: "Cleaning outdoor living areas for a fresh, usable space.",
  },
  {
    icon: Building2,
    title: "Commercial Surface Cleaning",
    description:
      "Cleaning storefronts, parking areas, and small commercial exteriors.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Complete Exterior Cleaning Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From driveways to rooftops, we provide professional cleaning
            services that restore and protect your property.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border shadow-soft card-hover overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
