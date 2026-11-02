import { EMAIL, WHATS, WHATS_LABEL, DEMO_ASSISTENCIA } from "../content.js";
import Reveal from "./Reveal.jsx";

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-h">
      <Reveal className="footer-main">
        <h2 id="footer-h">Fale com a Tastio</h2>
        <a className="footer-mail" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        <p>
          WhatsApp{" "}
          <a href={`https://wa.me/${WHATS}`} target="_blank" rel="noopener">
            {WHATS_LABEL}
          </a>
        </p>
      </Reveal>
      <nav className="footer-links" aria-label="Rodapé">
        <a href="#sistemas">Sistemas</a>
        <a href={DEMO_ASSISTENCIA} target="_blank" rel="noopener">
          Demonstração
        </a>
        <a href="#topo">Voltar ao topo</a>
      </nav>
      <p className="footer-meta">Tastio, Santo Anastácio, 2026</p>
    </footer>
  );
}
