import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useState } from "react";

const images = [
  "/images/Hero1.png",
  "/images/Hero2.jpg",
  "/images/Hero3.png",
  "/images/Hero4.png",
  "/images/Hero5.png",
  "/images/Hero6.png",
  "/images/Hero7.png",
  "/images/Hero8.png",
  "/images/Hero9.png",
  "/images/Hero10.jpg",
  "/images/Hero11.png",
  "/images/Hero12.jpg",
  "/images/Hero13.png",
  "/images/Hero14.png",
  "/images/Hero15.png",
  "/images/Hero16.png",
  "/images/Hero17.png",
  "/images/Hero18.png",
  "/images/Hero19.png",
  "/images/Hero20.jpg",
  "/images/Hero21.png",
  "/images/Hero22.jpg",
];

const Hero6 = () => {
  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);

  const duplicatedImages = [...images, ...images];

  // animation loop
  useAnimationFrame((t, delta) => {
    if (!paused) {
      x.set(x.get() - delta * 0.08);
    }
  });

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center px-6">
        <p className="text-sm tracking-widest text-yellow-400 mb-4">
          DESIGN SHOWCASE
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Get Your Desired
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {" "}
            Design
          </span>
        </h2>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Explore some of the beautiful UI sections and we will craft it using modern
          technologies and stunning design systems.
        </p>
      </div>

      {/* Slider */}
      <div className="relative mt-16">
        <div className="absolute left-0 top-0 h-full w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div className="flex gap-6 w-max px-6" style={{ x }}>
          {duplicatedImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              onHoverStart={() => setPaused(true)}
              onHoverEnd={() => setPaused(false)}
              className="
                min-w-[260px]
                sm:min-w-[300px]
                md:min-w-[360px]
                h-[160px]
                sm:h-[200px]
                md:h-[240px]
                rounded-xl
                overflow-hidden
                bg-zinc-900
                border border-white/10
                shadow-lg
              "
            >
              <img
                src={img}
                alt="hero design"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero6;
