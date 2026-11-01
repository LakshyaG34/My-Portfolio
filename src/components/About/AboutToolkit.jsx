import { motion } from "framer-motion";
import { Braces, Cloud, Database, Layers3, Wrench } from "lucide-react";

const groups = [
  { icon: Braces, title: "Languages", items: ["JavaScript", "TypeScript", "Go", "C++", "SQL"] },
  { icon: Layers3, title: "Frameworks", items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"] },
  { icon: Database, title: "Data", items: ["MySQL", "PostgreSQL", "MongoDB", "Qdrant"] },
  { icon: Cloud, title: "Cloud & AI", items: ["AWS", "S3", "CloudFront", "Gemini API", "OpenAI API"] },
  { icon: Wrench, title: "Tools", items: ["Docker", "Git", "Cloudflare", "Redux"] },
];

export default function AboutToolkit() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }}>
          <p className="text-sm font-bold tracking-[0.2em] text-violet-600">THE TOOLKIT</p>
          <h2 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-[#28243a] sm:text-5xl">Practical tools. Solid foundations.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">I choose technology to fit the problem, then focus on making the whole product reliable, understandable, and easy to evolve.</p>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06, duration: 0.45 }} className="rounded-2xl border border-violet-100 bg-white/70 p-5 shadow-sm shadow-violet-950/5">
                <div className="flex items-center gap-2.5 text-violet-700"><Icon size={18} /><h3 className="font-semibold text-[#30274a]">{group.title}</h3></div>
                <div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-lg bg-violet-50 px-2.5 py-1.5 text-xs font-medium text-violet-800">{item}</span>)}</div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
