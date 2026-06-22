import { motion } from "framer-motion";
import {
  Shield,
  Scan,
  Bug,
  Sparkles,
  ArrowRight,
  Zap,
  Brain,
  Lock,
  Eye,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Terminal,
  Database,
  Clock,
  GraduationCap,
  Code2,
  Rocket,
} from "lucide-react";

const HeroP6 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-8 md:py-32 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-xs sm:text-sm text-cyan-400 mb-6 sm:mb-8 backdrop-blur-sm"
        >
          <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="font-semibold text-xs sm:text-sm">Intelligent Security Scanner</span>
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs">Launching Q1 2026</span>
        </motion.div>

        {/* Main Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full"
          >
            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
                Meet{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  VulnScan
                </span>
              </h1>
            </motion.div>

            {/* Main Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6"
            >
              An intelligent security scanner that crawls your site, discovers
              your API surface, and performs deep security checks across
              authentication, headers, CORS, injection, rate limiting, and
              exposed secrets.
            </motion.p>

            {/* Standards Mapping - Scrollable on mobile */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto pb-2 sm:pb-0"
            >
              <span className="px-2 sm:px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] sm:text-xs text-cyan-400 whitespace-nowrap">
                OWASP API Top 10
              </span>
              <span className="px-2 sm:px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] sm:text-xs text-blue-400 whitespace-nowrap">
                CWE Classifications
              </span>
              <span className="px-2 sm:px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[10px] sm:text-xs text-purple-400 whitespace-nowrap">
                PCI DSS Ready
              </span>
            </motion.div>

            {/* Key Features Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              {[
                {
                  icon: Scan,
                  title: "Full Discovery",
                  desc: "Crawls your entire site and maps all API endpoints automatically",
                  color: "cyan",
                },
                {
                  icon: Shield,
                  title: "Deep Security Scan",
                  desc: "Tests authentication, headers, CORS, injection, rate limiting & secrets",
                  color: "blue",
                },
                {
                  icon: Bug,
                  title: "OWASP & CWE Mapping",
                  desc: "Every issue mapped to industry standards for prioritization",
                  color: "purple",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-500/30"
                >
                  <div
                    className={`p-2 sm:p-2.5 rounded-lg bg-${feature.color}-500/20 group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    <feature.icon
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-${feature.color}-400`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm sm:text-base">{feature.title}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* AI Differentiator - HIGHLIGHTED */}
            <motion.div
              variants={itemVariants}
              className="relative mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-500/20 blur-2xl rounded-full" />
              <div className="relative">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold text-xs sm:text-sm">
                    What makes VulnScan different
                  </span>
                </div>
                <p className="text-white text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  Every vulnerability is explained in{" "}
                  <span className="text-cyan-400 font-semibold">
                    plain English
                  </span>{" "}
                  by your choice of leading AI models —
                  <span className="text-yellow-400">
                    {" "}
                    Claude, GPT, Gemini, or Perplexity
                  </span>{" "}
                  — with step-by-step remediation guidance, code examples, and
                  verification steps.
                </p>
                <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                    <span className="text-gray-300 text-xs sm:text-sm">
                      Cut review cycle from{" "}
                      <span className="text-green-400 font-bold">
                        days → minutes
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Model Selector - Scrollable on mobile */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto pb-2 sm:pb-0"
            >
              <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">Choose your AI:</span>
              {["Claude", "GPT-4", "Gemini", "Perplexity"].map((ai, idx) => (
                <span
                  key={idx}
                  className="text-[10px] sm:text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-cyan-500/30 whitespace-nowrap"
                >
                  {ai}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Coming Soon..
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full mt-6 lg:mt-0"
          >
            {/* Main Card */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl shadow-2xl">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 sm:px-6 py-3 sm:py-4 border-b border-cyan-500/20">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-white text-xs sm:text-sm font-semibold">
                      VulnScan — AI Analysis
                    </span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    <span className="text-[10px] sm:text-xs text-gray-400">
                      Powered by GPT-4
                    </span>
                  </div>
                </div>
              </div>

              {/* Scan Results Header */}
              <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b border-cyan-500/10">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <p className="text-xs sm:text-sm font-semibold text-cyan-400">
                    🔍 Scan Results
                  </p>
                  <span className="text-[10px] sm:text-xs text-green-400">
                    Completed in 2.4s
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="text-center">
                    <p className="text-lg sm:text-2xl font-bold text-white">1,284</p>
                    <p className="text-[10px] sm:text-xs text-gray-400">Endpoints</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg sm:text-2xl font-bold text-red-400">47</p>
                    <p className="text-[10px] sm:text-xs text-gray-400">Vulnerabilities</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg sm:text-2xl font-bold text-green-400">98%</p>
                    <p className="text-[10px] sm:text-xs text-gray-400">Coverage</p>
                  </div>
                </div>
              </div>

              {/* Vulnerability with AI Explanation */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className="text-xs sm:text-sm font-semibold text-yellow-400">
                    ⚠️ Critical Finding
                  </p>
                  <span className="text-[10px] sm:text-xs text-gray-500">CWE-287</span>
                </div>

                {/* Vulnerability Card */}
                <div className="bg-gradient-to-r from-red-500/10 to-red-500/5 rounded-xl p-3 sm:p-4 border border-red-500/30">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-red-400 text-xs sm:text-sm font-semibold mb-1">
                        Broken Authentication
                      </p>
                      <p className="text-gray-300 text-xs sm:text-sm break-words">
                        Token validation missing in{" "}
                        <span className="text-cyan-400 break-all">/api/user/update</span>{" "}
                        endpoint
                      </p>
                      <div className="mt-2 flex gap-2">
                        <span className="text-[10px] sm:text-xs text-cyan-400 bg-cyan-500/10 px-1.5 sm:px-2 py-0.5 rounded">
                          OWASP API1:2026
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Explanation - HIGHLIGHTED */}
                <div className="bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-xl p-3 sm:p-4 border border-cyan-500/30">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="p-1 rounded-lg bg-cyan-500/20 flex-shrink-0">
                      <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-cyan-400 text-[10px] sm:text-xs font-semibold mb-2">
                        🤖 AI Explanation (Plain English)
                      </p>
                      <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                        <span className="text-yellow-400">What's happening:</span>{" "}
                        The API endpoint doesn't verify if the request is coming
                        from an authenticated user. This means anyone could
                        potentially modify another user's account information.
                      </p>
                      <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                        <span className="text-green-400">How to fix it:</span>{" "}
                        Add JWT token validation middleware to verify user
                        identity before processing any data updates.
                      </p>

                      {/* Code Example - Scrollable on mobile */}
                      <div className="mt-2 sm:mt-3 bg-black/60 rounded-lg p-2 sm:p-3 overflow-x-auto">
                        <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                          <Code2 className="w-2 h-2 sm:w-3 sm:h-3 text-cyan-400" />
                          <span className="text-[10px] sm:text-xs text-cyan-400">
                            Code Example
                          </span>
                        </div>
                        <pre className="text-[8px] sm:text-xs text-gray-300 font-mono whitespace-pre-wrap break-words">
{`// Add authentication middleware
app.put('/api/user/update', 
  authenticateToken,  // ← Add this line
  (req, res) => {
    // Update user logic here
  }
);`}
                        </pre>
                      </div>

                      {/* Verification Step */}
                      <div className="mt-2 sm:mt-3 flex items-center gap-1 sm:gap-2 pt-2 border-t border-cyan-500/20">
                        <CheckCircle2 className="w-2 h-2 sm:w-3 sm:h-3 text-green-400" />
                        <span className="text-[10px] sm:text-xs text-gray-300">
                          Verification: Re-run scan to confirm fix
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Time Savings Highlight */}
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-2 sm:p-3 border border-green-500/30">
                  <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                      <span className="text-[11px] sm:text-sm text-gray-300">
                        Time to fix without AI:
                      </span>
                    </div>
                    <span className="text-red-400 text-xs sm:text-sm line-through">
                      2-3 days
                    </span>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                      <span className="text-[11px] sm:text-sm text-green-400 font-bold">
                        With AI: 15 minutes
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer - Scrollable on mobile */}
              <div className="bg-gradient-to-r from-cyan-500/5 to-blue-500/5 px-4 sm:px-6 py-2 sm:py-3 border-t border-cyan-500/20 overflow-x-auto">
                <div className="flex justify-between gap-2 sm:gap-4 text-[9px] sm:text-xs min-w-[280px] sm:min-w-0">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <GraduationCap className="w-2 h-2 sm:w-3 sm:h-3 text-gray-400" />
                    <span className="text-gray-400 whitespace-nowrap">Step-by-step guidance</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Code2 className="w-2 h-2 sm:w-3 sm:h-3 text-gray-400" />
                    <span className="text-gray-400 whitespace-nowrap">Code examples</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <CheckCircle2 className="w-2 h-2 sm:w-3 sm:h-3 text-gray-400" />
                    <span className="text-gray-400 whitespace-nowrap">Verification</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements - Hide on mobile */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0 }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl p-3 border border-cyan-500/30 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-xs font-semibold text-white">
                  <span className="text-green-400">93%</span> Faster Resolution
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl p-3 border border-cyan-500/30 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-xs font-semibold text-white">
                  From days → minutes
                </span>
              </div>
            </motion.div>

            {/* Glow Effects - Reduced on mobile */}
            <div className="absolute -top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroP6;