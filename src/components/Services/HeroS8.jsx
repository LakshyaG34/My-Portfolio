import { motion } from "framer-motion";
import { FaFigma } from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const HeroS8 = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/figma1.png')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

      {/* Background motion */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      {/* Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-12">

        {/* LEFT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1 text-xs tracking-widest border border-yellow-500/40 text-yellow-400 rounded-full"
          >
            <FaFigma className="text-pink-400 text-sm" />
            FIGMA TO CODE
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white"
          >
            Have a{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Figma Design
            </span>
            <br />
            In Mind?
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-gray-400 text-base sm:text-lg mt-6 leading-relaxed max-w-xl"
          >
            Send us your Figma designs and we will transform them into
            high-performance, pixel-perfect web applications.
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="mt-8">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255,200,0,0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold transition"
            >
              Get Your Design Built
              <FaFigma />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT ICON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 360,
              rotateX: 15,
              rotateY: -15
            }}
            className="relative cursor-pointer group"
            style={{ perspective: 1000 }}
          >
            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 blur-2xl"
            />

            {/* Icon Container */}
            <motion.div
              className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 flex items-center justify-center rounded-full border-2 border-yellow-500/30 shadow-2xl group-hover:border-yellow-500 transition-all duration-300"
              style={{
                background: "linear-gradient(120deg,#111,#000,#222)",
                backgroundSize: "200% 200%"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Orbiting particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 6 + i,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    transformOrigin: `${80 + i * 10}px center`,
                    left: "50%",
                    top: "50%",
                    marginLeft: -4,
                    marginTop: -4
                  }}
                />
              ))}

              {/* Figma icon */}
              <FaFigma
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gray-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300"
              />
            </motion.div>

            {/* Hover label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
            >
              <span className="text-xs font-mono text-yellow-400 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-500/30">
                Figma Expert ✨
              </span>
            </motion.div>
          </motion.div>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12 text-gray-500 text-sm"
          >
            Pixel-perfect implementation
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroS8;