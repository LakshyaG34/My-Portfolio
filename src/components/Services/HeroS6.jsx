import { motion } from "framer-motion";

import {
  FaAws,
  FaServer,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

import { SiGooglecloud, SiCloudflare } from "react-icons/si";

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

const HeroS6 = () => {
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
        <h2 className="text-4xl font-semibold">
          Cloud Integration & Infrastructure
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          We help businesses integrate powerful cloud infrastructure into their
          applications, ensuring scalability, reliability, and global
          performance using modern cloud platforms.
        </p>
      </motion.div>

      {/* Cloud Technology Row */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="border border-white/10 rounded-xl p-6 flex flex-wrap justify-center md:justify-between items-center gap-6 text-gray-400"
      >
        <motion.div variants={item} className="flex items-center gap-2">
          <FaAws size={22} />
          AWS
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <FaAws size={22} />
          EC2
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <FaAws size={22} />
          S3 Storage
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <SiCloudflare size={22} />
          Cloudflare
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <SiGooglecloud size={22} />
          Google Cloud
        </motion.div>
      </motion.div>

      {/* Main Layout */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Content LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-semibold leading-tight">
            Scalable cloud infrastructure for modern applications
          </h3>

          <p className="text-gray-400">
            Our cloud experts design and implement secure and scalable
            infrastructure using industry-leading platforms. We help companies
            migrate, deploy, and optimize applications in the cloud to achieve
            high performance and global availability.
          </p>

          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <FaServer className="text-yellow-400" />
              AWS infrastructure setup and optimization
            </li>

            <li className="flex items-center gap-3">
              <FaCloud className="text-yellow-400" />
              Scalable server deployment using EC2
            </li>

            <li className="flex items-center gap-3">
              <FaDatabase className="text-yellow-400" />
              Object storage solutions with S3
            </li>

            <li className="flex items-center gap-3">
              <FaShieldAlt className="text-yellow-400" />
              CDN and edge optimization with Cloudflare
            </li>

            <li className="flex items-center gap-3">
              <FaRocket className="text-yellow-400" />
              Cloud deployment pipelines and automation
            </li>
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium"
          >
            Launch Your Infrastructure →
          </motion.button>
        </motion.div>

        {/* Image RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04 }}
          className="rounded-2xl overflow-hidden h-[420px]"
        >
          <img
            src="/images/cloudDev.jpg"
            alt="cloud infrastructure"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroS6;
