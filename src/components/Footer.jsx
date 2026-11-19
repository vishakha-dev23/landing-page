import { FOOTER } from '../content.js';
import { LINKS } from '../config.js';
import { InstallButton } from './ui.jsx';
import './Footer.css';

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Live demo', href: LINKS.demo, external: true },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Support', href: LINKS.support },
      { label: 'Plans and billing', href: LINKS.plans },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: LINKS.privacy },
      { label: 'Terms and Conditions', href: LINKS.terms },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__top">
          <div className="foot__brand">
            <a href="#top" className="foot__logo">
              Flaire
            </a>
            <p className="body">{FOOTER.tagline}</p>
            <InstallButton className="btn btn--primary btn--sm foot__cta" />
          </div>
          {COLUMNS.map((c) => (
            <nav key={c.title} className="foot__col" aria-label={c.title}>
              <h2 className="foot__title">{c.title}</h2>
              <ul>
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} {...(l.external ? { target: '_blank', rel: 'noopener' } : {})}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="foot__bottom">
          <p>© {new Date().getFullYear()} Flaire</p>
          <p>{FOOTER.note}</p>
        </div>
      </div>
    </footer>
  );
}
