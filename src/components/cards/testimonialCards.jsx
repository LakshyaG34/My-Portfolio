import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCards = ({ name, role, review }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="relative bg-white/70 border border-violet-100 shadow-xl shadow-violet-950/5 rounded-xl p-7 h-full overflow-hidden hover:border-violet-600/40"
    >

      {/* Quote Icon */}
      <FaQuoteLeft className="text-violet-600 text-xl mb-4 opacity-80" />

      {/* Review */}
      <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
        {review}
      </p>

      {/* Stars */}
      <div className="flex gap-1 text-violet-600 mb-5">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      {/* Divider */}
      <div className="border-t border-violet-100 pt-4">

        <p className="text-slate-900 font-semibold text-sm tracking-wide">
          {name}
        </p>

        <p className="text-slate-600 text-xs">
          {role}
        </p>

      </div>

    </motion.div>
  );
};

export default TestimonialCards;
