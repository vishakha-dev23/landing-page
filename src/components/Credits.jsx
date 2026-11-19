import { useState } from 'react';
import { CREDITS } from '../content.js';
import { IMAGES } from '../config.js';
import { Reveal, useImagesAvailable } from './ui.jsx';
import './Credits.css';

export default function Credits() {
  const srcs = CREDITS.items.map((it) => IMAGES.credits[it.id]);
  const withImages = useImagesAvailable(srcs);
  const [active, setActive] = useState(CREDITS.items[0].id);

  return (
    <section className={`section cred${withImages ? ' cred--images' : ''}`} aria-labelledby="cred-title">
      <div className="wrap">
        <Reveal className="section-head cred__head">
          <div>
            <span className="eyebrow cred__eyebrow">{CREDITS.eyebrow}</span>
            <h2 className="h2" id="cred-title">
              {CREDITS.title}
            </h2>
          </div>
          <p className="lead cred__lead">{CREDITS.text}</p>
        </Reveal>

        <div className="cred__body">
          <ol className="cred__list">
            {CREDITS.items.map((it, i) => (
              <Reveal
                as="li"
                key={it.id}
                className={`cred__row${it.id === active ? ' is-on' : ''}`}
                delay={i * 0.05}
                onMouseEnter={() => setActive(it.id)}
                onFocus={() => setActive(it.id)}
                tabIndex={withImages ? 0 : undefined}
              >
                {withImages && (
                  <img className="cred__inline" src={IMAGES.credits[it.id]} alt="" loading="lazy" decoding="async" width="1600" height="1200" />
                )}
                <span className="cred__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="cred__name">{it.name}</h3>
                <p className="cred__text">{it.text}</p>
                <p className="cred__cost">
                  <strong>
                    {it.cost} {it.cost === 1 ? 'credit' : 'credits'}
                  </strong>
                  <span>{it.unit}</span>
                </p>
              </Reveal>
            ))}
          </ol>

          {withImages && (
            <div className="cred__media" aria-hidden="true">
              {CREDITS.items.map((it) => (
                <img key={it.id} src={IMAGES.credits[it.id]} alt="" loading="lazy" decoding="async" className={it.id === active ? 'is-on' : ''} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
