import { motion } from "framer-motion";
import {
  SiReact,
  SiFlutter,
  SiFirebase,
  SiSwift,
  SiKotlin,
} from "react-icons/si";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
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

const HeroS4 = () => {
  const navigate = useNavigate();

  return (
    <section
      id="heroS4"
      className="w-full max-w-7xl mx-auto px-6 py-24 space-y-16"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-sm text-yellow-400 tracking-widest mb-2">
          OUR SERVICES
        </p>

        <h2 className="text-4xl font-semibold">Mobile App Development</h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          We design and build scalable mobile applications with modern
          frameworks and seamless user experiences across Android and iOS.
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
          <SiReact size={22} />
          React Native
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <SiFlutter size={22} />
          Flutter
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <SiKotlin size={22} />
          Kotlin
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <SiSwift size={22} />
          Swift
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <SiFirebase size={22} />
          Firebase
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <FaGooglePlay size={22} />
          Play Store
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <FaAppStoreIos size={22} />
          App Store
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-semibold leading-tight">
            Build powerful mobile apps that users love
          </h3>

          <p className="text-gray-400">
            Our team develops high-performance mobile applications with
            beautiful UI, scalable architecture, and seamless integrations. We
            help startups and enterprises launch reliable mobile products
            faster.
          </p>

          <ul className="space-y-3 text-gray-400">
            <li>✔ Cross-platform apps using React Native & Flutter</li>
            <li>✔ Native Android & iOS development</li>
            <li>✔ App Store & Play Store deployment</li>
            <li>✔ Real-time backend integration</li>
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium"
          >
            Start Your App →
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04 }}
          className="rounded-2xl overflow-hidden"
        >
          <img
            src="/images/mobiledev.jpeg"
            alt="mobile development"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroS4;
