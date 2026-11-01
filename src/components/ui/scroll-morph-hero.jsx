import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const gallery = [
  "/images/Home1.jpg",
  "/images/Home2.jpg",
  "/images/Home3.jpg",
  "/images/Home4.jpg",
  "/images/Home5.jpg",
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
];

function GalleryCard({ src, index, progress }) {
  const angle = (index / gallery.length) * Math.PI * 2 - Math.PI / 2;
  const orbitX = 50 + Math.cos(angle) * 39;
  const orbitY = 53 + Math.sin(angle) * 38;
  const stripX = -4 + (index / (gallery.length - 1)) * 108;
  const initialRotation = (angle * 180) / Math.PI + 90;
  const finalRotation = (index - (gallery.length - 1) / 2) * 1.15;
  const left = useTransform(progress, [0, 1], [`${orbitX}%`, `${stripX}%`]);
  const top = useTransform(progress, [0, 1], [`${orbitY}%`, "88%"]);
  const rotate = useTransform(progress, [0, 1], [initialRotation, finalRotation]);
  const scale = useTransform(progress, [0, 0.72, 1], [0.9, 0.9, 1]);

  return (
    <motion.div
      style={{ left, top, rotate, scale }}
      className="absolute z-10 h-[clamp(88px,15vh,150px)] w-[clamp(64px,9vw,112px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[18px] bg-[#e9e3fb] shadow-[0_14px_30px_rgba(66,42,130,0.2)] ring-1 ring-white/70 sm:rounded-[22px]"
    >
      <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
    </motion.div>
  );
}

export default function ScrollMorphHero({ title = "The future is built on AI." }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 24,
    mass: 0.45,
  });

  const orbitHeadingOpacity = useTransform(progress, [0.28, 0.55], [1, 0]);
  const visionHeadingOpacity = useTransform(progress, [0.35, 0.68], [0, 1]);
  const orbitHeadingY = useTransform(progress, [0, 0.55], [0, -45]);
  const visionHeadingY = useTransform(progress, [0.35, 0.72], [42, 0]);
  const scrollHintOpacity = useTransform(progress, [0.05, 0.28], [1, 0]);

  return (
    <section ref={sectionRef} className="relative bg-[#f8f7fc] text-[#28243a]">
      <div className="relative h-[190vh]">
        <div className="sticky top-0 h-[100svh] min-h-[620px] overflow-hidden">
          <div className="absolute inset-[10px] overflow-hidden rounded-[18px] border border-[#e6defb] bg-[#fcfbff] sm:inset-5 sm:rounded-[22px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_46%,rgba(255,255,255,0)_24%,rgba(235,228,255,0.62)_100%),radial-gradient(ellipse_at_16%_18%,rgba(196,174,255,0.28),transparent_38%),radial-gradient(ellipse_at_88%_82%,rgba(213,199,255,0.3),transparent_36%)]" />

            <motion.div
              style={{ y: orbitHeadingY, opacity: orbitHeadingOpacity }}
              className="absolute inset-x-5 top-[53%] z-20 -translate-y-1/2 text-center sm:top-[55%]"
            >
              <h2 className="mx-auto max-w-4xl text-3xl font-medium leading-tight tracking-[-0.055em] sm:text-5xl md:text-7xl">
                {title}
              </h2>
              <motion.p
                style={{ opacity: scrollHintOpacity }}
                className="mt-6 text-xs font-semibold tracking-[0.24em] text-[#9589b5] sm:mt-8 sm:text-base"
              >
                SCROLL TO EXPLORE
              </motion.p>
            </motion.div>

            <motion.div
              style={{ y: visionHeadingY, opacity: visionHeadingOpacity }}
              className="absolute inset-x-5 top-[13%] z-20 mx-auto max-w-4xl text-center sm:top-[13%]"
            >
              <h2 className="text-4xl font-bold tracking-[-0.055em] text-[#30274a] sm:text-6xl md:text-8xl">
                Explore Our Vision
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#665d7d] sm:mt-7 sm:text-xl sm:leading-8 md:text-2xl">
                Discover a world where technology meets creativity. Scroll through our curated collection of innovations designed to shape the future.
              </p>
            </motion.div>

            {gallery.map((src, index) => (
              <GalleryCard key={src} src={src} index={index} progress={progress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
