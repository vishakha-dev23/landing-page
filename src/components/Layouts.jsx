import { LAYOUTS } from '../content.js';
import { Reveal } from './ui.jsx';
import './Layouts.css';

// Wireframes drawn on a 300 x 200 grid. b = dark block, l = light line, f = frame stroke.
const Frame = () => <rect className="f" x="1" y="1" width="298" height="198" rx="2" />;
const Lines = ({ x, y, w = 96, n = 3, gap = 13 }) =>
  Array.from({ length: n }, (_, i) => <rect key={i} className="l" x={x} y={y + i * gap} width={w} height="5" rx="1" />);

const WIREFRAMES = {
  slideshow: (
    <>
      <Frame />
      <Lines x={26} y={62} w={92} n={2} />
      <rect className="l" x="26" y="96" width="64" height="5" rx="1" />
      <rect className="b" x="26" y="116" width="52" height="16" rx="3" />
      <rect className="b" x="148" y="26" width="126" height="128" rx="2" />
      <rect className="b" x="26" y="172" width="58" height="3" />
      <rect className="l" x="92" y="172" width="58" height="3" />
      <rect className="l" x="158" y="172" width="58" height="3" />
    </>
  ),
  tile: (
    <>
      <Frame />
      <rect className="b" x="85" y="24" width="130" height="8" rx="1" />
      <rect className="b" x="105" y="38" width="90" height="8" rx="1" />
      <rect className="l" x="110" y="54" width="80" height="4" rx="1" />
      <rect className="b" x="104" y="66" width="44" height="13" rx="3" />
      <rect className="f" x="152" y="66" width="44" height="13" rx="3" />
      <rect className="b" x="40" y="92" width="220" height="88" rx="2" />
    </>
  ),
  forms: (
    <>
      <Frame />
      <rect className="b" x="22" y="20" width="70" height="7" rx="1" />
      <rect className="l" x="236" y="22" width="42" height="4" rx="1" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect className="b soft" x={22 + i * 66} y="40" width="58" height="104" rx="2" />
          <circle className="b" cx={51 + i * 66} cy="90" r="13" />
          <rect className="l" x={22 + i * 66} y="152" width="40" height="5" rx="1" />
          <rect className="l" x={22 + i * 66} y="163" width="28" height="4" rx="1" />
        </g>
      ))}
    </>
  ),
  materials: (
    <>
      <Frame />
      <circle className="b" cx="32" cy="32" r="7" />
      <circle className="l" cx="52" cy="32" r="7" />
      <circle className="l" cx="72" cy="32" r="7" />
      <circle className="l" cx="92" cy="32" r="7" />
      <rect className="b" x="26" y="54" width="72" height="6" rx="1" />
      {[0, 1, 2, 3].map((j) => (
        <g key={j}>
          <rect className="l" x="26" y={74 + j * 22} width="26" height="4" rx="1" />
          <rect className="l" x="62" y={74 + j * 22} width="62" height="4" rx="1" />
          <rect className="l soft" x="26" y={86 + j * 22} width="100" height="1" />
        </g>
      ))}
      <rect className="b" x="152" y="22" width="124" height="156" rx="2" />
    </>
  ),
  mega: (
    <>
      <Frame />
      <rect className="b" x="20" y="15" width="26" height="7" rx="1" />
      <rect className="l" x="100" y="17" width="20" height="4" rx="1" />
      <rect className="l" x="126" y="17" width="20" height="4" rx="1" />
      <rect className="b" x="152" y="17" width="20" height="4" rx="1" />
      <rect className="l" x="178" y="17" width="20" height="4" rx="1" />
      <rect className="b" x="152" y="26" width="20" height="2" />
      <circle className="l" cx="262" cy="19" r="3.5" />
      <circle className="l" cx="275" cy="19" r="3.5" />
      <rect className="f fill" x="1" y="32" width="298" height="112" />
      {[0, 1, 2].map((c) => (
        <g key={c}>
          <rect className="b" x={20 + c * 50} y="48" width="30" height="4" rx="1" />
          {[0, 1, 2, 3].map((k) => (
            <rect key={k} className="l" x={20 + c * 50} y={62 + k * 12} width="36" height="4" rx="1" />
          ))}
        </g>
      ))}
      <rect className="b soft" x="178" y="46" width="46" height="62" rx="2" />
      <rect className="b soft" x="232" y="46" width="46" height="62" rx="2" />
      <rect className="l" x="178" y="116" width="34" height="4" rx="1" />
      <rect className="l" x="232" y="116" width="34" height="4" rx="1" />
      <rect className="l soft" x="20" y="156" width="260" height="32" rx="2" />
    </>
  ),
  search: (
    <>
      <Frame />
      <rect className="f" x="40" y="12" width="220" height="20" rx="4" />
      <circle className="b" cx="54" cy="22" r="3.5" />
      <rect className="l" x="64" y="20" width="60" height="4" rx="1" />
      <rect className="f fill" x="20" y="40" width="260" height="148" rx="2" />
      <rect className="l" x="34" y="52" width="40" height="4" rx="1" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect className="b soft" x={34 + i * 60} y="64" width="50" height="50" rx="2" />
          <rect className="l" x={34 + i * 60} y="120" width="40" height="4" rx="1" />
          <rect className="l" x={34 + i * 60} y="129" width="26" height="4" rx="1" />
        </g>
      ))}
      <rect className="l" x="34" y="148" width="50" height="4" rx="1" />
      <rect className="l" x="34" y="160" width="80" height="4" rx="1" />
      <rect className="l" x="34" y="172" width="64" height="4" rx="1" />
    </>
  ),
  filters: (
    <>
      <Frame />
      <rect className="f" x="22" y="16" width="44" height="15" rx="3" />
      <rect className="b" x="72" y="16" width="44" height="15" rx="3" />
      <rect className="f" x="122" y="16" width="44" height="15" rx="3" />
      <rect className="f" x="172" y="16" width="44" height="15" rx="3" />
      <rect className="l" x="236" y="22" width="42" height="4" rx="1" />
      {[22, 88, 154, 220].map((x) => (
        <g key={x}>
          <rect className="b soft" x={x} y="46" width="58" height="68" rx="2" />
          <rect className="b soft" x={x} y="124" width="58" height="62" rx="2" />
        </g>
      ))}
      <rect className="f fill" x="72" y="38" width="112" height="98" rx="2" />
      {[0, 1, 2, 3].map((j) => (
        <g key={j}>
          <circle className={j === 0 ? 'b' : 'l'} cx="86" cy={54 + j * 17} r="5" />
          <rect className="l" x="98" y={52 + j * 17} width="52" height="4" rx="1" />
        </g>
      ))}
      <rect className="b" x="84" y="118" width="88" height="11" rx="3" />
    </>
  ),
  quick: (
    <>
      <Frame />
      <rect className="l soft" x="22" y="22" width="56" height="72" rx="2" />
      <rect className="l soft" x="86" y="22" width="56" height="72" rx="2" />
      <rect className="l soft" x="22" y="104" width="56" height="72" rx="2" />
      <rect className="l soft" x="86" y="104" width="56" height="72" rx="2" />
      <rect className="f fill" x="158" y="1" width="141" height="198" />
      <rect className="b" x="170" y="14" width="117" height="80" rx="2" />
      <circle className="l" cx="222" cy="102" r="2.5" />
      <circle className="b" cx="230" cy="102" r="2.5" />
      <circle className="l" cx="238" cy="102" r="2.5" />
      <rect className="b" x="170" y="112" width="70" height="5" rx="1" />
      <rect className="l" x="170" y="122" width="40" height="4" rx="1" />
      <circle className="b" cx="176" cy="140" r="5" />
      <circle className="l" cx="192" cy="140" r="5" />
      <circle className="l" cx="208" cy="140" r="5" />
      <rect className="l" x="170" y="152" width="22" height="10" rx="2" />
      <rect className="l" x="196" y="152" width="22" height="10" rx="2" />
      <rect className="l" x="222" y="152" width="22" height="10" rx="2" />
      <rect className="b" x="170" y="172" width="117" height="16" rx="3" />
    </>
  ),
  gallery: (
    <>
      <Frame />
      <rect className="b" x="22" y="18" width="128" height="128" rx="2" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} className={i === 0 ? 'b' : 'b soft'} x={22 + i * 33} y="154" width="29" height="29" rx="2" />
      ))}
      <rect className="b" x="166" y="24" width="90" height="7" rx="1" />
      <rect className="l" x="166" y="38" width="70" height="4" rx="1" />
      <rect className="b" x="166" y="52" width="40" height="6" rx="1" />
      <circle className="b" cx="172" cy="78" r="6" />
      <circle className="l" cx="190" cy="78" r="6" />
      <circle className="l" cx="208" cy="78" r="6" />
      <rect className="l" x="166" y="94" width="22" height="12" rx="2" />
      <rect className="l" x="192" y="94" width="22" height="12" rx="2" />
      <rect className="l" x="218" y="94" width="22" height="12" rx="2" />
      <rect className="b" x="166" y="120" width="110" height="16" rx="3" />
      <rect className="l" x="166" y="146" width="80" height="4" rx="1" />
    </>
  ),
  size: (
    <>
      <Frame />
      <rect className="l soft" x="22" y="22" width="124" height="156" rx="2" />
      <rect className="f fill" x="168" y="1" width="131" height="198" />
      <rect className="b" x="180" y="16" width="50" height="6" rx="1" />
      <rect className="b" x="180" y="32" width="30" height="11" rx="2" />
      <rect className="f" x="214" y="32" width="34" height="11" rx="2" />
      <rect className="f" x="252" y="32" width="34" height="11" rx="2" />
      {[0, 1, 2, 3, 4].map((j) => (
        <g key={j}>
          <rect className="l" x="180" y={58 + j * 20} width="18" height="4" rx="1" />
          <rect className="l" x="214" y={58 + j * 20} width="44" height="4" rx="1" />
          <rect className="l soft" x="180" y={69 + j * 20} width="106" height="1" />
        </g>
      ))}
      <rect className="f" x="180" y="170" width="106" height="16" rx="3" />
    </>
  ),
  split: (
    <>
      <Frame />
      <Lines x={26} y={48} w={100} n={3} />
      <circle className="b" cx="32" cy="104" r="6" />
      <circle className="l" cx="50" cy="104" r="6" />
      <circle className="l" cx="68" cy="104" r="6" />
      <circle className="l" cx="86" cy="104" r="6" />
      <rect className="b" x="26" y="124" width="74" height="16" rx="3" />
      <rect className="b" x="154" y="26" width="120" height="148" rx="2" />
    </>
  ),
  story: (
    <>
      <Frame />
      <rect className="b" x="22" y="22" width="122" height="72" rx="2" />
      <rect className="b soft" x="152" y="22" width="58" height="72" rx="2" />
      <rect className="b soft" x="218" y="22" width="58" height="72" rx="2" />
      <rect className="b soft" x="22" y="104" width="58" height="72" rx="2" />
      <rect className="b soft" x="86" y="104" width="58" height="72" rx="2" />
      <rect className="b soft" x="152" y="104" width="58" height="72" rx="2" />
      <rect className="b soft" x="218" y="104" width="58" height="72" rx="2" />
      <rect className="w" x="32" y="66" width="60" height="4" rx="1" />
      <rect className="w" x="32" y="76" width="40" height="4" rx="1" />
    </>
  ),
  sticky: (
    <>
      <Frame />
      <rect className="b" x="22" y="20" width="124" height="130" rx="2" />
      <Lines x={164} y={30} w={100} n={3} />
      <circle className="b" cx="170" cy="82" r="6" />
      <circle className="l" cx="188" cy="82" r="6" />
      <circle className="l" cx="206" cy="82" r="6" />
      <rect className="l" x="164" y="102" width="22" height="12" rx="2" />
      <rect className="l" x="190" y="102" width="22" height="12" rx="2" />
      <rect className="l" x="216" y="102" width="22" height="12" rx="2" />
      <rect className="l soft" x="1" y="162" width="298" height="37" />
      <rect className="l" x="22" y="176" width="70" height="5" rx="1" />
      <rect className="b" x="206" y="171" width="72" height="16" rx="3" />
    </>
  ),
  drawer: (
    <>
      <Frame />
      <Lines x={22} y={26} w={70} n={1} />
      <rect className="l soft" x="22" y="48" width="70" height="80" rx="2" />
      <rect className="l soft" x="100" y="48" width="70" height="80" rx="2" />
      <rect className="l soft" x="22" y="138" width="148" height="5" rx="1" />
      <rect className="f fill" x="186" y="1" width="113" height="198" />
      <rect className="l" x="198" y="16" width="44" height="6" rx="1" />
      <rect className="b" x="198" y="38" width="28" height="28" rx="2" />
      <rect className="l" x="234" y="42" width="52" height="5" rx="1" />
      <rect className="l" x="234" y="54" width="34" height="5" rx="1" />
      <rect className="b soft" x="198" y="80" width="28" height="28" rx="2" />
      <rect className="l" x="234" y="84" width="52" height="5" rx="1" />
      <rect className="l" x="234" y="96" width="34" height="5" rx="1" />
      <rect className="l" x="198" y="150" width="88" height="5" rx="1" />
      <rect className="b" x="198" y="168" width="88" height="18" rx="3" />
    </>
  ),
  sheet: (
    <>
      <Frame />
      <rect className="f" x="112" y="12" width="76" height="176" rx="12" />
      <rect className="b soft" x="120" y="24" width="60" height="58" rx="2" />
      <rect className="l" x="120" y="90" width="44" height="4" rx="1" />
      <rect className="f fill" x="113" y="108" width="74" height="79" rx="10" />
      <rect className="l" x="141" y="114" width="18" height="3" rx="1.5" />
      <circle className="b" cx="128" cy="130" r="5" />
      <circle className="l" cx="143" cy="130" r="5" />
      <circle className="l" cx="158" cy="130" r="5" />
      <rect className="l" x="122" y="144" width="16" height="10" rx="2" />
      <rect className="l" x="142" y="144" width="16" height="10" rx="2" />
      <rect className="l" x="162" y="144" width="16" height="10" rx="2" />
      <rect className="b" x="122" y="164" width="56" height="13" rx="3" />
    </>
  ),
};

export default function Layouts() {
  return (
    <section className="section lay" aria-labelledby="lay-title">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow lay__eyebrow">{LAYOUTS.eyebrow}</span>
            <h2 className="h2" id="lay-title">
              {LAYOUTS.title}
            </h2>
          </div>
          <p className="lead lay__lead">{LAYOUTS.text}</p>
        </Reveal>
        <ol className="lay__grid">
          {LAYOUTS.items.map((it, i) => (
            <Reveal as="li" key={it.id} className="lay__item" delay={(i % 5) * 0.05}>
              <svg className="lay__svg" viewBox="0 0 300 200" role="img" aria-label={`Wireframe: ${it.label}`}>
                {WIREFRAMES[it.id]}
              </svg>
              <p className="lay__cap">
                {i + 1}. {it.label}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
