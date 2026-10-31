import { motion } from "framer-motion";

const WhyUsCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white/70 border border-violet-100 shadow-xl shadow-violet-950/5 rounded-xl p-6 text-center transition"
    >
      <div className="flex justify-center mb-4 text-violet-600 text-3xl">
        {icon}
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <p className="text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default WhyUsCard;