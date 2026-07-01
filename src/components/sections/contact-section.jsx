import { motion } from "framer-motion";
import { ArrowRight, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { contactLinks, personalInfo, resumeHref } from "../../data/portfolio";
import { Magnetic } from "../magnetic";
import { SectionShell } from "../section-shell";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const iconMap = {
  LinkedIn: Linkedin,
  Email: Mail,
  WhatsApp: Phone,
  Portfolio: Globe,
  "Resume PDF": ArrowRight,
};

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contato"
      title="Disponível para conversar sobre engenharia full stack, produtos internos e soluções corporativas."
      description="Os canais abaixo reúnem os principais pontos de contato para oportunidades, networking e conversas técnicas."
      className="pb-32"
    >
      <Card className="relative overflow-hidden p-8 md:p-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(100,255,218,0.14),transparent_40%,rgba(204,214,246,0.08))]" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-end">
          <div>
            <h3 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] md:text-4xl">
              Vamos construir experiências de software com impacto real, arquitetura consistente e foco no negócio.
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
              {personalInfo.subtitle}
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-[var(--text-secondary)]">
              <div className="flex items-center gap-3">
                <MapPin className="size-4 text-[var(--accent)]" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-[var(--accent)]" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-[var(--accent)]" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>
            <div className="mt-8">
              <Magnetic className="inline-flex">
                <Button asChild>
                  <a href={resumeHref} download>
                    Baixar currículo
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </Magnetic>
            </div>
          </div>
          <div className="grid gap-4">
            {contactLinks.map((item, index) => {
              const Icon = iconMap[item.label] ?? ArrowRight;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="glass-panel flex items-center justify-between rounded-[24px] border px-5 py-4 transition duration-300 hover:border-[rgba(100,255,218,0.24)] hover:bg-[rgba(17,34,64,0.88)]"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <div className="flex items-center gap-3 text-[var(--text-primary)]">
                    <Icon className="size-4 text-[var(--accent)]" />
                    <div>
                      <div>{item.label}</div>
                      {item.detail ? <div className="text-xs text-[var(--text-secondary)]">{item.detail}</div> : null}
                    </div>
                  </div>
                  <ArrowRight className="size-4 text-[var(--text-secondary)]" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </Card>
    </SectionShell>
  );
}