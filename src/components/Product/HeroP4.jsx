import { motion } from "framer-motion";
import {
  Dumbbell,
  Activity,
  Users,
  Calendar,
  CreditCard,
  TrendingUp,
  ArrowRight,
  Award,
  Flame,
  Clock,
  CheckCircle2,
  Zap,
  Shield,
  Smartphone,
  BarChart3,
} from "lucide-react";

const HeroP4 = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 overflow-hidden">
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500 rounded-full blur-3xl"
        />
      </div> */}

      {/* Dynamic Grid Pattern */}
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')]" /> */}

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-6"
          >
            <Flame className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-semibold text-yellow-400">
              ZYM Platform
            </span>
            <span className="text-xs bg-yellow-500 text-black px-2 py-0.5 rounded-full ml-2 font-bold">
              ALL-IN-ONE
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Powering Modern
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Gyms End-to-End
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-gray-300 text-lg leading-relaxed"
          >
            A full-stack gym management SaaS — built and operated by us. From
            memberships to mobile apps, everything your gym needs in one
            powerful system.
          </motion.p>

          {/* Enhanced Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 grid grid-cols-2 gap-4"
          >
            {[
              {
                icon: Users,
                title: "Members & Plans",
                desc: "Manage at scale",
                color: "blue",
              },
              {
                icon: Activity,
                title: "Attendance",
                desc: "Track in real-time",
                color: "green",
              },
              {
                icon: Dumbbell,
                title: "Classes",
                desc: "Schedule & manage",
                color: "orange",
              },
              {
                icon: CreditCard,
                title: "Payments",
                desc: "Seamless billing",
                color: "purple",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-transparent transition-all duration-500" />
                <feature.icon className="w-8 h-8 text-yellow-500 mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-semibold text-gray-300">
                  {feature.title}
                </p>
                <p className="text-xs text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <a
              href="https://zym.functionxtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Platform
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </a>

            <a
              href="https://zym.functionxtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 hover:border-yellow-500/50 transition-all duration-300 flex items-center gap-2"
              >
                Watch Demo
                <Zap className="w-4 h-4" />
              </motion.button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center gap-6 pt-6 border-t border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["💪", "🏋️", "🤸"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-sm border-2 border-black"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Trusted by 500+ gyms
                </p>
                <p className="text-xs text-gray-400">⭐ 4.9/5 rating on G2</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-white">
                2M+ members managed
              </p>
              <p className="text-xs text-green-400">↑ 156% growth</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL - Enhanced Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Main Dashboard Card */}
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden border border-white/10">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 px-6 py-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-white text-sm font-semibold">
                    ZYM Dashboard
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">Live Updates</span>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6">
              {/* Welcome Section */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                  <Flame className="w-6 h-6 text-yellow-500" />
                  Gym Overview
                </h3>
                <p className="text-xs text-gray-400">
                  Real-time analytics & metrics
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  {
                    label: "Active Members",
                    value: "1,284",
                    change: "+12%",
                    icon: Users,
                  },
                  {
                    label: "Today's Check-ins",
                    value: "312",
                    change: "+8%",
                    icon: Activity,
                  },
                  {
                    label: "Classes Running",
                    value: "18",
                    change: "+3",
                    icon: Calendar,
                  },
                  {
                    label: "Monthly Revenue",
                    value: "₹4.2L",
                    change: "+15%",
                    icon: TrendingUp,
                  },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-yellow-500/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className="w-5 h-5 text-yellow-500" />
                      <span className="text-xs font-semibold text-green-400">
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-yellow-400">
                    🔥 Recent Activity
                  </p>
                  <Clock className="w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-2">
                  {[
                    {
                      member: "Sarah Johnson",
                      action: "checked in",
                      time: "2 min ago",
                    },
                    {
                      member: "Mike Chen",
                      action: "joined premium plan",
                      time: "15 min ago",
                    },
                    {
                      member: "Alex Rivera",
                      action: "booked a class",
                      time: "1 hour ago",
                    },
                  ].map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        <span className="text-gray-300">
                          <span className="font-semibold text-white">
                            {activity.member}
                          </span>{" "}
                          {activity.action}
                        </span>
                      </div>
                      <span className="text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 px-6 py-3 border-t border-white/10">
              <div className="flex justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-400">Mobile App Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-400">Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-400">Analytics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0 }}
            className="absolute -top-5 -right-5 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl p-3 border border-yellow-500/30 hidden lg:block"
          >
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-xs font-semibold text-white">
                Best Gym Software 2026
              </span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
            className="absolute -bottom-5 -left-5 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl p-3 border border-yellow-500/30 hidden lg:block"
          >
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-semibold text-white">
                98% retention rate
              </span>
            </div>
          </motion.div>

          {/* Glow Effects */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-yellow-500 blur-3xl opacity-20 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-orange-500 blur-3xl opacity-20 rounded-full"></div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-yellow-500 rounded-full mt-2"
            />
          </div>
        </motion.div> 
      </motion.div>
    </section>
  );
};

export default HeroP4;
