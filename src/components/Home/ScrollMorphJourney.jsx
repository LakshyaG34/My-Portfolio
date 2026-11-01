import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { label: "01 / Discover", image: "/images/Home2.jpg", angle: -90 },
  { label: "02 / Strategize", image: "/images/Hero6.png", angle: -18 },
  { label: "03 / Design", image: "/images/Home3.jpg", angle: 54 },
  { label: "04 / Build", image: "/images/Hero12.jpg", angle: 126 },
  { label: "05 / Grow", image: "/images/Home4.jpg", angle: 198 },
];

function JourneyCard({ step, index, progress }) {
  const angle = (step.angle * Math.PI) / 180;
  const startX = 50 + Math.cos(angle) * 34;
  const startY = 52 + Math.sin(angle) * 34;
  const endX = 11 + index * 19.5;
  const left = useTransform(progress, [0, 1], [`${startX}%`, `${endX}%`]);
  const top = useTransform(progress, [0, 1], [`${startY}%`, "72%"]);
  const rotate = useTransform(progress, [0, 1], [step.angle + 90, 0]);
  const scale = useTransform(progress, [0, 0.75, 1], [0.82, 0.9, 1]);

  return (
    <motion.article
      style={{ left, top, rotate, scale }}
      className="absolute z-10 h-[clamp(150px,25vh,250px)] w-[clamp(115px,17vw,210px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[22px] border border-white/80 bg-white shadow-[0_22px_55px_rgba(70,45,130,0.2)] sm:rounded-[28px]"
    >
      <img src={step.image} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#211736]/80 via-transparent to-transparent" />
      <p className="absolute bottom-4 left-4 text-xs font-semibold tracking-wide text-white sm:bottom-5 sm:left-5 sm:text-sm">
        {step.label}
      </p>
    </motion.article>
  );
}

export default function ScrollMorphJourney() {
  const sectionRef = useRef(null);
  const { scrollYProgress: progress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const startOpacity = useTransform(progress, [0.28, 0.56], [1, 0]);
  const endOpacity = useTransform(progress, [0.4, 0.72], [0, 1]);
  const startY = useTransform(progress, [0, 0.56], [0, -35]);
  const endY = useTransform(progress, [0.4, 0.75], [35, 0]);

  return (
    <section ref={sectionRef} className="relative text-[#28243a]">
      <div className="relative h-[220vh]">
        <div className="sticky top-0 h-[100svh] min-h-[620px] overflow-hidden">
          <div className="absolute inset-[10px] overflow-hidden rounded-[22px] border border-violet-100 bg-[#fbfaff] sm:inset-5 sm:rounded-[30px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_44%,rgba(255,255,255,0.96),transparent_58%),radial-gradient(ellipse_at_10%_90%,rgba(211,196,255,0.45),transparent_42%),radial-gradient(ellipse_at_90%_15%,rgba(223,211,255,0.5),transparent_38%)]" />
            <motion.div style={{ y: startY, opacity: startOpacity }} className="absolute inset-x-5 top-[48%] z-20 -translate-y-1/2 text-center">
              <p className="mb-4 text-xs font-bold tracking-[0.24em] text-violet-600 sm:text-sm">A BETTER WAY TO BUILD</p>
              <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-6xl md:text-7xl">
                Big ideas deserve a thoughtful journey.
              </h2>
              <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-[#9589b5] sm:text-sm">SCROLL TO SEE HOW</p>
            </motion.div>
            <motion.div style={{ y: endY, opacity: endOpacity }} className="absolute inset-x-5 top-[13%] z-20 text-center">
              <h2 className="text-4xl font-bold tracking-[-0.055em] text-[#30274a] sm:text-6xl md:text-7xl">From first spark to lasting impact</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#665d7d] sm:text-xl">
                A clear, collaborative process turns ambitious ideas into products people love to use.
              </p>
            </motion.div>
            {steps.map((step, index) => (
              <JourneyCard key={step.label} step={step} index={index} progress={progress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
