import { useState } from "react";
import { steps } from "../content.js";
import Reveal from "./Reveal.jsx";

export default function Steps() {
  const [open, setOpen] = useState(0);
  return (
    <section className="steps" id="como" aria-labelledby="steps-h">
      <div className="steps-intro">
        <Reveal as="h2" id="steps-h">
          {steps.title}
        </Reveal>
        <Reveal as="p" delay={0.08}>
          {steps.text}
        </Reveal>
      </div>
      <Reveal className="acc" delay={0.1}>
        {steps.items.map((s, n) => (
          <div
            key={s.name}
            className={`acc-panel acc-${n}${open === n ? " is-open" : ""}`}
          >
            <button
              type="button"
              className="acc-label"
              aria-expanded={open === n}
              aria-controls={`acc-body-${n}`}
              onClick={() => setOpen(n)}
            >
              {s.name}
            </button>
            <p className="acc-text" id={`acc-body-${n}`} hidden={open !== n}>
              {s.text}
            </p>
            {s.img && open === n && (
              <img
                className={`acc-img${s.img.portrait ? " is-portrait" : ""}`}
                src={s.img.src}
                alt={s.img.alt}
                loading="lazy"
              />
            )}
          </div>
        ))}
      </Reveal>
    </section>
  );
}
