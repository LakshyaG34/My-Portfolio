import { motion } from "framer-motion";
import {
  HiOutlineCodeBracket,
  HiOutlineCloud,
  HiOutlineCpuChip,
  HiOutlineDevicePhoneMobile
} from "react-icons/hi2";

import { useNavigate } from "react-router-dom";

const HeroS1 = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 bg-black text-white">

      <div className="max-w-5xl text-center flex flex-col items-center gap-8">

        {/* Tag */}
        {/* <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-yellow-400 font-medium tracking-wide"
        >
          OUR SERVICES
        </motion.div> */}

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Engineering solutions that power{" "}
          <span className="text-yellow-400">modern businesses</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          We design, build, and scale digital products using cloud
          architectures, modern web technologies, and AI-driven systems
          that help companies innovate faster.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick = {() =>{
              document.getElementById("heroS4")?.scrollIntoView({behavior : "smooth"})
            }}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium"
          >
            Explore Services
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="border border-white/20 px-6 py-3 rounded-lg"
          >
            Contact Us
          </motion.button>

        </div>

        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-10 pt-8 text-gray-400"
        >
          <div className="flex items-center gap-2">
            <HiOutlineCodeBracket size={20} />
            Web Development
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineCloud size={20} />
            Cloud Architecture
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineCpuChip size={20} />
            AI Integration
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineDevicePhoneMobile size={20} />
            Mobile Apps
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default HeroS1;