import { motion } from "framer-motion";
import { hardSkillCategories, softSkillCategories } from "../../data/portfolio";
import { SectionShell } from "../section-shell";
import { Card } from "../ui/card";

function SkillGrid({ title, categories, baseDelay = 0 }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">{title}</h3>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: baseDelay + index * 0.06 }}
          >
            <Card className="group h-full">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">{category.title}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-2xl border border-[rgba(136,146,176,0.14)] bg-[rgba(10,25,47,0.7)] px-4 py-3 text-sm text-[var(--text-secondary)] transition duration-300 group-hover:border-[rgba(100,255,218,0.2)] group-hover:text-[var(--text-primary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Habilidades"
      title="Competências"
      description=""
    >
      <div className="space-y-12">
        <SkillGrid title="Hard skills" categories={hardSkillCategories} />
        <SkillGrid title="Soft skills" categories={softSkillCategories} baseDelay={0.08} />
      </div>
    </SectionShell>
  );
}