import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const item = {
  hidden: {
    opacity: 0,
    x: -80,
    filter: "blur(6px)"
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const Hero2 = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black text-white">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <img
          src="/images/Home3.jpg"
          className="w-full h-full object-cover opacity-40"
          alt="background"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Trusted by <span className="text-yellow-400">Innovative Teams</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mb-14 max-w-2xl mx-auto"
        >
          Startups and businesses rely on FunctionX to build scalable digital
          products, modern applications, and cloud-powered platforms.
        </motion.p>

        {/* Logos */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-16 items-center"
        >

          {/* Nohung */}
          <motion.img
            variants={item}
            whileHover={{ scale: 1.08 }}
            src="/images/nohunglogo.svg"
            className="h-12"
            alt="Nohung"
          />

          {/* SKU */}
          <motion.img
            variants={item}
            whileHover={{ scale: 1.08 }}
            src="/images/skuLogo.png"
            className="h-20"
            alt="SKU"
          />

          {/* Bhavik */}
          <motion.img
            variants={item}
            whileHover={{ scale: 1.08 }}
            src="/images/bhavikLogo.webp"
            className="h-20"
            alt="Bhavik Enterprise"
          />

          {/* MindXTrading */}
          <motion.img
            variants={item}
            whileHover={{ scale: 1.08 }}
            src="/images/mindXTradingLogo.jpg"
            className="h-16"
            alt="MindXTrading"
          />

          {/* Nohung */}
          <motion.img
            variants={item}
            whileHover={{ scale: 1.08 }}
            src="/images/nohunglogo.svg"
            className="h-12"
            alt="Nohung"
          />

        </motion.div>

      </div>
    </section>
  );
};

export default Hero2;