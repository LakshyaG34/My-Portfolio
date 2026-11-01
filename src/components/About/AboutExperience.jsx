import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

const roles = [
  {
    company: "Aaklan EduTech",
    role: "Full-Stack Developer · Freelance Contract",
    period: "Jun 2026 – Sep 2026",
    location: "Jaipur, India",
    summary: "Designed and developed a full-stack CRM platform from the ground up, bringing Admin, HR, Employees, Colleges, and Students into one workflow.",
    points: [
      "Built role-based access control and dedicated workflows for each user group.",
      "Helped increase company productivity by more than 50% through workflow digitization.",
    ],
    latest: true,
  },
  {
    company: "FunctionX Technologies",
    role: "Full-Stack Developer Intern",
    period: "Oct 2025 – May 2026",
    location: "Remote",
    summary: "Selected on the first day to lead development of a Wix-like drag-and-drop website builder for a SaaS client, delivering the core editor within a four-month deadline.",
    points: [
      "Migrated content delivery to AWS S3 URIs, improving load time by 60%.",
      "Independently built a warehouse management system and contributed to three other production projects.",
      "Worked directly with the CTO and client on frontend architecture, optimization, and feature delivery.",
    ],
  },
];

export default function AboutExperience() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }} className="mb-12 max-w-2xl">
          <p className="text-sm font-bold tracking-[0.2em] text-violet-600">THE WORK SO FAR</p>
          <h2 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-[#28243a] sm:text-5xl">Experience built by doing.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">Small teams, real users, and the responsibility to make the whole system work.</p>
        </motion.div>
        <div className="relative space-y-5 before:absolute before:bottom-8 before:left-[15px] before:top-8 before:w-px before:bg-violet-200 sm:before:left-[21px]">
          {roles.map((role, index) => (
            <motion.article key={role.company} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.12 }} className="relative ml-10 rounded-3xl border border-violet-100 bg-white/75 p-6 shadow-[0_16px_45px_rgba(65,45,110,0.06)] sm:ml-14 sm:p-8">
              <span className="absolute -left-[39px] top-8 grid h-8 w-8 place-items-center rounded-full border-4 border-[#f8f7fc] bg-violet-600 text-white shadow sm:-left-[51px] sm:h-11 sm:w-11"><BriefcaseBusiness size={16} /></span>
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <p className="text-xs font-bold tracking-[0.15em] text-violet-600">{role.period}</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#30274a]">{role.company}</h3>
                  <p className="mt-1 font-medium text-slate-600">{role.role} <span className="text-slate-400">· {role.location}</span></p>
                </div>
                {role.latest && <span className="w-fit rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">LATEST</span>}
              </div>
              <p className="mt-5 max-w-4xl leading-7 text-slate-600">{role.summary}</p>
              <ul className="mt-4 space-y-2.5">
                {role.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />{point}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
