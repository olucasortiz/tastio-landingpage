import { motion, useReducedMotion } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1];

/** Entrada única ao aparecer na tela: sobe 24px e surge. */
export default function Reveal({
  as = "div",
  delay = 0,
  y = 24,
  className,
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
