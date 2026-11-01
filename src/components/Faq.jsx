import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faq } from "../content.js";
import Reveal, { EASE } from "./Reveal.jsx";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq" id="duvidas" aria-labelledby="faq-h">
      <Reveal as="h2" id="faq-h">
        {faq.title}
      </Reveal>
      <div className="faq-stack">
        {faq.items.map((it, i) => (
          <Reveal
            key={it.q}
            delay={i * 0.06}
            y={20}
            className={`faq-card faq-c${i % 3}${open === i ? " is-open" : ""}`}
            style={{ "--i": i }}
          >
            <span className="faq-tab">{it.tab}</span>
            <button
              type="button"
              className="faq-q"
              aria-expanded={open === i}
              aria-controls={`faq-a-${i}`}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              {it.q}
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  id={`faq-a-${i}`}
                  className="faq-a"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <p>{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
