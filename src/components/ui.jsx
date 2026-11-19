import { useEffect, useRef, useState } from 'react';
import { DEMO_PASSWORD, LINKS } from '../config.js';

export function Icon({ name }) {
  const paths = {
    arrow: <path d="M7 17 17 7M8 7h9v9" />,
    check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
    plus: <path d="M12 5v14M5 12h14" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function InstallButton({ className = 'btn btn--primary', children = 'Install for free' }) {
  return (
    <a className={className} href={LINKS.install}>
      {children}
    </a>
  );
}

export function DemoButton({ className = 'btn btn--secondary', children = 'View live demo' }) {
  return (
    <a className={className} href={LINKS.demo} target="_blank" rel="noopener">
      {children}
      <Icon name="arrow" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export function DemoPassword() {
  if (!DEMO_PASSWORD) return null;
  return (
    <p className="demo-pass">
      Demo store password: <strong>{DEMO_PASSWORD}</strong>
    </p>
  );
}

// Adds .is-in when the element scrolls into view.
export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return undefined;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);

  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { '--delay': `${delay}s` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// A screen that shows the top of a capture and scrolls through the rest on hover.
export function Screen({ src, w, h, alt, ratio, className = '' }) {
  const tall = h / w > ratio + 0.02;
  const dur = tall ? Math.min(9, Math.max(3, (h / w - ratio) * 3.2)) : 0;
  return (
    <div
      role="img"
      aria-label={alt}
      tabIndex={tall ? 0 : undefined}
      className={`screen${tall ? ' screen--scroll' : ' screen--cover'}${className ? ` ${className}` : ''}`}
      style={{
        aspectRatio: `1 / ${ratio}`,
        backgroundImage: `url(${src})`,
        '--scroll-dur': `${dur.toFixed(1)}s`,
      }}
    />
  );
}

export function Browser({ url, children, className = '' }) {
  return (
    <div className={`browser${className ? ` ${className}` : ''}`}>
      <div className="browser__bar" aria-hidden="true">
        <div className="browser__dots">
          <span />
          <span />
          <span />
        </div>
        <div className="browser__url">{url}</div>
        <div className="browser__spacer" />
      </div>
      {children}
    </div>
  );
}

export function Phone({ children, className = '' }) {
  return <div className={`phone${className ? ` ${className}` : ''}`}>{children}</div>;
}

// An image that reports whether its file exists, so sections can fall back gracefully.
export function useImageAvailable(src) {
  const [ok, setOk] = useState(null);
  useEffect(() => {
    if (!src) {
      setOk(false);
      return undefined;
    }
    let live = true;
    const img = new Image();
    img.onload = () => live && setOk(img.naturalWidth > 0);
    img.onerror = () => live && setOk(false);
    img.src = src;
    return () => {
      live = false;
    };
  }, [src]);
  return ok;
}

export function useImagesAvailable(srcs) {
  const key = srcs.join('|');
  const [ok, setOk] = useState(null);
  useEffect(() => {
    let live = true;
    Promise.all(
      srcs.map(
        (s) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(img.naturalWidth > 0);
            img.onerror = () => resolve(false);
            img.src = s;
          }),
      ),
    ).then((r) => live && setOk(r.every(Boolean)));
    return () => {
      live = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return ok;
}
