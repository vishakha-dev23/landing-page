import { useState } from 'react';
import { CREDITS, PRICING } from '../content.js';
import { Icon, InstallButton, Reveal } from './ui.jsx';
import './Pricing.css';

const fmt = (n) => n.toLocaleString('en-US');

export default function Pricing() {
  const [planId, setPlanId] = useState('starter');
  const plan = PRICING.plans.find((p) => p.id === planId);

  return (
    <section className="section price" id="pricing" aria-labelledby="price-title">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">{PRICING.eyebrow}</span>
            <h2 className="h2" id="price-title">
              {PRICING.title}
            </h2>
          </div>
          <p className="lead">{PRICING.text}</p>
        </Reveal>

        <div className="price__plans" role="radiogroup" aria-label="Choose a plan to see what its credits cover">
          {PRICING.plans.map((p, i) => {
            const on = p.id === planId;
            return (
              <Reveal key={p.id} delay={i * 0.06} className="price__cell">
                <div className={`plan${on ? ' is-on' : ''}`} onClick={() => setPlanId(p.id)}>
                  <label className="plan__top">
                    <input
                      type="radio"
                      name="plan"
                      value={p.id}
                      checked={on}
                      onChange={() => setPlanId(p.id)}
                      className="sr-only"
                    />
                    <span className="plan__name">{p.name}</span>
                    <span className="plan__radio" aria-hidden="true" />
                  </label>
                  <p className="plan__price">
                    <span className="plan__amount">${p.price}</span>
                    <span className="plan__per">{p.price === 0 ? 'free forever' : 'a month'}</span>
                  </p>
                  <p className="plan__credits">{p.creditsLine}</p>
                  <p className="plan__text">{p.text}</p>
                  <ul className="plan__list">
                    {PRICING.includes.map((x) => (
                      <li key={x}>
                        <Icon name="check" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <InstallButton className={`btn btn--block ${on ? 'btn--primary' : 'btn--secondary'}`} />
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="cover" aria-live="polite">
          <div className="cover__head">
            <h3 className="h3">
              {PRICING.coverTitle} on {plan.name}
            </h3>
            <p className="body">{PRICING.coverNote}</p>
          </div>
          <table className="cover__table">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Cost</th>
                <th scope="col">About, per month</th>
              </tr>
            </thead>
            <tbody>
              {CREDITS.items.map((it) => (
                <tr key={it.id}>
                  <th scope="row">{it.name}</th>
                  <td>
                    {it.cost} {it.cost === 1 ? 'credit' : 'credits'}
                  </td>
                  <td className="cover__num">{fmt(Math.floor(plan.credits / it.cost))}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="cover__billing">{PRICING.billing}</p>
        </Reveal>
      </div>
    </section>
  );
}
