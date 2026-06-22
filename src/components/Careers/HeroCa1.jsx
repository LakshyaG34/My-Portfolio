import { motion } from "framer-motion";

const HeroCa1 = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-32 text-center">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-semibold leading-tight"
      >
        Join a team of
        <span className="text-yellow-400"> passionate developers</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg"
      >
        Build modern software, solve real-world problems, and work with
        talented engineers using cutting-edge technologies.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium"
        >
          View Open Positions
        </motion.button>
      </motion.div>

    </section>
  );
};

export default HeroCa1;