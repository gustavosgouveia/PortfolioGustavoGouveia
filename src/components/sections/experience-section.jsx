import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { experiences } from "../../data/portfolio";
import { SectionShell } from "../section-shell";
import { Card } from "../ui/card";

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="02. Experiência"
      title=""
      description=""
      viewport={{ once: true, amount: 0.02 }}
    >
      <div className="relative space-y-8 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-[linear-gradient(to_bottom,rgba(100,255,218,0.7),rgba(136,146,176,0.1))] md:before:left-1/2 md:before:-translate-x-1/2">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            className="relative grid gap-6 md:grid-cols-2 md:items-start"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <div className={index % 2 === 0 ? "md:pr-10" : "md:order-2 md:pl-10"}>
              <Card className="group relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(100,255,218,0.6),transparent)]" />
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[rgba(100,255,218,0.12)] text-[var(--accent)]">
                    <BriefcaseBusiness className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]">{experience.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">{experience.company}</h3>
                    <p className="text-[var(--text-secondary)]">{experience.role}</p>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">{experience.location}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-[var(--text-secondary)]">{experience.description}</p>
                {experience.summary ? (
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{experience.summary}</p>
                ) : null}
                {experience.results?.length ? (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Principais resultados</p>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                      {experience.results.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 size-1.5 rounded-full bg-[var(--accent)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className="mt-6">
                  <ul className="mt-3 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                   
                  </ul>
                </div>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{experience.topicsTitle || "Tecnologias e ferramentas"}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {experience.technologies.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[rgba(136,146,176,0.14)] bg-[rgba(10,25,47,0.76)] px-3 py-1 text-xs text-[var(--accent)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="mt-6 hidden space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                  {experience.responsibilities.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 size-1.5 rounded-full bg-[var(--accent)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            <div className="relative hidden h-full md:block">
              <motion.div
                className="absolute left-1/2 top-10 z-10 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(100,255,218,0.45)] bg-[var(--background)] shadow-[0_0_28px_rgba(100,255,218,0.25)]"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <span className="size-2 rounded-full bg-[var(--accent)]" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}