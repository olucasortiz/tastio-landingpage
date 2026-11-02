import { useState } from "react";
import { contact, waLink } from "../content.js";
import { motion, useReducedMotion } from "motion/react";
import Reveal, { EASE } from "./Reveal.jsx";

const list = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } };
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Coupon() {
  const [error, setError] = useState("");
  const [shake, setShake] = useState(0);
  const reduce = useReducedMotion();

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nome = String(f.get("nome") || "").trim();
    const negocio = String(f.get("negocio") || "").trim();
    const sistema = String(f.get("sistema") || "");
    const msg = String(f.get("mensagem") || "").trim();
    if (!nome || !sistema) {
      setError("Preencha seu nome e escolha o sistema para continuar.");
      setShake((n) => n + 1);
      return;
    }
    setError("");
    const texto =
      `Olá! Sou ${nome}${negocio ? `, do negócio ${negocio}` : ""}. ` +
      `Quero ver uma demonstração: ${sistema}.` +
      (msg ? ` ${msg}` : "");
    window.open(waLink(texto), "_blank", "noopener");
  };

  return (
    <section className="contact" id="contato" aria-labelledby="contact-h">
      <Reveal className="coupon">
        <div className="coupon-side">
          <h2 id="contact-h">{contact.title}</h2>
          <p>{contact.text}</p>
        </div>
        <motion.form
          className="coupon-form"
          onSubmit={onSubmit}
          noValidate
          variants={reduce ? undefined : list}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        >
          <label className="sr" htmlFor="c-nome">Seu nome</label>
          <motion.input variants={reduce ? undefined : item} id="c-nome" name="nome" placeholder="Seu nome" autoComplete="name" required />
          <label className="sr" htmlFor="c-negocio">Nome do negócio</label>
          <motion.input variants={reduce ? undefined : item} id="c-negocio" name="negocio" placeholder="Nome do negócio" autoComplete="organization" />
          <motion.fieldset className="choices" variants={reduce ? undefined : item}>
            <legend>Qual sistema interessa?</legend>
            {["Tastio Assistência Técnica", "Tastio Delivery", "Os dois"].map((o) => (
              <label className="choice" key={o}>
                <input type="radio" name="sistema" value={o} />
                <span>{o}</span>
              </label>
            ))}
          </motion.fieldset>
          <label className="sr" htmlFor="c-msg">Mensagem</label>
          <motion.input variants={reduce ? undefined : item} id="c-msg" name="mensagem" placeholder="Algo que devemos saber (opcional)" />
          {error && (
            <motion.p
              key={shake}
              className="coupon-error"
              role="alert"
              animate={reduce ? undefined : { x: [0, -8, 8, -5, 5, 0] }}
              transition={{ duration: 0.45 }}
            >
              {error}
            </motion.p>
          )}
          <motion.button className="coupon-submit" type="submit" variants={reduce ? undefined : item}>
            Enviar pelo WhatsApp
          </motion.button>
        </motion.form>
      </Reveal>
    </section>
  );
}
