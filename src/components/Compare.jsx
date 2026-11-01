import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { compare } from "../content.js";
import Reveal from "./Reveal.jsx";

function Specimen({ word, caption, progress, from, reduce, inverse }) {
  const y = useTransform(progress, [0, 1], reduce ? [0, 0] : from);
  return (
    <figure className={`specimen${inverse ? " specimen-inverse" : ""}`}>
      <div className="specimen-box">
        <motion.span className="specimen-word" style={{ y }}>
          {word}
        </motion.span>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function Compare() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section className="compare" aria-labelledby="compare-h" ref={ref}>
      <div className="compare-head">
        <Reveal as="h2" id="compare-h">
          {compare.title}
        </Reveal>
        <Reveal as="p" delay={0.08}>
          {compare.text}
        </Reveal>
      </div>
      <div className="compare-specimens">
        <Specimen
          word={compare.before.word}
          caption={compare.before.caption}
          progress={scrollYProgress}
          from={[20, -16]}
          reduce={reduce}
        />
        <Specimen
          word={compare.after.word}
          caption={compare.after.caption}
          progress={scrollYProgress}
          from={[24, -8]}
          reduce={reduce}
          inverse
        />
      </div>
    </section>
  );
}
