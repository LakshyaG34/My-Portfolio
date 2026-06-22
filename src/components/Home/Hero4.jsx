import { motion } from "framer-motion";
import {
  HiOutlineRocketLaunch,
  HiOutlineCpuChip,
  HiOutlineCloud,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineCodeBracket,
} from "react-icons/hi2";

import WhyUsCard from "../cards/whyUsCards";

const features = [
  {
    icon: <HiOutlineRocketLaunch />,
    title: "Fast Delivery",
    description:
      "We deliver high-quality software solutions quickly without compromising performance or scalability.",
  },
  {
    icon: <HiOutlineCpuChip />,
    title: "AI Integration",
    description:
      "Our applications leverage modern AI technologies to automate workflows and unlock smarter insights.",
  },
  {
    icon: <HiOutlineCloud />,
    title: "Cloud Native",
    description:
      "Built with scalable cloud-first architectures ensuring reliability and high availability.",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Secure by Design",
    description:
      "Security is embedded in every stage of our development process.",
  },
  {
    icon: <HiOutlineSparkles />,
    title: "Modern UI/UX",
    description:
      "Beautiful interfaces crafted with usability and aesthetics in mind.",
  },
  {
    icon: <HiOutlineCodeBracket />,
    title: "Clean Code",
    description:
      "Maintainable and scalable codebase following modern engineering best practices.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero4 = () => {
  return (
    <section className="relative py-28 max-w-7xl mx-auto px-6 border-gradient box-shadow-top">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Why Choose <span className="text-yellow-400">ME?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          I combine modern technologies, scalable architectures and exceptional
          design to build digital products that help businesses grow faster.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {features.map((item, index) => (
          <motion.div key={index} variants={cardVariants}>
            <WhyUsCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero4;
