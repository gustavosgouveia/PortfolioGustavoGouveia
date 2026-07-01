import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { featuredProject } from "../../data/portfolio";
import { useCountUp } from "../../hooks/use-count-up";
import { Card } from "../ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ImpactMetricValue({ value, animate = false }) {
  const valueRef = useRef(null);
  const isInView = useInView(valueRef, { once: true, amount: 0.7 });
  const count = useCountUp(40, animate && isInView, 1400);

  return (
    <p ref={valueRef} className="text-2xl font-bold text-slate-100">
      {animate ? `${count}%` : value}
    </p>
  );
}

export function FeaturedProjectSection() {
  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-teal-300">
            {featuredProject.eyebrow}
          </p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            {featuredProject.headline}
          </h2>

          <div className="mt-6 h-px w-28 bg-[linear-gradient(to_right,rgba(45,212,191,0.9),rgba(45,212,191,0.12),transparent)]" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.05 }}
          >
            <Card className="h-full border border-cyan-500/15 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:p-10">
              <div className="mb-8">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-teal-300">
                  {featuredProject.name}
                </p>

                <h3 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                  {featuredProject.fullName}
                </h3>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                  {featuredProject.caseIntro}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-700/70 bg-slate-950/45 p-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-teal-300">
                    O desafio
                  </p>

                  <p className="text-sm leading-7 text-slate-400">
                    {featuredProject.challenge}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-700/70 bg-slate-950/45 p-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-teal-300">
                    A solução
                  </p>

                  <p className="text-sm leading-7 text-slate-400">
                    {featuredProject.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-teal-300">
                  Minha atuação
                </p>

                <p className="text-sm leading-7 text-slate-300">
                  {featuredProject.ownership}
                </p>
              </div>

              <div className="mt-8">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-300">
                  Principais entregas
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {featuredProject.deliveries.map((item) => (
                    <div
                      key={item.title}
                      className="flex min-h-[4rem] items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-950/40 p-4 text-center transition duration-300 hover:border-teal-300/40 hover:bg-teal-300/5"
                    >
                      <p className="max-w-[30ch] text-sm font-semibold leading-6 text-slate-100 sm:text-base">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-teal-300/20 bg-slate-950/50 p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-teal-300">
                  Impacto gerado
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {featuredProject.impactMetrics.map((metric, index) => (
                    <div key={metric.value}>
                      <ImpactMetricValue value={metric.value} animate={index === 0} />

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <Card className="relative overflow-hidden border border-cyan-500/15 bg-slate-950/70 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.14),transparent_35%)]" />

              <div className="relative rounded-3xl border border-slate-700/70 bg-slate-900/80 p-5">
                <div className="mb-6 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <div className="mt-4 rounded-2xl border border-cyan-500/20 bg-slate-950/45 p-5">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-teal-300">
                    {featuredProject.panel.integrationsTitle}
                  </p>

                  <div className="grid grid-cols-2 gap-2 xl:grid-cols-3">
                    {featuredProject.panel.integrations.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-800/80 bg-slate-900/80 px-3 py-2 text-center text-[11px] font-medium leading-4 text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-teal-300/20 bg-teal-300/5 p-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-teal-300">
                    Papel no projeto
                  </p>

                  <p className="text-sm leading-7 text-slate-300">
                    {featuredProject.panel.message}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-teal-300">
                    Registros do projeto
                  </p>

                  <div className="space-y-5">
                    {featuredProject.projectImages.map((image) => (
                      <div
                        key={image.src}
                        className="group relative h-[34rem] overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-950/60 shadow-xl shadow-cyan-950/20"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-300">
                            {image.label}
                          </p>

                          <p className="mt-2 text-sm leading-6 text-slate-200">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}