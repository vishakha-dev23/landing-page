import { EVERYTHING } from '../content.js';
import { Reveal } from './ui.jsx';
import './Everything.css';

export default function Everything() {
  return (
    <section className="section section--stone all" aria-labelledby="all-title">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">{EVERYTHING.eyebrow}</span>
            <h2 className="h2" id="all-title">
              {EVERYTHING.title}
            </h2>
          </div>
          <p className="lead">{EVERYTHING.text}</p>
        </Reveal>
        <div className="all__grid">
          {EVERYTHING.groups.map((g, i) => (
            <Reveal key={g.name} className="all__group" delay={i * 0.05}>
              <h3 className="all__name">{g.name}</h3>
              <ul className="all__list">
                {g.items.map((it) => {
                  const name = typeof it === 'string' ? it : it.name;
                  const credits = typeof it !== 'string' && it.credits;
                  return (
                    <li key={name}>
                      {name}
                      {credits && <span className="all__credit">Credits</span>}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
