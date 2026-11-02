import { motion, useReducedMotion } from "motion/react";
import { steps } from "../content.js";
import Reveal, { EASE } from "./Reveal.jsx";

export default function Steps() {
  const reduce = useReducedMotion();
  return (
    <section className="steps" id="como" aria-labelledby="steps-h">
      <div className="section-head">
        <Reveal as="h2" id="steps-h">
          {steps.title}
        </Reveal>
        <Reveal as="p" delay={0.08}>
          {steps.text}
        </Reveal>
      </div>
      <ol className="steps-list">
        {steps.items.map((s, n) => (
          <motion.li
            key={s.name}
            className="step"
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE, delay: n * 0.1 }}
            whileHover={reduce ? undefined : { y: -6 }}
          >
            <h3>{s.name}</h3>
            <p>{s.text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
