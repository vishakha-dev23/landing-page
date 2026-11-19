import { useState } from 'react';
import { SIGNATURE } from '../content.js';
import { IMAGES } from '../config.js';
import { Reveal, useImagesAvailable } from './ui.jsx';
import './Signature.css';

const METAL = {
  'yellow-gold': { light: '#f3e0b1', base: '#d4af6a', dark: '#9f7a39' },
  'rose-gold': { light: '#f5d6cb', base: '#deaa9b', dark: '#a87262' },
  'white-gold': { light: '#f7f8fa', base: '#d8dae0', dark: '#9da2ad' },
  platinum: { light: '#eceef1', base: '#b8bcc4', dark: '#80858f' },
};

function Swatches({ value, onChange, name }) {
  return (
    <div className="sig-swatches" role="radiogroup" aria-label={name}>
      {SIGNATURE.finishes.map((f) => (
        <button
          key={f.id}
          type="button"
          role="radio"
          aria-checked={value === f.id}
          aria-label={f.label}
          title={f.label}
          className="sig-swatch"
          style={{ '--c': f.color }}
          onClick={() => onChange(f.id)}
        />
      ))}
    </div>
  );
}

function FinishCard() {
  const srcs = SIGNATURE.finishes.map((f) => IMAGES.finish[f.id]);
  const ready = useImagesAvailable(srcs);
  const [finish, setFinish] = useState(SIGNATURE.finishes[0].id);
  const [size, setSize] = useState('6.5');
  const label = SIGNATURE.finishes.find((f) => f.id === finish).label;

  return (
    <article className="sig-card">
      {ready ? (
        <div className="sig-stage sig-stage--finish">
          <div className="sig-photo">
            {SIGNATURE.finishes.map((f) => (
              <img
                key={f.id}
                src={IMAGES.finish[f.id]}
                alt={f.id === finish ? `Ring in ${f.label}` : ''}
                aria-hidden={f.id !== finish}
                className={f.id === finish ? 'is-on' : ''}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
          <div className="sig-controls">
            <div className="sig-row">
              <span className="sig-label">
                Finish <strong>{label}</strong>
              </span>
              <Swatches value={finish} onChange={setFinish} name="Finish" />
            </div>
            <div className="sig-row">
              <span className="sig-label">
                Ring size <strong>{size}</strong>
              </span>
              <div className="sig-sizes" role="radiogroup" aria-label="Ring size">
                {SIGNATURE.sizes.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    role="radio"
                    aria-checked={size === s.label}
                    aria-disabled={s.soldOut}
                    aria-label={s.soldOut ? `${s.label}, sold out` : s.label}
                    className={`sig-size${s.soldOut ? ' is-off' : ''}`}
                    onClick={() => !s.soldOut && setSize(s.label)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="sig-stage sig-stage--shot">
          <div
            className="sig-zoom"
            role="img"
            aria-label="Flaire product page with finish swatches, ring sizes struck through when sold out, and a size guide link"
          />
        </div>
      )}
      <div className="sig-text">
        <h3 className="h3">{SIGNATURE.swatches.title}</h3>
        <p className="body">{SIGNATURE.swatches.text}</p>
      </div>
    </article>
  );
}

function EngravingCard() {
  const { sample, max, label } = SIGNATURE.engraving;
  const [text, setText] = useState(sample);
  const [metal, setMetal] = useState('yellow-gold');
  const m = METAL[metal];
  const shown = text.trim() || sample;

  const onChange = (e) => {
    const clean = e.target.value.replace(/[^A-Za-z0-9 .,&']/g, '').slice(0, max);
    setText(clean);
  };

  return (
    <article className="sig-card">
      <div className="sig-stage sig-stage--engrave">
        <div
          className="engr-plate"
          style={{ '--m-light': m.light, '--m-base': m.base, '--m-dark': m.dark }}
          aria-hidden="true"
        >
          <span className="engr-text">{shown}</span>
        </div>
        <div className="sig-controls">
          <div className="sig-row">
            <span className="sig-label">
              Metal <strong>{SIGNATURE.finishes.find((f) => f.id === metal).label}</strong>
            </span>
            <Swatches value={metal} onChange={setMetal} name="Metal" />
          </div>
          <div className="engr-field">
            <label htmlFor="engr-input" className="sig-label">
              {label}
            </label>
            <div className="engr-input-wrap">
              <input
                id="engr-input"
                type="text"
                value={text}
                onChange={onChange}
                maxLength={max}
                autoComplete="off"
                spellCheck="false"
                aria-describedby="engr-count"
              />
              <span id="engr-count" className="engr-count" aria-live="polite">
                {text.length} of {max}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="sig-text">
        <h3 className="h3">{SIGNATURE.engraving.title}</h3>
        <p className="body">{SIGNATURE.engraving.text}</p>
      </div>
    </article>
  );
}

export default function Signature() {
  return (
    <section className="section sig" id="features" aria-labelledby="sig-title">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">{SIGNATURE.eyebrow}</span>
            <h2 className="h2" id="sig-title">
              {SIGNATURE.title}
            </h2>
          </div>
          <p className="lead">{SIGNATURE.text}</p>
        </Reveal>
        <div className="sig-grid">
          <Reveal>
            <FinishCard />
          </Reveal>
          <Reveal delay={0.08}>
            <EngravingCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
