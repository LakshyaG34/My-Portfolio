import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomSelect({ options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle click outside and escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
      }
    };

    // Add event listeners when dropdown is open
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    // Cleanup event listeners
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [open]);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={dropdownRef} className="relative w-full">
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="px-4 py-2 border rounded-xl bg-white flex justify-between items-center cursor-pointer hover:border-gray-400 transition-colors duration-200"
      >
        <span className="text-sm text-gray-700">
          {selected?.label || "Select an option"}
        </span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 mt-2 w-full bg-white border rounded-xl shadow-lg overflow-hidden"
          >
            {options.map((opt, index) => (
              <motion.div
                key={opt.value}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.03 }}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`px-4 py-2 text-sm cursor-pointer transition-colors duration-150 ${
                  opt.value === value 
                    ? "bg-blue-50 text-blue-600 font-medium" 
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {opt.label}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}