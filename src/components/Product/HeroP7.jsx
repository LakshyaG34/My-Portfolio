import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Stars,
  Globe,
  Smartphone,
  ArrowRight,
  Moon,
  Sun,
  Heart,
  Calendar,
  Brain,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle2,
  Star,
  Clock,
  Award,
  Users,
  MessageCircle,
  Bell,
  Coffee,
  Gem,
  Infinity,
  Compass,
  Flower2,
  Crown,
  Target,
  BarChart3,
  Activity,
  Lock,
  Eye,
} from "lucide-react";
import { useState } from "react";
import React from "react";

const HeroP7 = () => {
  const [activeTab, setActiveTab] = useState("kundali");

  const tabs = [
    { id: "kundali", label: "Kundali", icon: Moon, color: "yellow" },
    { id: "horoscope", label: "Horoscope", icon: Sun, color: "orange" },
    { id: "compatibility", label: "Compatibility", icon: Heart, color: "pink" },
  ];

  const tabContent = {
    kundali: {
      title: "Birth Chart Analysis",
      description:
        "Generate detailed kundali with planetary positions, houses, and nakshatras",
      features: [
        "Swiss Ephemeris calculations for 99.9% accuracy",
        "Dasha period analysis with AI predictions",
        "Graha dosha detection & remedies",
        "Customizable chart styles (North/South Indian)",
      ],
      stats: { accuracy: "99.9%", calculations: "10M+", responseTime: "< 2s" },
      icon: Stars,
    },
    horoscope: {
      title: "Daily Horoscope",
      description:
        "AI-powered insights personalized for your moon sign and birth chart",
      features: [
        "Personalized daily, weekly & monthly predictions",
        "Career, relationship & health insights",
        "AI-generated remedy suggestions",
        "Push notifications for important transits",
      ],
      stats: { accuracy: "94%", predictions: "1M+", responseTime: "< 1s" },
      icon: Sun,
    },
    compatibility: {
      title: "Compatibility Matching",
      description: "36-point matchmaking system for relationship analysis",
      features: [
        "Ashtakoot matching with detailed breakdown",
        "Mangal dosha & other compatibility factors",
        "Relationship timeline predictions",
        "Personalized remedy suggestions",
      ],
      stats: { accuracy: "96%", matches: "500K+", responseTime: "< 1.5s" },
      icon: Heart,
    },
  };

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
    <section className="w-full px-4 sm:px-6 py-16 sm:py-24 md:py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="absolute top-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-xs sm:text-sm text-purple-400 mb-6 sm:mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="font-semibold text-xs sm:text-sm">
            Vedic Astrology Platform
          </span>
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs">Coming Soon</span>
        </motion.div>

        {/* Main Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
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
                <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                  Om AstroSage
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6"
            >
              Om AstroSage is a production-ready Vedic astrology platform that
              combines traditional Swiss Ephemeris calculations with modern AI
              to deliver kundalis, dasha analysis, compatibility matching, daily
              horoscopes, and personalized remedies.
            </motion.p>

            {/* AI Providers */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 sm:pb-0"
            >
              <span className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">
                Powered by:
              </span>
              {[
                "Claude",
                "ChatGPT",
                "Gemini",
                "Perplexity",
                "Groq",
                "Ollama",
              ].map((ai, idx) => (
                <span
                  key={idx}
                  className="text-[9px] sm:text-xs font-semibold text-purple-400 bg-purple-500/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-purple-500/30 whitespace-nowrap"
                >
                  {ai}
                </span>
              ))}
            </motion.div>

            {/* Features Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              {[
                {
                  icon: Stars,
                  title: "Accurate Kundalis",
                  desc: "Powered by Swiss Ephemeris calculations",
                  color: "yellow",
                },
                {
                  icon: Brain,
                  title: "AI-Powered Predictions",
                  desc: "Dasha insights & compatibility matching",
                  color: "purple",
                },
                {
                  icon: Smartphone,
                  title: "PWA Support",
                  desc: "Install on mobile for native experience",
                  color: "pink",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/30"
                >
                  <div
                    className={`p-2 sm:p-2.5 rounded-lg bg-${feature.color}-500/20 group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    <feature.icon
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-${feature.color}-400`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm sm:text-base">
                      {feature.title}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Highlight Box */}
            <motion.div
              variants={itemVariants}
              className="relative mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-purple-500/30 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/20 blur-2xl rounded-full" />
              <div className="relative">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <Gem className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  <span className="text-purple-400 font-semibold text-xs sm:text-sm">
                    Ancient wisdom, understood by AI
                  </span>
                </div>
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  Experience ancient Vedic wisdom enhanced by modern AI —
                  accessible anywhere, anytime with multi-provider AI support.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Coming Soon..
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL - Enhanced with more content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full mt-6 lg:mt-0"
          >
            {/* Main Card - Increased height with more content */}
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-[#0a0515] to-[#020105] backdrop-blur-xl shadow-2xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 sm:px-5 py-3 sm:py-4 border-b border-purple-500/20">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                      <span className="text-white text-xs sm:text-sm font-semibold">
                        AstroSage — AI Astrology
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                    <span className="text-[10px] sm:text-xs text-gray-400">
                      Powered by AI
                    </span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="px-4 sm:px-5 pt-4 sm:pt-5">
                <div className="flex gap-1 sm:gap-2 bg-white/5 rounded-xl p-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? `bg-gradient-to-r from-${tab.color}-500/20 to-${tab.color}-600/20 text-${tab.color}-400 border border-${tab.color}-500/30`
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <tab.icon
                        className={`w-3 h-3 sm:w-4 sm:h-4 text-${tab.color}-400`}
                      />
                      <span className="hidden xs:inline">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Icon and Title Section */}
              <div className="px-4 sm:px-5 pt-5 pb-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`header-${activeTab}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 mb-3"
                  >
                    <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                      {React.createElement(tabContent[activeTab].icon, {
                        className: "w-5 h-5 sm:w-6 sm:h-6 text-purple-400",
                      })}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                        {tabContent[activeTab].title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {tabContent[activeTab].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Quick Stats */}
              <div className="px-4 sm:px-5 pb-3">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {Object.entries(tabContent[activeTab].stats).map(
                    ([key, value], idx) => (
                      <div
                        key={idx}
                        className="text-center p-2 rounded-lg bg-white/5"
                      >
                        <p className="text-purple-400 font-bold text-sm sm:text-base">
                          {value}
                        </p>
                        <p className="text-gray-500 text-[9px] sm:text-[10px] capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Features List - Increased spacing */}
              <div className="px-4 sm:px-5 pb-4">
                <div className="space-y-2.5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`features-${activeTab}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2.5"
                    >
                      {tabContent[activeTab].features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-300 text-[11px] sm:text-xs leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="px-4 sm:px-5 pb-4">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-2 sm:p-3 border border-yellow-500/20">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                      <span className="text-yellow-400 text-[9px] sm:text-xs font-semibold">
                        Premium
                      </span>
                    </div>
                    <p className="text-gray-300 text-[8px] sm:text-[10px]">
                      Detailed analysis & remedies
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-2 sm:p-3 border border-purple-500/20">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                      <span className="text-purple-400 text-[9px] sm:text-xs font-semibold">
                        Community
                      </span>
                    </div>
                    <p className="text-gray-300 text-[8px] sm:text-[10px]">
                      Share & discuss insights
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 flex gap-2 sm:gap-3">
                <button className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition shadow-lg">
                  Generate Now
                </button>
                <button className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-sm bg-white/5 text-purple-300 border border-purple-500/30 hover:bg-white/10 transition flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>Preview</span>
                </button>
              </div>

              {/* Footer */}
              <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 px-4 sm:px-5 py-2.5 sm:py-3 border-t border-purple-500/20">
                <div className="flex justify-center gap-4 sm:gap-6 text-[9px] sm:text-xs">
                  <div className="flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400" />
                    <span className="text-gray-400">Real-time</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400" />
                    <span className="text-gray-400">Secure</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-pink-400" />
                    <span className="text-gray-400">Accurate</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                    <span className="text-gray-400">24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0 }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-[#0a0515] to-[#020105] rounded-xl shadow-2xl p-2 sm:p-3 border border-purple-500/30 hidden lg:block"
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                <span className="text-[10px] sm:text-xs font-semibold text-white">
                  <span className="text-green-400">AI-Powered</span> Predictions
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-br from-[#0a0515] to-[#020105] rounded-xl shadow-2xl p-2 sm:p-3 border border-purple-500/30 hidden lg:block"
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                <span className="text-[10px] sm:text-xs font-semibold text-white">
                  99.9% Accuracy
                </span>
              </div>
            </motion.div>

            {/* Glow Effects */}
            <div className="absolute -top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 bg-purple-500 blur-3xl opacity-20 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 bg-pink-500 blur-3xl opacity-20 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroP7;
