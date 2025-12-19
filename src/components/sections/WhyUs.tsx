import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Wrench, DollarSign, Eye, Clock } from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "Professional-grade equipment",
    description: "We use industry-leading tools for superior results",
  },
  {
    icon: DollarSign,
    title: "Honest and transparent pricing",
    description: "No hidden fees or surprise charges",
  },
  {
    icon: Eye,
    title: "Careful, detail-focused work",
    description: "Every corner and surface treated with precision",
  },
  {
    icon: Clock,
    title: "Reliable and on-time service",
    description: "We respect your schedule and arrive when promised",
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing bg-foreground text-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              We're Committed to{" "}
              <span className="text-accent">Excellence</span>
            </h2>
            <p className="text-card/80 text-lg leading-relaxed">
              When you choose our cleaning service, you're choosing a
              professional who takes pride in every job. We don't cut corners,
              and we don't leave until you're completely satisfied.
            </p>
          </motion.div>

          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-card/5 border border-card/10 backdrop-blur-sm hover:bg-card/10 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <reason.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-card mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-card/70">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
