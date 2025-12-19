import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, ThumbsUp } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete coverage for your peace of mind",
    },
    {
      icon: Award,
      title: "Professional Grade",
      description: "Industry-leading equipment and techniques",
    },
    {
      icon: ThumbsUp,
      title: "Guaranteed Results",
      description: "Satisfaction guaranteed on every job",
    },
  ];

  return (
    <section ref={ref} className="section-spacing bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Owner-Operated Service with a{" "}
              <span className="gradient-text">Personal Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              This is an owner-operated cleaning service with hands-on
              experience and a strong focus on attention to detail. Every job is
              handled using proper equipment and safe cleaning methods to
              deliver effective results without damaging surfaces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We take pride in treating every property as if it were our own,
              ensuring meticulous care and professional results that exceed
              expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border shadow-soft card-hover"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
