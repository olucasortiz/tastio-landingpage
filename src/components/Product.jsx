import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import Reveal, { EASE } from "./Reveal.jsx";

export default function Product({ data, field, custom: Custom, actions, strip }) {
  const [tab, setTab] = useState(0);
  const [auto, setAuto] = useState(true);
  const stageRef = useRef(null);
  const visible = useInView(stageRef, { amount: 0.4 });
  const reduce = useReducedMotion();
  const current = data.tabs[tab];

  // A demonstração desenhada anda sozinha enquanto está na tela, até alguém clicar.
  useEffect(() => {
    if (!Custom || !auto || !visible || reduce) return undefined;
    const id = setInterval(() => setTab((n) => (n + 1) % data.tabs.length), 3800);
    return () => clearInterval(id);
  }, [Custom, auto, visible, reduce, data.tabs.length]);

  const pick = (n) => {
    setAuto(false);
    setTab(n);
  };

  const onKey = (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const d = e.key === "ArrowRight" ? 1 : -1;
    const n = (tab + d + data.tabs.length) % data.tabs.length;
    pick(n);
    document.getElementById(`${data.id}-tab-${n}`)?.focus();
  };

  return (
    <section
      className={`product product-${field}`}
      id={data.id}
      aria-labelledby={`${data.id}-h`}
    >
      <div className="product-visual">
        <div
          className={`product-stage${!Custom && current.portrait ? " is-portrait" : ""}`}
          ref={stageRef}
          role="tabpanel"
          id={`${data.id}-panel`}
          aria-labelledby={`${data.id}-tab-${tab}`}
        >
          {Custom ? (
            <Custom tab={tab} />
          ) : (
            <AnimatePresence initial={false}>
              <motion.img
                key={current.id}
                src={current.src}
                alt={current.alt}
                width={current.portrait ? 390 : 1280}
                height={current.portrait ? 844 : 800}
                loading="lazy"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.7, ease: EASE }}
              />
            </AnimatePresence>
          )}
        </div>
        <div className="tabs" role="tablist" aria-label={`Telas de ${data.title}`} onKeyDown={onKey}>
          {data.tabs.map((t, n) => (
            <button
              key={t.id}
              role="tab"
              id={`${data.id}-tab-${n}`}
              aria-selected={tab === n}
              aria-controls={`${data.id}-panel`}
              tabIndex={tab === n ? 0 : -1}
              className="tab"
              onClick={() => pick(n)}
              type="button"
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="product-cluster">
        <Reveal as="h2" id={`${data.id}-h`}>
          {data.title}
        </Reveal>
        <Reveal as="p" delay={0.08} className="product-text">
          {data.text}
        </Reveal>
        <ul className="ingredients">
          {data.ingredients.map((t, n) => (
            <Reveal as="li" key={t} delay={0.12 + n * 0.06} y={16}>
              {t}
            </Reveal>
          ))}
        </ul>
        <Reveal className="product-actions" delay={0.2}>
          {actions.map((a) => (
            <a
              key={a.label}
              className={a.primary ? "btn btn-dark" : "btn-text"}
              href={a.href}
              target="_blank"
              rel="noopener"
            >
              {a.label}
            </a>
          ))}
        </Reveal>
      </div>

      {strip && (
        <div className="strip" aria-label={`Mais telas de ${data.title}`}>
          <div className="strip-track">
            {[...strip, ...strip].map((s, n) => (
              <img
                key={n}
                src={s.src}
                alt={n < strip.length ? s.alt : ""}
                aria-hidden={n >= strip.length}
                width={s.w}
                height={s.h}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
