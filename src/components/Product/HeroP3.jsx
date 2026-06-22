import { motion } from "framer-motion";
import {
  ShieldCheck,
  Timer,
  BarChart3,
  Award,
  Users,
  FileCheck,
  ArrowRight,
  Clock,
  Eye,
  CheckCircle2,
} from "lucide-react";

const HeroP3 = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12">
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative order-2 md:order-1"
        >
          {/* Main Exam Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-white text-sm font-semibold">
                  Online Exam Portal
                </span>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
            </div>

            {/* Exam Content */}
            <div className="p-6">
              {/* Exam Title & Status */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-gray-500 font-medium">
                    Aptitude Assessment
                  </p>
                  <h3 className="text-xl font-bold text-gray-900">
                    Technical Screening Test
                  </h3>
                </div>
                <div className="flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-bold text-red-600">
                    10:32 left
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Question 5 of 20</span>
                  <span className="font-semibold text-emerald-600">
                    25% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "25%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-gradient-to-r from-emerald-500 to-yellow-500 h-2 rounded-full"
                  />
                </div>
              </div>

              {/* Current Question */}
              <div className="mb-6">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
                  <p className="text-gray-700 font-medium">
                    What is the time complexity of binary search?
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-gray-500">Difficulty:</span>
                    <span className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded">
                      Medium
                    </span>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {[
                  { text: "O(n)", correct: false, selected: false },
                  { text: "O(log n)", correct: true, selected: true },
                  { text: "O(n log n)", correct: false, selected: false },
                  { text: "O(1)", correct: false, selected: false },
                ].map((option, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.05 }}
                    className={`relative p-3 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      option.selected
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-gray-200 hover:border-emerald-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            option.selected
                              ? "border-emerald-500 bg-emerald-500"
                              : "border-gray-300"
                          }`}
                        >
                          {option.selected && (
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="text-gray-700">{option.text}</span>
                      </div>
                      {option.selected && option.correct && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-emerald-500 text-xs font-semibold bg-emerald-100 px-2 py-1 rounded"
                        >
                          Selected
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-6">
                <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-gray-200 transition">
                  Previous
                </button>
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-emerald-700 transition shadow-md">
                  Next Question
                </button>
              </div>
            </div>

            {/* Footer Stats */}
            <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Proctoring Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-gray-600">Secure Browser</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0 }}
            className="absolute -top-5 -right-5 bg-white rounded-xl shadow-lg p-3 hidden lg:block"
          >
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-xs font-semibold text-gray-700">
                AI Proctoring
              </span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
            className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg p-3 hidden lg:block"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-semibold text-gray-700">
                1,234 active exams
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="order-1 md:order-2">
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-yellow-500/10 border border-emerald-500/20 mb-6"
          >
            <FileCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">
              Exam Platform
            </span>
            <span className="text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full ml-2">
              Enterprise Grade
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Conduct Secure
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-yellow-600 bg-clip-text text-transparent">
              Scalable Assessments
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-gray-600 text-lg leading-relaxed"
          >
            Create, manage, and evaluate exams seamlessly with a robust platform
            designed for institutions, recruiters, and training programs. Ensure
            fairness, accuracy, and performance at scale.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 space-y-4"
          >
            {[
              {
                icon: ShieldCheck,
                text: "Secure exam environment",
                highlight: "Anti-cheating measures",
                color: "emerald",
              },
              {
                icon: Timer,
                text: "Real-time timers",
                highlight: "Auto-submission controls",
                color: "yellow",
              },
              {
                icon: BarChart3,
                text: "Instant evaluation",
                highlight: "Detailed analytics",
                color: "blue",
              },
              {
                icon: Award,
                text: "Certification ready",
                highlight: "Auto-generated certificates",
                color: "purple",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + index * 0.05 }}
                className="group flex items-center justify-between p-3 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg bg-${feature.color}-100 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon
                      className={`w-5 h-5 text-${feature.color}-600`}
                    />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-green-500 ml-1" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 flex gap-4 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Creating Exams
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-yellow-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View Case Studies
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center gap-6 pt-6 border-t border-gray-200"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "https://randomuser.me/api/portraits/women/4.jpg",
                  "https://randomuser.me/api/portraits/men/5.jpg",
                  "https://randomuser.me/api/portraits/women/6.jpg",
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Trusted by 500+ institutions
                </p>
                <p className="text-xs text-gray-500">
                  ⭐ 4.8/5 from 2,000+ reviews
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">
                1M+ exams conducted
              </p>
              <p className="text-xs text-gray-500">99.9% uptime SLA</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroP3;