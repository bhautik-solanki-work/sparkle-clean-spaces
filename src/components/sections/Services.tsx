import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExpandableCard } from "../ui/expandable-card";

const services = [
  {
    title: "Pressure Washing",
    description: "High-Pressure Exterior Cleaning",
    src: "/public/Pressure_Washing.png",
    content: (
      <>
        <h4>Professional Pressure Washing Services</h4>
        <p>
          Our high-pressure cleaning service removes stubborn dirt, mold, algae,
          and stains from your exterior surfaces. Using professional-grade
          equipment and eco-friendly cleaning solutions, we can safely clean:
        </p>
        <h4>What We Clean</h4>
        <p>
          • Concrete driveways and walkways
          <br />
          • Building facades and siding
          <br />
          • Deck and patio surfaces
          <br />
          • Fencing and gates
          <br />• Parking lots and commercial properties
        </p>
        <h4>Why Choose Our Service?</h4>
        <p>
          We use state-of-the-art pressure washing equipment that delivers
          powerful results while protecting your surfaces. Our certified
          technicians have years of experience handling various materials and
          conditions, ensuring optimal results every time.
        </p>
      </>
    ),
  },
  {
    title: "Driveway & Pathway Cleaning",
    description: "Restore Your Concrete Surfaces",
    src: "/public/Driveway_Pathway_Cleaning.png",
    content: (
      <>
        <h4>Deep Cleaning for Driveways</h4>
        <p>
          Your driveway is one of the first things people see. Our specialized
          driveway cleaning removes oil stains, dirt buildup, and weathering to
          restore that fresh, clean appearance. We handle all types of concrete
          and paved surfaces.
        </p>
        <h4>Complete Pathway Solutions</h4>
        <p>
          From residential walkways to commercial pathways, we provide thorough
          cleaning that makes your property look inviting and well-maintained.
          Our eco-friendly approach ensures the safety of your family, pets, and
          the environment.
        </p>
        <h4>Long-Lasting Results</h4>
        <p>
          Regular cleaning not only improves appearance but also extends the
          life of your concrete surfaces by removing damaging substances like
          moss, algae, and salt buildup that can cause deterioration over time.
        </p>
      </>
    ),
  },
  {
    title: "House Exterior Washing",
    description: "Complete Home Exterior Care",
    src: "/public/House_Exterior_Washing.png",
    content: (
      <>
        <h4>Safe and Effective Exterior Washing</h4>
        <p>
          We provide safe, professional washing of all exterior surfaces
          including vinyl siding, brick, stucco, wood, and composite materials.
          Our technicians adjust water pressure and techniques for each material
          to ensure thorough cleaning without damage.
        </p>
        <h4>What We Cover</h4>
        <p>
          • Walls and siding cleaning
          <br />
          • Window and frame washing
          <br />
          • Soffit and fascia cleaning
          <br />
          • Roof surface preparation (low-pressure)
          <br />• Gutter and downspout cleaning
        </p>
        <h4>Protect Your Investment</h4>
        <p>
          Your home is likely your largest investment. Regular professional
          cleaning protects it from the elements, prevents mold and mildew
          growth, and keeps it looking beautiful year-round. A clean exterior
          also enhances curb appeal and property value.
        </p>
      </>
    ),
  },
  {
    title: "Roof Cleaning",
    description: "Safe Low-Pressure Roof Care",
    src: "/public/Roof_Cleaning.png",
    content: (
      <>
        <h4>Gentle Yet Effective Roof Cleaning</h4>
        <p>
          Roofs require special care to maintain their integrity while removing
          harmful algae, moss, and lichen. We use low-pressure cleaning
          techniques that are effective without damaging shingles, tiles, or
          other roofing materials.
        </p>
        <h4>Why Roof Cleaning Matters</h4>
        <p>
          Moss and algae growth on roofs can damage shingles, reduce energy
          efficiency, and create a breeding ground for bacteria. Regular
          cleaning prevents costly repairs and extends your roof's lifespan
          significantly.
        </p>
        <h4>Professional Standards</h4>
        <p>
          Our technicians are trained in proper roof safety procedures and use
          biodegradable cleaning solutions. We respect your property and work
          efficiently to complete the job while maintaining the highest safety
          standards.
        </p>
      </>
    ),
  },
  {
    title: "Patio & Deck Cleaning",
    description: "Make Outdoor Spaces Shine",
    src: "/public/Patio_Deck_Cleaning.png",
    content: (
      <>
        <h4>Transform Your Outdoor Living Space</h4>
        <p>
          Your patio and deck should be a beautiful retreat. We remove mold,
          mildew, dirt, and debris while being gentle on wood and composite
          materials. The result is a fresh, inviting space ready for
          entertaining or relaxation.
        </p>
        <h4>Different Materials, Expert Care</h4>
        <p>
          Whether you have a wooden deck, composite decking, concrete patio, or
          stone surfaces, we adjust our cleaning methods to suit each material
          perfectly. This ensures effective cleaning while preventing damage.
        </p>
        <h4>Extend Outdoor Season</h4>
        <p>
          A clean patio and deck make your outdoor spaces more enjoyable
          throughout the year. Regular cleaning prevents slippery surfaces,
          reduces pest habitats, and helps maintain structural integrity for
          years of enjoyment.
        </p>
      </>
    ),
  },
  {
    title: "Commercial Surface Cleaning",
    description: "Professional Business Solutions",
    src: "/public/Commercial_Surface_Cleaning.png",
    content: (
      <>
        <h4>Maintain Your Business Image</h4>
        <p>
          First impressions matter in business. We provide comprehensive
          cleaning services for commercial properties including storefronts,
          parking lots, loading areas, and exterior common areas. A clean
          property reflects professionalism and care.
        </p>
        <h4>Commercial Services Include</h4>
        <p>
          • Storefront and window cleaning
          <br />
          • Parking lot pressure washing
          <br />
          • Entrance and entry cleaning
          <br />
          • Signage washing
          <br />• Scheduled maintenance programs
        </p>
        <h4>Flexible Scheduling</h4>
        <p>
          We work around your business hours to minimize disruption. Our
          professional team handles large commercial properties efficiently
          while maintaining the highest standards of quality and safety. Regular
          maintenance programs keep your property looking pristine year-round.
        </p>
      </>
    ),
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Scatter effect animation variants
  const scatterVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: custom * 0.12,
      },
    }),
  };

  // Fade in and slide up variants
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="section-spacing bg-background">
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideUpVariants}
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
            services that restore and protect your property. Click any service
            to learn more.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={scatterVariants}
            >
              <ExpandableCard
                title={service.title}
                description={service.description}
                src={service.src}
                classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium"
              >
                {service.content}
              </ExpandableCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
