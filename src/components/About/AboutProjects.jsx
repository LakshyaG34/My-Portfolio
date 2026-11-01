import { motion } from "framer-motion";
import { Boxes, BrainCircuit, Warehouse } from "lucide-react";

const projects = [
  {
    icon: Boxes,
    number: "01",
    title: "Drag-and-drop website builder",
    type: "Visual editor · SaaS platform",
    description: "A no-code website creation and publishing system with template previews, a component-based editor, and customer-specific domains.",
    outcomes: ["Core editor shipped in four months", "S3 + CloudFront publishing pipeline", "Custom domains through Cloudflare Workers"],
    stack: ["React", "GrapesJS", "Redux", "Express", "MySQL", "AWS", "Cloudflare"],
  },
  {
    icon: Warehouse,
    number: "02",
    title: "Multi-tenant warehouse platform",
    type: "Operations · AI workflows",
    description: "A warehouse management system digitizing receiving, dispatch, inventory, logistics, reporting, and operational history for multiple companies.",
    outcomes: ["6+ warehouse workflows", "80% less manual process effort", "Gemini agent with 20+ domain tools"],
    stack: ["React", "Redux", "Express", "MySQL", "AWS", "Gemini", "Qdrant"],
  },
];

export default function AboutProjects() {
  return (
    <section className="relative overflow-hidden bg-[#211a32] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(129,82,255,0.25),transparent_32rem),radial-gradient(ellipse_at_5%_90%,rgba(91,59,164,0.22),transparent_34rem)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="mb-12 max-w-3xl">
          <p className="text-sm font-bold tracking-[0.2em] text-violet-300">SELECTED WORK</p>
          <h2 className="mt-3 text-4xl font-bold tracking-[-0.05em] sm:text-5xl">Systems with a job to do.</h2>
          <p className="mt-4 text-lg leading-8 text-white/65">I like building useful software where product thinking, engineering, and operations meet.</p>
        </motion.div>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article key={project.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.1 }} whileHover={{ y: -5 }} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/20 text-violet-200"><Icon size={23} /></span>
                  <span className="font-mono text-sm text-white/35">{project.number}</span>
                </div>
                <p className="mt-7 text-xs font-bold tracking-[0.16em] text-violet-300">{project.type}</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h3>
                <p className="mt-4 leading-7 text-white/65">{project.description}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {project.outcomes.map((outcome) => <div key={outcome} className="rounded-xl border border-white/10 bg-black/10 p-3 text-sm leading-5 text-white/80"><span className="mb-2 block h-1 w-7 rounded-full bg-violet-400" />{outcome}</div>)}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((technology) => <span key={technology} className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-white/65">{technology}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>
        <div className="mt-6 flex items-center gap-2 text-sm text-white/45"><BrainCircuit size={16} className="text-violet-300" />AI features use confirmation-aware workflows and tenant-scoped data.</div>
      </div>
    </section>
  );
}
