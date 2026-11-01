import { EMAIL, WHATS, WHATS_LABEL, DEMO_ASSISTENCIA } from "../content.js";
import Reveal from "./Reveal.jsx";

export default function Footer() {
  const [user, domain] = EMAIL.split("@");
  return (
    <footer className="footer" aria-labelledby="footer-h">
      <div className="footer-top">
        <p>Sistemas para pequenos negócios</p>
        <p>
          WhatsApp{" "}
          <a href={`https://wa.me/${WHATS}`} target="_blank" rel="noopener">
            {WHATS_LABEL}
          </a>
        </p>
        <a className="footer-up" href="#topo">
          Voltar ao topo
        </a>
      </div>

      <Reveal className="footer-main">
        <h2 id="footer-h" className="footer-h">
          Fale com a Tastio
        </h2>
        <a className="footer-mail" href={`mailto:${EMAIL}`}>
          <span>{user}</span>
          <span>@{domain}</span>
        </a>
      </Reveal>

      <div className="footer-meta">
        <span className="footer-links">
          <a href="#sistemas">Sistemas</a>
          <a href={DEMO_ASSISTENCIA} target="_blank" rel="noopener">
            Demonstração
          </a>
        </span>
        <span>Tastio</span>
        <span>Santo Anastácio, 2026</span>
      </div>
    </footer>
  );
}
