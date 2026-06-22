import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Add this import

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const Hero5 = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/Home1.jpg')"
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-4xl px-6"
      >

        <motion.p
          variants={item}
          className="text-sm tracking-widest text-yellow-400 mb-4"
        >
          BUILD WITH ME
        </motion.p>

        <motion.h2
          variants={item}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          You imagine it.
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            I'll engineer it.
          </span>
        </motion.h2>

        <motion.p
          variants={item}
          className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
        >
          Sit back while I design, build and deploys your digital
          product with modern technologies and scalable architectures.
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(255,200,0,0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold"
          >
            Start Your Project →
          </motion.button>
        </motion.div>

      </motion.div>

    </section>
  );
};

export default Hero5;