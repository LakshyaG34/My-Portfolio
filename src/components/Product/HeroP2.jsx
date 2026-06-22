import { motion } from "framer-motion";
import {
  Bell,
  Zap,
  BarChart3,
  Target,
  Globe,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const HeroP2 = () => {
  return (
    <section id ="heroP2" className="relative w-full py-24 px-6 md:px-12">
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 mb-6"
          >
            <Bell className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-700">
              OneNotify Platform
            </span>
            <span className="text-xs bg-yellow-500 text-white px-2 py-0.5 rounded-full ml-2">
              v3.0
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
              Engage Users
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-500 bg-clip-text text-transparent">
              Instantly & Intelligently
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-gray-600 text-lg leading-relaxed"
          >
            Deliver real-time, targeted notifications across web and mobile.
            Boost engagement, retention, and conversions with a powerful
            notification system built for scale.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 grid grid-cols-1 gap-4"
          >
            {[
              {
                icon: Zap,
                text: "Real-time delivery with high reliability",
                color: "yellow",
                highlight: "99.9% uptime",
              },
              {
                icon: Target,
                text: "Smart targeting & segmentation",
                color: "blue",
                highlight: "AI-powered",
              },
              {
                icon: BarChart3,
                text: "Detailed analytics & tracking",
                color: "purple",
                highlight: "Real-time insights",
              },
              {
                icon: Globe,
                text: "Cross-platform support",
                color: "green",
                highlight: "Web + Mobile",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
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
            <a
              href="https://onenotify.functionxtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </a>

            <a
              href="https://onenotify.functionxtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                View Documentation
                <TrendingUp className="w-4 h-4" />
              </motion.button>
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center gap-6 pt-6 border-t border-gray-200"
          >
            <div className="flex -space-x-2">
              {[
                "https://randomuser.me/api/portraits/women/1.jpg",
                "https://randomuser.me/api/portraits/men/2.jpg",
                "https://randomuser.me/api/portraits/women/3.jpg",
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
                Trusted by 10,000+ developers
              </p>
              <p className="text-xs text-gray-500">⭐ 4.9/5 rating on G2</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            {/* Status Bar */}
            <div className="bg-gray-800/50 px-6 py-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-yellow-500" />
                  <span className="text-white font-semibold">
                    Notification Center
                  </span>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>

            {/* Notification List */}
            <div className="p-6 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 rounded-xl p-4 border border-yellow-500/30"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-yellow-500 rounded-lg">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-semibold">
                        🚀 New Feature Released!
                      </h4>
                      <span className="text-xs text-gray-400">Just now</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">
                      Check out the latest update in your dashboard now.
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-yellow-400">
                        ✨ AI-powered insights
                      </span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-400">
                        98% delivered
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gray-800/50 rounded-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-semibold">
                        Weekly Report Ready
                      </h4>
                      <span className="text-xs text-gray-400">2 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">
                      Your engagement increased by 45% this week.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gray-800/50 rounded-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Target className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-semibold">
                        Segment Updated
                      </h4>
                      <span className="text-xs text-gray-400">Yesterday</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">
                      New user segment: High-value customers.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Footer */}
            <div className="bg-gray-800/50 px-6 py-4 border-t border-gray-700">
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-400">Sent to</p>
                  <p className="text-white font-bold text-lg">12,450</p>
                  <p className="text-xs text-gray-500">users</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Delivery Rate</p>
                  <p className="text-white font-bold text-lg">98.2%</p>
                  <p className="text-xs text-green-400">↑ 2.3%</p>
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
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-gray-700">
                Real-time active
              </span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
            className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg p-3 hidden lg:block"
          >
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-green-500" />
              <span className="text-xs font-semibold text-gray-700">
                +45% engagement
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroP2;
