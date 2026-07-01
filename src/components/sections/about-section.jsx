import { motion } from "framer-motion";
import { aboutContent, technologyBadges } from "../../data/portfolio";
import { SectionShell } from "../section-shell";
import { Badge } from "../ui/badge";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="Sobre mim"
      title={aboutContent.title}
      description={aboutContent.description}
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>{aboutContent.paragraphs[0]}</p>
            <p>{aboutContent.paragraphs[1]}</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {technologyBadges.map((item) => (
              <Badge
                key={item}
                className="border border-teal-300/30 bg-teal-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300"
              >
                {item}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-400/20 via-cyan-500/10 to-blue-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-slate-900/70 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_35%)]" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-700/70 bg-slate-950/70">
              <img
                src="/fotoperfilmn.png"
                alt="Foto de perfil de Gustavo Gouveia"
                className="aspect-[4/5] h-full w-full object-cover object-center"
                loading="lazy"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6">               
                
              </div>
            </div>

           
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}