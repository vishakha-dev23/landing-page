import { useEffect, useState } from 'react';
import { NAV } from '../content.js';
import { LINKS } from '../config.js';
import { Icon } from './ui.jsx';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`hdr${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap hdr__in">
        <a className="hdr__brand" href="#top" aria-label="Flaire, back to top">
          Flaire
        </a>
        <nav className="hdr__nav" aria-label="Page sections">
          {NAV.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hdr__actions">
          <a className="hdr__demo text-link" href={LINKS.demo} target="_blank" rel="noopener">
            Live demo
            <Icon name="arrow" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a className="btn btn--primary btn--sm" href={LINKS.install}>
            Install for free
          </a>
        </div>
      </div>
    </header>
  );
}
