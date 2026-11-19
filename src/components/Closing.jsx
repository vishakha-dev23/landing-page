import { CLOSING } from '../content.js';
import { IMAGES } from '../config.js';
import { DemoButton, DemoPassword, InstallButton, Reveal, useImageAvailable } from './ui.jsx';
import './Closing.css';

export default function Closing() {
  const hasImage = useImageAvailable(IMAGES.closing);
  return (
    <section className="section close" aria-labelledby="close-title">
      <div className="wrap">
        <Reveal className="close__in">
          <h2 className="display close__title" id="close-title">
            {CLOSING.title}
          </h2>
          <p className="lead close__text">{CLOSING.text}</p>
          <div className="btn-row close__ctas">
            <InstallButton />
            <DemoButton />
          </div>
          <DemoPassword />
        </Reveal>
        {hasImage && (
          <Reveal className="close__media">
            <img src={IMAGES.closing} alt="" loading="lazy" decoding="async" />
          </Reveal>
        )}
      </div>
    </section>
  );
}
