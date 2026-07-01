import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, resumeHref } from "../data/portfolio";
import { Magnetic } from "./magnetic";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 12);
      setIsHidden(currentScrollY > previousScrollY && currentScrollY > 120 && !isMenuOpen);
      previousScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <a className="skip-link" href="#about">
        Pular para o conteudo
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-40 px-6 transition duration-300 md:px-10 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${isScrolled ? "bg-[rgba(10,25,47,0.84)] shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] backdrop-blur-xl" : "bg-transparent"}`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between">
          <Magnetic>
            <a
              href="#hero"
              aria-label="Voltar para o inicio"
              className="group relative grid size-12 place-items-center text-[var(--accent)]"
            >
              <svg className="absolute inset-0 size-12 transition duration-300 group-hover:rotate-90" viewBox="0 0 100 100" aria-hidden="true">
                <polygon
                  points="50 5 89 27.5 89 72.5 50 95 11 72.5 11 27.5"
                  fill="rgba(100,255,218,0.04)"
                  stroke="currentColor"
                  strokeWidth="5"
                />
              </svg>
              <span className="relative font-mono text-lg font-semibold">G</span>
            </a>
          </Magnetic>

          <div className="hidden items-center gap-8 xl:flex">
            <nav className="flex items-center gap-8 font-mono text-[13px]">
              {navigation.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-1.5 text-[var(--text-primary)] transition hover:text-[var(--accent)]"
                >
                  <span className="text-[var(--accent)]">{String(index + 1).padStart(2, "0")}.</span>
                  <span className="text-[var(--text-secondary)] transition group-hover:text-[var(--accent)]">{item.label}</span>
                </a>
              ))}
            </nav>
            <Magnetic>
              <a
                href={resumeHref}
                download
                className="rounded-md border border-[var(--accent)] px-5 py-3 font-mono text-[13px] text-[var(--accent)] transition duration-300 hover:-translate-y-1 hover:bg-[rgba(100,255,218,0.1)]"
              >
                CV
              </a>
            </Magnetic>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            className="relative z-50 inline-flex size-11 items-center justify-center rounded-md border border-[rgba(100,255,218,0.24)] text-[var(--accent)] transition hover:bg-[rgba(100,255,218,0.08)] xl:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-30 bg-[rgba(2,12,27,0.72)] backdrop-blur-sm transition duration-300 xl:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-40 flex h-screen w-[min(82vw,24rem)] flex-col justify-center bg-[var(--secondary-background)] px-10 shadow-[-10px_0_30px_-15px_rgba(2,12,27,0.7)] transition duration-300 xl:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="grid gap-7 text-center font-mono">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group text-lg text-[var(--text-primary)] transition hover:text-[var(--accent)]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mb-2 block text-sm text-[var(--accent)]">{String(index + 1).padStart(2, "0")}.</span>
              {item.label}
            </a>
          ))}
          <a
            href={resumeHref}
            download
            className="mx-auto mt-4 inline-flex items-center gap-2 rounded-md border border-[var(--accent)] px-7 py-4 text-sm text-[var(--accent)] transition hover:bg-[rgba(100,255,218,0.1)]"
            onClick={() => setIsMenuOpen(false)}
          >
            <Download className="size-4" />
            Baixar currículo
          </a>
        </nav>
      </aside>
    </>
  );
}
