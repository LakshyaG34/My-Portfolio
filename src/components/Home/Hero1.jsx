import {
  HiOutlineGift,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlineCpuChip,
  HiOutlineCloud,
  HiOutlineChartBar,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { TbLetterL, TbLetterG } from "react-icons/tb";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const text =
  "We build scalable web and mobile applications with cloud-first architectures, modern design, and AI-driven intelligence to accelerate your business growth.";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero1 = () => {
  const [displayText, setDisplayText] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate(); // Initialize navigate hook

  // AI typing effect
  useEffect(() => {
    let i = 0;
    let typingInterval;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        setDisplayText(text.slice(0, i));
        i++;

        if (i > text.length) {
          clearInterval(typingInterval);

          setTimeout(() => {
            i = 0;
            setDisplayText("");
            startTyping();
          }, 8000);
        }
      }, 25);
    };

    startTyping();

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white/55 text-slate-900 px-6 overflow-hidden">
      {/* Spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 transition duration-300"
        style={{
          background: `radial-gradient(
            600px at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(151, 117, 230, 0.16),
            transparent 80%
          )`,
        }}
      />

      {/* Noise texture */}
      <div className="noise"></div>

      <div className="max-w-4xl text-center flex flex-col items-center gap-6 relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center bg-violet-600 text-white px-3 py-2 rounded-xl shadow-lg shadow-violet-500/20"
        >
          <TbLetterL size={20} />
          <TbLetterG size={20} />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          <span className="bg-gradient-to-r from-violet-700 via-violet-500 to-violet-700 bg-clip-text text-transparent">
            Lakshya Goyal.
          </span>
          Building production-grade software for modern businesses.
        </motion.h1>

        {/* AI typing text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-600 text-lg max-w-2xl min-h-[80px]"
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.p>

        {/* CTA Button - FIXED onClick handler */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 24px rgba(124,91,210,0.24)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => navigate("/services")}
          className="bg-violet-600 text-white px-6 py-3 font-medium shadow-lg shadow-violet-500/20 transition rounded-lg"
        >
          Explore Services
        </motion.button>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-10 pt-12 text-slate-600"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.05 }}
            className="flex flex-col items-center gap-2"
          >
            <HiOutlineWrenchScrewdriver size={22} />
            <p>Custom Solutions</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.05 }}
            className="flex flex-col items-center gap-2"
          >
            <HiOutlineSparkles size={22} />
            <p>UI/UX-Driven Design</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.05 }}
            className="flex flex-col items-center gap-2"
          >
            <HiOutlineCheckCircle size={22} />
            <p>Production ready</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.05 }}
            className="flex flex-col items-center gap-2"
          >
            <HiOutlineCloud size={22} />
            <p>Cloud native</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.05 }}
            className="flex flex-col items-center gap-2"
          >
            <HiOutlineCpuChip size={22} />
            <p>AI ready</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.05 }}
            className="flex flex-col items-center gap-2"
          >
            <HiOutlineChartBar size={22} />
            <p>Scalable</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero1;
