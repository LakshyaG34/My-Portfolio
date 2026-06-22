import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { api } from "../../lib/api";
import toast from "react-hot-toast";
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  IndianRupee, 
  FileText,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Loader2,
  Flame,
  Zap,
  Shield,
  Star
} from "lucide-react";

const HeroCo2 = () => {
  const apiClient = useMemo(() => api(), []);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    projectDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await apiClient.post("/submit-proposal", formData);

      if (res.data?.success) {
        setSubmitted(true);
        toast.success("Proposal submitted successfully!", {
          icon: "🎉",
          style: {
            borderRadius: "10px",
            background: "#1a1a1a",
            color: "#fbbf24",
            border: "1px solid #fbbf24",
          },
        });

        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            budget: "",
            projectDetails: "",
          });
          setSubmitted(false);
        }, 2000);
      } else {
        toast.error("Failed to submit proposal", {
          style: {
            borderRadius: "10px",
            background: "#1a1a1a",
            color: "#ef4444",
            border: "1px solid #ef4444",
          },
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message || "Something went wrong",
        {
          style: {
            borderRadius: "10px",
            background: "#1a1a1a",
            color: "#ef4444",
            border: "1px solid #ef4444",
          },
        }
      );
    } finally {
      setLoading(false);
    }
  };

  const inputFields = [
    { name: "name", icon: User, placeholder: "Your Name", type: "text", required: true },
    { name: "email", icon: Mail, placeholder: "Your Email", type: "email", required: true },
    { name: "phone", icon: Phone, placeholder: "Phone Number", type: "text", required: false },
    { name: "company", icon: Building2, placeholder: "Company Name", type: "text", required: false },
    { name: "budget", icon: IndianRupee, placeholder: "Estimated Budget (₹)", type: "text", required: false },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-amber-600/5 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-2000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <motion.div
        ref={formRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="relative bg-gray-900/60 backdrop-blur-2xl shadow-2xl rounded-3xl p-8 md:p-10 w-full max-w-2xl border border-amber-500/20 shadow-amber-500/10"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/5 via-transparent to-amber-600/5 pointer-events-none" />
        
        {/* Success overlay */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-center"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <CheckCircle2 className="w-20 h-20 text-amber-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-amber-400 mb-2">Thank You!</h3>
                <p className="text-gray-400">We'll get back to you soon</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-4 shadow-lg shadow-amber-500/25"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.3 }}
            >
              <Flame className="w-8 h-8 text-black" />
            </motion.div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 mb-2">
              Start Your Project
            </h2>
            <p className="text-gray-400 text-sm">
              Fill out the form and we'll get back to you within{" "}
              <span className="text-amber-400 font-semibold">24 hours</span>
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div variants={containerVariants} className="space-y-4">
              {inputFields.map((field, index) => (
                <motion.div
                  key={field.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  className="relative group"
                >
                  <div className="relative">
                    <field.icon
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-all duration-200 ${
                        focusedField === field.name
                          ? "text-amber-400"
                          : "text-gray-500 group-hover:text-amber-500/70"
                      }`}
                    />
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder + (field.required ? " *" : "")}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      required={field.required}
                      className={`w-full pl-12 pr-4 py-3.5 bg-black/40 border rounded-xl transition-all duration-200 text-gray-200 placeholder-gray-500
                        ${
                          focusedField === field.name
                            ? "border-amber-400/50 shadow-lg shadow-amber-400/10 bg-black/60"
                            : "border-gray-700 hover:border-amber-500/30"
                        }
                        ${formData[field.name] ? "border-amber-500/30" : ""}
                        focus:outline-none
                      `}
                    />
                    {/* Glow line on focus */}
                    {focusedField === field.name && (
                      <motion.div
                        layoutId="glow"
                        className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Textarea */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="relative group"
              >
                <div className="relative">
                  <FileText
                    className={`absolute left-4 top-4 w-5 h-5 transition-all duration-200 ${
                      focusedField === "projectDetails"
                        ? "text-amber-400"
                        : "text-gray-500 group-hover:text-amber-500/70"
                    }`}
                  />
                  <textarea
                    name="projectDetails"
                    placeholder="Describe your project *"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("projectDetails")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={4}
                    className={`w-full pl-12 pr-4 py-3.5 bg-black/40 border rounded-xl transition-all duration-200 text-gray-200 placeholder-gray-500 resize-none
                      ${
                        focusedField === "projectDetails"
                          ? "border-amber-400/50 shadow-lg shadow-amber-400/10 bg-black/60"
                          : "border-gray-700 hover:border-amber-500/30"
                      }
                      ${formData.projectDetails ? "border-amber-500/30" : ""}
                      focus:outline-none
                    `}
                  />
                  {focusedField === "projectDetails" && (
                    <motion.div
                      layoutId="glow"
                      className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </div>
              </motion.div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                disabled={loading}
                className="w-full relative overflow-hidden bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 text-black py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="text-black/80">Sending...</span>
                    </>
                  ) : (
                    <>
                      Submit Proposal
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </>
                  )}
                </span>
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </button>
            </motion.div>
          </form>

          {/* Footer with trust indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-6 space-y-3"
          >
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-400" />
                Fast Response
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-amber-400" />
                Secure & Private
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400" />
                Free Consultation
              </span>
            </div>
            <p className="text-center text-xs text-gray-600">
              We respect your privacy. Your information is encrypted and secure.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroCo2;