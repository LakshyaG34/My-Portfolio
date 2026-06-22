import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCards = ({ name, role, review }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="relative bg-zinc-900 border border-white/10 rounded-xl p-7 h-full overflow-hidden hover:border-yellow-400/40"
    >

      {/* Quote Icon */}
      <FaQuoteLeft className="text-yellow-400 text-xl mb-4 opacity-80" />

      {/* Review */}
      <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
        {review}
      </p>

      {/* Stars */}
      <div className="flex gap-1 text-yellow-400 mb-5">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 pt-4">

        <p className="text-white font-semibold text-sm tracking-wide">
          {name}
        </p>

        <p className="text-gray-400 text-xs">
          {role}
        </p>

      </div>

    </motion.div>
  );
};

export default TestimonialCards;