import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  { image: "/images/Hero15.png", label: "AI & Automation", angle: -14 },
  { image: "/images/Hero18.png", label: "Digital Products", angle: 9 },
  { image: "/images/Hero20.jpg", label: "Cloud Platforms", angle: -7 },
  { image: "/images/Hero21.png", label: "Web Experiences", angle: 13 },
];

function ProjectTile({ project, index, progress }) {
  const left = useTransform(progress, [0, 1], [`${50 + (index - 1.5) * 5}%`, `${13 + index * 25}%`]);
  const top = useTransform(progress, [0, 1], [`${46 + (index % 2) * 5}%`, "72%"]);
  const rotate = useTransform(progress, [0, 1], [project.angle, index % 2 === 0 ? -3 : 3]);
  const width = useTransform(progress, [0, 0.65, 1], ["clamp(170px, 24vw, 310px)", "clamp(170px, 24vw, 310px)", "clamp(150px, 22vw, 280px)"]);
  const height = useTransform(progress, [0, 0.65, 1], ["clamp(220px, 37vh, 390px)", "clamp(220px, 37vh, 390px)", "clamp(190px, 32vh, 340px)"]);

  return (
    <motion.article
      style={{ left, top, rotate, width, height, zIndex: 10 + index }}
      className="absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[24px] border border-white/80 bg-white shadow-[0_24px_65px_rgba(55,35,110,0.22)] sm:rounded-[32px]"
    >
      <img src={project.image} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#171126]/80 via-transparent to-transparent" />
      <p className="absolute bottom-5 left-5 text-sm font-semibold text-white sm:bottom-7 sm:left-7 sm:text-base">{project.label}</p>
    </motion.article>
  );
}

export default function ScrollMorphShowcase() {
  const sectionRef = useRef(null);
  const { scrollYProgress: progress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const introOpacity = useTransform(progress, [0.3, 0.58], [1, 0]);
  const finishOpacity = useTransform(progress, [0.42, 0.72], [0, 1]);
  const introY = useTransform(progress, [0, 0.58], [0, -30]);
  const finishY = useTransform(progress, [0.42, 0.75], [35, 0]);

  return (
    <section ref={sectionRef} className="relative text-[#28243a]">
      <div className="relative h-[220vh]">
        <div className="sticky top-0 h-[100svh] min-h-[620px] overflow-hidden">
          <div className="absolute inset-[10px] overflow-hidden rounded-[22px] border border-violet-100 bg-[#f5f1ff] sm:inset-5 sm:rounded-[30px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_52%_55%,rgba(255,255,255,0.9),transparent_40%),linear-gradient(135deg,#f4efff_0%,#fbfaff_48%,#eae2ff_100%)]" />
            <motion.div style={{ y: introY, opacity: introOpacity }} className="absolute inset-x-5 top-[20%] z-20 text-center">
              <p className="mb-4 text-xs font-bold tracking-[0.24em] text-violet-600 sm:text-sm">MADE FOR WHAT'S NEXT</p>
              <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-6xl md:text-7xl">
                Technology should feel effortless.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#665d7d] sm:text-xl">
                Thoughtful digital experiences connect people, ideas, and opportunity.
              </p>
            </motion.div>
            <motion.div style={{ y: finishY, opacity: finishOpacity }} className="absolute inset-x-5 top-[13%] z-20 text-center">
              <h2 className="text-4xl font-bold tracking-[-0.055em] text-[#30274a] sm:text-6xl md:text-7xl">Built around your ambition</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#665d7d] sm:text-xl">
                From AI-powered tools to resilient cloud platforms, we shape technology around real goals.
              </p>
            </motion.div>
            {projects.map((project, index) => (
              <ProjectTile key={project.label} project={project} index={index} progress={progress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
