import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, MapPin, Sparkles } from "lucide-react";

const AboutHero = () => (
  <section className="relative isolate overflow-hidden px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-20 lg:px-12">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_35%,rgba(178,148,255,0.25),transparent_34rem),radial-gradient(ellipse_at_18%_70%,rgba(218,205,255,0.3),transparent_36rem)]" />
    <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-violet-700 shadow-sm shadow-violet-950/5"><Sparkles size={14} /> ABOUT LAKSHYA</div>
        <h1 className="max-w-3xl text-5xl font-bold leading-[1.04] tracking-[-0.06em] text-[#28243a] sm:text-6xl lg:text-7xl">
          I turn complex ideas into{" "}
          <span className="bg-gradient-to-r from-violet-700 via-violet-500 to-indigo-500 bg-clip-text text-transparent">software that works.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          I’m Lakshya, a full-stack developer who enjoys taking a product from its first sketch to a dependable, production-ready system. My background is in mechanical engineering; my work today spans web platforms, cloud infrastructure, and applied AI.
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500"><MapPin size={16} className="text-violet-600" /> Jaipur, India <span className="mx-1 h-1 w-1 rounded-full bg-violet-300" /><span>Available for interesting projects</span></div>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#experience" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2">Explore my experience <ArrowDown size={17} /></a>
          <a href="mailto:lakshyagoyal34@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-white/75 px-6 py-3.5 font-semibold text-violet-800 transition hover:border-violet-400 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500">Get in touch <ArrowUpRight size={17} /></a>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
          <a className="transition hover:text-violet-700" href="https://www.linkedin.com/in/lakshyagoyal34" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="transition hover:text-violet-700" href="https://github.com/LakshyaG34" target="_blank" rel="noreferrer">GitHub ↗</a>
          <span className="inline-flex items-center gap-1.5"><Code2 size={15} className="text-violet-600" /> Full-stack development</span>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }} className="relative mx-auto w-full max-w-[540px] pb-10 pl-4 sm:pl-8">
        <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-violet-300/45 via-fuchsia-200/35 to-indigo-200/45 blur-2xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-2.5 shadow-[0_30px_80px_rgba(76,49,139,0.2)] sm:p-3">
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-[1.5rem] bg-violet-100">
            <img src="/images/me.jpg" alt="Lakshya Goyal" className="h-full w-full object-cover object-[center_35%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201638]/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7"><p className="text-xs font-semibold tracking-[0.2em] text-white/75">BUILDER · PROBLEM SOLVER</p><p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Lakshya Goyal</p></div>
          </div>
        </div>
        <motion.div animate={{ y: [0, -7, 0], rotate: [-2, -1, -2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-1 bottom-0 w-[78%] rounded-2xl border border-white/15 bg-[#201b31]/95 p-4 text-white shadow-2xl shadow-violet-950/30 backdrop-blur-xl sm:-left-5 sm:p-5">
          <div className="mb-3 flex items-center gap-1.5" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-rose-400" /><span className="h-2 w-2 rounded-full bg-amber-300" /><span className="h-2 w-2 rounded-full bg-emerald-400" /><span className="ml-auto text-[10px] tracking-wide text-white/45">building.js</span></div>
          <pre className="overflow-hidden text-[10px] leading-[1.65] text-violet-100 sm:text-xs"><code><span className="text-fuchsia-300">const</span> impact = <span className="text-sky-300">async</span> (idea) =&gt; {"{"}<br />  <span className="text-fuchsia-300">return</span> design(idea)<br />    .build()<br />    .ship(<span className="text-emerald-300">"production"</span>);<br />{"}"};</code></pre>
        </motion.div>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-1 top-8 rounded-2xl border border-violet-100 bg-white/90 px-4 py-3 shadow-xl shadow-violet-950/10 backdrop-blur sm:-right-5 sm:top-12 sm:px-5 sm:py-4">
          <p className="text-[10px] font-bold tracking-[0.18em] text-violet-600">RECENTLY BUILDING</p><p className="mt-1 text-sm font-semibold text-[#30274a] sm:text-base">Platforms · Cloud · AI</p>
        </motion.div>
      </motion.div>
    </div>
    <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
      {[
        ["4+", "production projects"],
        ["60%", "faster content loads"],
        ["80%", "warehouse efficiency improvement"],
      ].map(([value, label]) => <div key={label} className="rounded-2xl border border-violet-100/80 bg-white/65 px-5 py-4 text-center shadow-sm shadow-violet-950/5 sm:text-left"><span className="text-2xl font-bold tracking-tight text-violet-700">{value}</span><span className="ml-2 text-sm font-medium text-slate-600">{label}</span></div>)}
    </div>
  </section>
);

export default AboutHero;
