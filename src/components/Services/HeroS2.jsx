import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const HeroS2 = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between gap-10 mb-16"
      >
        {/* Left Title */}
        <div className="max-w-2xl">
          <p className="text-sm text-purple-500 font-semibold tracking-wide mb-2">
            HOW IT WORKS
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Turn Ideas into Impact,
            <br />
            Without Boundaries
          </h2>
        </div>

        {/* Right CTA */}
        <div className="flex flex-col gap-4 items-start md:items-end">
          <p className="text-gray-400">What's Your Next Idea?</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition"
          >
            Get Started →
          </motion.button>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {/* Card 1 */}
        <motion.div
          variants={card}
          whileHover={{ y: -8 }}
          className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl"
        >
          <img
            src="/images/Service1.jpg"
            className="rounded-xl mb-6 w-full h-[200px] object-cover"
          />

          <p className="text-purple-500 text-sm mb-2">Initial Consultation</p>

          <h3 className="text-xl font-semibold">Discovery & Consultation</h3>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={card}
          whileHover={{ y: -8 }}
          className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl flex flex-col justify-center gap-6"
        >
          <p className="text-gray-400">
            Understand your business needs, goals, and challenges through
            in-depth discussions.
          </p>

          <p className="text-gray-400">
            Identify key areas where AI can create value and deliver impact.
          </p>

          <p className="text-gray-400">
            Provide a roadmap for tailored AI solutions.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={card}
          whileHover={{ y: -8 }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Image */}
          <img
            src="/images/Service2.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Next button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/contact")}
            className="absolute bottom-6 left-6 px-5 py-2 bg-white text-black rounded-full font-medium"
          >
            Next →
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroS2;
