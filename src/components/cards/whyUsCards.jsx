import { motion } from "framer-motion";

const WhyUsCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-center transition"
    >
      <div className="flex justify-center mb-4 text-yellow-400 text-3xl">
        {icon}
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default WhyUsCard;