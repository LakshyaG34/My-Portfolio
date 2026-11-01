import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap } from "lucide-react";

export default function AboutEducation() {
  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-[2rem] border border-violet-100 bg-gradient-to-br from-white/90 via-[#f7f3ff] to-violet-100/80 p-7 shadow-[0_24px_70px_rgba(70,48,125,0.08)] sm:p-10 lg:flex-row lg:items-center lg:p-14">
        <div className="flex items-start gap-5">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-600/20"><GraduationCap size={27} /></span>
          <div>
            <p className="text-sm font-bold tracking-[0.18em] text-violet-600">EDUCATION</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#30274a] sm:text-3xl">National Institute of Technology, Kurukshetra</h2>
            <p className="mt-2 text-slate-600">Bachelor of Technology · Mechanical Engineering</p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center">
          <span className="text-sm font-semibold text-slate-500">Aug 2021 — Jun 2025</span>
          <a href="https://www.linkedin.com/in/lakshyagoyal34" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700">Connect with me <ArrowUpRight size={17} /></a>
        </div>
      </motion.div>
    </section>
  );
}
