import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE } from "./Reveal.jsx";

// Fragmento ilustrativo do cardápio, com itens de exemplo. Os valores somam:
// 52,00 + 12,00 + 18,00 = 82,00.
const ITEMS = [
  { name: "Pizza de calabresa grande", note: "8 fatias", price: "R$ 52,00" },
  { name: "Refrigerante 2 L", note: "Gelado", price: "R$ 12,00" },
  { name: "Brownie com sorvete", note: "Porção individual", price: "R$ 18,00" },
];

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

function Cardapio() {
  return (
    <>
      <div className="dl-bar">
        <strong>Cardápio da loja</strong>
        <span className="dl-icons">
          <Icon d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm9 16-4-4" />
          <Icon d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </span>
      </div>
      <div className="dl-chips">
        <span className="on">Pizzas</span>
        <span>Bebidas</span>
        <span>Sobremesas</span>
      </div>
      <ul className="dl-list">
        {ITEMS.map((it, n) => (
          <motion.li
            key={it.name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.1 + n * 0.09 }}
          >
            <span>
              <b>{it.name}</b>
              <small>{it.note}</small>
            </span>
            <span className="dl-price">{it.price}</span>
          </motion.li>
        ))}
      </ul>
      <div className="dl-cta">Sacola · 3 itens · R$ 82,00</div>
    </>
  );
}

function Sacola() {
  return (
    <>
      <div className="dl-bar">
        <strong>Sacola</strong>
      </div>
      <ul className="dl-list">
        {ITEMS.map((it, n) => (
          <motion.li
            key={it.name}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.08 + n * 0.09 }}
          >
            <span>
              <b>1 × {it.name}</b>
            </span>
            <span className="dl-price">{it.price}</span>
          </motion.li>
        ))}
      </ul>
      <div className="dl-total">
        <span>Total</span>
        <b>R$ 82,00</b>
      </div>
      <div className="dl-cta">Enviar pedido</div>
    </>
  );
}

function Enviado() {
  return (
    <div className="dl-done">
      <motion.span
        className="dl-check"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m5 12.5 4.5 4.5L19 7.5" />
        </svg>
      </motion.span>
      <motion.strong
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
      >
        Pedido enviado
      </motion.strong>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
      >
        3 itens · R$ 82,00
        <br />
        O pedido foi para a loja.
      </motion.p>
    </div>
  );
}

const SCREENS = [Cardapio, Sacola, Enviado];

export default function DeliveryDemo({ tab }) {
  const reduce = useReducedMotion();
  const Screen = SCREENS[tab];
  return (
    <div className="dl" data-ui role="img" aria-label="Exemplo ilustrativo do cardápio, da sacola e do pedido enviado, com itens de amostra.">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={tab}
          className="dl-screen"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <Screen />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
