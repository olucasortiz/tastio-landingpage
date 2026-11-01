import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { heroSlides, nav, WA_DEMO } from "../content.js";
import { EASE } from "./Reveal.jsx";

const LETTERS = ["T", "A", "S", "T", "I", "O"];

export default function Hero() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  // Troca lenta de imagem: segura 5,5 s e cruza em 1,6 s. Pausa com a aba oculta.
  useEffect(() => {
    if (reduce) return undefined;
    let id;
    const start = () => {
      id = setInterval(() => setI((n) => (n + 1) % heroSlides.length), 5500);
    };
    const onVis = () => {
      clearInterval(id);
      if (!document.hidden) start();
    };
    start();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduce]);

  return (
    <section className="hero" id="topo">
      <header className="top">
        <a className="top-mark" href="#topo" aria-label="Tastio, início">
          Tastio
        </a>
        <nav aria-label="Principal" className="top-nav">
          {nav.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </header>

      <motion.div
        className="hero-object"
        data-ui
        initial={reduce ? false : { opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.1 }}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={heroSlides[i].src}
            src={heroSlides[i].src}
            alt={heroSlides[i].alt}
            width="1280"
            height="800"
            style={{ objectPosition: heroSlides[i].pos }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 1.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </motion.div>

      <h1 className="wordmark" aria-label="Tastio, sistemas para o seu negócio">
        <span className="wordmark-letters" aria-hidden="true">
          {LETTERS.map((l, n) => (
            <motion.span
              key={n}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.35 + n * 0.07 }}
            >
              {l}
            </motion.span>
          ))}
        </span>
      </h1>

      <motion.p
        className="hero-lead"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
      >
        Sistemas prontos para o seu balcão.
      </motion.p>

      <motion.div
        className="hero-row"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 1 }}
      >
        <span>Ordem de serviço com link para o cliente</span>
        <a className="btn" href={WA_DEMO} target="_blank" rel="noopener">
          Pedir demonstração
        </a>
        <span>Cardápio com pedidos pelo celular</span>
      </motion.div>
    </section>
  );
}
