import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaCheckCircle,
} from "react-icons/fa";

import { SiDjango, SiMongodb, SiMysql } from "react-icons/si";

import { HiOutlineLightningBolt } from "react-icons/hi";
import { MdVerified } from "react-icons/md";

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

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const HeroS3 = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 space-y-16">
      {/* Tech Stack Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border border-white/10 rounded-xl p-6 flex flex-wrap justify-between items-center gap-8 text-gray-400"
      >
        <div className="flex items-center gap-2">
          <FaReact size={22} />
          React.js
        </div>

        <div className="flex items-center gap-2">
          <FaNodeJs size={22} />
          Node.js
        </div>

        <div className="flex items-center gap-2">
          <SiDjango size={22} />
          Django
        </div>

        <div className="flex items-center gap-2">
          <FaAws size={22} />
          AWS
        </div>

        <div className="flex items-center gap-2">
          <FaDocker size={22} />
          Docker
        </div>

        <div className="flex items-center gap-2">
          <SiMysql size={22} />
          MySQL
        </div>

        <div className="flex items-center gap-2">
          <SiMongodb size={22} />
          MongoDB
        </div>
      </motion.div>

      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10"
      >
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Beautiful digital products, totally customized in minutes.
        </h2>

        <div className="space-y-4 text-gray-400">
          <p>
            We design scalable and modern applications using proven technologies
            that help businesses build faster and grow efficiently.
          </p>

          <p className="italic">Make powerful solutions a priority.</p>
        </div>
      </motion.div>

      {/* Feature Bar */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-zinc-900 rounded-xl p-6 grid md:grid-cols-3 gap-8 text-center"
      >
        <motion.div
          variants={item}
          whileHover={{ y: -6 }}
          className="flex flex-col items-center gap-3"
        >
          <FaCheckCircle size={26} className="text-yellow-400" />
          <p className="text-sm">
            Save time and build better with our modern development stack.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ y: -6 }}
          className="flex flex-col items-center gap-3"
        >
          <HiOutlineLightningBolt size={26} className="text-cyan-400" />
          <p className="text-sm">
            Easy to edit and customize for your business needs.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ y: -6 }}
          className="flex flex-col items-center gap-3"
        >
          <MdVerified size={26} className="text-green-400" />
          <p className="text-sm">
            Deliver enterprise-grade applications faster than ever.
          </p>
        </motion.div>
      </motion.div>

      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-semibold">
            Describe your products for all customers
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-yellow-400" />
              Add a feature section about the product.
            </li>

            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-yellow-400" />
              Add a feature section about the product.
            </li>

            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-yellow-400" />
              Add a feature section about the product.
            </li>
          </ul>

          <button
            onClick={() => navigate("/contact")}
            className="border border-white/20 px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            Get Started →
          </button>
        </motion.div>

        {/* Right Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 rounded-xl p-10 flex items-center justify-center text-gray-500"
        >
          Product UI Preview
        </motion.div>
      </div>
    </section>
  );
};

export default HeroS3;
