import { useState } from 'react';
import { EXPLORER } from '../content.js';
import { Browser, Reveal } from './ui.jsx';
import './Explorer.css';

export default function Explorer() {
  const [active, setActive] = useState(EXPLORER.items[0].id);
  const items = EXPLORER.items;

  const onKey = (e) => {
    const i = items.findIndex((it) => it.id === active);
    let next = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (i + 1) % items.length;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (i - 1 + items.length) % items.length;
    if (next === null) return;
    e.preventDefault();
    setActive(items[next].id);
    document.getElementById(`exp-tab-${items[next].id}`)?.focus();
  };

  return (
    <section className="section exp" aria-labelledby="exp-title">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">{EXPLORER.eyebrow}</span>
            <h2 className="h2" id="exp-title">
              {EXPLORER.title}
            </h2>
          </div>
          <p className="lead">{EXPLORER.text}</p>
        </Reveal>

        <div className="exp__grid">
          <Reveal className="exp__list" role="tablist" aria-orientation="vertical" aria-label="Features" onKeyDown={onKey}>
            {items.map((it, i) => {
              const on = it.id === active;
              return (
                <div key={it.id} className={`exp__item${on ? ' is-on' : ''}`}>
                  <button
                    id={`exp-tab-${it.id}`}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    aria-controls={`exp-panel-${it.id}`}
                    tabIndex={on ? 0 : -1}
                    className="exp__tab"
                    onClick={() => setActive(it.id)}
                  >
                    <span className="exp__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="exp__name">{it.title}</span>
                  </button>
                  <div className="exp__detail" id={`exp-panel-${it.id}`} role="tabpanel" aria-labelledby={`exp-tab-${it.id}`} hidden={!on}>
                    <p className="body">{it.text}</p>
                    <img className="exp__inline" src={it.img.src} alt={it.img.alt} width="1920" height="1200" loading="lazy" decoding="async" />
                  </div>
                </div>
              );
            })}
          </Reveal>

          <Reveal className="exp__stage" delay={0.08} aria-hidden="true">
            <Browser url="yourstore.com">
              <div className="exp__frames">
                {items.map((it) => (
                  <img
                    key={it.id}
                    src={it.img.src}
                    alt=""
                    width="1920"
                    height="1200"
                    loading="lazy"
                    decoding="async"
                    className={it.id === active ? 'is-on' : ''}
                  />
                ))}
              </div>
            </Browser>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
