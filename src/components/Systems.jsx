import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { systems } from "../content.js";
import Reveal, { EASE } from "./Reveal.jsx";
import Cover from "./Cover.jsx";
import DeliveryDemo from "./DeliveryDemo.jsx";

const RADIUS = 28;

/* ───────── Cartão do sistema ───────── */
function SystemCard({ system, index, onOpen, onVideo }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      layoutId={`card-${system.id}`}
      className="scard"
      style={{ borderRadius: RADIUS }}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.1 }}
    >
      <Cover system={system} />
      <div className="scard-body">
        <span className="chip">{system.plan.name}</span>
        <h3>
          <button type="button" className="scard-open" onClick={() => onOpen(system.id)}>
            {system.name}
          </button>
        </h3>
        <p>{system.tagline}</p>
        <div className="scard-actions">
          <span className="scard-more" aria-hidden="true">
            Ver detalhes
          </span>
          {system.video !== undefined && (
            <button type="button" className="scard-demo" onClick={() => onVideo(system.id)}>
              Ver funcionamento
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ───────── Vídeo de funcionamento ───────── */
function VideoModal({ system, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    closeRef.current?.focus();
  }, []);
  return (
    <div className="video-wrap">
      <motion.div
        className="sheet-back"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="video-box"
        role="dialog"
        aria-modal="true"
        aria-label={`Funcionamento do ${system.name}`}
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <div className="video-head">
          <h2>Funcionamento do {system.name}</h2>
          <button type="button" className="btn btn-ghost btn-small" onClick={onClose} ref={closeRef}>
            Fechar
          </button>
        </div>
        <div className="video-frame">
          {system.video ? (
            <video src={system.video} controls autoPlay playsInline />
          ) : (
            <div className="video-empty">
              <span className="video-play" aria-hidden="true" />
              <p>O vídeo de funcionamento do {system.name} entra aqui.</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* ───────── Visita guiada dentro do painel ───────── */
function Walk({ system }) {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef(null);
  const visible = useInView(ref, { amount: 0.3 });
  const cur = system.steps[step];
  const hasVisual = system.steps.some((s) => s.img || s.dl !== undefined);

  useEffect(() => {
    if (!auto || !visible || reduce) return undefined;
    const id = setInterval(() => setStep((n) => (n + 1) % system.steps.length), 4200);
    return () => clearInterval(id);
  }, [auto, visible, reduce, system.steps.length]);

  const pick = (n) => {
    setAuto(false);
    setStep(n);
  };

  return (
    <div className="walk" ref={ref}>
      {hasVisual && (
        <div className={`stage${cur.portrait ? " is-portrait" : ""}`}>
          {system.id === "delivery" ? (
            <DeliveryDemo tab={cur.dl ?? 0} />
          ) : (
            <AnimatePresence initial={false}>
              <motion.img
                key={cur.img}
                src={cur.img}
                alt={cur.alt}
                width={cur.portrait ? 390 : 1280}
                height={cur.portrait ? 844 : 800}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
              />
            </AnimatePresence>
          )}
        </div>
      )}
      <ol className="walk-steps" aria-label={`Como funciona o ${system.name}`}>
        {system.steps.map((s, n) => (
          <li key={s.name}>
            <button
              type="button"
              className="pill"
              aria-current={step === n ? "step" : undefined}
              onClick={() => pick(n)}
            >
              {s.name}
            </button>
          </li>
        ))}
      </ol>
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={step}
          className="walk-text"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
        >
          {cur.text}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

/* ───────── Painel com todos os detalhes ───────── */
function Sheet({ system, onClose, onVideo }) {
  const reduce = useReducedMotion();
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  const fade = (d) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: EASE, delay: 0.25 + d },
  });

  return (
    <div className="sheet-wrap">
      <motion.div
        className="sheet-back"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        layoutId={`card-${system.id}`}
        className="sheet"
        style={{ borderRadius: RADIUS }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-h"
      >
        <motion.div className="sheet-head" {...fade(0)}>
          <div>
            <span className="chip">{system.plan.name}</span>
            <h2 id="sheet-h">{system.name}</h2>
          </div>
          <button type="button" className="btn btn-ghost btn-small" onClick={onClose} ref={closeRef}>
            Fechar
          </button>
        </motion.div>

        <div className="sheet-body">
          <motion.div className="sheet-info" {...fade(0.08)}>
            <p className="sheet-what">{system.what}</p>
            <div className="sheet-plan">
              <b>{system.plan.name}</b>
              <span>{system.plan.text}</span>
            </div>
            <h3>O que ele faz</h3>
            <ul className="sheet-list">
              {system.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="sheet-actions">
              {system.actions.map((a) => (
                <a
                  key={a.label}
                  className={a.primary ? "btn" : "btn-text"}
                  href={a.href}
                  target="_blank"
                  rel="noopener"
                >
                  {a.label}
                </a>
              ))}
              {system.video !== undefined && (
                <button type="button" className="btn btn-ghost" onClick={() => onVideo(system.id)}>
                  Ver funcionamento
                </button>
              )}
            </div>
          </motion.div>
          <motion.div {...fade(0.16)}>
            <Walk system={system} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Systems() {
  const [openId, setOpenId] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const open = systems.find((s) => s.id === openId);
  const video = systems.find((s) => s.id === videoId);

  // Esc fecha primeiro o vídeo e depois o painel; a rolagem da página trava enquanto algo está aberto.
  useEffect(() => {
    if (!openId && !videoId) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (videoId) setVideoId(null);
      else setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [openId, videoId]);

  return (
    <section className="systems" id="sistemas" aria-labelledby="systems-h">
      <div className="section-head">
        <Reveal as="h2" id="systems-h">
          Sistemas da Tastio
        </Reveal>
        <Reveal as="p" delay={0.08}>
          Abra um sistema para ver o plano, o que ele faz e como funciona.
        </Reveal>
      </div>
      <div className="systems-grid">
        {systems.map((s, n) => (
          <SystemCard key={s.id} system={s} index={n} onOpen={setOpenId} onVideo={setVideoId} />
        ))}
      </div>
      <AnimatePresence>
        {open && (
          <Sheet key={open.id} system={open} onClose={() => setOpenId(null)} onVideo={setVideoId} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {video && <VideoModal key={`v-${video.id}`} system={video} onClose={() => setVideoId(null)} />}
      </AnimatePresence>
    </section>
  );
}
