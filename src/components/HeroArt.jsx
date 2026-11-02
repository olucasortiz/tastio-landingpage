import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE } from "./Reveal.jsx";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const Wrench = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
    <path d="M30 8a9 9 0 0 0-8.5 12L8 33.5a4 4 0 0 0 5.5 5.5L27 25.5A9 9 0 0 0 39 17l-6 3-4-1-1-4 3-6a9 9 0 0 0-1-1z" />
  </svg>
);
const Bag = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
    <path d="M10 16h28l-2 24H12z" />
    <path d="M17 20v-4a7 7 0 0 1 14 0v4" />
  </svg>
);
const Plus = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
    <path d="M24 10v28M10 24h28" />
  </svg>
);
const Down = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={2}>
    <path d="M12 5v14m-6-6 6 6 6-6" />
  </svg>
);

const TILES = [
  { cls: "ha-a", label: "Assistência técnica", Icon: Wrench, spin: [0, -14, 0] },
  { cls: "ha-b", label: "Delivery", Icon: Bag, y: [0, -6, 0] },
  { cls: "ha-c", label: "Mais a caminho", Icon: Plus, spin: [0, 90, 90, 0] },
];

export default function HeroArt() {
  const reduce = useReducedMotion();
  const [on, setOn] = useState(0);
  // Um bloco aceso por vez, em sequência, para guiar o olhar para baixo.
  useEffect(() => {
    if (reduce) return undefined;
    const id = setInterval(() => setOn((n) => (n + 1) % TILES.length), 2200);
    return () => clearInterval(id);
  }, [reduce]);
  return (
    <div className="hero-art">
      {TILES.map(({ cls, label, Icon, spin, y }, n) => (
        <motion.a
          key={cls}
          href="#sistemas"
          className={`ha ${cls}`}
          aria-label={`${label}: ver no próximo bloco`}
          initial={reduce ? false : { opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: reduce || on === n ? 1 : 0.45, y: 0, scale: !reduce && on === n ? 1.02 : 1 }}
          transition={{
            opacity: { duration: 0.7, ease: EASE },
            scale: { duration: 0.7, ease: EASE },
            y: { duration: 0.9, ease: EASE, delay: 0.35 + n * 0.14 },
          }}
          whileHover={reduce ? undefined : { y: -4 }}
        >
          <motion.span
            className="ha-icon"
            animate={reduce ? undefined : { rotate: spin, y }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: n * 0.6 }}
          >
            <Icon />
          </motion.span>
          <span className="ha-foot">
            <b>{label}</b>
            <motion.span
              className="ha-down"
              animate={reduce ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: n * 0.25 }}
            >
              <Down />
            </motion.span>
          </span>
        </motion.a>
      ))}
    </div>
  );
}
