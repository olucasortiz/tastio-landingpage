import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { tagline } from "../content.js";
import Reveal from "./Reveal.jsx";

// Cada palavra passa do cinza (--muted) para o preto conforme a rolagem avança.
function Word({ children, progress, range, reduce }) {
  const color = useTransform(progress, range, ["#555555", "#000000"]);
  return (
    <motion.span style={reduce ? undefined : { color }} className="tagline-word">
      {children}{" "}
    </motion.span>
  );
}

export default function Tagline() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });
  const words = tagline.text.split(" ");

  return (
    <section className="tagline" aria-labelledby="tagline-h">
      <Reveal as="h2" id="tagline-h" className="tagline-title">
        {tagline.title}
      </Reveal>
      <p className="tagline-text" ref={ref}>
        {words.map((w, n) => {
          const a = n / words.length;
          const b = Math.min(1, a + 1.5 / words.length);
          return (
            <Word key={n} progress={scrollYProgress} range={[a, b]} reduce={reduce}>
              {w}
            </Word>
          );
        })}
      </p>
    </section>
  );
}
