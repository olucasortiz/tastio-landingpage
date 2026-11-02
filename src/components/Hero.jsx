import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";
import { nav, WA_DEMO } from "../content.js";
import { EASE } from "./Reveal.jsx";
import HeroArt from "./HeroArt.jsx";

const WORDS = ["Sistemas", "prontos", "para", "o", "seu", "negócio"];
const TICKER = ["Assistência técnica", "Delivery", "Mais sistemas a caminho"];

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE, delay },
  });

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
        <a className="btn btn-small" href={WA_DEMO} target="_blank" rel="noopener">
          Pedir demonstração
        </a>
      </header>

      <div className="hero-grid">
        <div className="hero-copy">
          <h1>
            {WORDS.map((w, n) => (
              <Fragment key={w + n}>
                <span className="hw">
                  <motion.span
                    initial={reduce ? false : { y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.1 + n * 0.07 }}
                  >
                    {w}
                  </motion.span>
                </span>{" "}
              </Fragment>
            ))}
          </h1>
          <motion.p {...rise(0.6)}>
            Assistência técnica, delivery e o que vem a seguir. Cada sistema abre no navegador,
            sem instalar nada.
          </motion.p>
          <motion.div className="hero-actions" {...rise(0.75)}>
            <a className="btn" href="#sistemas">
              Ver os sistemas
            </a>
            <a className="btn-text" href="#como">
              Como pedir
            </a>
          </motion.div>
        </div>

        <HeroArt />
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, n) => (
            <span key={n}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
