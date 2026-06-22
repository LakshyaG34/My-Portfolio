import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Star,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Hero7 = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between gap-10 mb-16"
      >
        {/* Left Title */}
        <div className="max-w-2xl">
          <p className="text-sm text-orange-500 font-semibold tracking-wide mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            OUR PRODUCTS
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Powerful Solutions,
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
              Built for Modern Businesses
            </span>
          </h2>
        </div>

        {/* Right CTA */}
        <div className="flex flex-col gap-4 items-start md:items-end">
          <p className="text-gray-400">Explore our complete ecosystem</p>

          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full text-white font-medium transition shadow-lg"
            >
              See All Products →
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Products Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {/* Product 1 - OneNotify */}
        <motion.div
          variants={card}
          whileHover={{ y: -8 }}
          className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&auto=format"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Notifications"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />

          {/* Content */}
          <div className="relative p-6 min-h-[420px] flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>

              <p className="text-orange-400 text-sm font-semibold mb-2">
                OneNotify Platform
                <span className="ml-2 text-xs bg-orange-500/20 px-2 py-0.5 rounded-full">
                  v3.0
                </span>
              </p>

              <h3 className="text-2xl font-bold text-white mb-3">
                Smart Push Notifications
              </h3>

              <p className="text-gray-200 mb-4">
                Deliver real-time, targeted notifications across web and mobile
                with AI-powered segmentation.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/20 mb-4">
                <span className="text-gray-200 text-sm">10k+ users</span>
                <span className="text-gray-200 text-sm">4.9 rating</span>
              </div>

              {/* Learn More Button */}
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2 bg-white text-gray-900 rounded-full font-medium text-sm flex items-center gap-2 w-fit hover:bg-gray-100 transition"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Product 2 - ExamPortal */}
        <motion.div
          variants={card}
          whileHover={{ y: -8 }}
          className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Analytics"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />

          <div className="relative p-6 min-h-[420px] flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>

              <p className="text-orange-400 text-sm font-semibold mb-2">
                ExamPortal
                <span className="ml-2 text-xs bg-orange-500/20 px-2 py-0.5 rounded-full">
                  Enterprise
                </span>
              </p>

              <h3 className="text-2xl font-bold text-white mb-3">
                Secure Online Assessments
              </h3>

              <p className="text-gray-200 mb-4">
                Create, manage, and evaluate exams with AI-proctoring and
                real-time analytics.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/20 mb-4">
                <span className="text-gray-200 text-sm">500+ institutions</span>
                <span className="text-gray-200 text-sm">1M+ exams</span>
              </div>

              {/* Learn More Button */}
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2 bg-white text-gray-900 rounded-full font-medium text-sm flex items-center gap-2 w-fit hover:bg-gray-100 transition"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Product 3 - ZYM Platform */}
        <motion.div
          variants={card}
          whileHover={{ y: -8 }}
          className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Gym background"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />

          {/* Content */}
          <div className="relative p-6 min-h-[420px] flex flex-col justify-between">
            <div>
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-white" />
              </div>

              {/* Tag */}
              <p className="text-orange-400 text-sm font-semibold mb-2 flex items-center gap-1">
                ZYM Platform
                <span className="text-xs bg-orange-500/20 px-2 py-0.5 rounded-full ml-2">
                  All-in-One
                </span>
              </p>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">
                Gym Management SaaS
              </h3>

              {/* Description */}
              <p className="text-gray-200 leading-relaxed mb-4">
                Complete gym management system from memberships to mobile apps.
              </p>
            </div>

            <div>
              {/* Metrics */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/20 mb-4">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-orange-400" />
                  <span className="text-sm text-gray-200">500+ gyms</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-orange-400" />
                  <span className="text-sm text-gray-200">4.8 rating</span>
                </div>
              </div>

              {/* Explore Button */}
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2 bg-white text-gray-900 rounded-full font-medium text-sm flex items-center gap-2 w-fit hover:bg-gray-100 transition"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Stats Section - Orange Theme */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div>
            <p className="text-3xl font-bold text-orange-500">10,000+</p>
            <p className="text-sm text-gray-500">Active Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">99.9%</p>
            <p className="text-sm text-gray-500">Uptime SLA</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">4.9/5</p>
            <p className="text-sm text-gray-500">Customer Rating</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">24/7</p>
            <p className="text-sm text-gray-500">Support</p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2 text-sm text-gray-400">
          <Shield className="w-4 h-4 text-orange-500" />
          <span>Enterprise Security</span>
          <span className="mx-2">•</span>
          <span>GDPR Compliant</span>
          <span className="mx-2">•</span>
          <span>SOC 2 Type II</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero7;
