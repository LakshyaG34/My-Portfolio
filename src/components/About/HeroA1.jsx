import { motion } from "framer-motion";
import { FaUserTie, FaCode, FaServer, FaCloud } from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const HeroA1 = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 space-y-16">

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-semibold">Our Team</h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Our team combines expertise in modern web technologies, cloud
          infrastructure, and scalable system design to deliver high-quality
          solutions tailored to client needs.
        </p>
      </motion.div>

      {/* Complete Team */}
      <div className="space-y-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* CTO */}
          <motion.div
            variants={card}
            whileHover={{ y: -6 }}
            className="bg-white/5 p-6 rounded-xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaServer className="text-yellow-400" />
              <h4 className="text-xl font-semibold">Manmohan Dagar</h4>
            </div>

            <p className="text-gray-400 mb-2">
              Chief Technology Officer (CTO)
            </p>

            <p className="text-gray-400 text-sm">
              Drives the technical architecture and innovation. Expert in
              system design, backend scalability, and leading engineering
              teams for high-performance applications.
            </p>
          </motion.div>

          {/* Lakshya */}
          <motion.div
            variants={card}
            whileHover={{ y: -6 }}
            className="bg-white/5 p-6 rounded-xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaCode className="text-yellow-400" />
              <h4 className="text-xl font-semibold">
                Lakshya Goyal
              </h4>
            </div>

            <p className="text-gray-400 mb-2">
              Full Stack Developer (React.js & Node.js)
            </p>

            <p className="text-gray-400 text-sm">
              Builds modern web applications using React.js and Node.js.
              Responsible for frontend architecture, APIs, and seamless
              user experience.
            </p>
          </motion.div>

          {/* Anshu */}
          <motion.div
            variants={card}
            whileHover={{ y: -6 }}
            className="bg-white/5 p-6 rounded-xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaCode className="text-yellow-400" />
              <h4 className="text-xl font-semibold">
                Anshu Patel
              </h4>
            </div>

            <p className="text-gray-400 mb-2">
              Python Developer
            </p>

            <p className="text-gray-400 text-sm">
              Focused on backend systems, automation, and data-driven
              applications. Works on Python-based solutions including
              scheduling systems and APIs.
            </p>
          </motion.div>

          {/* Akash */}
          <motion.div
            variants={card}
            whileHover={{ y: -6 }}
            className="bg-white/5 p-6 rounded-xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaCloud className="text-yellow-400" />
              <h4 className="text-xl font-semibold">
                Akash Tyagi
              </h4>
            </div>

            <p className="text-gray-400 mb-2">
              DevOps & Cloud Engineer
            </p>

            <p className="text-gray-400 text-sm">
              Manages deployment pipelines, server infrastructure, and
              cloud environments. Ensures high availability, scalability,
              and secure deployments.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroA1;