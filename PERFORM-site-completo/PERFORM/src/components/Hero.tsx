import { ArrowDownRight, ArrowUpRight, ArrowDown } from 'lucide-react';
import { site } from '../data/site';

export default function Hero() {
  return <section id="inicio" className="hero" aria-labelledby="hero-title">
    <div className="hero-photo" role="img" aria-label="Ambiente de treinamento esportivo com atleta em preparação" style={{backgroundImage: `url(${site.photos.hero})`}} />
    <div className="hero-grain" aria-hidden="true" />
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-content shell">
      <div className="hero-text">
        <div className="hero-kicker"><span className="signal-dot" /> PERSONAL TRAINING / PERFORMANCE LAB <span className="kicker-line" /></div>
        <h1 id="hero-title"><span className="hero-line">SEU PRÓXIMO</span><span className="hero-line">NÍVEL <em>COMEÇA</em></span><span className="hero-line hero-line-last">AQUI<span className="hero-period">.</span></span></h1>
        <div className="hero-underhead">
          <p>Treinamento individualizado, estratégia e acompanhamento de verdade. Um método desenvolvido para transformar objetivos em evolução consistente.</p>
          <div className="hero-actions">
            <a href="#contato" className="btn btn-volt">COMEÇAR MINHA EVOLUÇÃO <ArrowUpRight size={19} /></a>
            <a href="#metodo" className="btn btn-outline">CONHECER O MÉTODO <ArrowDownRight size={18} /></a>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-index"><span className="mono">01 / PERFORMANCE</span><span>PERSONAL TRAINING<br/>EVOLUÇÃO COM PROPÓSITO</span></div>
        <a href="#filosofia" className="scroll-cue"><span>ROLE PARA EXPLORAR</span><ArrowDown size={21} strokeWidth={1.6}/></a>
        <div className="hero-crosshair" aria-hidden="true"><span /><span /></div>
      </div>
    </div>
    <div className="hero-edge" aria-hidden="true" />
  </section>;
}
