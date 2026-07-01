import { motion } from "framer-motion";
import { differentials } from "../../data/portfolio";
import { SectionShell } from "../section-shell";
import { Card } from "../ui/card";

function DifferentialCard({ title, description }) {
  return (
    <Card className="h-full">
      <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">Diferencial</p>
      <p className="mt-5 text-2xl font-semibold tracking-[-0.05em] text-[var(--text-primary)]">{title}</p>
      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{description}</p>
    </Card>
  );
}

export function GitHubStatsSection() {
  return (
    <SectionShell
      id="stats"
      eyebrow="Diferenciais"
      title="Pontos que reforcam ownership, lideranca tecnica e impacto de negocio."
      description="Mais do que stack, o perfil combina atuacao end-to-end, proximidade com stakeholders, foco em eficiencia operacional e visao arquitetural aplicada a sistemas corporativos."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {differentials.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
          >
            <DifferentialCard {...item} />
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}