import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Showcase from './components/Showcase.jsx';
import Signature from './components/Signature.jsx';
import Explorer from './components/Explorer.jsx';
import Layouts from './components/Layouts.jsx';
import Mobile from './components/Mobile.jsx';
import Everything from './components/Everything.jsx';
import Credits from './components/Credits.jsx';
import Pricing from './components/Pricing.jsx';
import Faq from './components/Faq.jsx';
import Closing from './components/Closing.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Showcase />
        <Signature />
        <Explorer />
        <Layouts />
        <Mobile />
        <Everything />
        <Credits />
        <Pricing />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
