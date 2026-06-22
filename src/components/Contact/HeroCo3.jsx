import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaRegCopy, FaCheck } from "react-icons/fa";
import { useState } from "react";

const contacts = [
  {
    label: "Phone",
    value: "+91 8690965887",
    href: "tel:+918690965887",
    icon: FaPhoneAlt,
    copyValue: "+918690965887",
  },
  {
    label: "Email",
    value: "lakshyagoyal34@gmail.com",
    href: "mailto:lakshyagoyal34@gmail.com",
    icon: FaEnvelope,
    copyValue: "lakshyagoyal34@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/lakshyagoyal34",
    href: "http://www.linkedin.com/in/lakshyagoyal34",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/LakshyaG34",
    href: "https://github.com/LakshyaG34",
    icon: FaGithub,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const HeroCo3 = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (e, copyValue, label) => {
    if (!copyValue) return;
    e.preventDefault();
    navigator.clipboard.writeText(copyValue);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
          Let's Connect
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Reach me through any of these channels
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-md flex flex-col gap-3"
      >
        {contacts.map(({ label, value, href, icon: Icon, copyValue }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-between gap-4 rounded-xl border border-zinc-700/50 bg-zinc-800/40 px-4 py-3.5 backdrop-blur-sm transition-colors hover:border-emerald-500/50 hover:bg-zinc-800/70"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/20">
                <Icon size={18} />
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-xs text-zinc-500">{label}</span>
                <span className="text-sm text-zinc-100 truncate">{value}</span>
              </div>
            </div>

            {copyValue && (
              <button
                onClick={(e) => handleCopy(e, copyValue, label)}
                className="shrink-0 rounded-md p-2 text-zinc-500 transition-colors hover:bg-zinc-700/60 hover:text-zinc-200"
                aria-label={`Copy ${label}`}
              >
                {copied === label ? (
                  <FaCheck size={14} className="text-emerald-400" />
                ) : (
                  <FaRegCopy size={14} />
                )}
              </button>
            )}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroCo3;
