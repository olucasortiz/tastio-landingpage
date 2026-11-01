import { useState } from "react";
import { contact, waLink } from "../content.js";
import Reveal from "./Reveal.jsx";

export default function Coupon() {
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nome = String(f.get("nome") || "").trim();
    const negocio = String(f.get("negocio") || "").trim();
    const sistema = String(f.get("sistema") || "");
    const msg = String(f.get("mensagem") || "").trim();
    if (!nome || !sistema) {
      setError("Preencha seu nome e escolha o sistema para continuar.");
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
        <form className="coupon-form" onSubmit={onSubmit} noValidate>
          <label className="sr" htmlFor="c-nome">Seu nome</label>
          <input id="c-nome" name="nome" placeholder="Seu nome" autoComplete="name" required />
          <label className="sr" htmlFor="c-negocio">Nome do negócio</label>
          <input id="c-negocio" name="negocio" placeholder="Nome do negócio" autoComplete="organization" />
          <label className="sr" htmlFor="c-sistema">Sistema</label>
          <select id="c-sistema" name="sistema" defaultValue="" required>
            <option value="" disabled>Qual sistema interessa</option>
            <option>Tastio Assistência</option>
            <option>Tastio Delivery</option>
            <option>Os dois</option>
          </select>
          <label className="sr" htmlFor="c-msg">Mensagem</label>
          <input id="c-msg" name="mensagem" placeholder="Algo que devemos saber (opcional)" />
          {error && (
            <p className="coupon-error" role="alert">
              {error}
            </p>
          )}
          <button className="coupon-submit" type="submit">
            Enviar pelo WhatsApp
          </button>
        </form>
      </Reveal>
    </section>
  );
}
