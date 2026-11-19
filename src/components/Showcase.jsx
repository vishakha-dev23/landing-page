import { useState } from 'react';
import { SHOWCASE } from '../content.js';
import { Browser, DemoButton, DemoPassword, Phone, Reveal, Screen } from './ui.jsx';
import './Showcase.css';

const DESKTOP_RATIO = 0.625;
const PHONE_RATIO = 2.12;

export default function Showcase() {
  const [active, setActive] = useState(SHOWCASE.pages[0].id);
  const current = SHOWCASE.pages.find((p) => p.id === active);

  const onKey = (e) => {
    const i = SHOWCASE.pages.findIndex((p) => p.id === active);
    let next = null;
    if (e.key === 'ArrowRight') next = (i + 1) % SHOWCASE.pages.length;
    if (e.key === 'ArrowLeft') next = (i - 1 + SHOWCASE.pages.length) % SHOWCASE.pages.length;
    if (next === null) return;
    e.preventDefault();
    const id = SHOWCASE.pages[next].id;
    setActive(id);
    document.getElementById(`show-tab-${id}`)?.focus();
  };

  return (
    <section className="section section--stone show" id="demo" aria-labelledby="show-title">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">{SHOWCASE.eyebrow}</span>
            <h2 className="h2" id="show-title">
              {SHOWCASE.title}
            </h2>
          </div>
          <p className="lead">{SHOWCASE.text}</p>
        </Reveal>

        <Reveal className="show__tabs" role="tablist" aria-label="Demo pages" onKeyDown={onKey}>
          {SHOWCASE.pages.map((p) => (
            <button
              key={p.id}
              id={`show-tab-${p.id}`}
              type="button"
              role="tab"
              aria-selected={p.id === active}
              aria-controls="show-panel"
              tabIndex={p.id === active ? 0 : -1}
              className="show__tab"
              onClick={() => setActive(p.id)}
            >
              {p.label}
            </button>
          ))}
        </Reveal>

        <Reveal className="show__stage" id="show-panel" role="tabpanel" aria-labelledby={`show-tab-${active}`}>
          <Browser url={current.url} className="show__browser group">
            <div className="show__layers" style={{ aspectRatio: `1 / ${DESKTOP_RATIO}` }}>
              {SHOWCASE.pages.map((p) => (
                <div key={p.id} className={`show__layer${p.id === active ? ' is-on' : ''}`} aria-hidden={p.id !== active}>
                  <Screen {...p.desktop} ratio={DESKTOP_RATIO} />
                </div>
              ))}
            </div>
          </Browser>

          <Phone className="show__phone group">
            <div className="show__layers show__layers--phone" style={{ aspectRatio: `1 / ${PHONE_RATIO}` }}>
              {SHOWCASE.pages.map((p) => (
                <div key={p.id} className={`show__layer${p.id === active ? ' is-on' : ''}`} aria-hidden={p.id !== active}>
                  <Screen {...p.phone} ratio={PHONE_RATIO} />
                </div>
              ))}
            </div>
          </Phone>
        </Reveal>

        <Reveal className="show__foot">
          <p className="show__hint">Hover a screen to scroll the page.</p>
          <div>
            <DemoButton className="btn btn--primary">Open the live demo</DemoButton>
            <DemoPassword />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
