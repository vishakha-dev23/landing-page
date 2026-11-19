import { HERO } from '../content.js';
import { DemoButton, DemoPassword, Icon, InstallButton } from './ui.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap">
        <span className="eyebrow hero__eyebrow">{HERO.eyebrow}</span>
        <h1 className="display hero__title" id="hero-title">
          {HERO.title}
        </h1>
        <div className="hero__foot">
          <div className="hero__copy">
            <p className="lead">{HERO.text}</p>
            <div className="btn-row hero__ctas">
              <InstallButton />
              <DemoButton />
            </div>
            <DemoPassword />
          </div>
          <ul className="hero__facts">
            {HERO.facts.map((f) => (
              <li key={f}>
                <Icon name="check" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
