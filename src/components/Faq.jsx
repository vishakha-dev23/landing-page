import { FAQ } from '../content.js';
import { LINKS } from '../config.js';
import { DemoPassword, Icon, Reveal } from './ui.jsx';
import './Faq.css';

export default function Faq() {
  return (
    <section className="section section--stone faq" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq__grid">
        <Reveal className="faq__head">
          <span className="eyebrow">{FAQ.eyebrow}</span>
          <h2 className="h2" id="faq-title">
            {FAQ.title}
          </h2>
          <p className="body faq__more">
            {FAQ.more}{' '}
            <a className="text-link" href={LINKS.support}>
              {FAQ.moreLink}
            </a>
          </p>
        </Reveal>
        <Reveal className="faq__list">
          {FAQ.items.map((it, i) => (
            <details key={it.q} className="faq__item" open={i === 0}>
              <summary>
                <span>{it.q}</span>
                <Icon name="plus" />
              </summary>
              <div className="faq__a">
                <p className="body">{it.a}</p>
                {it.q.startsWith('Can I try') && <DemoPassword />}
              </div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
