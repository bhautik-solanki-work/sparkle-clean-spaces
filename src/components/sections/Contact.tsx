import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready for a Cleaner Property?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Call or message to request a quote or schedule a visit. We're here
              to help restore your property's appearance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-6 mb-12"
          >
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border shadow-soft text-center">
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border shadow-soft text-center">
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-muted-foreground">info@cleanpro.com</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border shadow-soft text-center">
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
              <p className="text-muted-foreground">Greater Metro Area</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="xl">
                Request a Free Quote
                <ArrowRight className="ml-1" />
              </Button>
              <Button variant="outline" size="xl">
                <Phone className="mr-1" />
                (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
