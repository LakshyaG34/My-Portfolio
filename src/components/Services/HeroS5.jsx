import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

import { SiJavascript, SiMongodb, SiMysql } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HeroS5 = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 space-y-16">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-semibold">Website Development</h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          We create modern web applications with scalable architectures,
          beautiful interfaces, and high performance across all devices.
        </p>
      </motion.div>

      {/* Technology Row */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="border border-white/10 rounded-xl p-6 flex flex-wrap justify-center md:justify-between items-center gap-6 text-gray-400"
      >
        <motion.div variants={item} className="flex items-center gap-2">
          <FaReact size={22} />
          React.js
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <FaNodeJs size={22} />
          Node.js
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <SiJavascript size={22} />
          JavaScript
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <SiMongodb size={22} />
          MongoDB
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <SiMysql size={22} />
          MySQL
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <FaHtml5 size={22} />
          HTML5
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <FaCss3Alt size={22} />
          CSS3
        </motion.div>
      </motion.div>

      {/* Main Layout */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04 }}
          className="rounded-2xl overflow-hidden h-[420px]"
        >
          <img
            src="/images/webDevelopment.jpg"
            alt="web development"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-semibold leading-tight">
            Build scalable and high-performance web applications
          </h3>

          <p className="text-gray-400">
            We design and develop fast, secure, and scalable web applications
            using modern frameworks and cloud-ready architectures. Our solutions
            focus on performance, usability, and long-term maintainability.
          </p>

          <ul className="space-y-3 text-gray-400">
            <li>✔ Modern frontend development with React</li>
            <li>✔ Scalable backend systems with Node & Django</li>
            <li>✔ REST APIs and microservices architecture</li>
            <li>✔ Database design and optimization</li>
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium"
          >
            Build Your Website →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroS5;
