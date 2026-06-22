import { motion } from "framer-motion";

import { SiOpenai, SiGoogle, SiPython, SiHuggingface } from "react-icons/si";

import { FaBrain } from "react-icons/fa";
import { MdOutlineAutoAwesome } from "react-icons/md";
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

const HeroS7 = () => {
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
        <h2 className="text-4xl font-semibold">AI Integration</h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          We integrate modern AI systems into applications, enabling intelligent
          automation, AI assistants, and advanced data insights for businesses.
        </p>
      </motion.div>

      {/* AI Tools Row */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="border border-white/10 rounded-xl p-6 flex flex-wrap justify-center md:justify-between items-center gap-6 text-gray-400"
      >
        <motion.div variants={item} className="flex items-center gap-2">
          <SiOpenai size={22} />
          ChatGPT / OpenAI
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <SiGoogle size={22} />
          Google Gemini
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <FaBrain size={22} />
          DeepSeek
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <SiHuggingface size={22} />
          HuggingFace
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2">
          <SiPython size={22} />
          Python AI
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
            src="/images/aidev.jpg"
            alt="AI integration"
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
            Bring intelligence to your products
          </h3>

          <p className="text-gray-400">
            Our team integrates powerful AI models and APIs into your
            applications to automate workflows, create smart assistants, and
            deliver intelligent user experiences.
          </p>

          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3">
              <MdOutlineAutoAwesome className="text-yellow-400" />
              AI chatbot and virtual assistant integration
            </li>

            <li className="flex items-center gap-3">
              <MdOutlineAutoAwesome className="text-yellow-400" />
              LLM integrations (ChatGPT, Gemini, DeepSeek)
            </li>

            <li className="flex items-center gap-3">
              <MdOutlineAutoAwesome className="text-yellow-400" />
              AI-powered automation and workflow tools
            </li>

            <li className="flex items-center gap-3">
              <MdOutlineAutoAwesome className="text-yellow-400" />
              Recommendation and AI analytics systems
            </li>
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium"
          >
            Add AI to Your Product →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroS7;
