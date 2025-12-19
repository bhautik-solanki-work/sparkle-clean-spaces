import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import beforeAfterDriveway from "@/assets/before-after-driveway.jpg";
import beforeAfterSiding from "@/assets/before-after-siding.jpg";

const BeforeAfter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const comparisons = [
    {
      image: beforeAfterDriveway,
      title: "Driveway Restoration",
      description: "Concrete driveway transformed from years of grime buildup",
    },
    {
      image: beforeAfterSiding,
      title: "House Siding Cleaning",
      description: "Vinyl siding restored to its original clean appearance",
    },
  ];

  return (
    <section ref={ref} className="section-spacing bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Results
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See the Difference
          </h2>
          <p className="text-muted-foreground text-lg">
            Real results from previous work showing visible improvements and
            attention to detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl shadow-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={comparison.image}
                  alt={comparison.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Labels */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1.5 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full shadow-lg">
                  Before
                </span>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="px-3 py-1.5 bg-accent text-accent-foreground text-xs font-semibold rounded-full shadow-lg">
                  After
                </span>
              </div>

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-6 pt-12">
                <h3 className="font-display font-semibold text-lg text-card mb-1">
                  {comparison.title}
                </h3>
                <p className="text-card/80 text-sm">
                  {comparison.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
