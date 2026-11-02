import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { EASE } from "./Reveal.jsx";

const STAGES = [
  "Recebido",
  "Em análise",
  "Aguardando aprovação",
  "Em conserto",
  "Pronto para retirar",
  "Entregue",
];

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

// Percorre as telas e volta: 0,1,2,3,2,1,0...
function useLoop(len, ms, active, still) {
  const [t, setT] = useState(0);
  // 0..len-1 e de volta até 1: com 6 telas, 0,1,2,3,4,5,4,3,2,1 e recomeça.
  const seq = Array.from({ length: len }, (_, i) => i).concat(
    Array.from({ length: Math.max(0, len - 2) }, (_, i) => len - 2 - i)
  );
  useEffect(() => {
    if (!active || still) return undefined;
    const id = setInterval(() => setT((n) => (n + 1) % seq.length), ms);
    return () => clearInterval(id);
  }, [active, still, ms, seq.length]);
  return still ? Math.min(3, len - 1) : seq[t % seq.length];
}

const swap = (reduce) => ({
  initial: reduce ? false : { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.35, ease: EASE },
});

// Valores da demonstração: reparo R$ 180,00; Delivery 52,00 + 12,00 + 18,00 = 82,00.
function Assistencia({ n, reduce }) {
  return (
    <div className="art art-flow">
      <div className="flow-top">
        <small>Etapa {n + 1} de 6</small>
        <small>Protocolo 0003</small>
      </div>
      <span className="art-bars" aria-hidden="true">
        {STAGES.map((s, i) => (
          <motion.i
            key={s}
            initial={false}
            animate={{
              backgroundColor: i < n ? "#000000" : i === n ? "#fd5741" : "rgba(0,0,0,0.15)",
            }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </span>
      <div className="flow-slot">
        <AnimatePresence initial={false}>
          <motion.div key={n} className="flow-body" {...swap(reduce)}>
            <b className="flow-title">{STAGES[n]}</b>
            <small>Notebook Dell Inspiron 15</small>
            {n === 2 && (
              <>
                <span className="flow-row">
                  <span>Reparo na placa de carga</span>
                  <b>R$ 180,00</b>
                </span>
                <span className="flow-btns">
                  <span>Aprovar</span>
                  <span>Recusar</span>
                </span>
              </>
            )}
            {n === 3 && (
              <span className="flow-ok">
                <span className="art-badge">
                  <Check />
                </span>
                Orçamento aprovado <b>R$ 180,00</b>
              </span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Delivery({ n, reduce }) {
  return (
    <div className="art art-flow art-flow-green">
      <div className="flow-slot">
        <AnimatePresence initial={false}>
          <motion.div key={n} className="flow-body" {...swap(reduce)}>
            {n === 0 && (
              <>
                <b className="flow-title">Cardápio da loja</b>
                <span className="flow-chips">
                  <span className="on">Pizzas</span>
                  <span>Bebidas</span>
                  <span>Sobremesas</span>
                </span>
                <span className="flow-row">
                  <span>Pizza de calabresa grande</span>
                  <b>R$ 52,00</b>
                </span>
                <span className="flow-bar">Sacola · 3 itens · R$ 82,00</span>
              </>
            )}
            {n === 1 && (
              <>
                <b className="flow-title">Sacola</b>
                <span className="flow-row">
                  <span>Pizza de calabresa grande</span>
                  <b>R$ 52,00</b>
                </span>
                <span className="flow-row">
                  <span>Refrigerante 2 L</span>
                  <b>R$ 12,00</b>
                </span>
                <span className="flow-row">
                  <span>Brownie com sorvete</span>
                  <b>R$ 18,00</b>
                </span>
                <span className="flow-bar">Enviar pedido</span>
              </>
            )}
            {n === 2 && (
              <>
                <b className="flow-title">Deseja acompanhar por WhatsApp?</b>
                <span className="flow-btns">
                  <span className="on">Sim</span>
                  <span>Não</span>
                </span>
              </>
            )}
            {n === 3 && (
              <span className="flow-done">
                <span className="art-badge art-badge-dark">
                  <Check />
                </span>
                <b className="flow-title">Pedido enviado</b>
                <small>3 itens · R$ 82,00</small>
                <small>O pedido foi para a loja.</small>
              </span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Cover({ system }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });
  const loops = { assistencia: [6, 2000], delivery: [4, 2600] }[system.id];
  const n = useLoop(loops ? loops[0] : 1, loops ? loops[1] : 1000, inView, reduce);

  return (
    <div className={`cover cover-${system.field}`} data-ui ref={ref}>
      {system.id === "assistencia" && <Assistencia n={n} reduce={reduce} />}
      {system.id === "delivery" && <Delivery n={n} reduce={reduce} />}
      {system.id === "mais" && <span className="cover-plus" aria-hidden="true" />}
    </div>
  );
}
