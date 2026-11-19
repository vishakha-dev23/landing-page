import { MOBILE } from '../content.js';
import { Icon, Phone, Reveal, Screen } from './ui.jsx';
import './Mobile.css';

const PHONE_RATIO = 2.12;

export default function Mobile() {
  return (
    <section className="section mob" aria-labelledby="mob-title">
      <div className="wrap mob__grid">
        <Reveal className="mob__copy">
          <span className="eyebrow">{MOBILE.eyebrow}</span>
          <h2 className="h2" id="mob-title">
            {MOBILE.title}
          </h2>
          <p className="lead mob__lead">{MOBILE.text}</p>
          <ul className="mob__points">
            {MOBILE.points.map((p) => (
              <li key={p}>
                <Icon name="check" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="mob__phones">
          {MOBILE.screens.map((s, i) => (
            <Reveal key={s.src} className={`mob__phone mob__phone--${i + 1}`} delay={i * 0.08}>
              <Phone className="group">
                <Screen {...s} ratio={PHONE_RATIO} />
              </Phone>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
