import { motion } from "framer-motion";
import { Sparkles, Rocket } from "lucide-react";

const HeroP5 = () => {
  return (
    <section className="w-full py-28 px-6 relative overflow-hidden">
      {/* Background Glow */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" /> */}

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          What's Next
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold leading-tight mb-6"
        >
          Building the{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Future of Digital Products
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
        >
          We’re working on a set of powerful upcoming projects designed to push
          innovation forward. Explore what’s coming next.
        </motion.p>

        {/* Visual Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto mb-10"
        />

        {/* Bottom Hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center gap-2 text-gray-500"
        >
          <Rocket className="w-5 h-5 text-purple-400" />
          <span className="text-sm">
            Scroll to explore upcoming innovations
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroP5;
