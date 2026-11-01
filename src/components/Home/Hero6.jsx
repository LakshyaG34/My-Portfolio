import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const firstSetRef = useRef(null);
  const [setWidth, setSetWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const measureTrack = () => {
      setSetWidth(firstSetRef.current?.getBoundingClientRect().width || 0);
    };

    measureTrack();
    window.addEventListener("resize", measureTrack);
    return () => window.removeEventListener("resize", measureTrack);
  }, []);

  useAnimationFrame((t, delta) => {
    if (paused || !setWidth) return;
    const nextX = x.get() - delta * 0.06;
    x.set(nextX <= -setWidth ? nextX + setWidth : nextX);
  });

  return (
    <section className="relative w-full py-24 bg-transparent overflow-hidden">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center px-6">
        <p className="text-sm tracking-widest text-violet-600 mb-4">
          DESIGN SHOWCASE
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Get Your Desired
          <span className="bg-gradient-to-r from-violet-600 to-violet-500 bg-clip-text text-transparent">
            {" "}
            Design
          </span>
        </h2>

        <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
          Explore some of the beautiful UI sections and we will craft it using modern
          technologies and stunning design systems.
        </p>
      </div>

      {/* Slider */}
      <div className="relative mt-16">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f8f7fc] via-[#f8f7fc]/75 to-transparent sm:w-24 md:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f8f7fc] via-[#f8f7fc]/75 to-transparent sm:w-24 md:w-40" />

        <motion.div className="flex w-max" style={{ x }}>
          {[0, 1].map((setIndex) => (
            <div
              key={setIndex}
              ref={setIndex === 0 ? firstSetRef : undefined}
              aria-hidden={setIndex === 1}
              className="flex w-max gap-6 px-6"
            >
              {images.map((img, index) => (
                <motion.div
                  key={`${setIndex}-${index}`}
                  whileHover={{ y: -8 }}
                  onHoverStart={() => setPaused(true)}
                  onHoverEnd={() => setPaused(false)}
                  className="h-[160px] min-w-[260px] overflow-hidden rounded-2xl border border-violet-100 bg-white/75 shadow-xl shadow-violet-950/10 backdrop-blur-xl sm:h-[200px] sm:min-w-[300px] md:h-[240px] md:min-w-[360px]"
                >
                  <img
                    src={img}
                    alt={setIndex === 0 ? "Design and product showcase" : ""}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero6;
